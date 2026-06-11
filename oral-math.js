const navItems = [
  { id: "home", label: "首页", icon: "⌂", href: "./index.html" },
  { id: "oral-math", label: "口算出题器", icon: "✎" },
  { id: "library", label: "资料库", icon: "★", href: "./index.html#library" },
  { id: "sentence", label: "好句查询", icon: "⌕", href: "./index.html#sentence" },
  { id: "english", label: "英文学习", icon: "Aa", href: "./index.html#english" },
  { id: "gaokao", label: "高考志愿填报", icon: "志", href: "./admission.html" },
  { id: "phonics", label: "自然拼读闪卡", icon: "Ph", href: "file:///D:/天津考试合集/pdfcreatlatex/phonics-ppt-deck/index.html" },
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
    { id: "g1-add-sub-10", title: "10以内加减", example: "3 + 5 = ?、9 - 4 = ?", target: "脱口而出，正确率≥95%", kind: "add-sub-10" },
    { id: "g1-carry-add-20", title: "20以内进位加", example: "8 + 7 = ?", target: "每分钟8-10题，正确率≥90%", kind: "carry-add-20" },
    { id: "g1-borrow-sub-20", title: "20以内退位减", example: "13 - 8 = ?", target: "每分钟8-10题，正确率≥90%", kind: "borrow-sub-20" },
    { id: "g1-ten-add-sub", title: "整十数加减", example: "30 + 20 = ?", target: "会口算，结果控制在100以内", kind: "ten-add-sub" },
    { id: "g1-two-digit-one", title: "两位数±一位数", example: "25 + 3 = ?、46 - 2 = ?", target: "不进位、不退位，会口算", kind: "two-digit-one-no-carry" },
  ],
  2: [
    { id: "g2-add-sub-100", title: "100以内加减", example: "47 + 8 = ?、53 - 9 = ?", target: "每分钟10-15题，正确率≥90%", kind: "add-sub-100" },
    { id: "g2-table-multiply", title: "表内乘法", example: "7 × 6 = ?、9 × 8 = ?", target: "脱口而出，正确率≥95%", kind: "table-multiply" },
    { id: "g2-table-division", title: "表内除法", example: "56 ÷ 7 = ?、36 ÷ 4 = ?", target: "脱口而出，正确率≥95%", kind: "table-division" },
    { id: "g2-multiply-add", title: "简单乘加", example: "5 × 3 + 2 = ?", target: "会口算，两步不带括号", kind: "multiply-add" },
    { id: "g2-multiply-sub", title: "简单乘减", example: "6 × 4 - 5 = ?", target: "会口算，结果非负", kind: "multiply-sub" },
    { id: "g2-review", title: "二年级综合", example: "47 + 8 = ?、7 × 6 = ?", target: "加减与口诀混合巩固", kind: "grade2-review" },
  ],
  3: [
    { id: "g3-whole-add-sub", title: "万以内整百整千加减", example: "300 + 500 = ?、1200 - 400 = ?", target: "会口算，以整百整千为主", kind: "whole-add-sub-10000" },
    { id: "g3-round-times-one", title: "一位数×整十整百", example: "20 × 4 = ?", target: "熟练口算", kind: "round-times-one" },
    { id: "g3-two-digit-times-one", title: "两位数×一位数", example: "23 × 3 = ?", target: "不进位，熟练口算", kind: "two-digit-times-one-no-carry" },
    { id: "g3-round-div-one", title: "整十整百÷一位数", example: "180 ÷ 3 = ?", target: "整除，熟练口算", kind: "round-div-one" },
    { id: "g3-two-digit-div-one", title: "两位数÷一位数", example: "48 ÷ 2 = ?", target: "整除，熟练口算", kind: "two-digit-div-one" },
    { id: "g3-fraction-same", title: "简单分数加减", example: "1/5 + 2/5 = ?", target: "分母≤10，同分母", kind: "fraction-same-10" },
  ],
  4: [
    { id: "g4-big-add-sub", title: "整万整亿数加减", example: "30000 + 50000 = ?", target: "亿以内，会口算", kind: "big-round-add-sub" },
    { id: "g4-two-digit-times-ten", title: "两位数×整十/整百", example: "30 × 50 = ?", target: "熟练口算", kind: "two-digit-times-ten" },
    { id: "g4-three-digit-times-one", title: "几百几十×一位数", example: "240 × 2 = ?", target: "熟练口算", kind: "three-digit-times-one" },
    { id: "g4-two-digit-div-ten", title: "两位数÷整十", example: "80 ÷ 20 = ?", target: "整除，熟练口算", kind: "two-digit-div-ten" },
    { id: "g4-three-digit-div-one", title: "几百几十÷一位数", example: "360 ÷ 3 = ?", target: "整除，熟练口算", kind: "three-digit-div-one" },
    { id: "g4-decimal-add-sub", title: "小数简单加减", example: "0.5 + 0.3 = ?、1.2 - 0.7 = ?", target: "一位、两位小数，会口算", kind: "decimal-add-sub" },
  ],
  5: [
    { id: "g5-decimal-times", title: "小数乘法", example: "0.4 × 5 = ?、2.5 × 4 = ?", target: "整数×小数，简单熟练", kind: "decimal-times" },
    { id: "g5-decimal-division", title: "小数除法", example: "3.6 ÷ 6 = ?、1 ÷ 0.5 = ?", target: "小数÷整数、简单小数除法", kind: "decimal-division" },
    { id: "g5-fraction-add-sub", title: "异分母分数加减", example: "1/2 + 1/3 = ?", target: "分母≤20，会口算", kind: "fraction-different-add-sub" },
    { id: "g5-fraction-times-div", title: "简单分数乘除", example: "2/3 × 3/4 = ?", target: "简单乘除，会口算", kind: "fraction-times-div" },
    { id: "g5-percent-convert", title: "百分数互化", example: "25% = ? = 1/4", target: "百分数、小数、分数互化", kind: "percent-convert" },
    { id: "g5-review", title: "五年级综合", example: "2.5 × 4 = ?、1/2 + 1/3 = ?", target: "小数、分数、百分数巩固", kind: "grade5-review" },
  ],
  6: [
    { id: "g6-fraction-decimal-percent", title: "分数小数百分数混合", example: "0.25 + 1/4 = ?、3/5 × 50% = ?", target: "简单混合口算，熟练", kind: "fraction-decimal-percent" },
    { id: "g6-ratio-simplify", title: "比的化简", example: "12:18 = ?", target: "会口算", kind: "ratio-simplify" },
    { id: "g6-ratio-value", title: "求比值", example: "0.8:0.2 = ?", target: "会口算", kind: "ratio-value" },
    { id: "g6-two-step-integer", title: "整数两步混合", example: "36 ÷ 6 + 14 = ?", target: "两步四则，会口算", kind: "two-step-integer" },
    { id: "g6-two-step-fraction", title: "分数两步混合", example: "2/3 × 6 + 4 = ?", target: "简单分数四则两步", kind: "two-step-fraction" },
    { id: "g6-review", title: "六年级综合复习", example: "0.25 + 1/4 = ?、12:18 = ?", target: "分数、小数、百分数、比综合", kind: "grade6-review" },
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
        <small>${topic.target}</small>
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
    case "add-sub-10":
      return generateAddSub10();
    case "carry-add-20": {
      const a = rand(2, 9);
      const b = rand(11 - a, 9);
      return qa(`${a} + ${b} =`, a + b);
    }
    case "borrow-sub-20": {
      const a = rand(11, 18);
      const b = rand((a % 10) + 1, 9);
      return qa(`${a} - ${b} =`, a - b);
    }
    case "ten-add-sub":
      return generateTenAddSub();
    case "two-digit-one-no-carry":
      return generateTwoDigitOneNoCarry();
    case "add-sub-100":
      return generateAddSub100();
    case "table-multiply": {
      const a = rand(2, 9);
      const b = rand(2, 9);
      return qa(`${a} × ${b} =`, a * b);
    }
    case "grade2-review":
      return generateOralQuestion(pick(["add-sub-100", "table-multiply", "table-division", "multiply-add", "multiply-sub"]));
    case "table-division": {
      const divisor = rand(2, 9);
      const quotient = rand(1, 9);
      return qa(`${divisor * quotient} ÷ ${divisor} =`, quotient);
    }
    case "multiply-add": {
      const a = rand(2, 9);
      const b = rand(2, 9);
      const c = rand(1, 9);
      return qa(`${a} × ${b} + ${c} =`, a * b + c);
    }
    case "multiply-sub": {
      const a = rand(2, 9);
      const b = rand(2, 9);
      const c = rand(1, a * b);
      return qa(`${a} × ${b} - ${c} =`, a * b - c);
    }
    case "whole-add-sub-10000":
      return generateWholeAddSub10000();
    case "round-times-one": {
      const a = pick([rand(2, 9) * 10, rand(1, 9) * 100]);
      const b = rand(2, 9);
      return qa(`${a} × ${b} =`, a * b);
    }
    case "two-digit-times-one-no-carry": {
      const b = rand(2, 4);
      const tens = rand(1, Math.floor(9 / b));
      const ones = rand(1, Math.floor(9 / b));
      const a = tens * 10 + ones;
      return qa(`${a} × ${b} =`, a * b);
    }
    case "round-div-one": {
      const divisor = rand(2, 9);
      const quotient = pick([rand(2, 9) * 10, rand(1, 9) * 100]);
      return qa(`${divisor * quotient} ÷ ${divisor} =`, quotient);
    }
    case "two-digit-div-one": {
      const divisor = rand(2, 9);
      const maxQuotient = Math.floor(99 / divisor);
      const quotient = rand(2, maxQuotient);
      return qa(`${divisor * quotient} ÷ ${divisor} =`, quotient);
    }
    case "fraction-same-10":
      return generateSameDenominatorFraction(10);
    case "big-round-add-sub":
      return generateBigRoundAddSub();
    case "two-digit-times-ten": {
      const a = rand(2, 9) * 10;
      const b = pick([rand(2, 9) * 10, rand(1, 5) * 100]);
      return qa(`${a} × ${b} =`, a * b);
    }
    case "three-digit-times-one": {
      const a = rand(10, 90) * 10;
      const b = rand(2, 4);
      return qa(`${a} × ${b} =`, a * b);
    }
    case "two-digit-div-ten": {
      const divisor = rand(1, 4) * 10;
      const quotient = rand(2, Math.floor(99 / divisor));
      return qa(`${divisor * quotient} ÷ ${divisor} =`, quotient);
    }
    case "three-digit-div-one": {
      const divisor = rand(2, 9);
      const quotient = rand(2, 30) * 10;
      return qa(`${divisor * quotient} ÷ ${divisor} =`, quotient);
    }
    case "decimal-add-sub":
      return generateDecimalAddSub();
    case "decimal-times": {
      const a = pick([rand(1, 9) / 10, rand(11, 29) / 10, 2.5, 0.4]);
      const b = pick([2, 4, 5, 8, 10]);
      return qa(`${formatDecimal(a)} × ${b} =`, formatDecimal(a * b));
    }
    case "decimal-division":
      return generateDecimalDivision();
    case "fraction-different-add-sub":
      return generateDifferentDenominatorFraction();
    case "fraction-times-div":
      return generateFractionTimesDiv();
    case "percent-convert":
      return generatePercentConvert();
    case "grade5-review":
      return generateOralQuestion(pick(["decimal-times", "decimal-division", "fraction-different-add-sub", "fraction-times-div", "percent-convert"]));
    case "fraction-decimal-percent":
      return generateFractionDecimalPercent();
    case "ratio-simplify": {
      const a = rand(2, 12);
      const b = rand(2, 12);
      const factor = rand(2, 9);
      return qa(`${a * factor}:${b * factor} =`, `${a / gcd(a, b)}:${b / gcd(a, b)}`);
    }
    case "ratio-value": {
      const answer = rand(2, 8);
      const b = pick([0.2, 0.5, 2, 3, 4]);
      const a = answer * b;
      return qa(`${formatDecimal(a)}:${formatDecimal(b)} =`, answer);
    }
    case "two-step-integer": {
      const a = rand(2, 9);
      const b = rand(2, 9);
      const c = rand(3, 30);
      return qa(`${a * b} ÷ ${a} + ${c} =`, b + c);
    }
    case "two-step-fraction": {
      const denominator = rand(2, 9);
      const multiplier = denominator;
      const numerator = rand(1, denominator - 1);
      const c = rand(1, 9);
      return qa(`${numerator}/${denominator} × ${multiplier} + ${c} =`, numerator + c);
    }
    case "grade6-review":
      return generateOralQuestion(pick(["fraction-decimal-percent", "ratio-simplify", "ratio-value", "two-step-integer", "two-step-fraction"]));
    default:
      return qa("1 + 1 =", 2);
  }
}

function generateAddSub10() {
  const a = rand(1, 9);
  const b = rand(1, 10 - a);
  if (Math.random() > 0.5) return qa(`${a} + ${b} =`, a + b);
  return qa(`${a + b} - ${b} =`, a);
}

function generateTenAddSub() {
  const a = rand(1, 9) * 10;
  const b = rand(1, 10 - a / 10) * 10;
  if (Math.random() > 0.5) return qa(`${a} + ${b} =`, a + b);
  return qa(`${a + b} - ${b} =`, a);
}

function generateTwoDigitOneNoCarry() {
  const tens = rand(2, 9);
  const ones = rand(1, 8);
  const b = rand(1, 9 - ones);
  const a = tens * 10 + ones;
  if (Math.random() > 0.5) return qa(`${a} + ${b} =`, a + b);
  const subtrahend = rand(1, ones);
  return qa(`${a} - ${subtrahend} =`, a - subtrahend);
}

function generateAddSub100() {
  if (Math.random() > 0.5) {
    const tens = rand(2, 8);
    const ones = rand(1, 9);
    const a = tens * 10 + ones;
    const b = rand(10 - ones, 9);
    return qa(`${a} + ${b} =`, a + b);
  }
  const tens = rand(3, 9);
  const ones = rand(0, 8);
  const a = tens * 10 + ones;
  const b = rand(ones + 1, 9);
  return qa(`${a} - ${b} =`, a - b);
}

function generateWholeAddSub10000() {
  const unit = pick([100, 1000]);
  const a = rand(1, 8) * unit;
  const b = rand(1, 10 - a / unit) * unit;
  if (Math.random() > 0.5) return qa(`${a} + ${b} =`, a + b);
  return qa(`${a + b} - ${b} =`, a);
}

function generateSameDenominatorFraction(maxDenominator) {
  const denominator = rand(3, maxDenominator);
  const a = rand(1, denominator - 1);
  const b = rand(1, denominator - 1);
  if (a + b < denominator && Math.random() > 0.45) {
    return qa(`${a}/${denominator} + ${b}/${denominator} =`, simplifyFraction(a + b, denominator));
  }
  const top = Math.max(a, b);
  const bottom = Math.min(a, b);
  return qa(`${top}/${denominator} - ${bottom}/${denominator} =`, simplifyFraction(top - bottom, denominator));
}

function generateBigRoundAddSub() {
  const unit = 10000;
  const a = rand(1, 9000) * unit;
  const b = rand(1, 10000 - a / unit) * unit;
  if (Math.random() > 0.5) return qa(`${a} + ${b} =`, a + b);
  return qa(`${a + b} - ${b} =`, a);
}

function generateDecimalAddSub() {
  const scale = pick([10, 100]);
  const a = rand(1, 90) / scale;
  const b = rand(1, 90) / scale;
  if (Math.random() > 0.5) return qa(`${formatDecimal(a)} + ${formatDecimal(b)} =`, formatDecimal(a + b));
  return qa(`${formatDecimal(Math.max(a, b))} - ${formatDecimal(Math.min(a, b))} =`, formatDecimal(Math.abs(a - b)));
}

function generateDecimalDivision() {
  if (Math.random() > 0.65) {
    const divisor = pick([0.2, 0.5, 0.25]);
    const answer = rand(1, 8);
    return qa(`${formatDecimal(divisor * answer)} ÷ ${formatDecimal(divisor)} =`, answer);
  }
  const divisor = pick([2, 4, 5, 6, 8]);
  const answer = rand(1, 12) / 10;
  return qa(`${formatDecimal(answer * divisor)} ÷ ${divisor} =`, formatDecimal(answer));
}

function generateDifferentDenominatorFraction() {
  const pairs = [[2, 3], [2, 5], [3, 4], [3, 5], [4, 5], [5, 6], [5, 8], [8, 10], [10, 20]];
  const [d1, d2] = pick(pairs);
  const a = rand(1, d1 - 1);
  const b = rand(1, d2 - 1);
  const common = lcm(d1, d2);
  const left = a * (common / d1);
  const right = b * (common / d2);
  if (left > right && Math.random() > 0.5) {
    return qa(`${a}/${d1} - ${b}/${d2} =`, simplifyFraction(left - right, common));
  }
  return qa(`${a}/${d1} + ${b}/${d2} =`, simplifyFraction(left + right, common));
}

function generateFractionTimesDiv() {
  if (Math.random() > 0.45) {
    const d1 = rand(2, 6);
    const n1 = rand(1, d1 - 1);
    const d2 = rand(2, 6);
    const n2 = rand(1, d2 - 1);
    return qa(`${n1}/${d1} × ${n2}/${d2} =`, simplifyFraction(n1 * n2, d1 * d2));
  }
  const denominator = rand(2, 9);
  const numerator = rand(1, denominator - 1);
  const divisor = rand(2, 5);
  return qa(`${numerator}/${denominator} ÷ ${divisor} =`, simplifyFraction(numerator, denominator * divisor));
}

function generatePercentConvert() {
  const item = pick([
    ["25%", "0.25 = 1/4"],
    ["50%", "0.5 = 1/2"],
    ["75%", "0.75 = 3/4"],
    ["20%", "0.2 = 1/5"],
    ["10%", "0.1 = 1/10"],
  ]);
  return qa(`${item[0]} =`, item[1]);
}

function generateFractionDecimalPercent() {
  if (Math.random() > 0.5) {
    const item = pick([
      ["0.25 + 1/4 =", "0.5"],
      ["0.5 + 1/2 =", "1"],
      ["0.2 + 1/5 =", "0.4"],
      ["0.75 - 1/4 =", "0.5"],
    ]);
    return qa(item[0], item[1]);
  }
  const item = pick([
    ["3/5 × 50% =", "0.3"],
    ["1/2 × 40% =", "0.2"],
    ["2/5 × 25% =", "0.1"],
    ["3/4 × 20% =", "0.15"],
  ]);
  return qa(item[0], item[1]);
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

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}
