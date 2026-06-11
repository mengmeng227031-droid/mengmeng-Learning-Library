const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const ROOT = path.resolve(__dirname, "..");
const LIBRARY_ROOT = path.join(__dirname, "library");
const PORT = Number(process.env.PORT || 5177);
const DASHSCOPE_BASE_URL = process.env.DASHSCOPE_BASE_URL || "https://dashscope.aliyuncs.com/compatible-mode/v1";
const DASHSCOPE_MODEL = process.env.DASHSCOPE_MODEL || "qwen-plus";
const SUNSHINE_MAJOR_BASE_URL = "https://gaokao.chsi.com.cn/zyk/zybk/";
const SESSION_COOKIE = "mengmeng_user";

const STUDENT_ACCOUNTS = {
  gaolintong: { id: "student-gaolintong", username: "gaolintong", displayName: "高琳童", role: "student" },
  wangziyou: { id: "student-wangziyou", username: "wangziyou", displayName: "王字优", role: "student" },
  kangjiarui: { id: "student-kangjiarui", username: "kangjiarui", displayName: "康家瑞", role: "student" },
  songyuan: { id: "student-songyuan", username: "songyuan", displayName: "宋源", role: "student" },
  guomannanxi: { id: "student-guomannanxi", username: "guomannanxi", displayName: "郭蔓楠熙", role: "student" },
  jiangdongchen: { id: "student-jiangdongchen", username: "jiangdongchen", displayName: "蒋东宸", role: "student" },
  xumengyao: { id: "student-xumengyao", username: "xumengyao", displayName: "徐梦瑶", role: "student" },
  congyunxi: { id: "student-congyunxi", username: "congyunxi", displayName: "丛允玺", role: "student" }
};

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
    if (url.pathname === "/api/auth/login" && req.method === "POST") {
      const result = await handleLogin(req, res);
      if (result) sendJson(res, result);
      return;
    }
    if (url.pathname === "/api/auth/logout" && req.method === "POST") {
      res.setHeader("Set-Cookie", `${SESSION_COOKIE}=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax`);
      sendJson(res, { ok: true });
      return;
    }
    if (url.pathname === "/api/me") {
      const user = getSessionUser(req);
      if (!user) {
        sendJson(res, { ok: false, error: "未登录" }, 401);
        return;
      }
      sendJson(res, { ok: true, user, permissions: [], progress: [] });
      return;
    }
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
    if (url.pathname === "/api/gaokao/analyze" && req.method === "POST") {
      const result = await handleGaokaoAnalyze(req);
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

async function handleLogin(req, res) {
  const payload = JSON.parse((await readRequest(req)).toString("utf8") || "{}");
  const account = String(payload.account || "").trim().toLowerCase();
  const password = String(payload.password || "");
  const user = STUDENT_ACCOUNTS[account];
  if (!user || password !== account) {
    sendJson(res, { ok: false, error: "账号或密码不正确" }, 401);
    return null;
  }
  res.setHeader("Set-Cookie", `${SESSION_COOKIE}=${encodeURIComponent(account)}; Path=/; Max-Age=604800; HttpOnly; SameSite=Lax`);
  return { ok: true, user };
}

function getSessionUser(req) {
  const cookies = parseCookies(req.headers.cookie || "");
  const account = String(cookies[SESSION_COOKIE] || "").toLowerCase();
  return STUDENT_ACCOUNTS[account] || null;
}

function parseCookies(cookieHeader) {
  return String(cookieHeader || "")
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean)
    .reduce((cookies, part) => {
      const index = part.indexOf("=");
      if (index === -1) return cookies;
      const key = part.slice(0, index);
      const value = part.slice(index + 1);
      cookies[key] = decodeURIComponent(value);
      return cookies;
    }, {});
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

async function handleGaokaoAnalyze(req) {
  const apiKey = process.env.DASHSCOPE_API_KEY || process.env.QWEN_API_KEY;
  if (!apiKey) {
    throw new Error("请先设置 DASHSCOPE_API_KEY 环境变量，再启动本地后端。");
  }
  if (typeof fetch !== "function") {
    throw new Error("当前 Node.js 版本不支持 fetch，请使用 Node.js 18 或更高版本。");
  }

  const payload = JSON.parse((await readRequest(req)).toString("utf8") || "{}");
  const response = await fetch(`${DASHSCOPE_BASE_URL.replace(/\/$/, "")}/chat/completions`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: DASHSCOPE_MODEL,
      temperature: 0.4,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: buildGaokaoSystemPrompt()
        },
        {
          role: "user",
          content: JSON.stringify(payload)
        }
      ]
    })
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = data?.error?.message || data?.message || "千问分析接口请求失败";
    throw new Error(message);
  }

  const content = data?.choices?.[0]?.message?.content;
  if (!content) throw new Error("千问没有返回分析内容");
  return normalizeGaokaoReport(parseJsonFromText(content));
}

function buildGaokaoSystemPrompt() {
  return [
    "你是张老师测评的高考志愿与职业生涯咨询分析师。",
    "任务：根据学生填写的90个职业探索问题，找出三组答案的交集：价值观（重要的事）、才能（擅长的事）、热情（喜欢的事）。",
    "分析原则：只依据学生答案和补充信息，不臆造家庭背景；优先提取反复出现的动词、对象、场景、价值词和能力证据；把交集转化为专业与职业方向。",
    "必须输出严格JSON，不要Markdown，不要解释，不要代码块。",
    "不要出现任何非“张老师测评”的作者署名，报告品牌统一写“张老师测评”。",
    "推荐专业必须为中国高考可理解的专业名称；推荐职业要能关联到至少一个推荐专业。",
    "专业链接可以返回阳光高考专业库详情页URL；如果不确定详情页，留空，系统会自动补成阳光高考专业库查询入口。",
    "JSON结构：",
    "{",
    '  "title": "兴趣与职业发展分析报告",',
    '  "brand": "张老师测评",',
    '  "quote": "一句适合学生的鼓励语",',
    '  "student": {"name":"","age":"","gender":"","date":""},',
    '  "radar": [{"name":"热情驱动力","score":8.6},{"name":"逻辑分析力","score":7.8},{"name":"创造力","score":8.1},{"name":"表达沟通力","score":8.3},{"name":"学习能力","score":8.8},{"name":"领导组织力","score":7.3},{"name":"共情与服务力","score":8.5},{"name":"执行力","score":7.9}],',
    '  "coreFindings": [{"title":"","description":""}],',
    '  "majors": [{"name":"","reason":"","match":92,"url":""}],',
    '  "careers": [{"name":"","reason":"","match":93,"relatedMajor":"","url":""}],',
    '  "advantages": ["5条以内"],',
    '  "suggestions": ["5条以内"],',
    '  "parentSuggestions": ["5条以内"],',
    '  "summary": "一句总结"',
    "}",
    "约束：majors必须恰好10个，careers必须恰好10个；match为0-100整数；radar必须8项且score为0-10数字；coreFindings 4-5项。"
  ].join("\n");
}

function parseJsonFromText(text) {
  try {
    return JSON.parse(text);
  } catch (error) {
    const match = String(text).match(/\{[\s\S]*\}/);
    if (!match) throw error;
    return JSON.parse(match[0]);
  }
}

function normalizeGaokaoReport(report) {
  const normalized = {
    title: report.title || "兴趣与职业发展分析报告",
    brand: "张老师测评",
    quote: report.quote || "找到想做的事，是为了成为更好的自己。",
    student: report.student || {},
    radar: normalizeList(report.radar, 8).map((item) => ({
      name: item.name || "能力维度",
      score: clampNumber(item.score, 0, 10, 7.5)
    })),
    coreFindings: normalizeList(report.coreFindings, 5).map((item) => ({
      title: item.title || "核心发现",
      description: item.description || item.desc || ""
    })),
    majors: normalizeList(report.majors, 10).map((item) => normalizeRecommendation(item)),
    careers: normalizeList(report.careers, 10).map((item) => normalizeRecommendation(item)),
    advantages: normalizeTextList(report.advantages, 5),
    suggestions: normalizeTextList(report.suggestions, 5),
    parentSuggestions: normalizeTextList(report.parentSuggestions, 5),
    summary: report.summary || "报告仅供参考，最终选择权在孩子自己手中。"
  };
  return { ok: true, report: normalized };
}

function normalizeRecommendation(item) {
  const name = item.name || "待补充方向";
  return {
    name,
    reason: item.reason || item.description || "结合兴趣、能力与价值观进行匹配。",
    match: clampNumber(item.match, 0, 100, 80),
    relatedMajor: item.relatedMajor || name,
    url: normalizeSunshineUrl(item.url, item.relatedMajor || name)
  };
}

function normalizeSunshineUrl(url, name) {
  const value = String(url || "").trim();
  if (value.startsWith("https://gaokao.chsi.com.cn/")) return value;
  return `${SUNSHINE_MAJOR_BASE_URL}?keyword=${encodeURIComponent(name)}`;
}

function normalizeList(list, length) {
  const result = Array.isArray(list) ? list.slice(0, length) : [];
  while (result.length < length) result.push({});
  return result;
}

function normalizeTextList(list, length) {
  const result = Array.isArray(list) ? list.map(String).filter(Boolean).slice(0, length) : [];
  while (result.length < length) result.push("继续补充答案后，可获得更精确的建议。");
  return result;
}

function clampNumber(value, min, max, fallback) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.max(min, Math.min(max, number));
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
