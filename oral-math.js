const navItems = [
  { id: "home", label: "首页", icon: "⌂", href: "./index.html" },
  { id: "oral-math", label: "口算出题器", icon: "✎" },
  { id: "library", label: "资料库", icon: "★", href: "./index.html#library" },
  { id: "sentence", label: "好句查询", icon: "⌕", placeholder: true },
  { id: "english", label: "英文学习", icon: "Aa", href: "./english-card.html" },
];

const oralGrades = [
  { value: "1", label: "一年级" },
  { value: "2", label: "二年级" },
  { value: "3", label: "三年级" },
  { value: "4", label: "四年级" },
  { value: "5", label: "五年级" },
  { value: "6", label: "六年级" },
];

const oralProblemCounts = [20, 40, 60, 80, 100];

const oralTopicsByGrade = {
  1: [
    { id: "g1-add-20", title: "20以内加法", example: "8 + 7 = ?", kind: "add-20" },
    { id: "g1-sub-20", title: "20以内减法", example: "16 - 9 = ?", kind: "sub-20" },
    { id: "g1-add-sub-20", title: "20以内加减混合", example: "9 + 6 - 5 = ?", kind: "mixed-20" },
    { id: "g1-add-100-ten", title: "整十数加减", example: "40 + 30 = ?", kind: "ten-100" },
    { id: "g1-compare-100", title: "100以内比大小", example: "56 ○ 65", kind: "compare-100" },
    { id: "g1-fill-20", title: "凑十填空", example: "7 + ( ) = 10", kind: "fill-10" },
  ],
  2: [
    { id: "g2-mixed", title: "加减混合", example: "56 - 42 + 10 = ?", kind: "mixed-100" },
    { id: "g2-add-chain", title: "连加", example: "23 + 30 + 32 = ?", kind: "chain-add-100" },
    { id: "g2-sub-chain", title: "连减", example: "96 - 57 - 8 = ?", kind: "chain-sub-100" },
    { id: "g2-add-sub-100", title: "100以内的加减法", example: "54 + 27 - 10 = ?", kind: "mixed-100" },
    { id: "g2-multiply", title: "表内乘法", example: "4 × 3 - 7 = ?", kind: "table-multiply-mixed" },
    { id: "g2-review", title: "二年级上册综合复习", example: "88 - 85 + 19 = ?", kind: "grade2-review" },
    { id: "g2-division", title: "表内除法", example: "63 ÷ 9 = ?", kind: "table-division" },
    { id: "g2-mixed-op", title: "混合运算", example: "24 + 15 ÷ 5 = ?", kind: "multiply-division-mixed" },
    { id: "g2-bracket", title: "带括号的混合运算", example: "7 × (3 × 1) = ?", kind: "bracket-mixed" },
  ],
  3: [
    { id: "g3-add-sub", title: "三位数加减", example: "356 + 248 = ?", kind: "add-sub-1000" },
    { id: "g3-multi-one", title: "两位数乘一位数", example: "42 × 3 = ?", kind: "two-digit-times-one" },
    { id: "g3-div-one", title: "整十整百除一位数", example: "240 ÷ 6 = ?", kind: "hundreds-div-one" },
    { id: "g3-remainder", title: "有余数除法", example: "37 ÷ 5 = ?", kind: "division-remainder" },
    { id: "g3-mixed", title: "乘除混合", example: "6 × 8 ÷ 4 = ?", kind: "multiply-division-mixed" },
    { id: "g3-unit", title: "长度质量单位换算", example: "3千米 = ?米", kind: "unit-convert" },
  ],
  4: [
    { id: "g4-big-number", title: "万以上数的认识", example: "2438，( )，4438，5438", kind: "number-sequence" },
    { id: "g4-compare", title: "万以内的数比大小", example: "5519 ○ 5588", kind: "compare-10000" },
    { id: "g4-mixed", title: "四则混合运算", example: "96 ÷ 8 + 27 = ?", kind: "four-mixed" },
    { id: "g4-factor", title: "乘法分配律", example: "25 × 16 × 4 = ?", kind: "law-multiply" },
    { id: "g4-decimal", title: "小数加减初步", example: "3.6 + 2.8 = ?", kind: "decimal-add-sub" },
    { id: "g4-area", title: "面积口算", example: "长8米宽6米，面积=?", kind: "area-simple" },
  ],
  5: [
    { id: "g5-decimal-mix", title: "小数四则口算", example: "4.8 ÷ 0.6 = ?", kind: "decimal-mixed" },
    { id: "g5-fraction-add", title: "同分母分数加减", example: "3/8 + 2/8 = ?", kind: "fraction-same" },
    { id: "g5-factor-multiple", title: "因数与倍数", example: "36的最大因数是?", kind: "factor-multiple" },
    { id: "g5-equation", title: "简易方程", example: "x + 18 = 45", kind: "equation-simple" },
    { id: "g5-compare", title: "小数比大小", example: "6.08 ○ 6.8", kind: "decimal-compare" },
    { id: "g5-unit", title: "体积单位换算", example: "2立方米 = ?立方分米", kind: "volume-convert" },
  ],
  6: [
    { id: "g6-fraction-mix", title: "分数四则口算", example: "2/3 × 9 = ?", kind: "fraction-mixed" },
    { id: "g6-percent", title: "百分数口算", example: "80的25% = ?", kind: "percent-simple" },
    { id: "g6-ratio", title: "比和比例", example: "3:5 = ?/20", kind: "ratio-simple" },
    { id: "g6-negative", title: "正负数加减", example: "-8 + 13 = ?", kind: "negative-add-sub" },
    { id: "g6-surface", title: "圆柱圆锥口算", example: "底面积12高5，体积=?", kind: "solid-simple" },
    { id: "g6-review", title: "六年级综合复习", example: "36 × 25% + 14 = ?", kind: "grade6-review" },
  ],
};

const sideNav = document.querySelector("#sideNav");
const oralMathTitle = document.querySelector("#oralMathTitle");
const oralMathSubtitle = document.querySelector("#oralMathSubtitle");
const oralGradeSelect = document.querySelector("#oralGradeSelect");
const oralTopicGrid = document.querySelector("#oralTopicGrid");
const oralSheet = document.querySelector("#oralSheet");
const oralSheetTitle = document.querySelector("#oralSheetTitle");
const oralSheetMeta = document.querySelector("#oralSheetMeta");
const oralQuestionGrid = document.querySelector("#oralQuestionGrid");
const oralAnswerButton = document.querySelector("#oralAnswerButton");
const oralPrintButton = document.querySelector("#oralPrintButton");
const toast = document.querySelector("#toast");

let oralActiveGrade = "2";
let oralActiveQuestions = [];
let oralAnswersVisible = false;
let oralLastTopic = null;
let toastTimer = 0;

renderNav();
renderOralMath();
bindPageActions();

function renderNav() {
  sideNav.innerHTML = navItems
    .map((item) => `
      <button class="nav-item ${item.id === "oral-math" ? "is-active" : ""}" type="button" data-nav-id="${item.id}">
        <span class="nav-icon" aria-hidden="true">${item.icon}</span>
        <span>${item.label}</span>
      </button>
    `)
    .join("");
}

function renderOralMath() {
  oralGradeSelect.innerHTML = oralGrades
    .map((grade) => `<option value="${grade.value}" ${grade.value === oralActiveGrade ? "selected" : ""}>${grade.label}</option>`)
    .join("");
  renderOralTopics();
}

function renderOralTopics() {
  const grade = getOralGrade();
  const topics = oralTopicsByGrade[oralActiveGrade] || [];
  oralMathTitle.textContent = `${grade.label}口算`;
  oralMathSubtitle.textContent = `${grade.label}共 ${topics.length} 个题型`;
  oralTopicGrid.innerHTML = topics.map(renderOralTopicCard).join("");
}

function renderOralTopicCard(topic) {
  return `
    <article class="oral-topic-card">
      <div>
        <h3>${topic.title}</h3>
        <p>例题：${topic.example}</p>
      </div>
      <div class="oral-card-actions">
        <label>
          <span>题目数量</span>
          <select data-oral-count="${topic.id}" aria-label="${topic.title}题目数量">
            ${oralProblemCounts.map((count) => `<option value="${count}" ${count === 60 ? "selected" : ""}>${count}道题</option>`).join("")}
          </select>
        </label>
        <button class="oral-generate-button" type="button" data-oral-topic="${topic.id}">生成口算</button>
      </div>
    </article>
  `;
}

function renderOralSheet() {
  oralSheet.classList.toggle("is-hidden", !oralActiveQuestions.length);
  if (!oralActiveQuestions.length || !oralLastTopic) return;
  const grade = getOralGrade();
  oralSheetTitle.textContent = `${grade.label} · ${oralLastTopic.title}`;
  oralSheetMeta.textContent = `共 ${oralActiveQuestions.length} 道题`;
  oralAnswerButton.textContent = oralAnswersVisible ? "隐藏答案" : "显示答案";
  oralQuestionGrid.innerHTML = oralActiveQuestions
    .map((item, index) => `
      <div class="oral-question-card">
        <span>${index + 1}.</span>
        <strong>${item.question}</strong>
        <em class="${oralAnswersVisible ? "is-visible" : ""}">${item.answer}</em>
      </div>
    `)
    .join("");
}

function bindPageActions() {
  sideNav.addEventListener("click", (event) => {
    const button = event.target.closest("[data-nav-id]");
    if (!button) return;
    const target = navItems.find((item) => item.id === button.dataset.navId);
    if (!target) return;
    if (target.placeholder) {
      showToast(`${target.label}正在整理中。`);
      return;
    }
    if (target.href) {
      window.location.href = target.href;
    }
  });

  oralGradeSelect.addEventListener("change", () => {
    oralActiveGrade = oralGradeSelect.value;
    oralActiveQuestions = [];
    oralAnswersVisible = false;
    oralLastTopic = null;
    renderOralTopics();
    renderOralSheet();
  });

  oralTopicGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-oral-topic]");
    if (!button) return;
    const topic = findOralTopic(button.dataset.oralTopic);
    if (!topic) return;
    const countSelect = oralTopicGrid.querySelector(`[data-oral-count="${topic.id}"]`);
    const count = Number(countSelect?.value || 60);
    oralActiveQuestions = generateOralQuestions(topic, count);
    oralAnswersVisible = false;
    oralLastTopic = topic;
    renderOralSheet();
    oralSheet.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  oralAnswerButton.addEventListener("click", () => {
    oralAnswersVisible = !oralAnswersVisible;
    renderOralSheet();
  });

  oralPrintButton.addEventListener("click", () => {
    window.print();
  });
}

function getOralGrade() {
  return oralGrades.find((grade) => grade.value === oralActiveGrade) || oralGrades[1];
}

function findOralTopic(topicId) {
  return (oralTopicsByGrade[oralActiveGrade] || []).find((topic) => topic.id === topicId);
}

function generateOralQuestions(topic, count) {
  return Array.from({ length: count }, () => generateOralQuestion(topic.kind));
}

function generateOralQuestion(kind) {
  switch (kind) {
    case "add-20": {
      const a = rand(1, 12);
      const b = rand(1, 20 - a);
      return qa(`${a} + ${b} =`, a + b);
    }
    case "sub-20": {
      const a = rand(10, 20);
      const b = rand(1, a);
      return qa(`${a} - ${b} =`, a - b);
    }
    case "mixed-20": {
      const a = rand(3, 12);
      const b = rand(1, 20 - a);
      const c = rand(1, a + b);
      return qa(`${a} + ${b} - ${c} =`, a + b - c);
    }
    case "ten-100": {
      const a = rand(1, 9) * 10;
      const b = rand(1, 9) * 10;
      const subtract = Math.random() > 0.5;
      if (subtract) return qa(`${Math.max(a, b)} - ${Math.min(a, b)} =`, Math.abs(a - b));
      return qa(`${a} + ${b} =`, a + b);
    }
    case "compare-100": {
      const a = rand(1, 100);
      const b = rand(1, 100);
      return qa(`${a} ○ ${b}`, compareAnswer(a, b));
    }
    case "fill-10": {
      const a = rand(1, 9);
      return qa(`${a} + ( ) = 10`, 10 - a);
    }
    case "mixed-100": {
      const a = rand(20, 90);
      const b = rand(5, 45);
      const c = rand(1, 30);
      return qa(`${a} - ${b} + ${c} =`, a - b + c);
    }
    case "chain-add-100": {
      const a = rand(10, 35);
      const b = rand(10, 35);
      const c = rand(5, 100 - a - b);
      return qa(`${a} + ${b} + ${c} =`, a + b + c);
    }
    case "chain-sub-100": {
      const a = rand(60, 100);
      const b = rand(10, 45);
      const c = rand(1, Math.max(1, a - b));
      return qa(`${a} - ${b} - ${c} =`, a - b - c);
    }
    case "table-multiply-mixed": {
      const a = rand(2, 9);
      const b = rand(2, 9);
      const c = rand(1, Math.min(20, a * b));
      return qa(`${a} × ${b} - ${c} =`, a * b - c);
    }
    case "grade2-review":
      return generateOralQuestion(pick(["mixed-100", "chain-add-100", "chain-sub-100", "table-division"]));
    case "table-division": {
      const divisor = rand(2, 9);
      const quotient = rand(1, 9);
      return qa(`${divisor * quotient} ÷ ${divisor} =`, quotient);
    }
    case "multiply-division-mixed": {
      const a = rand(2, 9);
      const b = rand(2, 9);
      const c = pick([a, b]);
      return qa(`${a} × ${b} ÷ ${c} =`, (a * b) / c);
    }
    case "bracket-mixed": {
      const a = rand(2, 9);
      const b = rand(1, 5);
      const c = rand(1, 4);
      return qa(`${a} × (${b} + ${c}) =`, a * (b + c));
    }
    case "add-sub-1000": {
      const a = rand(120, 780);
      const b = rand(80, 420);
      const subtract = Math.random() > 0.5;
      if (subtract) return qa(`${Math.max(a, b)} - ${Math.min(a, b)} =`, Math.abs(a - b));
      return qa(`${a} + ${b} =`, a + b);
    }
    case "two-digit-times-one": {
      const a = rand(12, 98);
      const b = rand(2, 9);
      return qa(`${a} × ${b} =`, a * b);
    }
    case "hundreds-div-one": {
      const divisor = rand(2, 9);
      const quotient = rand(20, 90);
      return qa(`${divisor * quotient} ÷ ${divisor} =`, quotient);
    }
    case "division-remainder": {
      const divisor = rand(2, 9);
      const quotient = rand(2, 9);
      const remainder = rand(1, divisor - 1);
      return qa(`${divisor * quotient + remainder} ÷ ${divisor} =`, `${quotient}余${remainder}`);
    }
    case "unit-convert": {
      const items = [
        () => {
          const n = rand(2, 9);
          return qa(`${n}千米 = ( )米`, n * 1000);
        },
        () => {
          const n = rand(3, 20) * 100;
          return qa(`${n}厘米 = ( )米`, n / 100);
        },
        () => {
          const n = rand(2, 9);
          return qa(`${n}吨 = ( )千克`, n * 1000);
        },
      ];
      return pick(items)();
    }
    case "number-sequence": {
      const start = rand(12, 80) * 100 + rand(1, 9);
      const step = pick([100, 200, 500, 1000]);
      return qa(`${start}，( )，${start + step * 2}，${start + step * 3}`, start + step);
    }
    case "compare-10000": {
      const a = rand(1000, 9999);
      const b = rand(1000, 9999);
      return qa(`${a} ○ ${b}`, compareAnswer(a, b));
    }
    case "four-mixed": {
      const a = rand(2, 9);
      const b = rand(2, 9);
      const c = rand(10, 60);
      return qa(`${a * b} ÷ ${a} + ${c} =`, b + c);
    }
    case "law-multiply": {
      const a = pick([25, 125, 5]);
      const b = pick([4, 8, 20]);
      const c = rand(2, 16);
      return qa(`${a} × ${c} × ${b} =`, a * c * b);
    }
    case "decimal-add-sub": {
      const a = rand(10, 90) / 10;
      const b = rand(10, 90) / 10;
      const subtract = Math.random() > 0.5;
      if (subtract) return qa(`${formatDecimal(Math.max(a, b))} - ${formatDecimal(Math.min(a, b))} =`, formatDecimal(Math.abs(a - b)));
      return qa(`${formatDecimal(a)} + ${formatDecimal(b)} =`, formatDecimal(a + b));
    }
    case "area-simple": {
      const a = rand(3, 20);
      const b = rand(3, 20);
      return qa(`长${a}米，宽${b}米，面积 =`, `${a * b}平方米`);
    }
    case "decimal-mixed": {
      const op = pick(["+", "-", "×", "÷"]);
      if (op === "÷") {
        const b = rand(2, 9) / 10;
        const answer = rand(2, 12);
        return qa(`${formatDecimal(b * answer)} ÷ ${formatDecimal(b)} =`, answer);
      }
      const a = rand(10, 90) / 10;
      const b = rand(2, 20) / 10;
      if (op === "×") return qa(`${formatDecimal(a)} × ${formatDecimal(b)} =`, formatDecimal(a * b));
      if (op === "-") return qa(`${formatDecimal(Math.max(a, b))} - ${formatDecimal(Math.min(a, b))} =`, formatDecimal(Math.abs(a - b)));
      return qa(`${formatDecimal(a)} + ${formatDecimal(b)} =`, formatDecimal(a + b));
    }
    case "fraction-same": {
      const denominator = rand(4, 12);
      const a = rand(1, denominator - 2);
      const b = rand(1, denominator - a - 1);
      return qa(`${a}/${denominator} + ${b}/${denominator} =`, simplifyFraction(a + b, denominator));
    }
    case "factor-multiple": {
      const n = rand(6, 60);
      return qa(`${n}的最大因数是`, n);
    }
    case "equation-simple": {
      const answer = rand(3, 80);
      const b = rand(5, 50);
      return qa(`x + ${b} = ${answer + b}，x =`, answer);
    }
    case "decimal-compare": {
      const a = rand(100, 999) / 100;
      const b = rand(100, 999) / 100;
      return qa(`${formatDecimal(a)} ○ ${formatDecimal(b)}`, compareAnswer(a, b));
    }
    case "volume-convert": {
      const n = rand(1, 9);
      return qa(`${n}立方米 = ( )立方分米`, n * 1000);
    }
    case "fraction-mixed": {
      const denominator = rand(3, 12);
      const numerator = rand(1, denominator - 1);
      const multiplier = rand(2, 12);
      return qa(`${numerator}/${denominator} × ${multiplier} =`, simplifyFraction(numerator * multiplier, denominator));
    }
    case "percent-simple": {
      const percent = pick([10, 20, 25, 50, 75]);
      const base = rand(2, 20) * 20;
      return qa(`${base}的${percent}% =`, (base * percent) / 100);
    }
    case "ratio-simple": {
      const a = rand(2, 9);
      const b = rand(2, 9);
      const k = rand(2, 8);
      return qa(`${a}:${b} = ( ):${b * k}`, a * k);
    }
    case "negative-add-sub": {
      const a = rand(-20, 20);
      const b = rand(-20, 20);
      const sign = b >= 0 ? "+" : "-";
      return qa(`${a} ${sign} ${Math.abs(b)} =`, a + b);
    }
    case "solid-simple": {
      const baseArea = rand(6, 30);
      const height = rand(3, 12);
      return qa(`圆柱底面积${baseArea}，高${height}，体积 =`, baseArea * height);
    }
    case "grade6-review":
      return generateOralQuestion(pick(["fraction-mixed", "percent-simple", "ratio-simple", "negative-add-sub"]));
    default:
      return qa("1 + 1 =", 2);
  }
}

function qa(question, answer) {
  return { question, answer: String(answer) };
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(items) {
  return items[rand(0, items.length - 1)];
}

function compareAnswer(a, b) {
  if (a > b) return ">";
  if (a < b) return "<";
  return "=";
}

function formatDecimal(value) {
  return Number(value.toFixed(2)).toString();
}

function simplifyFraction(numerator, denominator) {
  const divisor = gcd(Math.abs(numerator), Math.abs(denominator));
  const top = numerator / divisor;
  const bottom = denominator / divisor;
  if (bottom === 1) return top;
  return `${top}/${bottom}`;
}

function gcd(a, b) {
  while (b) {
    const next = a % b;
    a = b;
    b = next;
  }
  return a || 1;
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}
