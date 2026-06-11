const { spawnSync } = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outputDir = path.join(root, "outputs", "english-pdf");
const dataPath = path.join(root, "data", "english", "grade3-up.json");
const pagePath = path.join(root, "english-card.html");
const chromeCandidates = [
  path.join(process.env.ProgramFiles || "", "Google", "Chrome", "Application", "chrome.exe"),
  path.join(process.env["ProgramFiles(x86)"] || "", "Google", "Chrome", "Application", "chrome.exe"),
  path.join(process.env.ProgramFiles || "", "Microsoft", "Edge", "Application", "msedge.exe"),
  path.join(process.env["ProgramFiles(x86)"] || "", "Microsoft", "Edge", "Application", "msedge.exe"),
];

const chrome = chromeCandidates.find((candidate) => candidate && fs.existsSync(candidate));
if (!chrome) {
  throw new Error("Chrome or Edge was not found. Cannot export English PDFs.");
}

const book = JSON.parse(fs.readFileSync(dataPath, "utf8"));
const html = fs.readFileSync(pagePath, "utf8");
fs.mkdirSync(outputDir, { recursive: true });

for (const unit of book.units) {
  const unitNumber = Number(unit.unit);
  const pdfPath = path.join(outputDir, `grade3-up-unit${unitNumber}.pdf`);
  const tempPath = path.join(os.tmpdir(), `mengmeng-english-unit${unitNumber}.html`);
  const injected = html.replace(
    '<script src="./english-card.js"></script>',
    `<script>window.ENGLISH_LESSON_BOOK=${JSON.stringify(book).replace(/</g, "\\u003c")};</script>\n  <script src="${toFileUrl(path.join(root, "english-card.js"))}"></script>`
  ).replace(
    '<link rel="stylesheet" href="./english-card.css">',
    `<link rel="stylesheet" href="${toFileUrl(path.join(root, "english-card.css"))}">`
  ).replace(
    /src="\.\/assets\//g,
    `src="${toFileUrl(path.join(root, "assets"))}/`
  );

  fs.writeFileSync(tempPath, injected, "utf8");
  const result = spawnSync(chrome, [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--allow-file-access-from-files",
    "--run-all-compositor-stages-before-draw",
    "--virtual-time-budget=5000",
    `--print-to-pdf=${pdfPath}`,
    `${toFileUrl(tempPath)}?unit=${unitNumber}`,
  ], { stdio: "inherit" });
  fs.rmSync(tempPath, { force: true });
  if (result.status !== 0) {
    throw new Error(`Failed to export Unit ${unitNumber} PDF.`);
  }
  console.log(`Exported ${path.relative(root, pdfPath)}`);
}

function toFileUrl(filePath) {
  return `file:///${path.resolve(filePath).replace(/\\/g, "/").replace(/^([A-Za-z]):/, "$1:")}`;
}
