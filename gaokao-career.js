const STORAGE_KEY = "mengmeng:gaokaoCareer:v2";
const QUICK_SAMPLE_PER_GROUP = 8;

const profileFields = [
  { id: "studentName", label: "姓名" },
  { id: "gender", label: "性别" },
  { id: "age", label: "年龄" },
  { id: "grade", label: "年级", placeholder: "例如：高二" },
  { id: "className", label: "班级" },
  { id: "school", label: "就读学校" },
  { id: "province", label: "所在省份" },
  { id: "examYear", label: "高考年份" },
  { id: "subjectTrack", label: "选科/科类", placeholder: "例如：物化生、史政地" },
  { id: "estimatedScore", label: "预估分数" },
  { id: "estimatedRank", label: "预估位次" },
  { id: "targetCities", label: "目标省份或城市" },
  { id: "fatherJob", label: "父亲职业" },
  { id: "fatherEducation", label: "父亲学历" },
  { id: "motherJob", label: "母亲职业" },
  { id: "motherEducation", label: "母亲学历" },
  { id: "admiredPerson", label: "最崇拜的人及理由", type: "textarea" },
  { id: "achievement", label: "成长经历中最有成就感的事件", type: "textarea" },
  { id: "parentExpectation", label: "父母对升学与职业的期待", type: "textarea" },
  { id: "familySupport", label: "家庭可提供的支持", type: "textarea" },
  { id: "familyLimits", label: "家庭限制条件或明确底线", type: "textarea" },
  { id: "mainProblem", label: "最想通过咨询解决的问题", type: "textarea" },
  { id: "majorPreference", label: "意向专业方向", type: "textarea" },
  { id: "schoolPreference", label: "院校偏好", type: "textarea" },
  { id: "currentConcern", label: "当前最大的担忧", type: "textarea" },
];

const assessmentGroups = [
  {
    id: "values",
    title: "重要的事｜价值观",
    subtitle: "什么会让你觉得值得长期坚持？",
    tags: ["成长进步", "自由自主", "帮助他人", "公平正义", "创造价值", "家庭陪伴", "真实诚信", "稳定安全", "社会影响", "专业卓越", "探索未知", "长期主义"],
    questions: [
      "什么样的结果出现，会让我发自内心觉得人生没有白费？",
      "什么原则底线，无论薪资多高我都不愿打破？",
      "做什么事能让我感受到活着的意义？",
      "我最看不惯社会里哪些不合理的现象，想去改变？",
      "帮助哪类人群时，内心收获的幸福感最强？",
      "金钱之外，我最想留给世界什么样的价值？",
      "家人、亲友最认可我身上的哪种处事理念？",
      "什么事情即便没有任何人监督，我也会恪守标准？",
      "人生里优先级最高的三件精神追求是什么？",
      "看到哪种社会问题，会激发我的行动欲？",
      "选择工作时，排在薪资前面的评判标准有哪些？",
      "我敬佩的人，身上共通的价值观是什么，我想践行？",
      "什么牺牲是我愿意为了理想价值主动承受的？",
      "哪些事物被破坏时，我会感到惋惜与难受？",
      "我希望通过自己的工作，给他人带去什么改变？",
      "空闲做公益时，哪类志愿内容最契合本心？",
      "一生当中，最不想辜负的人与信念是什么？",
      "什么规则与理念，深刻影响我大大小小的选择？",
      "富足后，优先投入资源去落地哪类有意义的事？",
      "职场中什么样的企业文化，能让我长久安心共事？",
      "我认为一件事成功，核心评判标准是什么？",
      "哪些道义与初心，再大利益也无法动摇？",
      "过往做过最有价值的一件事是什么，背后的价值取向？",
      "我希望自己离世后，别人如何定义我的人生价值？",
      "日常消费取舍里，能看出我看重什么事物？",
      "面对两难抉择，指引我做决定的底层信条？",
      "什么领域的行业乱象，是我想要去优化改善的？",
      "我推崇的生活理念，可以落地在哪些事业上？",
      "比起短期获利，我更愿意长期坚守的价值方向？",
      "什么样的成就，能够满足我精神层面的终极诉求？",
    ],
  },
  {
    id: "talents",
    title: "擅长的事｜才能",
    subtitle: "哪些事情你做起来更自然、更高效？",
    tags: ["讲解表达", "逻辑分析", "设计创造", "帮助别人", "组织管理", "写作阅读", "编程技术", "动手制作", "数据分析", "资源整合", "解决问题", "快速学习"],
    questions: [
      "身边人反复拜托我帮忙解决哪一类问题？",
      "同样从零学习，什么内容我上手速度远超旁人？",
      "别人耗费大量精力头疼，我轻松搞定的工作类型？",
      "过往工作学习，没刻意努力也能出成果的领域？",
      "突发难题时，我总能快速梳理方案的事项？",
      "过往获奖、取得亮眼成绩依托的核心能力是什么？",
      "复盘经历，不知不觉反复发挥优势的技能？",
      "自学时理解最快、吃透最轻松的知识类目？",
      "沟通、统筹、落地、创意里我的拔尖分项能力？",
      "帮人解决问题后，对方持续回头求助的本领？",
      "和同龄人对比，天生具备的差异化天赋？",
      "紧急状况下，我最擅长稳住局面处理的事务？",
      "不需要提前准备，临场就能出色发挥的事情？",
      "过往项目里，靠一己之力扭转劣势的能力项？",
      "什么工作细节，是我天然敏感、很少出错的？",
      "拆解复杂任务，是我在哪一个板块格外擅长？",
      "复盘过往，什么技能随时间自然精进无需硬逼？",
      "梳理信息、总结归纳是我擅长应用在哪些场景？",
      "别人需要长期练习，我凭直觉就能做好的事？",
      "过往副业、兼职中变现最顺畅依靠什么能力？",
      "发现漏洞、优化流程是我擅长的哪个领域？",
      "引导、开导他人是我可以轻松做到的特长吗？",
      "资源整合对接，我在哪类行业得心应手？",
      "创造、策划类工作，哪一个细分我优势突出？",
      "数据分析、落地执行二选一，我的优势偏向？",
      "被领导重点委派的棘手工作，共性是什么？",
      "一件陌生事务，我最快找到突破口的能力？",
      "长期沉淀，能够打包成产品出售的专业能力？",
      "模仿学习新事物，哪个方向我复刻效率最高？",
      "总结所有过往高光时刻，提炼通用核心才能？",
    ],
  },
  {
    id: "passions",
    title: "喜欢的事｜热情",
    subtitle: "哪些事情会让你主动投入并忘记时间？",
    tags: ["讲解表达", "研究问题", "设计创造", "帮助别人", "组织管理", "写作阅读", "编程技术", "动手制作", "表演展示", "商业赚钱", "照顾陪伴", "探索新事物"],
    questions: [
      "无酬劳、纯粹自费，也愿意投入时间钻研的事？",
      "从小到大，不自觉持续关注、搜集资讯的领域？",
      "沉浸其中会忘记吃饭、忽略时间流逝的活动？",
      "财富自由不用谋生时，每日优先投入的事项？",
      "多次失败受挫，仍旧不甘心想要重试的事情？",
      "休闲刷手机，下意识主动浏览的内容分类？",
      "独处放空时，脑海里总想动手实操的事情？",
      "即便熬夜消耗体力，过程不觉得疲惫煎熬的事？",
      "短暂体验过后，一直惦记想要重新尝试的项目？",
      "被内容触动后，立刻想要亲身落地实践的方向？",
      "被迫做事很煎熬，但自主接触就兴致满满的领域？",
      "什么事物源源不断勾起我的好奇心，总想深挖？",
      "出门游玩、自费体验，优先选择什么主题项目？",
      "花钱报名课程，下意识选择哪一类兴趣内容？",
      "烦恼低落时，做什么事能快速平复内心情绪？",
      "日常闲聊，不由自主聊起且越说越兴奋的话题？",
      "偶然接触便一见钟情，念念不忘的事物？",
      "没有外界催促，自己主动规划深耕的爱好？",
      "看到相关案例、作品，心生羡慕想要效仿的领域？",
      "空闲碎片化时间，随手愿意投入的小事是什么？",
      "未来想体验的全新行业，最让我期待的方向？",
      "童年爱好延续至今，没有半途而废的内容？",
      "收藏、囤购相关资料，是围绕什么主题？",
      "幻想理想职业时，脑海浮现的工作内容？",
      "什么新鲜资讯，会第一时间点开详细研读？",
      "和同好交流，能获得极致愉悦的兴趣品类？",
      "舍弃无效娱乐，空余时间用来深耕的热爱？",
      "看到别人深耕某个领域，心生向往的行业？",
      "偶然看到相关作品，产生创作欲的方向？",
      "综合所有喜好，重合度最高的核心热爱事项？",
    ],
  },
];

const recommendationCatalog = {
  "逻辑分析": { majors: ["计算机科学与技术", "数据科学与大数据技术", "信息与计算科学"], careers: ["数据分析师", "算法工程师", "技术顾问"] },
  "编程技术": { majors: ["软件工程", "人工智能", "电子信息工程"], careers: ["软件工程师", "AI 工程师", "解决方案工程师"] },
  "数据分析": { majors: ["统计学", "大数据管理与应用", "经济统计学"], careers: ["数据科学家", "商业分析师", "量化研究员"] },
  "研究问题": { majors: ["人工智能", "心理学", "基础学科拔尖计划"], careers: ["科研人员", "用户研究员", "行业研究员"] },
  "讲解表达": { majors: ["教育学", "新闻传播学", "汉语言文学"], careers: ["教师", "知识型内容创作者", "培训师"] },
  "写作阅读": { majors: ["汉语言文学", "新闻学", "法学"], careers: ["编辑", "记者", "策划"] },
  "帮助他人": { majors: ["应用心理学", "社会工作", "教育学"], careers: ["心理咨询师", "生涯规划师", "社会工作者"] },
  "帮助别人": { majors: ["应用心理学", "社会工作", "教育技术学"], careers: ["心理咨询师", "教育产品经理", "成长教练"] },
  "照顾陪伴": { majors: ["护理学", "学前教育", "应用心理学"], careers: ["健康管理师", "幼儿教师", "青少年支持顾问"] },
  "设计创造": { majors: ["工业设计", "数字媒体技术", "建筑学"], careers: ["用户体验设计师", "产品设计师", "创意策划"] },
  "动手制作": { majors: ["机械设计制造及其自动化", "工业设计", "智能制造工程"], careers: ["机械工程师", "产品打样工程师", "创客教育导师"] },
  "表演展示": { majors: ["播音与主持艺术", "戏剧影视文学", "数字媒体艺术"], careers: ["主持人", "短视频创作者", "品牌传播专员"] },
  "组织管理": { majors: ["工商管理", "公共管理", "工程管理"], careers: ["项目经理", "运营经理", "组织发展顾问"] },
  "资源整合": { majors: ["市场营销", "工商管理", "国际经济与贸易"], careers: ["商务拓展", "资源运营", "项目统筹"] },
  "商业赚钱": { majors: ["金融学", "市场营销", "经济学"], careers: ["产品经理", "投资分析师", "创业者"] },
  "解决问题": { majors: ["计算机科学与技术", "工程管理", "数学与应用数学"], careers: ["产品经理", "咨询顾问", "工程师"] },
  "快速学习": { majors: ["人工智能", "教育技术学", "交叉学科实验班"], careers: ["研究员", "产品经理", "学习设计师"] },
  "探索新事物": { majors: ["人工智能", "数字媒体技术", "地理科学"], careers: ["创新产品经理", "科研人员", "新媒体策划"] },
  "探索未知": { majors: ["基础学科拔尖计划", "人工智能", "航空航天类"], careers: ["科研人员", "创新工程师", "战略研究员"] },
};

const dimensionTagMap = {
  "逻辑分析": ["逻辑分析", "数据分析", "研究问题", "编程技术"],
  "创造思维": ["设计创造", "探索新事物", "探索未知", "动手制作"],
  "表达沟通": ["讲解表达", "写作阅读", "表演展示"],
  "学习能力": ["快速学习", "成长进步", "专业卓越", "探索新事物"],
  "解决问题": ["解决问题", "研究问题", "编程技术", "动手制作"],
  "团队合作": ["帮助别人", "帮助他人", "照顾陪伴", "资源整合"],
  "领导组织": ["组织管理", "商业赚钱", "社会影响", "资源整合"],
  "共情助人": ["帮助别人", "帮助他人", "照顾陪伴", "家庭陪伴", "公平正义"],
};

const answerPhrases = {
  "成长进步": "持续成长，并清楚看到自己变得更好",
  "自由自主": "拥有自主选择的空间，按自己的方式生活",
  "帮助他人": "帮助他人改善处境、获得成长",
  "公平正义": "维护公平，纠正不合理的事情",
  "创造价值": "创造真正有用、能留下影响的成果",
  "家庭陪伴": "照顾家人，守护重要关系",
  "真实诚信": "坚持真实、诚实，不违背原则",
  "稳定安全": "建立稳定、安全、可持续的生活",
  "社会影响": "推动社会或行业发生积极变化",
  "专业卓越": "把专业做到出色，赢得长期认可",
  "探索未知": "不断探索未知，拓展认知边界",
  "长期主义": "为长期目标持续投入，不被短期得失左右",
  "讲解表达": "把复杂内容讲清楚，让别人容易理解",
  "逻辑分析": "拆解信息、寻找规律并作出判断",
  "设计创造": "提出新点子，并设计出新的方案或作品",
  "帮助别人": "理解他人的困难，并给出有效支持",
  "组织管理": "安排人员与任务，推动大家完成目标",
  "写作阅读": "通过阅读吸收信息，再用文字准确表达",
  "编程技术": "用技术、工具或代码解决实际问题",
  "动手制作": "亲手制作、搭建、维修或实现具体成果",
  "数据分析": "从数据中发现问题、趋势和答案",
  "资源整合": "连接合适的人和资源，让事情更顺利",
  "解决问题": "快速找到关键矛盾，并形成可执行方案",
  "快速学习": "迅速理解新知识，并迁移到实际任务",
  "研究问题": "围绕一个问题持续查资料、实验和深挖",
  "表演展示": "通过演讲、表演或展示吸引并影响他人",
  "商业赚钱": "发现需求、创造交易并获得商业回报",
  "照顾陪伴": "耐心陪伴、照顾和支持他人的成长",
  "探索新事物": "体验新领域、新工具和不同生活方式",
};

const sectionMap = {
  quick: document.querySelector("#quickSection"),
  deep: document.querySelector("#deepSection"),
  report: document.querySelector("#reportSection"),
};

let state = loadState();
let isAnalyzing = false;

renderProfile();
renderQuickAssessment();
renderDeepGroups();
bindActions();
updateProgress();

function createInitialState() {
  return {
    profile: {},
    quick: {},
    deep: {},
    aiReport: null,
    analysisError: "",
    sampledQuestionKeys: createSampledQuestionKeys(),
  };
}

function loadState() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "null");
    if (!saved) return createInitialState();
    const initial = createInitialState();
    return {
      ...initial,
      ...saved,
      profile: saved.profile || {},
      quick: saved.quick || {},
      deep: saved.deep || {},
      aiReport: saved.aiReport || null,
      analysisError: "",
      sampledQuestionKeys: Array.isArray(saved.sampledQuestionKeys) && saved.sampledQuestionKeys.length === QUICK_SAMPLE_PER_GROUP * assessmentGroups.length
        ? saved.sampledQuestionKeys
        : initial.sampledQuestionKeys,
    };
  } catch (error) {
    return createInitialState();
  }
}

function createSampledQuestionKeys() {
  return assessmentGroups.flatMap((group) => {
    const indexes = group.questions.map((_, index) => index);
    for (let index = indexes.length - 1; index > 0; index -= 1) {
      const target = Math.floor(Math.random() * (index + 1));
      [indexes[index], indexes[target]] = [indexes[target], indexes[index]];
    }
    return indexes.slice(0, QUICK_SAMPLE_PER_GROUP).sort((a, b) => a - b).map((index) => `${group.id}-${index}`);
  });
}

function saveState() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function renderProfile() {
  document.querySelector("#profileForm").innerHTML = profileFields.map((field) => {
    const value = escapeHtml(state.profile[field.id] || "");
    const input = field.type === "textarea"
      ? `<textarea rows="3" data-profile-id="${field.id}" placeholder="${escapeHtml(field.placeholder || "")}">${value}</textarea>`
      : `<input data-profile-id="${field.id}" value="${value}" placeholder="${escapeHtml(field.placeholder || "")}">`;
    return `<label class="field-block ${field.type === "textarea" ? "is-wide" : ""}"><span>${field.label}</span>${input}</label>`;
  }).join("");
}

function renderQuickAssessment() {
  document.querySelector("#quickQuestions").innerHTML = assessmentGroups.map((group) => {
    const sampledKeys = state.sampledQuestionKeys.filter((key) => key.startsWith(`${group.id}-`));
    const answered = sampledKeys.filter((key) => hasAnswer(state.quick[key])).length;
    return `
      <article class="tag-group" data-quick-group="${group.id}">
        <div class="tag-group-head"><div><h3>${group.title}</h3><p>${group.subtitle}</p></div><strong class="quick-group-progress">${answered}/${sampledKeys.length}</strong></div>
        <p class="encouragement">${getEncouragement(answered, sampledKeys.length, "抽样题")}</p>
        <div class="question-list">
          ${sampledKeys.map((key, index) => {
            const questionIndex = Number(key.split("-")[1]);
            return renderAssessmentQuestion(group, questionIndex, "quick", index + 1);
          }).join("")}
        </div>
      </article>`;
  }).join("");
}

function renderDeepGroups() {
  document.querySelector("#deepGroups").innerHTML = assessmentGroups.map((group) => {
    const answered = countDeepAnswers(group);
    return `
      <details class="deep-group" data-deep-group="${group.id}">
        <summary><div><h3>${group.title}</h3><p>${group.subtitle}</p></div><span class="deep-progress">${answered}/30</span></summary>
        <p class="encouragement">${answered === 30 ? "这一组完成了，你的职业画像更清晰了。" : `坚持这一组，已完成 ${answered} 个问题。`}</p>
        <div class="question-list">
          ${group.questions.map((_, index) => renderAssessmentQuestion(group, index, "deep", index + 1)).join("")}
        </div>
      </details>`;
  }).join("");
}

function renderAssessmentQuestion(group, questionIndex, scope, displayNumber) {
  const key = `${group.id}-${questionIndex}`;
  const store = scope === "quick" ? state.quick : state.deep;
  const answer = store[key] || null;
  const customValue = answer?.text || "";
  return `
    <article class="assessment-question" data-answer-scope="${scope}" data-question-key="${key}">
      <div class="question-heading"><span class="question-number">${displayNumber}</span><strong>${escapeHtml(group.questions[questionIndex])}</strong></div>
      <label class="custom-answer">
        <span>自己输入</span>
        <textarea rows="2" data-custom-answer placeholder="写下最符合你的真实答案">${escapeHtml(customValue)}</textarea>
      </label>
      <div class="answer-choices">
        ${group.tags.map((tag) => `<button class="answer-choice ${answer?.type === "option" && answer.tag === tag ? "is-selected" : ""}" type="button" data-answer-option data-answer-tag="${escapeHtml(tag)}" data-answer-text="${escapeHtml(answerPhrases[tag] || tag)}">${escapeHtml(answerPhrases[tag] || tag)}</button>`).join("")}
      </div>
      <p class="answer-hint">只能保留一个答案。输入文字或点击候选项即可切换答案。</p>
    </article>`;
}

function bindActions() {
  document.querySelector(".career-tabs").addEventListener("click", (event) => {
    const button = event.target.closest("[data-section]");
    if (button) showSection(button.dataset.section);
  });

  document.addEventListener("click", (event) => {
    const nextButton = event.target.closest("[data-next]");
    if (nextButton) showSection(nextButton.dataset.next);
  });

  document.querySelector("#profileForm").addEventListener("input", (event) => {
    const input = event.target.closest("[data-profile-id]");
    if (!input) return;
    state.profile[input.dataset.profileId] = input.value;
    invalidateAiReport();
    saveState();
  });

  document.querySelector("#quickQuestions").addEventListener("click", handleAnswerOptionClick);
  document.querySelector("#quickQuestions").addEventListener("input", handleCustomAnswerInput);
  document.querySelector("#deepGroups").addEventListener("click", handleAnswerOptionClick);
  document.querySelector("#deepGroups").addEventListener("input", handleCustomAnswerInput);

  document.querySelector("#quickReportButton").addEventListener("click", () => generateReport(true));
  document.querySelector("#deepReportButton").addEventListener("click", () => generateReport(true));
  document.querySelector("#downloadLatexButton").addEventListener("click", downloadLatexReport);
}

function handleAnswerOptionClick(event) {
  const button = event.target.closest("[data-answer-option]");
  if (!button) return;
  const card = button.closest("[data-question-key]");
  const store = card.dataset.answerScope === "quick" ? state.quick : state.deep;
  store[card.dataset.questionKey] = {
    type: "option",
    tag: button.dataset.answerTag,
    text: button.dataset.answerText,
  };
  invalidateAiReport();
  card.querySelectorAll("[data-answer-option]").forEach((item) => item.classList.toggle("is-selected", item === button));
  card.querySelector("[data-custom-answer]").value = button.dataset.answerText;
  saveState();
  updateAnswerProgress(card.dataset.answerScope, card.dataset.questionKey.split("-")[0]);
}

function handleCustomAnswerInput(event) {
  const input = event.target.closest("[data-custom-answer]");
  if (!input) return;
  const card = input.closest("[data-question-key]");
  const store = card.dataset.answerScope === "quick" ? state.quick : state.deep;
  const value = input.value.trim();
  if (value) {
    store[card.dataset.questionKey] = { type: "custom", tag: "", text: input.value };
  } else {
    delete store[card.dataset.questionKey];
  }
  invalidateAiReport();
  card.querySelectorAll("[data-answer-option]").forEach((item) => item.classList.remove("is-selected"));
  saveState();
  updateAnswerProgress(card.dataset.answerScope, card.dataset.questionKey.split("-")[0]);
}

function updateAnswerProgress(scope, groupId) {
  updateProgress();
  if (scope === "deep") {
    updateDeepGroupProgress(groupId);
    return;
  }
  const group = document.querySelector(`[data-quick-group="${groupId}"]`);
  const keys = state.sampledQuestionKeys.filter((key) => key.startsWith(`${groupId}-`));
  const answered = keys.filter((key) => hasAnswer(state.quick[key])).length;
  group.querySelector(".quick-group-progress").textContent = `${answered}/${keys.length}`;
  group.querySelector(".encouragement").textContent = getEncouragement(answered, keys.length, "抽样题");
}

function showSection(sectionId) {
  Object.entries(sectionMap).forEach(([id, element]) => element.classList.toggle("is-hidden", id !== sectionId));
  document.querySelectorAll("[data-section]").forEach((button) => button.classList.toggle("is-active", button.dataset.section === sectionId));
  if (sectionId === "report") renderReport();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateProgress() {
  const quickAnswered = state.sampledQuestionKeys.filter((key) => hasAnswer(state.quick[key])).length;
  const quickTotal = state.sampledQuestionKeys.length;
  const deepAnswered = Object.values(state.deep).filter(hasAnswer).length;
  document.querySelector("#quickCount").textContent = `${quickAnswered}/${quickTotal}`;
  document.querySelector("#deepCount").textContent = `${deepAnswered}/90`;
  document.querySelector("#overallProgressText").textContent = quickAnswered < quickTotal ? `快速测评 ${quickAnswered}/${quickTotal}` : `深度问题 ${deepAnswered}/90`;
  document.querySelector("#overallProgressBar").style.width = quickAnswered < quickTotal ? `${quickAnswered / quickTotal * 100}%` : `${deepAnswered / 90 * 100}%`;
}

function updateDeepGroupProgress(groupId) {
  const group = assessmentGroups.find((item) => item.id === groupId);
  const container = document.querySelector(`[data-deep-group="${groupId}"]`);
  const answered = countDeepAnswers(group);
  container.querySelector(".deep-progress").textContent = `${answered}/30`;
  container.querySelector(".encouragement").textContent = answered === 30
    ? "这一组完成了，你的职业画像更清晰了。"
    : `坚持这一组，已完成 ${answered} 个问题。`;
}

function countDeepAnswers(group) {
  return group.questions.filter((_, index) => hasAnswer(state.deep[`${group.id}-${index}`])).length;
}

function getSelectedTags() {
  const counts = new Map();
  getAnswerRecords().forEach((answer) => {
    if (!answer.tag) return;
    counts.set(answer.tag, (counts.get(answer.tag) || 0) + 1);
  });
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([tag]) => tag);
}

function isQuickComplete() {
  return state.sampledQuestionKeys.every((key) => hasAnswer(state.quick[key]));
}

function getAnswerRecords() {
  return Object.values({ ...state.quick, ...state.deep }).filter(hasAnswer);
}

function hasAnswer(answer) {
  return Boolean(answer && String(answer.text || "").trim());
}

function getAnswerText(answer) {
  return hasAnswer(answer) ? String(answer.text).trim() : "";
}

function getEncouragement(answered, total, label) {
  if (answered === total) return `这一组${label}完成了，你离适合自己的方向又近了一步。`;
  if (answered) return `已经完成 ${answered}/${total}，继续保持，很快就能看到报告。`;
  return "先从最有感觉的一题开始，真实比完美更重要。";
}

async function generateReport(requireComplete) {
  if (requireComplete && !isQuickComplete()) {
    window.alert("请先完成全部快速抽样题，再生成报告。");
    showSection("quick");
    return;
  }
  showSection("report");
  if (isAnalyzing) return;
  isAnalyzing = true;
  state.analysisError = "";
  renderAnalysisLoading();
  try {
    const result = await requestAiAnalysis(buildAiAnalysisPayload());
    state.aiReport = result.report;
    state.analysisError = "";
    saveState();
  } catch (error) {
    state.aiReport = null;
    state.analysisError = error instanceof Error ? error.message : "千问分析失败";
  } finally {
    isAnalyzing = false;
    renderReport();
  }
}

async function requestAiAnalysis(payload) {
  const endpoints = ["/api/gaokao/analyze"];
  const isLocalPage = window.location.protocol === "file:" || ["localhost", "127.0.0.1"].includes(window.location.hostname);
  if (isLocalPage && window.location.port !== "5177") endpoints.push("http://127.0.0.1:5177/api/gaokao/analyze");
  let lastError = null;

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.ok || !result.report) {
        throw new Error(result.error || `分析接口返回 ${response.status}`);
      }
      return result;
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error("千问分析接口不可用");
}

function invalidateAiReport() {
  state.aiReport = null;
  state.analysisError = "";
}

function renderAnalysisLoading() {
  document.querySelector("#reportMeta").textContent = "千问正在给自主回答打标签并分析三组交集";
  document.querySelector("#reportContent").innerHTML = '<div class="report-note">正在分析回答、提取标签、计算交集并生成专业与行业建议，请稍候……</div>';
}

function buildAiAnalysisPayload() {
  const mergedAnswers = { ...state.quick, ...state.deep };
  return {
    schemaVersion: "career-analysis-v2",
    generatedAt: new Date().toISOString(),
    profile: { ...state.profile },
    tagTaxonomy: assessmentGroups.map((group) => ({
      id: group.id,
      title: group.title,
      tags: [...group.tags],
    })),
    groups: assessmentGroups.map((group) => ({
      id: group.id,
      title: group.title,
      answers: group.questions.map((question, index) => {
        const questionId = `${group.id}-${index}`;
        const answer = mergedAnswers[questionId];
        return answer && hasAnswer(answer) ? {
          questionId,
          question,
          answer: getAnswerText(answer),
          source: answer.type === "custom" ? "custom" : "option",
          predefinedTag: answer.type === "option" ? answer.tag : "",
        } : null;
      }).filter(Boolean),
    })),
  };
}

function renderReport() {
  const reportContent = document.querySelector("#reportContent");
  if (!isQuickComplete()) {
    document.querySelector("#reportMeta").textContent = "完成 3 分钟测评后即可生成";
    reportContent.innerHTML = '<div class="report-note">请先完成系统抽取的全部快速测评题。</div>';
    return;
  }

  if (state.aiReport) {
    renderAiReport(state.aiReport);
    return;
  }

  const tags = getSelectedTags();
  const highlights = getReportHighlights();
  const recommendations = buildRecommendations(tags);
  const dimensions = buildDimensionScores(tags);
  const name = state.profile.studentName || "同学";
  document.querySelector("#reportMeta").textContent = `${name} · ${new Date().toLocaleDateString("zh-CN")} · 基于八木仁平“想做的事”框架`;
  reportContent.innerHTML = `
    ${state.analysisError ? `<p class="report-note">千问分析暂不可用：${escapeHtml(state.analysisError)}。以下为本地规则生成的备用报告。</p>` : ""}
    <section class="report-summary">
      <h3>核心发现</h3>
      <p>${name}，你的答案反复指向 <strong>${highlights.slice(0, 5).map(escapeHtml).join("、")}</strong>。你更适合在能发挥这些特质、持续积累能力并创造真实价值的环境中成长。</p>
      <div class="report-tags">${highlights.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
    </section>
    <div class="report-grid">
      <section class="report-card radar-wrap"><h3>能力倾向雷达</h3><canvas id="careerRadar" width="430" height="360"></canvas></section>
      <section class="report-card"><h3>优势关键词</h3><ol class="report-list">${buildStrengths(tags).map((item) => `<li>${item}</li>`).join("")}</ol></section>
      <section class="report-card"><h3>推荐专业 TOP10</h3><ol class="report-list">${recommendations.majors.map((item, index) => `<li>${item} · ${95 - index * 2}%</li>`).join("")}</ol></section>
      <section class="report-card"><h3>推荐职业 TOP10</h3><ol class="report-list">${recommendations.careers.map((item, index) => `<li>${item} · ${95 - index * 2}%</li>`).join("")}</ol></section>
      <section class="report-card"><h3>适合的环境</h3><ul class="report-list"><li>能持续学习和成长的环境</li><li>有真实问题需要解决的任务</li><li>允许表达观点和创造价值</li><li>反馈清晰、可以积累作品的团队</li><li>与个人价值观一致的组织文化</li></ul></section>
      <section class="report-card"><h3>下一步建议</h3><ul class="report-list"><li>从推荐专业中选择 3 个进行课程与就业调研</li><li>用真实项目验证兴趣，而不是只看专业名称</li><li>访谈相关专业的在读生或从业者</li><li>结合分数、位次、地域与家庭边界建立志愿梯度</li><li>完成深度 90 问，提高报告的个人化程度</li></ul></section>
      <section class="report-card"><h3>风险与注意事项</h3><ul class="report-list"><li>不要只根据热门程度或短期薪资选择专业</li><li>标签反映的是当前倾向，不是永久定型</li><li>兴趣需要通过真实课程和项目继续验证</li><li>志愿决策还需结合位次、招生计划和选科限制</li><li>家庭期待应作为条件讨论，而不是替代个人选择</li></ul></section>
    </div>
    ${buildDeepReportDetails()}
    <p class="report-note">本报告用于提供探索方向，不替代正式志愿填报规则、招生章程和专业录取数据。</p>`;
  drawRadar(dimensions);
}

function renderAiReport(report) {
  const reportContent = document.querySelector("#reportContent");
  const student = report.student || {};
  const intersections = report.intersections || {};
  const threeWay = Array.isArray(intersections.threeWay) ? intersections.threeWay : [];
  const pairwise = Array.isArray(intersections.pairwise) ? intersections.pairwise : [];
  const taggedCustomAnswers = Array.isArray(report.taggedAnswers)
    ? report.taggedAnswers.filter((item) => item.source === "custom")
    : [];
  const radar = Array.isArray(report.radar)
    ? report.radar.map((item) => ({ name: item.name || "能力维度", value: Number(item.score) || 0 }))
    : [];

  document.querySelector("#reportMeta").textContent = `${student.name || state.profile.studentName || "同学"} · ${student.date || new Date().toLocaleDateString("zh-CN")} · 千问交集分析`;
  reportContent.innerHTML = `
    <section class="report-summary">
      <h3>三组交集形成的核心方向</h3>
      <p>${escapeHtml(intersections.coreDirection || report.summary || "已根据价值观、才能与热情的交集生成分析。")}</p>
      <div class="report-tags">${threeWay.flatMap((item) => item.tags || []).filter((tag, index, items) => items.indexOf(tag) === index).slice(0, 12).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
    </section>

    <section class="report-details">
      <h3>交集分析</h3>
      ${threeWay.length ? threeWay.map((item) => renderIntersectionItem(item, "价值观 × 才能 × 热情")).join("") : '<p class="report-note">当前回答中暂未形成稳定的三方交集。</p>'}
      ${pairwise.length ? `<details><summary>查看两方交集 · ${pairwise.length} 项</summary><div class="answer-summary">${pairwise.map((item) => renderIntersectionItem(item, formatGroupNames(item.groups))).join("")}</div></details>` : ""}
    </section>

    <div class="report-grid">
      <section class="report-card radar-wrap"><h3>能力倾向雷达</h3><canvas id="careerRadar" width="430" height="360"></canvas></section>
      <section class="report-card"><h3>核心发现</h3><ol class="report-list">${(report.coreFindings || []).map((item) => `<li><strong>${escapeHtml(item.title || "核心发现")}</strong><br>${escapeHtml(item.description || "")}</li>`).join("")}</ol></section>
      <section class="report-card"><h3>推荐专业 TOP10</h3>${renderAiRecommendationList(report.majors)}</section>
      <section class="report-card"><h3>推荐行业 TOP10</h3>${renderAiRecommendationList(report.industries)}</section>
      <section class="report-card"><h3>推荐职业 TOP10</h3>${renderAiRecommendationList(report.careers)}</section>
      <section class="report-card"><h3>优势关键词</h3><ul class="report-list">${(report.advantages || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>
      <section class="report-card"><h3>发展建议</h3><ul class="report-list">${(report.suggestions || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>
      <section class="report-card"><h3>给家长的建议</h3><ul class="report-list">${(report.parentSuggestions || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>
    </div>

    ${taggedCustomAnswers.length ? `<section class="report-details"><details><summary>查看自主回答的 AI 标签 · ${taggedCustomAnswers.length} 条</summary><div class="answer-summary">${taggedCustomAnswers.map((item) => `<p><strong>${escapeHtml(item.answer)}</strong><br>${(item.tags || []).map((tag) => `${escapeHtml(tag.name)} ${Math.round((Number(tag.confidence) || 0) * 100)}%`).join(" · ")}<br>${escapeHtml(item.rationale || "")}</p>`).join("")}</div></details></section>` : ""}
    ${buildDeepReportDetails()}
    <p class="report-note">${escapeHtml(report.summary || "报告仅供探索参考，最终选择需结合位次、招生章程与个人体验。")}</p>`;

  drawRadar(radar.length === 8 ? radar : buildDimensionScores(getSelectedTags()));
}

function renderIntersectionItem(item, label) {
  const evidence = Array.isArray(item.evidence)
    ? item.evidence.filter(Boolean).slice(0, 6)
    : item.evidence && typeof item.evidence === "object"
      ? Object.values(item.evidence).flat().filter(Boolean).slice(0, 6)
      : [];
  return `<article class="report-card"><p class="career-kicker">${escapeHtml(label)}</p><h3>${escapeHtml(item.theme || "交集主题")}</h3><div class="report-tags">${(item.tags || []).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div><p>${escapeHtml(item.interpretation || "")}</p>${evidence.length ? `<p><strong>回答证据：</strong>${evidence.map(escapeHtml).join("；")}</p>` : ""}</article>`;
}

function formatGroupNames(groups) {
  const labels = { values: "价值观", talents: "才能", passions: "热情" };
  return (groups || []).map((group) => labels[group] || group).join(" × ");
}

function renderAiRecommendationList(items) {
  return `<ol class="report-list">${(items || []).slice(0, 10).map((item) => `<li><strong>${escapeHtml(item.name || "待补充方向")} · ${Math.round(Number(item.match) || 0)}%</strong><br>${escapeHtml(item.reason || "")}</li>`).join("")}</ol>`;
}

function buildRecommendations(tags) {
  const majors = [];
  const careers = [];
  tags.forEach((tag) => {
    const item = recommendationCatalog[tag];
    if (!item) return;
    item.majors.forEach((name) => { if (!majors.includes(name)) majors.push(name); });
    item.careers.forEach((name) => { if (!careers.includes(name)) careers.push(name); });
  });
  ["计算机科学与技术", "应用心理学", "教育技术学", "数字媒体技术", "工商管理", "数据科学与大数据技术", "汉语言文学", "统计学", "工业设计", "社会工作"].forEach((name) => { if (!majors.includes(name)) majors.push(name); });
  ["产品经理", "数据分析师", "教育产品设计师", "用户体验设计师", "生涯规划师", "知识型内容创作者", "软件工程师", "项目经理", "心理咨询师", "研究员"].forEach((name) => { if (!careers.includes(name)) careers.push(name); });
  return { majors: majors.slice(0, 10), careers: careers.slice(0, 10) };
}

function buildStrengths(tags) {
  const strengths = [];
  if (tags.some((tag) => ["逻辑分析", "研究问题", "数据分析", "解决问题"].includes(tag))) strengths.push("善于拆解问题、寻找规律，并把复杂信息整理清楚。");
  if (tags.some((tag) => ["设计创造", "探索新事物", "探索未知"].includes(tag))) strengths.push("对新事物保持好奇，愿意尝试不同路径并创造新方案。");
  if (tags.some((tag) => ["讲解表达", "写作阅读", "表演展示"].includes(tag))) strengths.push("具有表达与知识转化潜力，适合把理解传递给别人。");
  if (tags.some((tag) => ["帮助别人", "帮助他人", "照顾陪伴"].includes(tag))) strengths.push("关注他人的成长和感受，能够从助人过程中获得价值感。");
  if (tags.some((tag) => ["组织管理", "资源整合", "商业赚钱"].includes(tag))) strengths.push("具备组织资源、推动事情落地并关注结果的倾向。");
  if (tags.some((tag) => ["成长进步", "专业卓越", "长期主义"].includes(tag))) strengths.push("重视长期积累，适合建立可持续精进的专业能力。");
  if (!strengths.length) strengths.push("你更倾向用自己的语言描述真实体验，建议结合深度答案进行一对一分析。");
  return strengths.slice(0, 5);
}

function getReportHighlights() {
  const tags = getSelectedTags();
  const customAnswers = getAnswerRecords()
    .filter((answer) => answer.type === "custom")
    .map((answer) => String(answer.text).trim().slice(0, 18))
    .filter((answer, index, items) => answer && items.indexOf(answer) === index);
  return [...tags, ...customAnswers].slice(0, 12);
}

function buildDeepReportDetails() {
  const answeredTotal = Object.values(state.deep).filter(hasAnswer).length;
  if (!answeredTotal) {
    return '<section class="report-details report-note">当前报告基于 3 分钟抽样测评生成。完成深度问答后，这里会显示个人回答摘要。</section>';
  }
  return `
    <section class="report-details">
      <h3>各维度详细回答 · 已完成 ${answeredTotal}/90</h3>
      ${assessmentGroups.map((group) => {
        const answers = group.questions.map((question, index) => ({ question, answer: getAnswerText(state.deep[`${group.id}-${index}`]) })).filter((item) => item.answer);
        return `<details><summary>${group.title} · ${answers.length}/30</summary><div class="answer-summary">${answers.map((item) => `<p><strong>${escapeHtml(item.question)}</strong><br>${escapeHtml(item.answer)}</p>`).join("") || "<p>暂未填写。</p>"}</div></details>`;
      }).join("")}
    </section>`;
}

function buildDimensionScores(tags) {
  return Object.entries(dimensionTagMap).map(([name, relatedTags]) => {
    const hits = tags.filter((tag) => relatedTags.includes(tag)).length;
    return { name, value: Math.min(9.6, 5.8 + hits * 1.05) };
  });
}

function drawRadar(dimensions) {
  const canvas = document.querySelector("#careerRadar");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const centerX = 215;
  const centerY = 176;
  const radius = 116;
  const count = dimensions.length;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let level = 1; level <= 5; level += 1) {
    ctx.beginPath();
    dimensions.forEach((_, index) => {
      const angle = -Math.PI / 2 + index * Math.PI * 2 / count;
      const r = radius * level / 5;
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;
      index ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
    });
    ctx.closePath();
    ctx.strokeStyle = "#dce3ef";
    ctx.stroke();
  }

  dimensions.forEach((item, index) => {
    const angle = -Math.PI / 2 + index * Math.PI * 2 / count;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + Math.cos(angle) * radius, centerY + Math.sin(angle) * radius);
    ctx.strokeStyle = "#dce3ef";
    ctx.stroke();
    const labelRadius = radius + 38;
    ctx.fillStyle = "#4f5b70";
    ctx.font = "12px Microsoft YaHei";
    ctx.textAlign = "center";
    ctx.fillText(`${item.name} ${item.value.toFixed(1)}`, centerX + Math.cos(angle) * labelRadius, centerY + Math.sin(angle) * labelRadius + 4);
  });

  ctx.beginPath();
  dimensions.forEach((item, index) => {
    const angle = -Math.PI / 2 + index * Math.PI * 2 / count;
    const r = radius * item.value / 10;
    const x = centerX + Math.cos(angle) * r;
    const y = centerY + Math.sin(angle) * r;
    index ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = "rgba(77, 139, 255, 0.18)";
  ctx.fill();
  ctx.strokeStyle = "#4d8bff";
  ctx.lineWidth = 3;
  ctx.stroke();
}

function downloadLatexReport() {
  if (!isQuickComplete()) {
    window.alert("请先完成 3 分钟测评。");
    return;
  }
  const latex = buildLatexReport();
  const blob = new Blob([latex], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${state.profile.studentName || "学生"}-职业发展分析报告.tex`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function buildLatexReport() {
  if (state.aiReport) return buildAiLatexReport(state.aiReport);
  const tags = getSelectedTags();
  const highlights = getReportHighlights();
  const recommendations = buildRecommendations(tags);
  const dimensions = buildDimensionScores(tags);
  const name = escapeLatex(state.profile.studentName || "学生");
  const age = escapeLatex(state.profile.age || "未填写");
  const grade = escapeLatex(state.profile.grade || "高中生");
  const date = new Date().toISOString().slice(0, 10);
  const dimensionRows = dimensions.map((item) => `${escapeLatex(item.name)} & ${item.value.toFixed(1)} \\\\`).join("\n");
  const majorRows = recommendations.majors.map((item, index) => `${index + 1} & ${escapeLatex(item)} & ${95 - index * 2}\% \\\\`).join("\n");
  const careerRows = recommendations.careers.map((item, index) => `${index + 1} & ${escapeLatex(item)} & ${95 - index * 2}\% \\\\`).join("\n");
  const deepAppendix = assessmentGroups.map((group) => {
    const answers = group.questions.map((question, index) => ({ question, answer: getAnswerText(state.deep[`${group.id}-${index}`]) })).filter((item) => item.answer);
    return `\\begin{tcolorbox}[card,title={${escapeLatex(group.title)}}]\n${answers.length ? answers.map((item) => `\\textbf{${escapeLatex(item.question)}}\\\\\n${escapeLatex(item.answer)}\\\\[2mm]`).join("\n") : "暂未填写深度问答。"}\n\\end{tcolorbox}`;
  }).join("\n\n");
  return `\\documentclass[UTF8,11pt,a4paper]{ctexart}
\\usepackage[margin=1.4cm]{geometry}
\\usepackage{xcolor,tcolorbox,tabularx,array,enumitem}
\\pagestyle{empty}
\\definecolor{mainblue}{HTML}{4D8BFF}
\\definecolor{lightblue}{HTML}{EDF4FF}
\\definecolor{darktext}{HTML}{333333}
\\tcbset{card/.style={colback=white,colframe=mainblue!20,arc=3mm,boxrule=0.8pt,left=3mm,right=3mm,top=2.5mm,bottom=2.5mm}}
\\setlength{\\parindent}{0pt}
\\renewcommand{\\arraystretch}{1.25}
\\begin{document}
\\begin{tcolorbox}[card,colback=lightblue]
{\\Huge \\textbf{个人兴趣与职业发展分析报告}}\\\\[3mm]
{\\large 基于八木仁平《想做的事》问卷分析}\\\\[4mm]
\\textbf{学生姓名：}${name} \\quad \\textbf{年龄：}${age} \\quad \\textbf{阶段：}${grade} \\quad \\textbf{报告日期：}${date}
\\end{tcolorbox}
\\vspace{3mm}
\\begin{tcolorbox}[card]
{\\Large \\textcolor{mainblue}{\\textbf{核心发现}}}\\\\[2mm]
你的答案反复指向：\\textbf{${highlights.map(escapeLatex).join("、")}}。建议优先探索能发挥这些特质、持续积累能力并创造真实价值的专业与职业环境。
\\end{tcolorbox}
\\vspace{3mm}
\\begin{minipage}[t]{0.48\\textwidth}
\\begin{tcolorbox}[card]
{\\Large \\textbf{能力倾向评分}}\\\\[2mm]
\\begin{tabularx}{\\textwidth}{Xr}
维度 & 分数 \\\\ \\hline
${dimensionRows}
\\end{tabularx}
\\end{tcolorbox}
\\end{minipage}
\\hfill
\\begin{minipage}[t]{0.49\\textwidth}
\\begin{tcolorbox}[card]
{\\Large \\textbf{优势关键词}}\\\\[2mm]
${buildStrengths(tags).map((item) => `\\textbf{•} ${escapeLatex(item)}\\\\[2mm]`).join("\n")}
\\end{tcolorbox}
\\end{minipage}
\\vspace{3mm}
\\begin{minipage}[t]{0.48\\textwidth}
\\begin{tcolorbox}[card]
{\\Large \\textbf{推荐专业 TOP10}}\\\\[2mm]
\\begin{tabularx}{\\textwidth}{cXr}
${majorRows}
\\end{tabularx}
\\end{tcolorbox}
\\end{minipage}
\\hfill
\\begin{minipage}[t]{0.49\\textwidth}
\\begin{tcolorbox}[card]
{\\Large \\textbf{推荐职业 TOP10}}\\\\[2mm]
\\begin{tabularx}{\\textwidth}{cXr}
${careerRows}
\\end{tabularx}
\\end{tcolorbox}
\\end{minipage}
\\vfill
\\begin{center}
\\textcolor{mainblue}{\\Large \\textbf{找到想做的事，人生就会改变方向！}}\\\\[1mm]
{\\small 本报告基于问卷回答生成，结果仅供探索参考。}
\\end{center}
\\newpage
{\\Huge \\textbf{附录：深度问答记录}}\\\\[3mm]
${deepAppendix}
\\end{document}`;
}

function buildAiLatexReport(report) {
  const student = report.student || {};
  const intersections = report.intersections || {};
  const threeWay = Array.isArray(intersections.threeWay) ? intersections.threeWay : [];
  const taggedCustomAnswers = Array.isArray(report.taggedAnswers) ? report.taggedAnswers.filter((item) => item.source === "custom") : [];
  const renderRows = (items) => (items || []).slice(0, 10).map((item, index) => `${index + 1} & ${escapeLatex(item.name || "待补充方向")} & ${Math.round(Number(item.match) || 0)}\\% \\\\`).join("\n");
  const intersectionBlocks = threeWay.length ? threeWay.map((item) => `\\begin{tcolorbox}[card,title={${escapeLatex(item.theme || "交集主题")}}]\n\\textbf{标签：}${(item.tags || []).map(escapeLatex).join("、")}\\\\[1mm]\n${escapeLatex(item.interpretation || "")}\n\\end{tcolorbox}`).join("\n") : "暂无稳定三方交集。";
  const taggedBlocks = taggedCustomAnswers.length ? taggedCustomAnswers.map((item) => `\\textbf{回答：}${escapeLatex(item.answer || "")}\\\\\n\\textbf{标签：}${(item.tags || []).map((tag) => escapeLatex(tag.name || "")).join("、")}\\\\[2mm]`).join("\n") : "没有自主回答需要附录。";
  return `\\documentclass[UTF8,11pt,a4paper]{ctexart}
\\usepackage[margin=1.4cm]{geometry}
\\usepackage{xcolor,tcolorbox,tabularx,array,enumitem}
\\pagestyle{empty}
\\definecolor{mainblue}{HTML}{4D8BFF}
\\definecolor{lightblue}{HTML}{EDF4FF}
\\tcbset{card/.style={colback=white,colframe=mainblue!20,arc=3mm,boxrule=0.8pt,left=3mm,right=3mm,top=2.5mm,bottom=2.5mm}}
\\setlength{\\parindent}{0pt}
\\renewcommand{\\arraystretch}{1.25}
\\begin{document}
\\begin{tcolorbox}[card,colback=lightblue]
{\\Huge \\textbf{${escapeLatex(report.title || "个人兴趣与职业发展分析报告")}}}\\\\[3mm]
{\\large 基于价值观、才能、热情三组交集的千问分析}\\\\[4mm]
\\textbf{学生姓名：}${escapeLatex(student.name || state.profile.studentName || "学生")} \\quad \\textbf{年龄：}${escapeLatex(student.age || state.profile.age || "未填写")} \\quad \\textbf{日期：}${escapeLatex(student.date || new Date().toISOString().slice(0, 10))}
\\end{tcolorbox}
\\vspace{3mm}
\\begin{tcolorbox}[card]
{\\Large \\textcolor{mainblue}{\\textbf{核心方向}}}\\\\[2mm]
${escapeLatex(intersections.coreDirection || report.summary || "")}
\\end{tcolorbox}
\\vspace{3mm}
{\\Large \\textbf{三组交集分析}}\\\\[2mm]
${intersectionBlocks}
\\vspace{3mm}
\\begin{minipage}[t]{0.32\\textwidth}
\\begin{tcolorbox}[card]\\textbf{推荐专业 TOP10}\\\\[2mm]\\begin{tabularx}{\\textwidth}{cXr}${renderRows(report.majors)}\\end{tabularx}\\end{tcolorbox}
\\end{minipage}\\hfill
\\begin{minipage}[t]{0.32\\textwidth}
\\begin{tcolorbox}[card]\\textbf{推荐行业 TOP10}\\\\[2mm]\\begin{tabularx}{\\textwidth}{cXr}${renderRows(report.industries)}\\end{tabularx}\\end{tcolorbox}
\\end{minipage}\\hfill
\\begin{minipage}[t]{0.32\\textwidth}
\\begin{tcolorbox}[card]\\textbf{推荐职业 TOP10}\\\\[2mm]\\begin{tabularx}{\\textwidth}{cXr}${renderRows(report.careers)}\\end{tabularx}\\end{tcolorbox}
\\end{minipage}
\\newpage
{\\Huge \\textbf{附录：自主回答 AI 标签}}\\\\[3mm]
${taggedBlocks}
\\end{document}`;
}

function escapeLatex(value) {
  return String(value || "")
    .replace(/\\/g, "\\textbackslash{}")
    .replace(/([#$%&_{}])/g, "\\$1")
    .replace(/~/g, "\\textasciitilde{}")
    .replace(/\^/g, "\\textasciicircum{}");
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
