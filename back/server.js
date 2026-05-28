const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const ROOT = path.resolve(__dirname, "..");
const LIBRARY_ROOT = path.join(__dirname, "library");
const PORT = Number(process.env.PORT || 5177);

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf",
  ".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
};

ensureSeedFolders();

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    if (url.pathname === "/api/library/tree") {
      sendJson(res, readTree(LIBRARY_ROOT));
      return;
    }
    if (url.pathname === "/api/library/files") {
      const target = resolveLibraryPath(url.searchParams.get("path") || "");
      const recursive = url.searchParams.get("recursive") === "1";
      sendJson(res, { path: relativeLibraryPath(target), files: readFiles(target, recursive) });
      return;
    }
    if (url.pathname === "/api/library/upload" && req.method === "POST") {
      const result = await handleUpload(req);
      sendJson(res, result);
      return;
    }
    if (url.pathname.startsWith("/library-file/")) {
      const relative = decodeURIComponent(url.pathname.replace("/library-file/", ""));
      sendFile(res, resolveLibraryPath(relative), true);
      return;
    }
    const filePath = url.pathname === "/" ? path.join(ROOT, "index.html") : path.join(ROOT, decodeURIComponent(url.pathname));
    sendFile(res, filePath, false);
  } catch (error) {
    sendJson(res, { error: error.message }, 500);
  }
});

server.listen(PORT, () => {
  console.log(`Mengmengteach server running at http://localhost:${PORT}`);
});

function ensureSeedFolders() {
  const categories = ["知识点总结", "直播间分享", "期中测试卷", "走题训练", "期末测试卷", "单元测试卷", "语文", "模拟卷"];
  const groups = {
    "小学": ["三年级资料", "四年级资料", "五年级资料", "六年级资料"],
    "初中": ["初一资料", "初二资料", "初三资料"],
    "其他": ["高中资料", "资料库全部"]
  };
  for (const [section, folders] of Object.entries(groups)) {
    for (const folder of folders) {
      for (const category of categories) {
        fs.mkdirSync(path.join(LIBRARY_ROOT, section, folder, category), { recursive: true });
      }
    }
  }
}

function resolveLibraryPath(relativePath) {
  const cleaned = String(relativePath).replace(/\\/g, "/").split("/").filter(Boolean);
  if (cleaned.some((part) => part === ".." || part.includes(":"))) {
    throw new Error("非法资料库路径");
  }
  const target = path.resolve(LIBRARY_ROOT, ...cleaned);
  if (!target.startsWith(path.resolve(LIBRARY_ROOT))) {
    throw new Error("非法资料库路径");
  }
  return target;
}

function relativeLibraryPath(target) {
  return path.relative(LIBRARY_ROOT, target).replace(/\\/g, "/");
}

function readTree(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .sort((a, b) => sortLibraryName(a.name, b.name))
    .map((entry) => {
      const fullPath = path.join(dir, entry.name);
      return {
        name: entry.name,
        path: relativeLibraryPath(fullPath),
        children: readTree(fullPath)
      };
    });
}

function readFiles(dir, recursive = false) {
  if (!fs.existsSync(dir)) return [];
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (recursive && entry.isDirectory()) {
      files.push(...readFiles(fullPath, true));
      continue;
    }
    if (!entry.isFile()) continue;
    const stat = fs.statSync(fullPath);
    files.push({
      name: entry.name,
      size: stat.size,
      modifiedAt: stat.mtime.toISOString(),
      url: `/library-file/${encodeURIComponent(relativeLibraryPath(fullPath)).replace(/%2F/g, "/")}`
    });
  }
  return files.sort((a, b) => a.name.localeCompare(b.name, "zh-Hans-CN"));
}

function sortLibraryName(a, b) {
  const order = [
    "小学", "初中", "其他",
    "三年级资料", "四年级资料", "五年级资料", "六年级资料",
    "初一资料", "初二资料", "初三资料",
    "高中资料", "资料库全部",
    "知识点总结", "直播间分享", "期中测试卷", "走题训练", "期末测试卷", "单元测试卷", "语文", "模拟卷"
  ];
  const ai = order.indexOf(a);
  const bi = order.indexOf(b);
  if (ai !== -1 || bi !== -1) return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
  return a.localeCompare(b, "zh-Hans-CN");
}

async function handleUpload(req) {
  const contentType = req.headers["content-type"] || "";
  const boundaryMatch = contentType.match(/boundary=(.+)$/);
  if (!boundaryMatch) throw new Error("上传请求缺少 boundary");

  const body = await readRequest(req);
  const parts = parseMultipart(body, boundaryMatch[1]);
  const targetPath = parts.path ? parts.path.value.toString("utf8") : "";
  const targetDir = resolveLibraryPath(targetPath);
  fs.mkdirSync(targetDir, { recursive: true });

  const uploaded = [];
  for (const part of Object.values(parts)) {
    if (!part.filename) continue;
    const fileName = sanitizeFileName(part.filename);
    const savePath = path.join(targetDir, fileName);
    fs.writeFileSync(savePath, part.value);
    uploaded.push(fileName);
  }
  return { ok: true, path: relativeLibraryPath(targetDir), uploaded, files: readFiles(targetDir) };
}

function readRequest(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

function parseMultipart(buffer, boundary) {
  const marker = Buffer.from(`--${boundary}`);
  const parts = {};
  let start = buffer.indexOf(marker);
  while (start !== -1) {
    start += marker.length;
    if (buffer[start] === 45 && buffer[start + 1] === 45) break;
    if (buffer[start] === 13 && buffer[start + 1] === 10) start += 2;
    const headerEnd = buffer.indexOf(Buffer.from("\r\n\r\n"), start);
    if (headerEnd === -1) break;
    const header = buffer.slice(start, headerEnd).toString("utf8");
    const next = buffer.indexOf(marker, headerEnd + 4);
    if (next === -1) break;
    const value = buffer.slice(headerEnd + 4, next - 2);
    const nameMatch = header.match(/name="([^"]+)"/);
    if (nameMatch) {
      const filenameMatch = header.match(/filename="([^"]*)"/);
      parts[nameMatch[1]] = {
        filename: filenameMatch ? path.basename(filenameMatch[1]) : "",
        value
      };
    }
    start = next;
  }
  return parts;
}

function sanitizeFileName(fileName) {
  const cleaned = path.basename(fileName).replace(/[<>:"/\\|?*\x00-\x1F]/g, "_").trim();
  if (!cleaned) throw new Error("文件名无效");
  return cleaned;
}

function sendFile(res, filePath, libraryOnly) {
  const resolved = path.resolve(filePath);
  const allowedRoot = libraryOnly ? path.resolve(LIBRARY_ROOT) : ROOT;
  if (!resolved.startsWith(allowedRoot) || !fs.existsSync(resolved) || fs.statSync(resolved).isDirectory()) {
    sendJson(res, { error: "文件不存在" }, 404);
    return;
  }
  res.writeHead(200, { "Content-Type": MIME_TYPES[path.extname(resolved).toLowerCase()] || "application/octet-stream" });
  fs.createReadStream(resolved).pipe(res);
}

function sendJson(res, data, status = 200) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(data));
}
