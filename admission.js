const admissionData = window.gaokaoSchoolData || {
  provinces: [],
  schools: [],
  summary: {}
};

const mapBoard = document.querySelector("#mapBoard");
const mapCanvas = document.querySelector("#mapCanvas");
const provinceLayer = document.querySelector("#provinceLayer");
const hoverDetail = document.querySelector("#hoverDetail");
const rewardThumb = document.querySelector("#rewardThumb");
const rewardSheet = document.querySelector("#rewardSheet");
const schoolDetailSheet = document.querySelector("#schoolDetailSheet");
const schoolDetailPanel = document.querySelector("#schoolDetailPanel");

const provinceRegions = [
  { name: "北京", cx: 665, cy: 290, rx: 26, ry: 24 },
  { name: "天津", cx: 690, cy: 307, rx: 25, ry: 22 },
  { name: "河北", cx: 660, cy: 318, rx: 58, ry: 48 },
  { name: "山西", cx: 615, cy: 315, rx: 45, ry: 54 },
  { name: "内蒙古", cx: 575, cy: 267, rx: 104, ry: 50 },
  { name: "辽宁", cx: 745, cy: 281, rx: 54, ry: 38 },
  { name: "吉林", cx: 775, cy: 231, rx: 60, ry: 37 },
  { name: "黑龙江", cx: 805, cy: 186, rx: 72, ry: 48 },
  { name: "上海", cx: 765, cy: 394, rx: 25, ry: 24 },
  { name: "江苏", cx: 720, cy: 374, rx: 55, ry: 37 },
  { name: "浙江", cx: 715, cy: 419, rx: 50, ry: 40 },
  { name: "安徽", cx: 680, cy: 397, rx: 52, ry: 43 },
  { name: "福建", cx: 705, cy: 453, rx: 48, ry: 44 },
  { name: "江西", cx: 655, cy: 430, rx: 52, ry: 45 },
  { name: "山东", cx: 695, cy: 332, rx: 64, ry: 42 },
  { name: "河南", cx: 640, cy: 352, rx: 62, ry: 48 },
  { name: "湖北", cx: 615, cy: 380, rx: 58, ry: 43 },
  { name: "湖南", cx: 605, cy: 425, rx: 58, ry: 49 },
  { name: "广东", cx: 625, cy: 475, rx: 70, ry: 42 },
  { name: "广西", cx: 560, cy: 464, rx: 65, ry: 45 },
  { name: "海南", cx: 575, cy: 521, rx: 32, ry: 22 },
  { name: "重庆", cx: 530, cy: 380, rx: 38, ry: 34 },
  { name: "四川", cx: 470, cy: 383, rx: 80, ry: 58 },
  { name: "贵州", cx: 520, cy: 419, rx: 52, ry: 42 },
  { name: "云南", cx: 470, cy: 461, rx: 78, ry: 52 },
  { name: "陕西", cx: 525, cy: 307, rx: 52, ry: 54 },
  { name: "甘肃", cx: 445, cy: 312, rx: 100, ry: 38 },
  { name: "青海", cx: 420, cy: 312, rx: 82, ry: 48 },
  { name: "宁夏", cx: 530, cy: 281, rx: 32, ry: 30 },
  { name: "新疆", cx: 335, cy: 253, rx: 118, ry: 88 },
  { name: "西藏", cx: 320, cy: 337, rx: 116, ry: 70 },
  { name: "台湾", cx: 765, cy: 475, rx: 25, ry: 38 }
];

let activeProvince = "";
let closedProvince = "";
let lockedProvince = "";
let activeSchoolFilter = "";
let isDraggingMap = false;
let dragStart = { x: 0, y: 0 };
const mapTransform = { scale: 1, x: 0, y: 0 };

async function initAdmissionPage() {
  await renderProvinceLayer();
  applyMapTransform();
  bindEvents();
}

function bindEvents() {
  provinceLayer.addEventListener("pointerover", handleProvincePointer);
  provinceLayer.addEventListener("focusin", handleProvincePointer);
  provinceLayer.addEventListener("click", handleProvinceClick);
  mapBoard.addEventListener("pointermove", handleMapPointerMove);
  mapBoard.addEventListener("pointerdown", startMapDrag);
  mapBoard.addEventListener("pointerup", endMapDrag);
  mapBoard.addEventListener("pointercancel", endMapDrag);
  mapBoard.addEventListener("mouseleave", endMapDrag);
  mapBoard.addEventListener("wheel", handleMapWheel, { passive: false });
  document.querySelector(".map-tools").addEventListener("click", handleMapToolClick);
  hoverDetail.addEventListener("pointermove", (event) => event.stopPropagation());
  hoverDetail.addEventListener("wheel", (event) => event.stopPropagation(), { passive: true });
  hoverDetail.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
    if (event.target.closest("[data-detail-close]")) {
      closeDetailPanel();
    }
  });
  hoverDetail.addEventListener("click", (event) => {
    const filterButton = event.target.closest("[data-school-filter]");
    if (filterButton) {
      activeSchoolFilter = activeSchoolFilter === filterButton.dataset.schoolFilter ? "" : filterButton.dataset.schoolFilter;
      renderDetail(activeProvince);
      return;
    }

    const detailButton = event.target.closest("[data-school-detail]");
    if (!detailButton) return;
    const school = getSchoolById(detailButton.dataset.schoolDetail);
    if (school) openSchoolDetail(school);
  });

  rewardThumb.addEventListener("click", openRewardSheet);
  rewardSheet.addEventListener("click", (event) => {
    if (event.target.closest("[data-reward-close]")) closeRewardSheet();
  });
  ["pointerdown", "pointermove", "pointerup", "wheel"].forEach((eventName) => {
    schoolDetailSheet.addEventListener(eventName, stopTopLayerEvent, { passive: false });
  });
  schoolDetailSheet.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.target.closest("[data-school-detail-close]")) closeSchoolDetail();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && rewardSheet.getAttribute("aria-hidden") === "false") {
      closeRewardSheet();
    }
    if (event.key === "Escape" && schoolDetailSheet.getAttribute("aria-hidden") === "false") {
      closeSchoolDetail();
    }
  });
}

function showDetailPanel() {
  mapBoard.classList.add("is-detail-visible");
}

function hideDetailPanel() {
  mapBoard.classList.remove("is-detail-visible");
}

function closeDetailPanel() {
  closedProvince = activeProvince;
  lockedProvince = "";
  activeSchoolFilter = "";
  markActiveRegion("");
  activeProvince = "";
  hideDetailPanel();
}

function openRewardSheet() {
  hideDetailPanel();
  rewardSheet.setAttribute("aria-hidden", "false");
}

function closeRewardSheet() {
  rewardSheet.setAttribute("aria-hidden", "true");
}

function openSchoolDetail(school) {
  schoolDetailPanel.innerHTML = renderSchoolDetail(school);
  schoolDetailSheet.setAttribute("aria-hidden", "false");
}

function closeSchoolDetail() {
  schoolDetailSheet.setAttribute("aria-hidden", "true");
}

function isTopLayerOpen() {
  return rewardSheet.getAttribute("aria-hidden") === "false"
    || schoolDetailSheet.getAttribute("aria-hidden") === "false";
}

function stopTopLayerEvent(event) {
  event.stopPropagation();
}

async function renderProvinceLayer() {
  try {
    const response = await fetch("./assets/admission/china-provinces.geojson");
    if (!response.ok) throw new Error("GeoJSON 加载失败");
    const geojson = await response.json();
    renderGeoJsonProvinceLayer(geojson);
  } catch (error) {
    renderFallbackProvinceLayer();
  }
}

function renderGeoJsonProvinceLayer(geojson) {
  const features = geojson.features || [];
  const bounds = getGeoJsonBounds(features);
  const target = { left: 110, top: 58, width: 780, height: 560 };
  provinceLayer.innerHTML = features.map((feature, index) => {
    const name = normalizeProvinceName(feature.properties?.name || "");
    return `
      <path class="province-region tone-${index % 6}" data-province="${escapeHtml(name)}" d="${buildGeoJsonPath(feature.geometry, bounds, target)}" tabindex="0">
        <title>${escapeHtml(name)}</title>
      </path>
    `;
  }).join("") + renderProvinceLabels(features, bounds, target);
}

function getGeoJsonBounds(features) {
  const bounds = {
    minLon: 73.4,
    minLat: 17.6,
    maxLon: 135.2,
    maxLat: 53.8,
    minMercatorY: mercatorY(17.6),
    maxMercatorY: mercatorY(53.8)
  };
  features.forEach((feature) => {
    forEachCoordinate(feature.geometry, ([lon, lat]) => {
      bounds.minLon = Math.min(bounds.minLon, lon);
      bounds.maxLon = Math.max(bounds.maxLon, lon);
      if (lat >= 17.6) {
        bounds.minLat = Math.min(bounds.minLat, lat);
        bounds.maxLat = Math.max(bounds.maxLat, lat);
        bounds.minMercatorY = Math.min(bounds.minMercatorY, mercatorY(lat));
        bounds.maxMercatorY = Math.max(bounds.maxMercatorY, mercatorY(lat));
      }
    });
  });
  return bounds;
}

function buildGeoJsonPath(geometry, bounds, target) {
  const polygons = geometry.type === "Polygon" ? [geometry.coordinates] : geometry.coordinates;
  return polygons.map((polygon) => (
    polygon.map((ring) => {
      const points = ring.map((coordinate) => projectCoordinate(coordinate, bounds, target));
      return `M ${points.map((point) => point.join(" ")).join(" L ")} Z`;
    }).join(" ")
  )).join(" ");
}

function projectCoordinate([lon, lat], bounds, target) {
  const x = target.left + ((lon - bounds.minLon) / (bounds.maxLon - bounds.minLon)) * target.width;
  const yValue = mercatorY(Math.max(lat, bounds.minLat));
  const y = target.top + ((bounds.maxMercatorY - yValue) / (bounds.maxMercatorY - bounds.minMercatorY)) * target.height;
  return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
}

function renderProvinceLabels(features, bounds, target) {
  return features.map((feature) => {
    const name = normalizeProvinceName(feature.properties?.name || "");
    const center = getFeatureCenter(feature, bounds, target);
    if (!center || ["香港", "澳门"].includes(name)) return "";
    return `<text class="province-label" x="${center[0]}" y="${center[1]}">${escapeHtml(name)}</text>`;
  }).join("");
}

function getFeatureCenter(feature, bounds, target) {
  let sumX = 0;
  let sumY = 0;
  let count = 0;
  forEachCoordinate(feature.geometry, (coordinate) => {
    const [lon, lat] = coordinate;
    if (lat < bounds.minLat) return;
    const [x, y] = projectCoordinate([lon, lat], bounds, target);
    sumX += x;
    sumY += y;
    count += 1;
  });
  if (!count) return null;
  return [Math.round(sumX / count), Math.round(sumY / count)];
}

function mercatorY(lat) {
  const radians = lat * Math.PI / 180;
  return Math.log(Math.tan(Math.PI / 4 + radians / 2));
}

function forEachCoordinate(geometry, callback) {
  const walk = (value) => {
    if (typeof value?.[0] === "number" && typeof value?.[1] === "number") {
      callback(value);
      return;
    }
    value.forEach(walk);
  };
  walk(geometry.coordinates);
}

function normalizeProvinceName(name) {
  return String(name)
    .replace(/特别行政区|壮族自治区|回族自治区|维吾尔自治区|自治区|省|市/g, "")
    .replace("内蒙古古", "内蒙古");
}

function renderFallbackProvinceLayer() {
  provinceLayer.innerHTML = provinceRegions.map((region, index) => `
    <path class="province-region" data-province="${escapeHtml(region.name)}" d="${buildRegionPath(region, index)}" tabindex="0">
      <title>${escapeHtml(region.name)}</title>
    </path>
  `).join("");
}

function buildRegionPath(region, index) {
  const wobble = ((index % 5) - 2) * 0.04;
  const points = [
    [0, -1],
    [0.58 + wobble, -0.76],
    [0.98, -0.28],
    [0.88, 0.34 + wobble],
    [0.42, 0.92],
    [-0.18, 0.98],
    [-0.82, 0.56],
    [-1, -0.12],
    [-0.62, -0.82]
  ].map(([x, y]) => [
    Math.round((region.cx + x * region.rx) * 10) / 10,
    Math.round((region.cy + y * region.ry) * 10) / 10
  ]);

  return `M ${points.map((point) => point.join(" ")).join(" L ")} Z`;
}

function handleProvincePointer(event) {
  if (isTopLayerOpen()) return;
  if (lockedProvince) return;
  const region = event.target.closest(".province-region");
  if (!region) return;
  setActiveProvince(region.dataset.province);
}

function handleProvinceClick(event) {
  if (isTopLayerOpen()) return;
  const region = event.target.closest(".province-region");
  if (!region) return;
  const name = region.dataset.province;
  if (lockedProvince === name) {
    unlockProvince();
    return;
  }
  setActiveProvince(name, { force: true });
  lockProvince(name);
}

function setActiveProvince(name, options = {}) {
  if (!options.force && name === closedProvince) {
    markActiveRegion("");
    hideDetailPanel();
    return;
  }

  closedProvince = "";
  markActiveRegion(name);
  showDetailPanel();
  if (name !== activeProvince) {
    activeProvince = name;
    renderDetail(name);
  }
}

function lockProvince(name, options = {}) {
  if (!name || lockedProvince === name) return;
  lockedProvince = name;
  if (options.render !== false) renderDetail(name);
}

function unlockProvince() {
  const name = lockedProvince;
  lockedProvince = "";
  if (name && activeProvince === name) renderDetail(name);
}

function markActiveRegion(name) {
  provinceLayer.querySelectorAll(".province-region").forEach((region) => {
    region.classList.toggle("is-active", region.dataset.province === name);
  });
}

function handleMapPointerMove(event) {
  if (isTopLayerOpen()) return;
  if (isDraggingMap) {
    mapTransform.x += event.clientX - dragStart.x;
    mapTransform.y += event.clientY - dragStart.y;
    dragStart = { x: event.clientX, y: event.clientY };
    applyMapTransform();
  }
}

function startMapDrag(event) {
  if (isTopLayerOpen()) return;
  if (event.target.closest(".hover-detail") || event.target.closest(".map-tools") || event.target.closest(".library-link") || event.target.closest(".support-author")) return;
  isDraggingMap = true;
  dragStart = { x: event.clientX, y: event.clientY };
  mapBoard.classList.add("is-dragging");
  mapBoard.setPointerCapture?.(event.pointerId);
}

function endMapDrag() {
  isDraggingMap = false;
  mapBoard.classList.remove("is-dragging");
}

function handleMapWheel(event) {
  if (isTopLayerOpen()) return;
  event.preventDefault();
  const nextScale = clamp(mapTransform.scale + (event.deltaY < 0 ? 0.14 : -0.14), 1, 2.8);
  zoomMap(nextScale, event.clientX, event.clientY);
}

function handleMapToolClick(event) {
  if (isTopLayerOpen()) return;
  const button = event.target.closest("[data-map-action]");
  if (!button) return;
  const action = button.dataset.mapAction;
  if (action === "zoom-in") zoomMap(mapTransform.scale + 0.2, window.innerWidth / 2, window.innerHeight / 2);
  if (action === "zoom-out") zoomMap(mapTransform.scale - 0.2, window.innerWidth / 2, window.innerHeight / 2);
  if (action === "reset") {
    mapTransform.scale = 1;
    mapTransform.x = 0;
    mapTransform.y = 0;
    applyMapTransform();
  }
}

function zoomMap(nextScale, clientX, clientY) {
  const oldScale = mapTransform.scale;
  mapTransform.scale = clamp(nextScale, 1, 2.8);
  const boardRect = mapBoard.getBoundingClientRect();
  const pivotX = clientX - boardRect.left - boardRect.width / 2 - mapTransform.x;
  const pivotY = clientY - boardRect.top - boardRect.height / 2 - mapTransform.y;
  const ratio = mapTransform.scale / oldScale;
  mapTransform.x -= pivotX * (ratio - 1);
  mapTransform.y -= pivotY * (ratio - 1);
  applyMapTransform();
}

function applyMapTransform() {
  mapCanvas.style.transform = `translate(-50%, -50%) translate(${mapTransform.x}px, ${mapTransform.y}px) scale(${mapTransform.scale})`;
  provinceLayer.style.setProperty("--label-scale", String(1 / mapTransform.scale));
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function renderDetail(name) {
  const schools = getProvinceSchools(name);
  const province = getProvince(name);
  const filteredSchools = filterSchools(schools, activeSchoolFilter);
  const lockedText = lockedProvince === name ? "已锁定" : "可切换";
  const countText = activeSchoolFilter ? `${formatNumber(filteredSchools.length)} / ${formatNumber(schools.length)} 所` : `${formatNumber(schools.length)} 所`;
  hoverDetail.innerHTML = `
    <div class="detail-head">
      <div>
        <h2>${escapeHtml(name)}</h2>
        <p>${lockedProvince === name ? "当前省份已锁定，关闭后可继续切换地图" : "移动鼠标预览省份，左键点击可锁定详情栏"}</p>
      </div>
      <div class="detail-actions">
        <span class="detail-badge">${countText}</span>
        <span class="detail-lock-badge">${lockedText}</span>
        <button class="detail-close" type="button" data-detail-close aria-label="关闭详情">×</button>
      </div>
    </div>

    <div class="detail-filters" aria-label="院校筛选">
      ${renderSchoolFilterButton("985", "985", schools)}
      ${renderSchoolFilterButton("211", "211", schools)}
      ${renderSchoolFilterButton("double", "双一流", schools)}
    </div>

    <div class="school-list">
      ${filteredSchools.length ? filteredSchools.map((school, index) => renderSchoolCard(school, index)).join("") : `<div class="school-empty">当前筛选下暂无学校，取消筛选可查看 ${formatNumber(province?.count || schools.length)} 所学校。</div>`}
    </div>

    <div class="detail-stats">
      <div><strong>${countByFlag(schools, "is985")}</strong><span>985</span></div>
      <div><strong>${countByFlag(schools, "is211")}</strong><span>211</span></div>
      <div><strong>${countByFlag(schools, "isDoubleFirst")}</strong><span>双一流</span></div>
      <div><strong>${formatNumber(schools.length)}</strong><span>共计</span></div>
    </div>
  `;
}

function renderSchoolFilterButton(filter, label, schools) {
  const count = filterSchools(schools, filter).length;
  return `
    <button class="detail-filter${activeSchoolFilter === filter ? " is-active" : ""}" type="button" data-school-filter="${filter}">
      <span>${label}</span>
      <strong>${formatNumber(count)}</strong>
    </button>
  `;
}

function filterSchools(schools, filter) {
  if (filter === "985") return schools.filter((school) => school.is985);
  if (filter === "211") return schools.filter((school) => school.is211);
  if (filter === "double") return schools.filter((school) => school.isDoubleFirst);
  return schools;
}

function renderSchoolCard(school, index) {
  const averageScore = getSchoolAverageScore(school);
  return `
    <article class="school-card">
      <div class="school-row">
        <span class="rank-badge">${index + 1}</span>
        <h3>${escapeHtml(school.displayName || school.name)}</h3>
      </div>
      <p>${escapeHtml([school.city, school.nature].filter(Boolean).join(" · "))}</p>
      <div class="score-row">
        <span>平均分</span>
        <strong>${averageScore ? `${averageScore} 分` : "暂无"}</strong>
      </div>
      <div class="school-tags">${getSchoolTags(school).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
      <button class="school-detail-trigger" type="button" data-school-detail="${escapeHtml(school.id)}">详情</button>
    </article>
  `;
}

function renderSchoolDetail(school) {
  const averageScore = getSchoolAverageScore(school);
  const firstClassMajors = school.nationalFirstClassMajors || [];
  const schoolLevel = formatLevel(school.level);
  return `
    <button class="school-detail-close" type="button" data-school-detail-close aria-label="关闭">×</button>
    <div class="school-detail-head">
      <span class="school-detail-logo">${escapeHtml(school.logoText || "校")}</span>
      <div>
        <h2 id="schoolDetailTitle">${escapeHtml(school.displayName || school.name)}</h2>
        <p>${escapeHtml([school.province, school.city, school.nature, school.schoolNature].filter(Boolean).join(" · "))}</p>
      </div>
    </div>

    <div class="school-detail-metrics">
      <div><strong>${averageScore ? `${averageScore}` : "暂无"}</strong><span>平均分</span></div>
      <div><strong>${formatNumber(school.doctorPoints || 0)}</strong><span>博士点</span></div>
      <div><strong>${formatNumber(school.masterPoints || 0)}</strong><span>硕士点</span></div>
      <div><strong>${school.softRank ? school.softRank : "—"}</strong><span>软科排名</span></div>
    </div>

    <section class="school-detail-section">
      <h3>学校信息</h3>
      <dl class="school-detail-list">
        <div><dt>主管部门</dt><dd>${escapeHtml(school.owner || "暂无")}</dd></div>
        <div><dt>办学层次</dt><dd>${escapeHtml(schoolLevel || "本科")}</dd></div>
        <div><dt>学校地址</dt><dd>${escapeHtml(school.address || "暂无")}</dd></div>
        <div><dt>城市水平</dt><dd>${escapeHtml(school.cityLevel || "暂无")}</dd></div>
      </dl>
    </section>

    <section class="school-detail-section">
      <h3>国家级一流专业</h3>
      <div class="first-class-majors">
        ${firstClassMajors.length ? firstClassMajors.slice(0, 12).map((major) => `<span>${escapeHtml(major)}</span>`).join("") : "<em>暂无数据</em>"}
      </div>
    </section>

    <section class="school-detail-section">
      <h3>录取参考专业</h3>
      <div class="major-reference-list">
        ${(school.majors || []).slice(0, 6).map((major) => `
          <div>
            <strong>${escapeHtml(major.name)}</strong>
            <span>${major.score ? `${major.score} 分` : "暂无分数"} · ${major.rank ? `${major.rank} 位` : "暂无位次"}</span>
          </div>
        `).join("")}
      </div>
    </section>

    <div class="school-detail-links">
      ${school.admissionRulesUrl ? `<a href="${escapeAttribute(school.admissionRulesUrl)}" target="_blank" rel="noopener noreferrer">招生章程</a>` : ""}
      ${school.baikeUrl ? `<a href="${escapeAttribute(school.baikeUrl)}" target="_blank" rel="noopener noreferrer">院校百科</a>` : ""}
    </div>
  `;
}

function getProvinceSchools(name) {
  return (admissionData.schools || [])
    .filter((school) => school.province === name)
    .sort((a, b) => Number(b.is985) - Number(a.is985) || Number(b.is211) - Number(a.is211) || Number(b.isDoubleFirst) - Number(a.isDoubleFirst) || Number(a.softRank || 99999) - Number(b.softRank || 99999) || String(a.name).localeCompare(String(b.name), "zh-CN"));
}

function getProvince(name) {
  return (admissionData.provinces || []).find((item) => item.name === name);
}

function getSchoolById(id) {
  return (admissionData.schools || []).find((school) => school.id === id);
}

function countByFlag(schools, key) {
  return schools.filter((school) => school[key]).length;
}

function getSchoolTags(school) {
  return [
    school.is985 ? "985" : "",
    school.is211 ? "211" : "",
    school.isDoubleFirst ? "双一流" : "",
    school.nature || ""
  ].filter(Boolean).slice(0, 4);
}

function getSchoolAverageScore(school) {
  const averageScore = Number(school.averageScore);
  if (Number.isFinite(averageScore) && averageScore > 0) return Math.round(averageScore);

  const majorScores = (school.majors || [])
    .map((major) => Number(major.score))
    .filter((score) => Number.isFinite(score) && score > 0);

  if (majorScores.length) {
    return Math.round(majorScores.reduce((sum, score) => sum + score, 0) / majorScores.length);
  }

  const minScore = Number(school.minScore);
  const maxScore = Number(school.maxScore);
  if (Number.isFinite(minScore) && Number.isFinite(maxScore) && minScore > 0 && maxScore > 0) {
    return Math.round((minScore + maxScore) / 2);
  }
  if (Number.isFinite(minScore) && minScore > 0) return Math.round(minScore);
  return null;
}

function formatLevel(level) {
  return String(level || "")
    .split("/")
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 6)
    .join(" / ");
}

function formatNumber(value) {
  const number = Number(value);
  if (!Number.isFinite(number) || number <= 0) return "0";
  if (number >= 10000) return `${(number / 10000).toFixed(1)}万`;
  return String(number);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}

initAdmissionPage();
