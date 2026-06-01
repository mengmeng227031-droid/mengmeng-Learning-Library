const navItems = [
  { id: "home", label: "首页", icon: "⌂" },
  { id: "oral-math", label: "口算出题器", icon: "✎", href: "./oral-math.html" },
  { id: "library", label: "资料库", icon: "★" },
  { id: "sentence", label: "好句查询", icon: "⌕", placeholder: true },
  { id: "english", label: "英文学习", icon: "Aa" },
  { id: "phonics", label: "自然拼读课", icon: "Ph", href: "file:///D:/天津考试合集/pdfcreatlatex/phonics-ppt-deck/index.html" },
];

const libraryTabNames = ["全部", "知识点总结", "直播间分享", "期中测试卷", "走题训练", "期末测试卷", "单元测试卷", "语文", "模拟卷"];

const currentUser = {
  id: "student-1770675",
  name: "177****0675",
  role: "student",
  grade: "grade3",
  semester: "上册",
  progress: {
    "grade3:上册:1": 100,
    "grade3:上册:2": 85,
    "grade3:上册:3": 70,
    "grade3:上册:4": 0,
    "grade3:上册:5": 0,
    "grade3:上册:6": 0
  },
  students: [
    {
      id: "student-1770675",
      name: "177****0675",
      grade: "grade3",
      semester: "上册",
      progress: {
        "grade3:上册:1": 100,
        "grade3:上册:2": 85,
        "grade3:上册:3": 70,
        "grade3:上册:4": 0,
        "grade3:上册:5": 0,
        "grade3:上册:6": 0
      }
    },
    {
      id: "student-demo-2",
      name: "演示学生",
      grade: "grade4",
      semester: "下册",
      progress: {
        "grade4:下册:1": 40,
        "grade4:下册:2": 10
      }
    }
  ]
};

const englishGradeOptions = [
  { grade: "grade3", semester: "上册", label: "三年级上" },
  { grade: "grade3", semester: "下册", label: "三年级下" },
  { grade: "grade4", semester: "上册", label: "四年级上" },
  { grade: "grade4", semester: "下册", label: "四年级下" },
  { grade: "grade5", semester: "上册", label: "五年级上" },
  { grade: "grade5", semester: "下册", label: "五年级下" },
  { grade: "grade6", semester: "上册", label: "六年级上" },
  { grade: "grade6", semester: "下册", label: "六年级下" },
].map((item) => ({ ...item, id: `${item.grade}:${item.semester}` }));

const englishUnits = Array.from({ length: 6 }, (_, index) => index + 1);

const libraryFallbackTree = [
  {
    name: "小学",
    path: "小学",
    children: ["三年级资料", "四年级资料", "五年级资料", "六年级资料"].map((name) => ({
      name,
      path: `小学/${name}`,
      children: buildLibraryTabs(`小学/${name}`)
    }))
  },
  {
    name: "初中",
    path: "初中",
    children: ["初一资料", "初二资料", "初三资料"].map((name) => ({
      name,
      path: `初中/${name}`,
      children: buildLibraryTabs(`初中/${name}`)
    }))
  },
  {
    name: "其他",
    path: "其他",
    children: ["高中资料", "资料库全部"].map((name) => ({
      name,
      path: `其他/${name}`,
      children: buildLibraryTabs(`其他/${name}`)
    }))
  }
];

const courses = [
  {
    id: "math-thinking-3",
    coverTitle: "张老师\n思维提升课",
    title: "乘法算理深度讲解",
    badge: "思维提升",
    tags: ["三年级", "数学"],
    learners: "1.2w",
    image: "./assets/course-math-thinking.png"
  },
  {
    id: "summer-focus-2025",
    coverTitle: "点燃课",
    title: "2025暑假点燃课",
    badge: "暑假冲刺",
    tags: ["四年级", "数学"],
    learners: "8567",
    image: "./assets/course-summer-focus.png"
  },
  {
    id: "family-guide-order",
    coverTitle: "张老师\n家庭教育指导",
    title: "搭配与有序思考+趣题巧算",
    badge: "家庭教育",
    tags: ["家长必学", "思维训练"],
    learners: "6234",
    image: "./assets/course-family-guide.png"
  },
  {
    id: "family-guide-core",
    coverTitle: "张老师\n家庭教育指导",
    title: "辗转相除法本质",
    badge: "家庭教育",
    tags: ["四年级", "数学"],
    learners: "5123",
    image: "./assets/course-notebook-math.png"
  },
  {
    id: "grade-four-variable",
    coverTitle: "数学\n思维提升课",
    title: "四年级变倍问题",
    badge: "数学思维",
    tags: ["四年级", "数学"],
    learners: "9786",
    image: "./assets/course-variable-problem.png"
  }
];

const todayTasks = [
  {
    id: "task-english",
    title: "英文学习",
    desc: "完成 Unit 3 家庭成员学习卡",
    time: "18 min",
    progress: 70,
    icon: "Aa",
    color: "#4D8BFF",
    bg: "#eaf4ff"
  },
  {
    id: "task-phonics",
    title: "自然拼读课",
    desc: "完成 1 组 Phonics 跟读与认读练习",
    time: "15 min",
    progress: 35,
    icon: "Ph",
    color: "#37D2C6",
    bg: "#e9fbf8",
    href: "file:///D:/天津考试合集/pdfcreatlatex/phonics-ppt-deck/index.html"
  },
  {
    id: "task-reading",
    title: "好句积累",
    desc: "收藏 5 条人物描写句",
    time: "12 min",
    progress: 45,
    icon: "✎",
    color: "#FF6EC7",
    bg: "#fff0f8",
    disabled: true
  },
  {
    id: "task-review",
    title: "错题复盘",
    desc: "复习上周薄弱知识点",
    time: "10 min",
    progress: 30,
    icon: "✓",
    color: "#FF8A42",
    bg: "#fff1df",
    disabled: true
  }
];

const quickEntries = [
  {
    id: "oral-math",
    title: "口算出题器",
    desc: "智能生成口算题目",
    icon: "✎",
    color: "#7949f6",
    bg: "#f0e8ff"
  },
  {
    id: "library",
    title: "资料库",
    desc: "海量学习资料",
    icon: "★",
    color: "#328df5",
    bg: "#eaf4ff"
  },
  {
    id: "sentence",
    title: "好句查询",
    desc: "作文好句智能搜索",
    icon: "⌕",
    color: "#27b96f",
    bg: "#eaf8ef"
  },
  {
    id: "review",
    title: "学习复盘",
    desc: "查看进度和薄弱点",
    icon: "✓",
    color: "#ff8a25",
    bg: "#fff0df"
  }
];

const recentItems = [
  {
    id: "recent-math",
    title: "三年级数学思维训练",
    lesson: "第12课 时钟问题",
    progress: 60,
    art: "23",
    color: "#7549ff",
    bg: "#f0e8ff"
  },
  {
    id: "recent-reading",
    title: "四年级英语阅读理解",
    lesson: "第8课 记叙文阅读",
    progress: 30,
    art: "📖",
    color: "#ff9b31",
    bg: "#fff1df"
  },
  {
    id: "recent-sentence",
    title: "好句积累与运用",
    lesson: "第5课 描写人物",
    progress: 45,
    art: "Aa",
    color: "#368cf5",
    bg: "#eaf4ff"
  },
  {
    id: "recent-all",
    title: "查看全部",
    lesson: "继续浏览学习记录",
    progress: 0,
    art: "›",
    color: "#8c96a9",
    bg: "#f5f7fb"
  }
];

const sideNav = document.querySelector("#sideNav");
const homeView = document.querySelector("#homeView");
const libraryView = document.querySelector("#libraryView");
const libraryTitle = document.querySelector("#libraryTitle");
const libraryCrumbs = document.querySelector("#libraryCrumbs");
const libraryBackButton = document.querySelector("#libraryBackButton");
const libraryTabs = document.querySelector("#libraryTabs");
const libraryContent = document.querySelector("#libraryContent");
const librarySearchInput = document.querySelector("#librarySearchInput");
const libraryUploadInput = document.querySelector("#libraryUploadInput");
const courseList = document.querySelector("#courseList");
const todayGrid = document.querySelector("#todayGrid");
const quickGrid = document.querySelector("#quickGrid");
const recentGrid = document.querySelector("#recentGrid");
const searchInput = document.querySelector("#searchInput");
const toast = document.querySelector("#toast");
const englishLearningView = document.querySelector("#englishLearningView");
const englishLearningSummary = document.querySelector("#englishLearningSummary");
const englishLearningControls = document.querySelector("#englishLearningView .learning-controls");
const englishStudentField = document.querySelector("#englishStudentField");
const englishStudentSelect = document.querySelector("#englishStudentSelect");
const englishGradeSelect = document.querySelector("#englishGradeSelect");
const englishUnitGrid = document.querySelector("#englishUnitGrid");
const englishCardPanel = document.querySelector("#englishCardPanel");
const englishCardPanelTitle = document.querySelector("#englishCardPanelTitle");
const englishCardPanelMeta = document.querySelector("#englishCardPanelMeta");
const printEnglishCardButton = document.querySelector("#printEnglishCardButton");

let activeNavId = "home";
let toastTimer = 0;
let libraryTree = libraryFallbackTree;
let libraryCurrentNode = null;
let libraryActiveTab = "全部";
let libraryFiles = [];
let englishSelectedStudentId = currentUser.students[0]?.id || currentUser.id;
let englishSelectedGradeId = getDefaultEnglishGradeId(getActiveEnglishLearner());
let englishLessonBook = null;
let activeEnglishLesson = null;

const englishArtMap = {
  sister: "👧",
  have: "🤲",
  ear: "👂",
  share: "🤝",
  aunt: "👩",
  arm: "💪",
  eye: "👁",
  help: "🫶",
  cousin: "🧒",
  grandma: "👵",
  smile: "☺"
};

const fallbackEnglishLessonBook = {
  grade: "grade3",
  semester: "上册",
  label: "三年级上",
  units: [
    {
      unit: 3,
      unitTitle: "Unit 3  My Family",
      gradeLabel: "三年级上",
      lesson: "1",
      keywords: [
        { word: "sister", phonetic: "", imagePrompt: "sister, cute educational mascot style" },
        { word: "have", phonetic: "", imagePrompt: "have, cute educational mascot style" },
        { word: "ear", phonetic: "", imagePrompt: "ear, cute educational mascot style" },
        { word: "share", phonetic: "", imagePrompt: "share, cute educational mascot style" },
        { word: "aunt", phonetic: "", imagePrompt: "aunt, cute educational mascot style" },
        { word: "arm", phonetic: "", imagePrompt: "arm, cute educational mascot style" },
        { word: "eye", phonetic: "", imagePrompt: "eye, cute educational mascot style" },
        { word: "help", phonetic: "", imagePrompt: "help, cute educational mascot style" },
        { word: "cousin", phonetic: "", imagePrompt: "cousin, cute educational mascot style" },
        { word: "grandma", phonetic: "", imagePrompt: "grandma, cute educational mascot style" },
        { word: "smile", phonetic: "", imagePrompt: "smile, cute educational mascot style" }
      ],
      keySentences: [
        "Is this your sister?",
        "Yes, it is. / No, it's my cousin.",
        "Is that your brother?",
        "Yes, it is. / No, it's my cousin."
      ],
      talk: [
        { speaker: "A", text: "Is this your sister?" },
        { speaker: "B", text: "Yes, it is." },
        { speaker: "A", text: "Is that your brother?" },
        { speaker: "B", text: "No, it's my cousin." }
      ],
      practice: [
        { answer: "sister", imagePrompt: "sister", options: ["A. sister", "B. aunt"] },
        { answer: "ear", imagePrompt: "ear", options: ["A. eye", "B. ear"] },
        { answer: "grandma", imagePrompt: "grandma", options: ["A. grandma", "B. cousin"] }
      ],
      homework: 'Use "Is this/that your ___?" to ask and answer with your family.',
      dialogue: [
        { speaker: "A", text: "Is this your sister?" },
        { speaker: "B", text: "Yes, it is." },
        { speaker: "A", text: "Is that your brother?" },
        { speaker: "B", text: "No, it's my cousin." }
      ],
      reading: {
        title: "My Family",
        lines: ["I have a sister.", "I have a cousin.", "I help my grandma.", "We share and smile."]
      },
      grammar: [
        { pattern: "Is this ...?", meaning: "这是……吗？" },
        { pattern: "Is that ...?", meaning: "那是……吗？" },
        { pattern: "Yes, it is. / No, it isn't.", meaning: "是的。/ 不是。" }
      ],
      exercise: [
        { answer: "eye", imagePrompt: "eye" },
        { answer: "arm", imagePrompt: "arm" },
        { answer: "smile", imagePrompt: "smile" }
      ],
      summaryChecks: ["核心单词", "核心句型", "日常对话"],
      selfRating: { maxStars: 5, value: 0 }
    }
  ]
};

renderNav();
renderCourses(courses);
renderTodayTasks();
renderQuickEntries();
renderRecentItems();
bindPageActions();
loadLibraryTree();
loadEnglishLessonBook();
routeInitialHash();

function renderNav() {
  sideNav.innerHTML = navItems
    .map((item) => `
      <button class="nav-item ${item.id === activeNavId ? "is-active" : ""}" type="button" data-nav-id="${item.id}">
        <span class="nav-icon" aria-hidden="true">${item.icon}</span>
        <span>${item.label}</span>
      </button>
    `)
    .join("");
}

function renderCourses(items) {
  courseList.innerHTML = items.length
    ? items.map(renderCourseCard).join("")
    : '<div class="empty-state">没有找到相关内容，换个关键词试试。</div>';
}

function renderCourseCard(course) {
  const isDisabled = course.disabled ?? true;
  return `
    <button class="course-card ${isDisabled ? "is-disabled" : ""}" type="button" data-course-id="${course.id}" ${isDisabled ? "disabled" : ""}>
      <div class="cover" style="background-image: url('${course.image}');">
        <span class="badge">${course.badge}</span>
        <strong>${course.coverTitle}</strong>
      </div>
      <div class="course-body">
        <p class="course-title">${course.title}</p>
        <div class="tag-row">
          ${course.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <div class="learners"><span aria-hidden="true">🔥</span><span>${course.learners}人学习</span></div>
      </div>
    </button>
  `;
}

function renderTodayTasks() {
  todayGrid.innerHTML = todayTasks
    .map((task) => `
      <button class="today-card ${task.disabled ? "is-disabled" : ""}" type="button" data-task-id="${task.id}" style="--task-color: ${task.color}; --task-bg: ${task.bg}; --progress-color: ${task.color}; --progress: ${task.progress}%;" ${task.disabled ? "disabled" : ""}>
        <span class="today-art" aria-hidden="true">${task.icon}</span>
        <span class="today-content">
          <span class="today-meta">
            <strong>${task.title}</strong>
            <small>${task.time}</small>
          </span>
          <span class="today-desc">${task.desc}</span>
          <span class="progress today-progress"><i></i></span>
        </span>
      </button>
    `)
    .join("");
}

function renderQuickEntries() {
  quickGrid.innerHTML = quickEntries
    .map((entry) => `
      <button class="quick-card" type="button" data-entry-id="${entry.id}" style="--quick-color: ${entry.color}; --quick-bg: ${entry.bg};">
        <span class="quick-icon" aria-hidden="true">${entry.icon}</span>
        <span>
          <strong>${entry.title}</strong>
          <span>${entry.desc}</span>
        </span>
      </button>
    `)
    .join("");
}

function renderRecentItems() {
  recentGrid.innerHTML = recentItems
    .map((item) => `
      <button class="recent-card is-disabled" type="button" data-recent-id="${item.id}" style="--recent-color: ${item.color}; --recent-bg: ${item.bg}; --progress: ${item.progress}%;" disabled>
        <span class="recent-art" aria-hidden="true">${item.art}</span>
        <span>
          <strong>${item.title}</strong>
          <small>${item.lesson}</small>
          <span class="progress-row">
            <span class="progress"><i></i></span>
            <span>${item.progress ? `上次学习 ${item.progress}%` : "查看全部"}</span>
          </span>
        </span>
      </button>
    `)
    .join("");
}

function bindPageActions() {
  sideNav.addEventListener("click", (event) => {
    const button = event.target.closest("[data-nav-id]");
    if (!button) return;
    const target = navItems.find((item) => item.id === button.dataset.navId);
    if (!target) return;
    if (target.id === "english") {
      activeNavId = target.id;
      renderNav();
      showEnglishLearningPage();
      return;
    }
    if (target.href) {
      window.location.href = target.href;
      return;
    }
    if (target.placeholder) {
      activeNavId = target.id;
      renderNav();
      showHome();
      showToast(`${target.label}正在整理中，当前先开放资料库和英文学习。`);
      return;
    }
    activeNavId = target.id;
    renderNav();
    if (activeNavId === "library") {
      showLibraryRoot();
      return;
    }
    showHome();
  });

  courseList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-course-id]");
    if (!button) return;
    const course = courses.find((item) => item.id === button.dataset.courseId);
    showToast(`打开课程：${course.title}`);
  });

  quickGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-entry-id]");
    if (!button) return;
    const entry = quickEntries.find((item) => item.id === button.dataset.entryId);
    if (entry.id === "library") {
      activeNavId = "library";
      renderNav();
      showLibraryRoot();
      return;
    }
    if (entry.id === "oral-math") {
      window.location.href = "./oral-math.html";
      return;
    }
    showToast(`${entry.title}已预留入口，后续接动态页面。`);
  });

  todayGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-task-id]");
    if (!button) return;
    const task = todayTasks.find((item) => item.id === button.dataset.taskId);
    if (task.id === "task-english") {
      activeNavId = "english";
      renderNav();
      showEnglishLearningPage();
      return;
    }
    if (task.href) {
      window.location.href = task.href;
      return;
    }
    showToast(`开始今日任务：${task.title}`);
  });

  recentGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-recent-id]");
    if (!button) return;
    const item = recentItems.find((record) => record.id === button.dataset.recentId);
    showToast(item.id === "recent-all" ? "查看全部学习记录。" : `继续学习：${item.title}`);
  });

  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.trim().toLowerCase();
    const filtered = courses.filter((course) => {
      const source = [course.title, course.coverTitle, course.badge, ...course.tags].join(" ").toLowerCase();
      return source.includes(keyword);
    });
    renderCourses(filtered);
  });

  document.querySelector("#noticeButton").addEventListener("click", () => {
    showToast("你有3条学习提醒：完成英文学习卡、整理资料库、继续好句积累。");
  });

  document.querySelector("#showAllButton").addEventListener("click", () => {
    searchInput.value = "";
    renderCourses(courses);
    showToast("已展示全部推荐内容。");
  });

  englishUnitGrid.addEventListener("click", (event) => {
    const unitButton = event.target.closest("[data-english-unit]");
    if (!unitButton) return;
    openEnglishUnit(Number(unitButton.dataset.englishUnit));
  });

  printEnglishCardButton.addEventListener("click", () => {
    if (!activeEnglishLesson) {
      showToast("请先选择一个英文单元。");
      return;
    }
    window.print();
  });

  englishStudentSelect.addEventListener("change", () => {
    englishSelectedStudentId = englishStudentSelect.value;
    englishSelectedGradeId = getDefaultEnglishGradeId(getActiveEnglishLearner());
    renderEnglishLearningPage();
  });

  englishGradeSelect.addEventListener("change", () => {
    englishSelectedGradeId = englishGradeSelect.value;
    renderEnglishUnits();
  });

  libraryBackButton.addEventListener("click", () => {
    if (!libraryCurrentNode) {
      showHome();
      return;
    }
    const parent = findParentNode(libraryCurrentNode.path);
    if (parent) {
      showLibraryNode(parent);
      return;
    }
    showLibraryRoot();
  });

  libraryTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-library-tab]");
    if (!button || !libraryCurrentNode) return;
    libraryActiveTab = button.dataset.libraryTab;
    renderLibraryTabs();
    loadLibraryFiles();
  });

  libraryContent.addEventListener("click", (event) => {
    const folder = event.target.closest("[data-library-folder]");
    if (folder) {
      const node = findLibraryNode(folder.dataset.libraryFolder);
      if (node) showLibraryNode(node);
      return;
    }
    const file = event.target.closest("[data-file-url]");
    if (file) {
      window.open(file.dataset.fileUrl, "_blank");
    }
  });

  librarySearchInput.addEventListener("input", renderLibraryFiles);

  libraryUploadInput.addEventListener("change", async () => {
    if (!libraryCurrentNode || !libraryUploadInput.files.length) return;
    const path = getUploadLibraryPath();
    const data = new FormData();
    data.append("path", path);
    Array.from(libraryUploadInput.files).forEach((file) => data.append("files", file));
    try {
      const response = await fetch("/api/library/upload", { method: "POST", body: data });
      if (!response.ok) throw new Error("上传失败");
      const result = await response.json();
      libraryFiles = result.files || [];
      renderLibraryFiles();
      showToast(`已上传 ${result.uploaded.length} 个文件。`);
    } catch (error) {
      showToast("请用本地后端打开页面后再上传文档。");
    } finally {
      libraryUploadInput.value = "";
    }
  });
}

function showEnglishLearningPage() {
  homeView.classList.add("is-hidden");
  libraryView.classList.add("is-hidden");
  englishLearningView.classList.remove("is-hidden");
  renderEnglishLearningPage();
  if (window.location.hash !== "#english") {
    window.location.hash = "english";
  }
}

function renderEnglishLearningPage() {
  const learner = getActiveEnglishLearner();
  const availableGrades = getAvailableEnglishGrades(learner);
  const hasSelectedGrade = availableGrades.some((item) => item.id === englishSelectedGradeId);
  if (!hasSelectedGrade) {
    englishSelectedGradeId = getDefaultEnglishGradeId(learner);
  }

  englishStudentField.classList.toggle("is-hidden", currentUser.role !== "teacher");
  englishLearningControls.classList.toggle("is-single", currentUser.role !== "teacher");
  englishStudentSelect.innerHTML = currentUser.students
    .map((student) => `<option value="${student.id}" ${student.id === learner.id ? "selected" : ""}>${student.name}</option>`)
    .join("");
  englishGradeSelect.innerHTML = availableGrades
    .map((item) => `<option value="${item.id}" ${item.id === englishSelectedGradeId ? "selected" : ""}>${item.label}</option>`)
    .join("");

  const selectedGrade = getSelectedEnglishGrade();
  englishLearningSummary.textContent = `${learner.name} · ${selectedGrade.label} · Unit 1-6`;
  renderEnglishUnits();
}

function renderEnglishUnits() {
  const learner = getActiveEnglishLearner();
  const selectedGrade = getSelectedEnglishGrade();
  englishUnitGrid.innerHTML = englishUnits
    .map((unit) => {
      const progress = getEnglishUnitProgress(learner, selectedGrade, unit);
      const status = getEnglishProgressStatus(progress);
      const lesson = findEnglishLesson(unit);
      const hasLesson = Boolean(lesson);
      return `
        <button class="learning-unit-card ${hasLesson ? "" : "is-empty"}" type="button" data-english-unit="${unit}" style="--unit-progress: ${progress}%;">
          <span class="learning-unit-name">Unit ${unit}</span>
          <span class="learning-unit-status">${hasLesson ? status : "待导入"}</span>
          <span class="learning-unit-progress"><i></i></span>
          <span class="learning-unit-percent">${hasLesson ? `${getLessonWordCount(lesson)} 个单词` : "暂无卡片"}</span>
        </button>
      `;
    })
    .join("");
}

function getActiveEnglishLearner() {
  if (currentUser.role !== "teacher") return currentUser;
  return currentUser.students.find((student) => student.id === englishSelectedStudentId) || currentUser.students[0] || currentUser;
}

function getAvailableEnglishGrades(learner) {
  if (currentUser.role === "teacher" && !learner.grade) return englishGradeOptions;
  return englishGradeOptions.filter((item) => item.grade === learner.grade && item.semester === learner.semester);
}

function getDefaultEnglishGradeId(learner) {
  const option = englishGradeOptions.find((item) => item.grade === learner.grade && item.semester === learner.semester);
  return option ? option.id : englishGradeOptions[0].id;
}

function getSelectedEnglishGrade() {
  return englishGradeOptions.find((item) => item.id === englishSelectedGradeId) || englishGradeOptions[0];
}

function getEnglishUnitProgress(learner, gradeOption, unit) {
  return learner.progress?.[`${gradeOption.grade}:${gradeOption.semester}:${unit}`] || 0;
}

function getEnglishProgressStatus(progress) {
  if (progress >= 100) return "已完成";
  if (progress > 0) return "学习中";
  return "未开始";
}

function openEnglishUnit(unit) {
  window.location.href = `./english-card.html?unit=${unit}`;
}

async function loadEnglishLessonBook() {
  try {
    const response = await fetch("./data/english/grade3-up.json");
    if (!response.ok) throw new Error("english data unavailable");
    englishLessonBook = await response.json();
  } catch (error) {
    englishLessonBook = fallbackEnglishLessonBook;
  }
  if (!englishLearningView.classList.contains("is-hidden")) {
    renderEnglishLearningPage();
  }
}

function findEnglishLesson(unit) {
  const selectedGrade = getSelectedEnglishGrade();
  if (!englishLessonBook || englishLessonBook.grade !== selectedGrade.grade || englishLessonBook.semester !== selectedGrade.semester) {
    return null;
  }
  return englishLessonBook.units.find((item) => Number(item.unit) === Number(unit)) || null;
}

function getLessonWordCount(lesson) {
  return lesson.keywords?.length || 0;
}

function renderInlineEnglishCard(lesson) {
  englishCardPanelTitle.textContent = lesson.unitTitle;
  englishCardPanelMeta.textContent = `${lesson.gradeLabel || getSelectedEnglishGrade().label} · Lesson ${lesson.lesson} · ${getLessonWordCount(lesson)} 个单词`;
  setInlineText("inlineFrontTitle", lesson.unitTitle);
  setInlineText("inlineGradeText", lesson.gradeLabel || getSelectedEnglishGrade().label);
  setInlineText("inlineLessonText", lesson.lesson);
  setInlineText("inlineHomeworkText", lesson.homework || "");
  setInlineText("inlineReadingTitle", lesson.reading?.title || "Let's Read");
  renderInlineWords(lesson.keywords || []);
  renderInlineSentences(lesson.keySentences || []);
  renderInlineDialogue("inlineTalkList", lesson.talk || []);
  renderInlinePractice("inlinePracticeGrid", lesson.practice || []);
  renderInlineDialogue("inlineDialogueList", lesson.dialogue || []);
  renderInlineList("inlineReadingLines", lesson.reading?.lines || []);
  renderInlineGrammar(lesson.grammar || []);
  renderInlinePractice("inlineExerciseGrid", lesson.exercise || [], true);
  renderInlineList("inlineSummaryChecks", lesson.summaryChecks || []);
  renderInlineStars(lesson.selfRating?.maxStars || 5, lesson.selfRating?.value || 0);
}

function setInlineText(id, value) {
  document.getElementById(id).textContent = value;
}

function renderInlineWords(words) {
  document.getElementById("inlineWordGrid").innerHTML = words
    .map((item) => `
      <div class="mini-word-card" title="${escapeHtml(item.imagePrompt || "")}">
        ${renderEnglishWordArt(item.word, item.image, "mini-word-art")}
        <strong>${escapeHtml(item.word)}</strong>
        ${item.phonetic ? `<em>${escapeHtml(item.phonetic)}</em>` : ""}
      </div>
    `)
    .join("");
}

function renderInlineSentences(sentences) {
  document.getElementById("inlineSentenceList").innerHTML = sentences
    .map((sentence) => `<span>${escapeHtml(sentence)}</span>`)
    .join("");
}

function renderInlineDialogue(targetId, lines) {
  document.getElementById(targetId).innerHTML = lines
    .map((line) => `<p><span>${escapeHtml(line.speaker)}:</span> ${escapeHtml(line.text)}</p>`)
    .join("");
}

function renderInlinePractice(targetId, items, answerOnly = false) {
  document.getElementById(targetId).innerHTML = items
    .map((item, index) => `
      <div class="mini-practice-item" title="${escapeHtml(item.imagePrompt || "")}">
        <strong>${index + 1}.</strong>
        ${renderEnglishWordArt(item.answer, item.image, "mini-word-art")}
        ${answerOnly ? '<i></i>' : `<div>${(item.options || []).map((option) => `<em>${escapeHtml(option)}</em>`).join("")}</div>`}
      </div>
    `)
    .join("");
}

function renderInlineList(targetId, items) {
  document.getElementById(targetId).innerHTML = items
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
}

function renderInlineGrammar(items) {
  document.getElementById("inlineGrammarList").innerHTML = items
    .map((item) => `<li><strong>${escapeHtml(item.pattern)}</strong> ${escapeHtml(item.meaning)}</li>`)
    .join("");
}

function renderInlineStars(maxStars, value) {
  document.getElementById("inlineStarRating").textContent = Array.from(
    { length: maxStars },
    (_, index) => (index < value ? "★" : "☆")
  ).join("");
}

function getEnglishArt(word) {
  return englishArtMap[word] || String(word || "?").slice(0, 1).toUpperCase();
}

function renderEnglishWordArt(word, image, className) {
  if (image) {
    return `<img class="${className}" src="${escapeHtml(image)}" alt="" aria-hidden="true">`;
  }
  return `<span class="${className}" aria-hidden="true">${getEnglishArt(word)}</span>`;
}

function routeInitialHash() {
  if (window.location.hash === "#library") {
    activeNavId = "library";
    renderNav();
    showLibraryRoot();
    return;
  }
  if (window.location.hash === "#english") {
    activeNavId = "english";
    renderNav();
    showEnglishLearningPage();
  }
}

function buildLibraryTabs(basePath) {
  return libraryTabNames
    .filter((name) => name !== "全部")
    .map((name) => ({ name, path: `${basePath}/${name}`, children: [] }));
}

async function loadLibraryTree() {
  try {
    const response = await fetch("/api/library/tree");
    if (!response.ok) throw new Error("tree api unavailable");
    libraryTree = await response.json();
  } catch (error) {
    libraryTree = libraryFallbackTree;
  }
}

function showHome() {
  activeNavId = "home";
  renderNav();
  homeView.classList.remove("is-hidden");
  libraryView.classList.add("is-hidden");
  englishLearningView.classList.add("is-hidden");
}

function showLibraryRoot() {
  homeView.classList.add("is-hidden");
  englishLearningView.classList.add("is-hidden");
  libraryView.classList.remove("is-hidden");
  libraryCurrentNode = null;
  libraryActiveTab = "全部";
  libraryFiles = [];
  libraryTitle.textContent = "资料库";
  libraryCrumbs.textContent = "小学 / 初中 / 其他";
  libraryTabs.innerHTML = "";
  renderFolderGroups(libraryTree);
}

function showLibraryNode(node) {
  libraryCurrentNode = node;
  libraryActiveTab = "全部";
  libraryFiles = [];
  homeView.classList.add("is-hidden");
  englishLearningView.classList.add("is-hidden");
  libraryView.classList.remove("is-hidden");
  libraryTitle.textContent = node.name;
  libraryCrumbs.textContent = node.path;
  if (node.children && node.children.length && node.children.some((child) => child.children && child.children.length)) {
    libraryTabs.innerHTML = "";
    renderFolderGroups([{ name: node.name, children: node.children }]);
    return;
  }
  renderLibraryTabs();
  loadLibraryFiles();
}

function renderFolderGroups(groups) {
  libraryContent.innerHTML = groups
    .map((group) => `
      <section class="library-folder-section">
        <h3><span class="doc-icon" aria-hidden="true">▤</span>${group.name}</h3>
        <div class="folder-grid">
          ${(group.children || []).map(renderFolderCard).join("")}
        </div>
      </section>
    `)
    .join("");
}

function renderFolderCard(folder) {
  return `
    <button class="folder-card" type="button" data-library-folder="${folder.path}">
      <span class="folder-icon" aria-hidden="true"></span>
      <strong>${folder.name}</strong>
    </button>
  `;
}

function renderLibraryTabs() {
  libraryTabs.innerHTML = libraryTabNames
    .map((name) => `<button class="${name === libraryActiveTab ? "is-active" : ""}" type="button" data-library-tab="${name}">${name}</button>`)
    .join("");
}

async function loadLibraryFiles() {
  const path = getActiveLibraryPath();
  try {
    const recursive = libraryActiveTab === "全部" ? "&recursive=1" : "";
    const response = await fetch(`/api/library/files?path=${encodeURIComponent(path)}${recursive}`);
    if (!response.ok) throw new Error("files api unavailable");
    const result = await response.json();
    libraryFiles = result.files || [];
  } catch (error) {
    libraryFiles = [];
  }
  renderLibraryFiles();
}

function renderLibraryFiles() {
  const keyword = librarySearchInput.value.trim().toLowerCase();
  const files = libraryFiles.filter((file) => file.name.toLowerCase().includes(keyword));
  libraryContent.innerHTML = files.length
    ? `<div class="file-grid">${files.map(renderFileCard).join("")}</div>`
    : '<div class="library-empty">当前分类暂无文档。点击右上角“上传文档”后，会显示在这里。</div>';
}

function renderFileCard(file) {
  const ext = file.name.split(".").pop().toLowerCase();
  return `
    <button class="file-card" type="button" data-file-url="${file.url}">
      <span class="file-icon file-${ext}" aria-hidden="true">${getFileIcon(ext)}</span>
      <strong>${file.name}</strong>
    </button>
  `;
}

function getFileIcon(ext) {
  if (ext === "pdf") return "PDF";
  if (ext === "ppt" || ext === "pptx") return "PPT";
  if (ext === "doc" || ext === "docx") return "DOC";
  if (ext === "xls" || ext === "xlsx") return "XLS";
  return "FILE";
}

function getActiveLibraryPath() {
  if (!libraryCurrentNode) return "";
  if (libraryActiveTab === "全部") return libraryCurrentNode.path;
  return `${libraryCurrentNode.path}/${libraryActiveTab}`;
}

function getUploadLibraryPath() {
  if (!libraryCurrentNode) return "";
  if (libraryActiveTab === "全部") return `${libraryCurrentNode.path}/知识点总结`;
  return getActiveLibraryPath();
}

function findLibraryNode(path) {
  const stack = [...libraryTree];
  while (stack.length) {
    const node = stack.shift();
    if (node.path === path) return node;
    stack.push(...(node.children || []));
  }
  return null;
}

function findParentNode(path) {
  const parts = path.split("/");
  if (parts.length <= 1) return null;
  return findLibraryNode(parts.slice(0, -1).join("/"));
}

function getNavLabel(id) {
  const target = navItems.find((item) => item.id === id);
  return target ? target.label : "当前";
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
