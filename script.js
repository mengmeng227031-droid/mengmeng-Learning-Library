const navItems = [
  { id: "home", label: "首页", icon: "⌂" },
  { id: "oral-math", label: "口算出题器", icon: "✎", href: "./oral-math.html" },
  { id: "library", label: "资料库", icon: "★" },
  { id: "sentence", label: "好句查询", icon: "⌕" },
  { id: "english", label: "英文学习", icon: "Aa" },
  { id: "gaokao", label: "高考志愿填报", icon: "志", href: "./admission.html" },
  { id: "phonics", label: "自然拼读闪卡", icon: "Ph", href: "./phonics-ppt-deck/index.html" },
];

const libraryTabNames = ["全部", "知识点总结", "直播间分享", "期中测试卷", "走题训练", "期末测试卷", "单元测试卷", "语文", "模拟卷"];

const sentenceKeywords = ["坚持", "梦想", "阅读", "责任", "勇气", "时间", "成长", "善良", "自然", "奋斗"];

const sentenceMaterials = [
  {
    id: "quote-persist-1",
    type: "quote",
    text: "世上无难事，只要肯登攀。",
    source: "毛泽东",
    work: "水调歌头·重上井冈山",
    tags: ["坚持", "奋斗", "困难", "攀登", "努力"]
  },
  {
    id: "quote-persist-2",
    type: "quote",
    text: "锲而不舍，金石可镂。",
    source: "荀子",
    work: "劝学",
    tags: ["坚持", "学习", "积累", "毅力"]
  },
  {
    id: "quote-dream-1",
    type: "quote",
    text: "志不强者智不达。",
    source: "墨子",
    work: "修身",
    tags: ["梦想", "志向", "目标", "成长"]
  },
  {
    id: "quote-reading-1",
    type: "quote",
    text: "读书破万卷，下笔如有神。",
    source: "杜甫",
    work: "奉赠韦左丞丈二十二韵",
    tags: ["阅读", "读书", "写作", "积累"]
  },
  {
    id: "quote-time-1",
    type: "quote",
    text: "少壮不努力，老大徒伤悲。",
    source: "汉乐府",
    work: "长歌行",
    tags: ["时间", "努力", "青春", "惜时"]
  },
  {
    id: "quote-courage-1",
    type: "quote",
    text: "天行健，君子以自强不息。",
    source: "周易",
    work: "乾卦",
    tags: ["勇气", "自强", "奋斗", "成长"]
  },
  {
    id: "quote-kindness-1",
    type: "quote",
    text: "己所不欲，勿施于人。",
    source: "孔子",
    work: "论语",
    tags: ["善良", "尊重", "品德", "责任"]
  },
  {
    id: "quote-nature-1",
    type: "quote",
    text: "采菊东篱下，悠然见南山。",
    source: "陶渊明",
    work: "饮酒",
    tags: ["自然", "生活", "宁静", "作文"]
  },
  {
    id: "quote-responsibility-1",
    type: "quote",
    text: "天下兴亡，匹夫有责。",
    source: "顾炎武",
    work: "日知录",
    tags: ["责任", "家国", "担当", "人民"]
  },
  {
    id: "quote-world-knowledge-1",
    type: "quote",
    text: "知识就是力量。",
    source: "培根",
    work: "Meditationes Sacrae",
    tags: ["阅读", "知识", "学习", "成长"]
  },
  {
    id: "quote-world-thinking-1",
    type: "quote",
    text: "未经审视的人生不值得过。",
    source: "苏格拉底",
    work: "申辩篇",
    tags: ["成长", "思考", "人生", "智慧"]
  },
  {
    id: "quote-world-courage-1",
    type: "quote",
    text: "黑夜无论怎样悠长，白昼总会到来。",
    source: "莎士比亚",
    work: "麦克白",
    tags: ["勇气", "希望", "坚持", "困难"]
  },
  {
    id: "quote-world-value-1",
    type: "quote",
    text: "你若要喜爱你自己的价值，你就得给世界创造价值。",
    source: "歌德",
    work: "格言与反思",
    tags: ["责任", "价值", "成长", "奋斗"]
  },
  {
    id: "parallel-persist-1",
    type: "parallel",
    text: "坚持，是清晨书桌前不肯停下的笔尖；坚持，是操场跑道上一次次迈出的脚步；坚持，是失败之后仍然抬头向前的勇气。",
    source: "作文素材",
    work: "排比句",
    tags: ["坚持", "奋斗", "努力", "勇气"]
  },
  {
    id: "parallel-dream-1",
    type: "parallel",
    text: "梦想像一粒种子，埋在心里就会生根；梦想像一束光，照亮前行的方向；梦想像一阵风，推动我们越过山岗。",
    source: "作文素材",
    work: "排比句",
    tags: ["梦想", "目标", "成长", "希望"]
  },
  {
    id: "parallel-reading-1",
    type: "parallel",
    text: "阅读，让我们在文字里看见山河；阅读，让我们在故事里理解人心；阅读，让我们在思考里遇见更好的自己。",
    source: "作文素材",
    work: "排比句",
    tags: ["阅读", "读书", "写作", "成长"]
  },
  {
    id: "parallel-responsibility-1",
    type: "parallel",
    text: "责任不是挂在嘴边的口号，而是困难面前主动伸出的手；责任不是一时兴起的热情，而是日复一日认真完成的小事。",
    source: "作文素材",
    work: "议论文素材",
    tags: ["责任", "担当", "人民", "成长"]
  },
  {
    id: "parallel-time-1",
    type: "parallel",
    text: "时间藏在翻过的书页里，藏在写满的草稿纸里，也藏在每一次咬牙坚持后的进步里。",
    source: "作文素材",
    work: "排比句",
    tags: ["时间", "惜时", "学习", "进步"]
  },
  {
    id: "parallel-nature-1",
    type: "parallel",
    text: "自然有春风的温柔，有夏雨的热烈，有秋叶的沉静，也有冬雪的澄澈。",
    source: "作文素材",
    work: "写景素材",
    tags: ["自然", "四季", "写景", "作文"]
  }
];

const studentAccountProfiles = {
  gaolintong: { id: "student-gaolintong", username: "gaolintong", name: "高琳童" },
  wangziyou: { id: "student-wangziyou", username: "wangziyou", name: "王字优" },
  kangjiarui: { id: "student-kangjiarui", username: "kangjiarui", name: "康家瑞" },
  songyuan: { id: "student-songyuan", username: "songyuan", name: "宋源" },
  guomannanxi: { id: "student-guomannanxi", username: "guomannanxi", name: "郭蔓楠熙" },
  jiangdongchen: { id: "student-jiangdongchen", username: "jiangdongchen", name: "蒋东宸" },
  xumengyao: { id: "student-xumengyao", username: "xumengyao", name: "徐梦瑶" },
  congyunxi: { id: "student-congyunxi", username: "congyunxi", name: "丛允玺" }
};

let currentUser = {
  id: "guest",
  username: "",
  name: "游客",
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
      id: "guest",
      username: "",
      name: "游客",
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

const englishResourceCatalog = [
  { grade: "grade3", semester: "上册", units: [1, 2, 3, 4, 5, 6] }
];

const englishLearningCountStorageKey = "mengmeng:englishLearningCounts:v1";
const gaokaoStorageKey = "mengmeng:gaokaoCareerForm:v1";
const gaokaoReportStorageKey = "mengmeng:gaokaoCareerReport:v1";

const gaokaoInfoSections = [
  {
    id: "visitor",
    title: "来访者基础信息",
    desc: "先把背景写清楚，后续分析才不会跑偏。",
    fields: [
      ["name", "姓名"],
      ["gender", "性别"],
      ["grade", "年级"],
      ["className", "班级"],
      ["school", "就读学校"],
      ["province", "所在省份"],
      ["examYear", "高考年份"],
      ["admiredPerson", "最崇拜的人及理由"],
      ["achievementEvent", "成长经历中最有成就感的事件"]
    ]
  },
  {
    id: "family",
    title: "父母与家庭信息",
    desc: "记录家庭期待、支持和限制，方便后续做现实边界判断。",
    fields: [
      ["fatherName", "父亲姓名"],
      ["fatherJob", "父亲职业"],
      ["fatherEducation", "父亲学历"],
      ["fatherContact", "父亲联系方式"],
      ["fatherExpectation", "父亲对升学与职业的期待"],
      ["motherName", "母亲姓名"],
      ["motherJob", "母亲职业"],
      ["motherEducation", "母亲学历"],
      ["motherContact", "母亲联系方式"],
      ["motherExpectation", "母亲对升学与职业的期待"],
      ["familySupport", "家庭可提供的支持"],
      ["familyLimits", "家庭限制条件或明确底线"]
    ]
  },
  {
    id: "needs",
    title: "咨询核心需求",
    desc: "把这次咨询最想解决的事写具体。",
    fields: [
      ["mainQuestion", "最想通过咨询解决的问题"],
      ["neededAbility", "解决问题最需要的能力"]
    ]
  },
  {
    id: "application",
    title: "高考志愿信息",
    desc: "用于初步判断院校、专业、城市和风险偏好。",
    fields: [
      ["subjectType", "选科/科类"],
      ["estimatedScore", "预估分数"],
      ["estimatedRank", "预估位次"],
      ["targetCities", "目标省份或城市"],
      ["majorInterest", "意向专业方向"],
      ["schoolPreference", "院校偏好"],
      ["excludedFactors", "明确不考虑的因素"],
      ["careerVision", "未来职业想象"],
      ["biggestWorry", "当前最大的担忧"]
    ]
  }
];

const gaokaoQuestionGroups = [
  {
    id: "values",
    title: "探寻价值观：重要的事",
    accent: "#4D8BFF",
    questions: [
      "什么事情会让你觉得“这一天没有白过”？",
      "你最希望别人用哪三个词评价你？为什么？",
      "如果未来职业只能满足一个条件，你最想保留什么？",
      "你最不能接受的工作状态是什么？",
      "你做决定时最看重安全感、成长、收入、自由还是影响力？请说明原因。",
      "你愿意为了什么事情长期投入时间？",
      "你羡慕哪类人的生活方式？具体羡慕什么？",
      "你不羡慕哪类人的生活方式？为什么？",
      "你觉得一份好工作的最低标准是什么？",
      "你觉得一份理想工作的加分项是什么？",
      "你希望未来生活在哪种城市或环境里？为什么？",
      "你更重视稳定路径还是更多选择？请举例说明。",
      "当收入和兴趣冲突时，你通常会怎么取舍？",
      "当父母期待和个人想法冲突时，你最担心什么？",
      "你希望未来的工作更多面对人、数据、物品、文字还是系统？为什么？",
      "你希望工作成果被谁看见？同事、客户、公众、家人还是自己？",
      "你是否愿意承担高压力换取高回报？界限在哪里？",
      "你更喜欢清晰规则还是开放探索？为什么？",
      "你希望职业能给家庭带来什么？",
      "你希望职业能给社会带来什么？",
      "你最珍惜的一次被认可经历是什么？",
      "你最反感的一次被要求经历是什么？",
      "你希望大学四年最重要的收获是什么？",
      "你认为专业选择最应该避免什么遗憾？",
      "你会为了进入好学校接受不喜欢的专业吗？为什么？",
      "你会为了喜欢的专业接受普通学校吗？为什么？",
      "你认为“成功”对你来说意味着什么？",
      "你认为“幸福”对你来说意味着什么？",
      "如果十年后的你回看现在，最希望自己没有忽略什么？",
      "请写下你目前最重要的三个选择原则。"
    ]
  },
  {
    id: "talents",
    title: "探寻才能：擅长的事",
    accent: "#37D2C6",
    questions: [
      "你在哪些学习任务中上手最快？",
      "哪些事情别人觉得难，你却觉得还好？",
      "你经常被同学或老师请教什么问题？",
      "你做什么事情时最容易进入专注状态？",
      "你最近一次把事情做得比预期好，是因为什么能力？",
      "你最稳定的学科优势是什么？请写具体证据。",
      "你最稳定的非学科优势是什么？请写具体证据。",
      "你更擅长记忆、理解、表达、计算、观察、组织还是创造？为什么？",
      "你面对复杂问题时通常怎么拆解？",
      "你是否擅长和人沟通？请举例说明。",
      "你是否擅长独立研究？请举例说明。",
      "你是否擅长动手制作或操作工具？请举例说明。",
      "你是否擅长写作、演讲或展示？请举例说明。",
      "你是否擅长发现规律和总结方法？请举例说明。",
      "你是否擅长照顾、帮助或支持别人？请举例说明。",
      "你是否擅长审美、设计或创意表达？请举例说明。",
      "你是否擅长计划、统筹或推进事情？请举例说明。",
      "你遇到压力时，哪些能力还能保持稳定？",
      "你做团队任务时通常承担什么角色？",
      "你独自完成任务时最大的优势是什么？",
      "你处理冲突或分歧时有什么特点？",
      "你在竞赛、活动、项目或社团里展现过什么能力？",
      "你最拿得出手的一个作品、成果或成绩是什么？",
      "如果让你教别人一件事，你最能教什么？",
      "你有哪些能力是靠长期练习获得的？",
      "你有哪些能力像是天生比较敏感？",
      "你目前最想强化的能力是什么？为什么？",
      "你最不想长期依赖的短板是什么？",
      "请写下三个别人认可过你的能力标签。",
      "请写下你认为最适合未来发展的三个能力方向。"
    ]
  },
  {
    id: "passions",
    title: "探寻热情：喜欢的事",
    accent: "#FF6EC7",
    questions: [
      "哪些事情你不被催也愿意主动了解？",
      "你平时最愿意刷、看、听、研究哪类内容？",
      "你有哪些话题可以连续聊很久？",
      "你小时候最喜欢做什么？现在还保留了吗？",
      "你最近一次感到兴奋或好奇，是因为什么？",
      "你最喜欢哪门课？喜欢的是内容、老师、成绩还是学习方式？",
      "你最不排斥哪类重复训练？为什么？",
      "你愿意为了什么主题查资料、看视频或做笔记？",
      "如果没有分数压力，你会选择学习什么？",
      "如果有一个月自由时间，你最想完成什么项目？",
      "你喜欢探索人的行为、自然世界、商业社会、技术工具还是艺术表达？为什么？",
      "你喜欢解决真实问题还是研究抽象问题？请举例说明。",
      "你更喜欢安静思考还是热闹协作？为什么？",
      "你更喜欢创造新东西还是优化已有东西？为什么？",
      "你更喜欢稳定积累还是快速变化？为什么？",
      "你看到哪些职业会自然产生好奇？",
      "你看到哪些专业名字会想进一步了解？",
      "你最想体验的一份工作是什么？为什么？",
      "你最想回避的一份工作是什么？为什么？",
      "你喜欢和什么类型的人一起做事？",
      "你喜欢在什么样的空间或节奏里学习工作？",
      "你愿意长期阅读哪类书、文章或资料？",
      "你愿意长期练习哪类技能？",
      "你愿意长期观察哪类现象？",
      "你在什么事情上最容易忘记时间？",
      "你做完什么事情后会有满足感？",
      "你目前的兴趣里，哪些可能发展成专业方向？",
      "你目前的兴趣里，哪些更适合作为爱好保留？",
      "如果未来职业能结合一个兴趣，你最希望结合什么？",
      "请写下三个你愿意继续探索的专业或职业主题。"
    ]
  }
];

const englishUnitTitleCatalog = [
  { grade: "grade3", semester: "上册", unit: 1, unitTitle: "Unit 1  Making friends", readingTitle: "Making Friends" },
  { grade: "grade3", semester: "上册", unit: 2, unitTitle: "Unit 2  Different families", readingTitle: "Different Families" },
  { grade: "grade3", semester: "上册", unit: 3, unitTitle: "Unit 3  Amazing animals", readingTitle: "Amazing Animals" },
  { grade: "grade3", semester: "上册", unit: 4, unitTitle: "Unit 4  Plants around us", readingTitle: "Plants Around Us" },
  { grade: "grade3", semester: "上册", unit: 5, unitTitle: "Unit 5  The colourful world", readingTitle: "The Colourful World" },
  { grade: "grade3", semester: "上册", unit: 6, unitTitle: "Unit 6  Useful numbers", readingTitle: "Useful Numbers" }
];

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
    title: "自然拼读闪卡",
    desc: "完成 1 组 Phonics 跟读与认读练习",
    time: "15 min",
    progress: 35,
    icon: "Ph",
    color: "#37D2C6",
    bg: "#e9fbf8",
    href: "./phonics-ppt-deck/index.html"
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
const loginEntryButton = document.querySelector("#loginEntryButton");
const loginDropdown = document.querySelector("#loginDropdown");
const loginMenuName = document.querySelector("#loginMenuName");
const loginMenuLabel = document.querySelector("#loginMenuLabel");
const logoutButton = document.querySelector("#logoutButton");
const profileName = document.querySelector("#profileName");
const profileLabel = document.querySelector("#profileLabel");
const helloTitle = document.querySelector("#helloTitle");
const toast = document.querySelector("#toast");
const admissionHome = document.querySelector("#admissionHome");
const admissionProvinceTitle = document.querySelector("#admissionProvinceTitle");
const admissionProvinceMeta = document.querySelector("#admissionProvinceMeta");
const admissionMapCallout = document.querySelector("#admissionMapCallout");
const admissionSchoolList = document.querySelector("#admissionSchoolList");
const admissionFilterTabs = document.querySelector("#admissionFilterTabs");
const admissionMoreButton = document.querySelector("#admissionMoreButton");
const admissionStatStrip = document.querySelector("#admissionStatStrip");
const admissionRegionButton = document.querySelector("#admissionRegionButton");
const magicSchoolModal = document.querySelector("#magicSchoolModal");
const magicSchoolCard = document.querySelector("#magicSchoolCard");
const gaokaoView = document.querySelector("#gaokaoView");
const gaokaoForm = document.querySelector("#gaokaoForm");
const sentenceView = document.querySelector("#sentenceView");
const sentenceTypeSelect = document.querySelector("#sentenceTypeSelect");
const sentenceSearchInput = document.querySelector("#sentenceSearchInput");
const sentenceSearchButton = document.querySelector("#sentenceSearchButton");
const sentenceKeywordRow = document.querySelector("#sentenceKeywordRow");
const sentenceResultMeta = document.querySelector("#sentenceResultMeta");
const sentenceResultList = document.querySelector("#sentenceResultList");
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
let isLoggedIn = false;
let libraryTree = libraryFallbackTree;
let libraryCurrentNode = null;
let libraryActiveTab = "全部";
let libraryFiles = [];
let englishSelectedStudentId = currentUser.students[0]?.id || currentUser.id;
let englishSelectedGradeId = getDefaultEnglishGradeId(getActiveEnglishLearner());
let englishLessonBook = null;
let activeEnglishLesson = null;
let gaokaoCurrentStep = 0;
let gaokaoIsAnalyzing = false;
let admissionActiveProvince = "江苏";
let admissionActiveFilter = "all";

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
      unitTitle: "Unit 3  Amazing animals",
      gradeLabel: "三年级上",
      lesson: "3",
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
        title: "Amazing Animals",
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

initApp();

async function initApp() {
  await loadCloudUser();
  updateLoginEntry();
  renderCurrentUserIdentity();
  renderNav();
  renderCourses(courses);
  renderTodayTasks();
  renderQuickEntries();
  renderRecentItems();
  renderSentenceKeywords();
  renderSentenceResults();
  renderAdmissionHome();
  bindPageActions();
  loadLibraryTree();
  loadEnglishLessonBook();
  routeInitialHash();
}

async function loadCloudUser() {
  try {
    const response = await fetch("/api/me", { credentials: "include" });
    if (response.status === 401) {
      isLoggedIn = false;
      return;
    }
    if (!response.ok) return;

    const data = await response.json();
    if (!data.ok || !data.user) return;
    isLoggedIn = true;

    const progress = {};
    (data.progress || []).forEach((item) => {
      const unit = String(item.unit_id || "").replace(/^unit/i, "");
      if (!unit) return;
      progress[`${item.course_id}:${unit}`] = item.progress_percent || 0;
    });

    const displayName = getStudentDisplayName(data.user);
    const username = data.user.username || "";
    const userId = data.user.id || studentAccountProfiles[username]?.id || currentUser.id;

    currentUser = {
      ...currentUser,
      id: userId,
      username,
      name: displayName,
      role: data.user.role || "student",
      progress: {
        ...currentUser.progress,
        ...progress
      },
      students: [
        {
          ...currentUser,
          id: userId,
          username,
          name: displayName,
          progress: {
            ...currentUser.progress,
            ...progress
          }
        }
      ],
      permissions: data.permissions || []
    };
    englishSelectedStudentId = currentUser.students[0]?.id || currentUser.id;
  } catch (error) {
    // 本地直接打开静态 HTML 时保留演示数据。
  }
}

function updateLoginEntry() {
  if (!loginEntryButton) return;
  loginEntryButton.textContent = isLoggedIn ? "已登录" : "登录";
  loginEntryButton.classList.toggle("is-logged-in", isLoggedIn);
  loginEntryButton.setAttribute("aria-label", isLoggedIn ? "打开登录菜单" : "登录后解锁下载和英文学习");
  loginEntryButton.setAttribute("aria-expanded", "false");
  closeLoginDropdown();
  if (loginMenuName) loginMenuName.textContent = currentUser.name || "学生";
  if (loginMenuLabel) loginMenuLabel.textContent = currentUser.username || "学生账号";
}

function getStudentDisplayName(user) {
  const username = String(user?.username || "").trim().toLowerCase();
  return user?.displayName || studentAccountProfiles[username]?.name || user?.username || currentUser.name;
}

function renderCurrentUserIdentity() {
  const name = currentUser.name || "学生";
  if (profileName) profileName.textContent = name;
  if (profileLabel) profileLabel.textContent = isLoggedIn ? "学生账号" : "演示账号";
  if (helloTitle) helloTitle.innerHTML = `Hi，${escapeHtml(name)} <span aria-hidden="true">👋</span>`;
  if (loginMenuName) loginMenuName.textContent = name;
  if (loginMenuLabel) loginMenuLabel.textContent = currentUser.username || (isLoggedIn ? "学生账号" : "演示账号");
}

function openLoginPage() {
  const returnTo = encodeURIComponent(`${location.pathname}${location.search}${location.hash}`);
  window.location.href = `./login.html?returnTo=${returnTo}`;
}

function toggleLoginDropdown() {
  if (!loginDropdown || !loginEntryButton) return;
  const shouldOpen = loginDropdown.classList.contains("is-hidden");
  loginDropdown.classList.toggle("is-hidden", !shouldOpen);
  loginEntryButton.setAttribute("aria-expanded", String(shouldOpen));
}

function closeLoginDropdown() {
  loginDropdown?.classList.add("is-hidden");
  loginEntryButton?.setAttribute("aria-expanded", "false");
}

async function logoutCurrentUser(event) {
  event?.preventDefault();
  event?.stopPropagation();
  if (logoutButton) {
    logoutButton.disabled = true;
    logoutButton.textContent = "正在退出...";
  }
  try {
    await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
  } catch (error) {
    // 刷新页面会回到游客状态，本地静态预览无需额外处理。
  }
  window.location.reload();
}

function requireLogin(featureName) {
  if (isLoggedIn) return true;
  showToast(`${featureName}需要登录后使用，请点击右上角登录。`);
  return false;
}

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

function renderAdmissionHome() {
  if (!admissionHome || !window.gaokaoSchoolData) return;
  const province = findAdmissionProvince(admissionActiveProvince) || window.gaokaoSchoolData.provinces?.[0];
  if (province) admissionActiveProvince = province.name;
  renderAdmissionMapState();
  renderAdmissionSchoolList();
  renderAdmissionStats();
}

function findAdmissionProvince(name) {
  return (window.gaokaoSchoolData?.provinces || []).find((item) => item.name === name);
}

function getAdmissionProvinceSchools() {
  const schools = window.gaokaoSchoolData?.schools || [];
  let filtered = schools.filter((school) => school.province === admissionActiveProvince);
  if (!filtered.length) filtered = schools.slice(0, 36);
  if (admissionActiveFilter === "doubleFirst") filtered = filtered.filter((school) => school.isDoubleFirst);
  if (admissionActiveFilter === "985") filtered = filtered.filter((school) => school.is985);
  if (admissionActiveFilter === "211") filtered = filtered.filter((school) => school.is211);
  if (admissionActiveFilter === "hot") filtered = filtered.filter((school) => school.match >= 88 || school.maxScore >= 610);
  return filtered.sort((a, b) => (a.rank || 9999) - (b.rank || 9999));
}

function renderAdmissionMapState() {
  const province = findAdmissionProvince(admissionActiveProvince);
  if (admissionProvinceTitle) admissionProvinceTitle.textContent = `${admissionActiveProvince}省`;
  if (admissionProvinceMeta) admissionProvinceMeta.textContent = `共 ${province?.count || getAdmissionProvinceSchools().length} 所高校`;
  if (admissionMapCallout) {
    admissionMapCallout.innerHTML = `
      <strong>${escapeHtml(admissionActiveProvince)}省</strong>
      <span>名校数量 ${province?.count || getAdmissionProvinceSchools().length} 所</span>
      <button type="button" data-admission-action="focus-schools">查看该地区院校 ›</button>
    `;
  }
  document.querySelectorAll("[data-province]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.province === admissionActiveProvince);
  });
  admissionFilterTabs?.querySelectorAll("[data-filter]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === admissionActiveFilter);
  });
}

function renderAdmissionSchoolList() {
  if (!admissionSchoolList) return;
  const schools = getAdmissionProvinceSchools().slice(0, 3);
  admissionSchoolList.innerHTML = schools.length
    ? schools.map(renderAdmissionSchoolCard).join("")
    : `<div class="admission-empty">当前筛选下暂无院校，切换分类再看看。</div>`;
  if (admissionMoreButton) {
    const total = getAdmissionProvinceSchools().length;
    admissionMoreButton.textContent = `查看该地区全部 ${total} 所高校 ›`;
  }
}

function renderAdmissionSchoolCard(school, index) {
  const tags = [
    school.is985 ? "985" : "",
    school.is211 ? "211" : "",
    school.isDoubleFirst ? "双一流" : ""
  ].filter(Boolean);
  return `
    <button class="admission-school-card" type="button" data-school-id="${escapeHtml(school.id)}">
      <span class="school-rank">${index + 1}</span>
      <span class="school-logo">${escapeHtml(school.logoText || "校")}</span>
      <span class="school-main">
        <span class="school-title-row">
          <strong>${escapeHtml(school.name)}</strong>
          ${tags.map((tag) => `<em>${tag}</em>`).join("")}
        </span>
        <span class="school-meta">${escapeHtml(school.nature || "综合类")} · 本科 · ${escapeHtml(school.city || school.province)}</span>
        <span class="school-chip-row">
          <i>保研率 ${school.guaranteeRate}%</i>
          <i>科研水平 ${escapeHtml(school.researchLevel)}</i>
          <i>专业 ${school.majorCount} 个</i>
          <i>低位 ${formatAdmissionRank(school.minRank)}</i>
        </span>
      </span>
      <span class="school-side">
        <b>${escapeHtml(school.city || school.province)}</b>
        <small>综合排名 ${school.rank}</small>
      </span>
    </button>
  `;
}

function renderAdmissionStats() {
  if (!admissionStatStrip) return;
  const schools = (window.gaokaoSchoolData?.schools || []).filter((school) => school.province === admissionActiveProvince);
  const stats = [
    { label: "985 院校", value: schools.filter((school) => school.is985).length, icon: "◇" },
    { label: "211 院校", value: schools.filter((school) => school.is211).length, icon: "§" },
    { label: "双一流高校", value: schools.filter((school) => school.isDoubleFirst).length, icon: "✦" },
    { label: "共计院校", value: findAdmissionProvince(admissionActiveProvince)?.count || schools.length, icon: "▦" }
  ];
  admissionStatStrip.innerHTML = stats.map((item) => `
    <span><i>${item.icon}</i><strong>${item.value}</strong><em>${item.label}</em></span>
  `).join("");
}

function setAdmissionProvince(province) {
  if (!province) return;
  admissionActiveProvince = province;
  admissionActiveFilter = "all";
  renderAdmissionHome();
}

function setAdmissionFilter(filter) {
  admissionActiveFilter = filter || "all";
  renderAdmissionHome();
}

function getAdmissionSchoolById(id) {
  return (window.gaokaoSchoolData?.schools || []).find((school) => school.id === id);
}

function openMagicSchoolModal(school, sourceElement) {
  if (!school || !magicSchoolModal || !magicSchoolCard) return;
  const rect = sourceElement.getBoundingClientRect();
  magicSchoolModal.style.setProperty("--from-x", `${rect.left}px`);
  magicSchoolModal.style.setProperty("--from-y", `${rect.top}px`);
  magicSchoolModal.style.setProperty("--from-w", `${rect.width}px`);
  magicSchoolModal.style.setProperty("--from-h", `${rect.height}px`);
  magicSchoolCard.innerHTML = renderMagicSchoolDetail(school);
  magicSchoolModal.setAttribute("aria-hidden", "false");
  magicSchoolModal.classList.remove("is-open", "is-closing");
  magicSchoolModal.classList.add("is-opening");
  window.requestAnimationFrame(() => {
    magicSchoolModal.classList.add("is-open");
    magicSchoolModal.classList.remove("is-opening");
  });
}

function closeMagicSchoolModal() {
  if (!magicSchoolModal) return;
  magicSchoolModal.classList.add("is-closing");
  magicSchoolModal.classList.remove("is-open");
  window.setTimeout(() => {
    magicSchoolModal.classList.remove("is-closing");
    magicSchoolModal.setAttribute("aria-hidden", "true");
    if (magicSchoolCard) magicSchoolCard.innerHTML = "";
  }, 260);
}

function renderMagicSchoolDetail(school) {
  const tags = [
    school.is985 ? "985" : "",
    school.is211 ? "211" : "",
    school.isDoubleFirst ? "双一流" : "",
    school.hasPostgraduate ? "保研资格" : ""
  ].filter(Boolean);
  return `
    <button class="magic-close-button" type="button" data-magic-close aria-label="关闭">×</button>
    <header class="magic-school-head">
      <span class="school-logo large">${escapeHtml(school.logoText || "校")}</span>
      <div>
        <h3 id="magicSchoolTitle">${escapeHtml(school.name)}</h3>
        <p>${escapeHtml(school.province)} · ${escapeHtml(school.city || "城市未填")} · ${escapeHtml(school.nature || "综合类")}</p>
        <div>${tags.map((tag) => `<em>${tag}</em>`).join("")}</div>
      </div>
      <strong>${school.match}%<small>匹配度</small></strong>
    </header>
    <div class="magic-metric-grid">
      <span><b>${school.maxScore || "-"}</b><em>最高投档分</em></span>
      <span><b>${school.minScore || "-"}</b><em>最低投档分</em></span>
      <span><b>${formatAdmissionRank(school.minRank)}</b><em>最低位次</em></span>
      <span><b>${school.majorCount}</b><em>专业数量</em></span>
    </div>
    <section class="magic-section">
      <h4>招生专业样例</h4>
      <div class="magic-major-list">
        ${(school.majors || []).slice(0, 6).map((major) => `
          <article>
            <strong>${escapeHtml(major.name)}</strong>
            <span>${escapeHtml(major.requirement || "不限")} · 计划 ${major.plan || "-"} · ${major.score || "-"} 分 · 位次 ${formatAdmissionRank(major.rank)}</span>
            <em>${escapeHtml(major.tag || "参考")}</em>
          </article>
        `).join("")}
      </div>
    </section>
    <section class="magic-section">
      <h4>院校水平</h4>
      <p>${escapeHtml(school.level || "暂无院校标签，建议结合招生章程与官网进一步核对。")}</p>
    </section>
  `;
}

function formatAdmissionRank(value) {
  const number = Number(value);
  if (!Number.isFinite(number) || number <= 0) return "-";
  if (number >= 10000) return `${(number / 10000).toFixed(1)}万`;
  return String(number);
}

function renderSentenceKeywords() {
  sentenceKeywordRow.innerHTML = sentenceKeywords
    .map((keyword) => `<button type="button" data-sentence-keyword="${keyword}">${keyword}</button>`)
    .join("");
}

function renderSentenceResults() {
  const keyword = sentenceSearchInput.value.trim();
  const type = sentenceTypeSelect.value;
  const results = findSentenceMaterials(keyword, type);
  sentenceResultMeta.textContent = `${keyword || "全部"} · ${getSentenceTypeLabel(type)} · ${results.length} 条素材`;
  sentenceResultList.innerHTML = results
    .map((item, index) => renderSentenceCard(item, index))
    .join("");
}

function renderSentenceCard(item, index) {
  return `
    <article class="sentence-card" data-sentence-card="${item.id}">
      <div class="sentence-number">${index + 1}.</div>
      <div class="sentence-card-body">
        <p>${escapeHtml(item.text)}</p>
        <div class="sentence-card-foot">
          <span>${item.type === "quote" ? "世界名言" : "作文素材"}</span>
          <strong>${escapeHtml(formatSentenceSource(item))}</strong>
        </div>
      </div>
      <button class="sentence-copy-button" type="button" data-copy-sentence="${escapeHtml(item.text)}" aria-label="复制好句">⧉</button>
    </article>
  `;
}

function findSentenceMaterials(keyword, type) {
  const normalizedKeyword = normalizeSentenceText(keyword);
  const filtered = sentenceMaterials
    .filter((item) => type === "all" || item.type === type)
    .map((item) => ({
      item,
      score: scoreSentenceMaterial(item, normalizedKeyword)
    }))
    .filter((entry) => !normalizedKeyword || entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((entry) => entry.item);

  if (filtered.length) return filtered;
  if (!keyword) return sentenceMaterials.filter((item) => type === "all" || item.type === type);
  return buildFallbackSentenceMaterials(keyword, type);
}

function scoreSentenceMaterial(item, keyword) {
  if (!keyword) return 1;
  const text = normalizeSentenceText([item.text, item.source, item.work, ...item.tags].join(" "));
  const directHit = text.includes(keyword) ? 10 : 0;
  const tagHit = item.tags.some((tag) => normalizeSentenceText(tag).includes(keyword)) ? 20 : 0;
  return directHit + tagHit;
}

function buildFallbackSentenceMaterials(keyword, type) {
  const safeKeyword = keyword.replace(/[<>"']/g, "").slice(0, 12) || "成长";
  const fallbackItems = [
    {
      id: "fallback-parallel-1",
      type: "parallel",
      text: `${safeKeyword}，可以是清晨的一次主动开始，可以是低谷里的一次重新抬头，也可以是平凡日子里一点点攒下的光。`,
      source: "蒙蒙素材库",
      work: "关键词排比",
      tags: [safeKeyword]
    },
    {
      id: "fallback-parallel-2",
      type: "parallel",
      text: `把${safeKeyword}写进眼前的小事，写进脚下的路，也写进一次次不肯放弃的选择里。`,
      source: "蒙蒙素材库",
      work: "作文开头",
      tags: [safeKeyword]
    }
  ];
  if (type === "quote") return sentenceMaterials.filter((item) => item.type === "quote").slice(0, 4);
  return type === "all" ? fallbackItems.concat(sentenceMaterials.filter((item) => item.type === "quote").slice(0, 2)) : fallbackItems;
}

function getSentenceTypeLabel(type) {
  if (type === "quote") return "世界名言";
  if (type === "parallel") return "排比素材";
  return "全部素材";
}

function formatSentenceSource(item) {
  return item.work ? `${item.source}《${item.work}》` : item.source;
}

function normalizeSentenceText(value) {
  return String(value).trim().toLowerCase();
}

function renderGaokaoForm() {
  const values = loadGaokaoValues();
  const steps = getGaokaoQuestionSteps();
  gaokaoCurrentStep = Math.max(0, Math.min(gaokaoCurrentStep, steps.length));
  const isInfoStep = gaokaoCurrentStep >= steps.length;
  const currentQuestion = steps[gaokaoCurrentStep];
  gaokaoForm.innerHTML = `
    <div class="gaokao-head">
      <span class="gaokao-head-icon" aria-hidden="true">志</span>
      <div>
        <h2 id="gaokaoTitle">高考志愿填报</h2>
        <p>${isInfoStep ? "补充信息可直接跳过" : "90 个职业探索问题 · 按 Enter 进入下一题"}</p>
      </div>
      <div class="gaokao-total-progress" aria-live="polite">
        <strong id="gaokaoTotalCount">0/90</strong>
        <span class="gaokao-progress-bar"><i id="gaokaoTotalBar"></i></span>
      </div>
    </div>

    <div class="gaokao-ai-note">
      <strong>AI 分析接口</strong>
      <span>答案会发送到本地后端，由后端调用阿里千问生成 JSON 报告；API Key 不进入前端页面。</span>
    </div>

    ${isInfoStep ? renderGaokaoInfoStep(values) : renderGaokaoQuestionStep(currentQuestion, values)}
  `;
  updateGaokaoProgress();
  focusGaokaoCurrentTextarea();
}

function renderGaokaoQuestionStep(step, values) {
  const groupCount = getGaokaoGroupAnswerCount(step.group.id, values);
  return `
    <section class="gaokao-card gaokao-question-stage" style="--gaokao-accent: ${step.group.accent};">
      <div class="gaokao-section-head gaokao-group-head">
        <div>
          <span class="gaokao-step-kicker">${step.globalIndex + 1}/90 · ${step.group.title}</span>
          <h3>${escapeHtml(step.question)}</h3>
          <p data-gaokao-message="${step.group.id}">${getGaokaoEncouragement(groupCount)}</p>
        </div>
        <div class="gaokao-group-progress">
          <strong data-gaokao-count="${step.group.id}">${groupCount}/30</strong>
          <span class="gaokao-progress-bar"><i data-gaokao-bar="${step.group.id}" style="width: ${Math.round((groupCount / 30) * 100)}%;"></i></span>
        </div>
      </div>
      <label class="gaokao-field gaokao-main-answer">
        <span>你的回答</span>
        <textarea data-gaokao-field="${escapeHtml(step.id)}" data-gaokao-question-input rows="8" placeholder="写真实想法即可，不需要一次写完。">${escapeHtml(values[step.id] || "")}</textarea>
      </label>
      ${renderGaokaoNavActions(false)}
    </section>
  `;
}

function renderGaokaoInfoStep(values) {
  const report = loadGaokaoReport();
  return `
    <section class="gaokao-card gaokao-info-stage">
      <div class="gaokao-section-head">
        <span class="gaokao-step-kicker">补充信息</span>
        <h3>个人信息、家庭信息、咨询信息</h3>
        <p>这些信息用于后续咨询判断，可以先跳过，不影响前面 90 个问题的保存。</p>
      </div>
      <div class="gaokao-info-grid">
        ${gaokaoInfoSections.map((section) => renderGaokaoInfoSection(section, values)).join("")}
      </div>
      ${renderGaokaoNavActions(true)}
    </section>
    <div id="gaokaoReportHost">${report ? renderGaokaoReport(report) : ""}</div>
  `;
}

function renderGaokaoInfoSection(section, values) {
  return `
    <section class="gaokao-sub-card">
      <div class="gaokao-section-head">
        <h3>${section.title}</h3>
        <p>${section.desc}</p>
      </div>
      <div class="gaokao-field-grid">
        ${section.fields.map(([id, label]) => renderGaokaoTextarea(`info.${id}`, label, values[`info.${id}`])).join("")}
      </div>
    </section>
  `;
}

function renderGaokaoNavActions(isInfoStep) {
  return `
    <div class="gaokao-actions">
      <button class="gaokao-secondary-button" type="button" data-gaokao-action="prev" ${gaokaoCurrentStep === 0 ? "disabled" : ""}>上一题</button>
      ${isInfoStep ? '<button class="gaokao-secondary-button" type="button" data-gaokao-action="skip-info">跳过补充信息</button>' : ""}
      ${isInfoStep ? '<button class="gaokao-secondary-button" type="button" data-gaokao-action="demo-report">查看示例报告</button>' : ""}
      ${isInfoStep ? `<button class="gaokao-primary-button" type="button" data-gaokao-action="analyze" ${gaokaoIsAnalyzing ? "disabled" : ""}>${gaokaoIsAnalyzing ? "分析中..." : "生成 AI 分析报告"}</button>` : ""}
      <button class="gaokao-primary-button" type="button" data-gaokao-action="next">${isInfoStep ? "完成" : gaokaoCurrentStep === 89 ? "进入补充信息" : "下一题"}</button>
    </div>
  `;
}

function renderGaokaoTextarea(id, label, value = "") {
  return `
    <label class="gaokao-field">
      <span>${escapeHtml(label)}</span>
      <textarea data-gaokao-field="${escapeHtml(id)}" rows="3">${escapeHtml(value)}</textarea>
    </label>
  `;
}

function loadGaokaoValues() {
  try {
    return JSON.parse(localStorage.getItem(gaokaoStorageKey)) || {};
  } catch (error) {
    return {};
  }
}

function saveGaokaoValues() {
  const values = loadGaokaoValues();
  gaokaoForm.querySelectorAll("[data-gaokao-field]").forEach((field) => {
    values[field.dataset.gaokaoField] = field.value;
  });
  localStorage.setItem(gaokaoStorageKey, JSON.stringify(values));
}

function saveGaokaoField(field) {
  const values = loadGaokaoValues();
  values[field.dataset.gaokaoField] = field.value;
  localStorage.setItem(gaokaoStorageKey, JSON.stringify(values));
}

function loadGaokaoReport() {
  try {
    return JSON.parse(localStorage.getItem(gaokaoReportStorageKey)) || null;
  } catch (error) {
    return null;
  }
}

function saveGaokaoReport(report) {
  localStorage.setItem(gaokaoReportStorageKey, JSON.stringify(report));
}

function generateGaokaoDemoReport() {
  const report = {
    title: "兴趣与职业发展分析报告",
    brand: "张老师测评",
    quote: "找到想做的事，不是为了成功，而是为了成为更好的自己。",
    student: {
      name: "小明",
      age: "16岁",
      gender: "男",
      date: new Date().toISOString().slice(0, 10)
    },
    radar: [
      { name: "热情驱动力", score: 8.6 },
      { name: "逻辑分析力", score: 7.8 },
      { name: "创造力", score: 8.1 },
      { name: "表达沟通力", score: 8.3 },
      { name: "学习能力", score: 8.8 },
      { name: "领导组织力", score: 7.3 },
      { name: "共情与服务力", score: 8.5 },
      { name: "执行力", score: 7.9 }
    ],
    coreFindings: [
      { title: "热情驱动力强", description: "你对帮助他人、知识分享和教育成长有明显热情，容易从他人的成长反馈中获得成就感。" },
      { title: "学习能力突出", description: "你习惯快速吸收新知识并总结表达，适合需要持续学习、结构化理解和输出的方向。" },
      { title: "共情与服务意识强", description: "你愿意理解他人处境，乐于沟通与支持，适合教育、心理、社会服务和用户研究相关方向。" },
      { title: "表达与沟通优势明显", description: "你擅长把想法讲清楚，适合内容创作、课程设计、咨询沟通和产品说明类工作。" },
      { title: "适合方向", description: "综合来看，你适合教育心理、内容传播、产品体验和社会服务等把知识、沟通与创造结合起来的领域。" }
    ],
    majors: [
      { name: "教育学", reason: "适合你热爱教育、帮助他人成长的特质", match: 92, url: getSunshineMajorUrl("", "教育学") },
      { name: "心理学", reason: "适合你对人性、行为和心理机制的兴趣", match: 90, url: getSunshineMajorUrl("", "心理学") },
      { name: "汉语言文学（师范方向）", reason: "适合你表达、写作与知识传递优势", match: 88, url: getSunshineMajorUrl("", "汉语言文学") },
      { name: "传播学", reason: "适合你喜欢内容创作、沟通与影响他人", match: 86, url: getSunshineMajorUrl("", "传播学") },
      { name: "计算机科学与技术（教育科技方向）", reason: "适合将教育理解与技术工具结合", match: 84, url: getSunshineMajorUrl("", "计算机科学与技术") },
      { name: "数字媒体技术", reason: "适合你对内容创作、设计与技术结合的兴趣", match: 82, url: getSunshineMajorUrl("", "数字媒体技术") },
      { name: "社会学", reason: "适合你关注社会、人群关系和公共议题", match: 80, url: getSunshineMajorUrl("", "社会学") },
      { name: "应用心理学", reason: "适合你分析、理解和帮助他人的能力", match: 78, url: getSunshineMajorUrl("", "应用心理学") },
      { name: "工业设计", reason: "适合你关注用户体验与实用创造", match: 76, url: getSunshineMajorUrl("", "工业设计") },
      { name: "市场营销", reason: "适合你善于沟通、理解用户与传播价值", match: 74, url: getSunshineMajorUrl("", "市场营销") }
    ],
    careers: [
      { name: "教育培训师 / 课程设计师", reason: "帮助学生成长，设计有价值的学习内容", match: 93, relatedMajor: "教育学", url: getSunshineMajorUrl("", "教育学") },
      { name: "心理咨询师", reason: "运用心理学知识，帮助他人解决心理困扰", match: 90, relatedMajor: "心理学", url: getSunshineMajorUrl("", "心理学") },
      { name: "内容策划 / 编辑", reason: "创作优质内容，影响和启发更多人", match: 88, relatedMajor: "传播学", url: getSunshineMajorUrl("", "传播学") },
      { name: "产品经理（教育/内容方向）", reason: "结合用户需求与产品设计，创造有价值的产品", match: 86, relatedMajor: "计算机科学与技术", url: getSunshineMajorUrl("", "计算机科学与技术") },
      { name: "用户体验设计师（UX）", reason: "关注用户体验，优化产品与服务", match: 84, relatedMajor: "工业设计", url: getSunshineMajorUrl("", "工业设计") },
      { name: "新媒体运营 / 自媒体博主", reason: "通过内容传播影响力，实现个人价值", match: 82, relatedMajor: "数字媒体技术", url: getSunshineMajorUrl("", "数字媒体技术") },
      { name: "人力资源管理者", reason: "关注人才发展与组织成长，连接人与机会", match: 78, relatedMajor: "人力资源管理", url: getSunshineMajorUrl("", "人力资源管理") },
      { name: "社会工作者 / 公益项目负责人", reason: "帮助弱势群体，推动社会正向改变", match: 76, relatedMajor: "社会工作", url: getSunshineMajorUrl("", "社会工作") },
      { name: "数据分析师（教育/用户方向）", reason: "用数据驱动决策，优化教育或产品体验", match: 74, relatedMajor: "数据科学与大数据技术", url: getSunshineMajorUrl("", "数据科学与大数据技术") },
      { name: "演讲教练 / 表达培训师", reason: "帮助他人提升表达能力与自信心", match: 72, relatedMajor: "播音与主持艺术", url: getSunshineMajorUrl("", "播音与主持艺术") }
    ],
    advantages: ["学习能力强，理解快", "共情力强，乐于助人", "表达清晰，沟通能力佳", "有创造力，思维活跃", "有责任感，愿意投入"],
    suggestions: ["深耕表达与写作能力，持续输出观点", "学习心理学相关知识，提升洞察力", "尝试内容创作或教育相关实践", "培养数据思维，提升逻辑分析能力", "参与社会实践，增强社会洞察力"],
    parentSuggestions: ["鼓励孩子探索与表达，给予试错空间", "关注过程而非结果，肯定他的努力", "支持他在教育、心理、内容等领域探索", "帮助他建立长期目标与阶段计划", "多倾听，成为孩子的支持者与伙伴"],
    summary: "愿你在热爱的领域，发光发热。"
  };
  saveGaokaoReport(report);
  renderGaokaoForm();
  window.requestAnimationFrame(() => {
    document.querySelector("#gaokaoReportImage")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  showToast("示例报告已生成。");
}

function renderGaokaoReport(report) {
  const student = report.student || {};
  const today = new Date().toISOString().slice(0, 10);
  return `
    <section class="gaokao-report" id="gaokaoReportImage" aria-label="张老师测评分析报告">
      <div class="report-hero">
        <div>
          <span class="report-brand">张老师测评</span>
          <h2>${escapeHtml(report.title || "兴趣与职业发展分析报告")}</h2>
          <p>基于 90 问「重要的事 / 擅长的事 / 喜欢的事」交集分析</p>
          <div class="report-student-line">
            <span>学生姓名：${escapeHtml(student.name || "未填写")}</span>
            <span>年龄：${escapeHtml(student.age || "-")}</span>
            <span>性别：${escapeHtml(student.gender || "-")}</span>
            <span>测评日期：${escapeHtml(student.date || today)}</span>
          </div>
        </div>
        <blockquote>
          “${escapeHtml(report.quote || "找到想做的事，是为了成为更好的自己。")}”
          <cite>-- 张老师测评</cite>
        </blockquote>
        <img src="./assets/gaokao-report-student.png" alt="" aria-hidden="true">
      </div>

      <div class="report-grid report-top-grid">
        <article class="report-card">
          <h3><span aria-hidden="true">⌁</span> 能力雷达图</h3>
          ${renderGaokaoRadar(report.radar || [])}
          <p class="report-note">雷达图解读：分数越高代表该维度线索越突出，建议结合专业与职业推荐综合判断。</p>
        </article>
        <article class="report-card">
          <h3><span aria-hidden="true">★</span> 核心发现</h3>
          <div class="finding-list">
            ${(report.coreFindings || []).map((item, index) => `
              <section>
                <i>${index + 1}</i>
                <div>
                  <strong>${escapeHtml(item.title || "核心发现")}</strong>
                  <p>${escapeHtml(item.description || "")}</p>
                </div>
              </section>
            `).join("")}
          </div>
        </article>
      </div>

      <div class="report-grid report-rank-grid">
        ${renderGaokaoRankCard("推荐专业 TOP10", report.majors || [], "major")}
        ${renderGaokaoRankCard("推荐职业 TOP10", report.careers || [], "career")}
      </div>

      <div class="report-grid report-bottom-grid">
        ${renderGaokaoBulletCard("你的优势", report.advantages || [])}
        ${renderGaokaoBulletCard("发展建议", report.suggestions || [])}
        ${renderGaokaoBulletCard("给家长的建议", report.parentSuggestions || [])}
      </div>

      <div class="report-footer">
        <strong>${escapeHtml(report.summary || "报告仅供参考，最终选择权在孩子自己手中。")}</strong>
        <span>点击专业或职业条目，可打开阳光高考专业库链接。</span>
      </div>
    </section>
  `;
}

function renderGaokaoRadar(items) {
  const dimensions = normalizeReportItems(items, 8, (index) => ({ name: `维度${index + 1}`, score: 0 }));
  const cx = 180;
  const cy = 170;
  const radius = 110;
  const points = dimensions.map((item, index) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / dimensions.length;
    const value = Math.max(0, Math.min(10, Number(item.score) || 0)) / 10;
    return `${cx + Math.cos(angle) * radius * value},${cy + Math.sin(angle) * radius * value}`;
  }).join(" ");
  const axes = dimensions.map((item, index) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / dimensions.length;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    const labelX = cx + Math.cos(angle) * (radius + 42);
    const labelY = cy + Math.sin(angle) * (radius + 34);
    return `
      <line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}"></line>
      <text x="${labelX}" y="${labelY}" text-anchor="middle">${escapeHtml(item.name || "")}</text>
      <text x="${labelX}" y="${labelY + 18}" text-anchor="middle" class="score">${Number(item.score || 0).toFixed(1)}</text>
    `;
  }).join("");
  const rings = [0.25, 0.5, 0.75, 1].map((scale) => {
    const ringPoints = dimensions.map((_, index) => {
      const angle = -Math.PI / 2 + (Math.PI * 2 * index) / dimensions.length;
      return `${cx + Math.cos(angle) * radius * scale},${cy + Math.sin(angle) * radius * scale}`;
    }).join(" ");
    return `<polygon points="${ringPoints}" class="ring"></polygon>`;
  }).join("");
  return `
    <svg class="report-radar" viewBox="0 0 360 340" role="img" aria-label="能力雷达图">
      ${rings}
      ${axes}
      <polygon points="${points}" class="area"></polygon>
      <polygon points="${points}" class="line"></polygon>
    </svg>
  `;
}

function renderGaokaoRankCard(title, items, type) {
  const list = normalizeReportItems(items, 10, () => ({ name: "待补充方向", reason: "继续补充答案后可获得更精确推荐。", match: 80 }));
  return `
    <article class="report-card">
      <h3><span aria-hidden="true">${type === "major" ? "◈" : "▣"}</span> ${title}</h3>
      <ol class="report-rank-list">
        ${list.map((item, index) => {
          const url = getSunshineMajorUrl(item.url, item.relatedMajor || item.name);
          return `
            <li>
              <a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">
                <b>${index + 1}</b>
                <span><strong>${escapeHtml(item.name || "")}</strong><em>${escapeHtml(item.reason || "")}</em></span>
                <i>${Math.round(Number(item.match) || 0)}%</i>
              </a>
            </li>
          `;
        }).join("")}
      </ol>
      <p class="report-note">说明：匹配度综合考虑兴趣、能力、价值观与未来发展潜力。</p>
    </article>
  `;
}

function renderGaokaoBulletCard(title, items) {
  return `
    <article class="report-card compact-report-card">
      <h3>${escapeHtml(title)}</h3>
      <ul>${normalizeReportItems(items, 5, () => "继续补充答案后，可获得更精确建议。").map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </article>
  `;
}

function normalizeReportItems(items, length, fallbackFactory) {
  const result = Array.isArray(items) ? items.slice(0, length) : [];
  while (result.length < length) result.push(fallbackFactory(result.length));
  return result;
}

function getSunshineMajorUrl(url, name) {
  const value = String(url || "").trim();
  if (value.startsWith("https://gaokao.chsi.com.cn/")) return value;
  return `https://gaokao.chsi.com.cn/zyk/zybk/?keyword=${encodeURIComponent(name || "")}`;
}

function updateGaokaoProgress() {
  const values = loadGaokaoValues();
  const groupCounts = gaokaoQuestionGroups.map((group) => getGaokaoGroupAnswerCount(group.id, values));
  const total = groupCounts.reduce((sum, count) => sum + count, 0);
  const totalCount = gaokaoForm.querySelector("#gaokaoTotalCount");
  const totalBar = gaokaoForm.querySelector("#gaokaoTotalBar");
  if (totalCount) totalCount.textContent = `${total}/90`;
  if (totalBar) totalBar.style.width = `${Math.round((total / 90) * 100)}%`;
  const step = getGaokaoQuestionSteps()[gaokaoCurrentStep];
  if (!step) return;
  const currentCount = getGaokaoGroupAnswerCount(step.group.id, values);
  const countNode = gaokaoForm.querySelector(`[data-gaokao-count="${step.group.id}"]`);
  const barNode = gaokaoForm.querySelector(`[data-gaokao-bar="${step.group.id}"]`);
  const messageNode = gaokaoForm.querySelector(`[data-gaokao-message="${step.group.id}"]`);
  if (countNode) countNode.textContent = `${currentCount}/30`;
  if (barNode) barNode.style.width = `${Math.round((currentCount / 30) * 100)}%`;
  if (messageNode) messageNode.textContent = getGaokaoEncouragement(currentCount);
}

function getGaokaoGroupAnswerCount(groupId, values = loadGaokaoValues()) {
  const group = gaokaoQuestionGroups.find((item) => item.id === groupId);
  if (!group) return 0;
  return group.questions.filter((_, index) => String(values[`${group.id}.${index + 1}`] || "").trim()).length;
}

function getGaokaoEncouragement(count) {
  if (count === 0) {
    return "先从一个最有感觉的问题开始写，答案不需要完美，真实更重要。";
  }
  if (count === 30) {
    return "这一组完成了，你离最适合自己的方向又近了一大步。继续下一组，把答案拼完整。";
  }
  return `已经写下 ${count} 个线索，坚持这一组，马上找到你最适合的事了。`;
}

function getGaokaoQuestionSteps() {
  return gaokaoQuestionGroups.flatMap((group) => (
    group.questions.map((question, index) => ({
      id: `${group.id}.${index + 1}`,
      group,
      question,
      groupQuestionIndex: index,
      globalIndex: getGaokaoGlobalQuestionIndex(group.id, index)
    }))
  ));
}

function getGaokaoGlobalQuestionIndex(groupId, questionIndex) {
  let offset = 0;
  for (const group of gaokaoQuestionGroups) {
    if (group.id === groupId) return offset + questionIndex;
    offset += group.questions.length;
  }
  return questionIndex;
}

function moveGaokaoStep(direction) {
  saveGaokaoValues();
  const maxStep = getGaokaoQuestionSteps().length;
  gaokaoCurrentStep = Math.max(0, Math.min(maxStep, gaokaoCurrentStep + direction));
  renderGaokaoForm();
}

function focusGaokaoCurrentTextarea() {
  window.requestAnimationFrame(() => {
    const field = gaokaoForm.querySelector("[data-gaokao-question-input]") || gaokaoForm.querySelector("[data-gaokao-field]");
    if (field) field.focus();
  });
}

async function analyzeGaokaoReport() {
  saveGaokaoValues();
  gaokaoIsAnalyzing = true;
  renderGaokaoForm();
  try {
    const response = await fetch("/api/gaokao/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(buildGaokaoAnalyzePayload())
    });
    const result = await response.json();
    if (!response.ok || !result.ok) {
      throw new Error(result.error || "AI 分析失败");
    }
    saveGaokaoReport(result.report);
    showToast("AI 分析报告已生成。");
  } catch (error) {
    showToast(error.message || "请启动本地后端并配置千问 Key。");
  } finally {
    gaokaoIsAnalyzing = false;
    renderGaokaoForm();
  }
}

function buildGaokaoAnalyzePayload() {
  const values = loadGaokaoValues();
  return {
    brand: "张老师测评",
    generatedAt: new Date().toISOString(),
    info: buildGaokaoInfoPayload(values),
    groups: gaokaoQuestionGroups.map((group) => ({
      id: group.id,
      title: group.title,
      answers: group.questions.map((question, index) => ({
        question,
        answer: values[`${group.id}.${index + 1}`] || ""
      }))
    }))
  };
}

function buildGaokaoInfoPayload(values) {
  const info = {};
  gaokaoInfoSections.forEach((section) => {
    info[section.id] = {};
    section.fields.forEach(([id, label]) => {
      info[section.id][label] = values[`info.${id}`] || "";
    });
  });
  return info;
}

function bindPageActions() {
  admissionHome?.addEventListener("click", (event) => {
    const provinceButton = event.target.closest("[data-province]");
    if (provinceButton) {
      setAdmissionProvince(provinceButton.dataset.province);
      return;
    }

    const filterButton = event.target.closest("[data-filter]");
    if (filterButton) {
      setAdmissionFilter(filterButton.dataset.filter);
      return;
    }

    const quickFilter = event.target.closest("[data-admission-filter]");
    if (quickFilter) {
      setAdmissionFilter(quickFilter.dataset.admissionFilter);
      admissionSchoolList?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const actionButton = event.target.closest("[data-admission-action]");
    if (actionButton) {
      const action = actionButton.dataset.admissionAction;
      if (action === "scroll-learning") {
        document.querySelector("#learningLibraryHome")?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (action === "focus-schools") {
        admissionSchoolList?.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
      if (action === "open-gaokao") {
        activeNavId = "gaokao";
        renderNav();
        showGaokaoPage();
      }
      return;
    }

    const schoolCard = event.target.closest("[data-school-id]");
    if (schoolCard) {
      openMagicSchoolModal(getAdmissionSchoolById(schoolCard.dataset.schoolId), schoolCard);
    }
  });

  admissionRegionButton?.addEventListener("click", () => {
    const provinces = window.gaokaoSchoolData?.provinces || [];
    const currentIndex = provinces.findIndex((item) => item.name === admissionActiveProvince);
    const next = provinces[(currentIndex + 1) % provinces.length];
    if (next) setAdmissionProvince(next.name);
  });

  magicSchoolModal?.addEventListener("click", (event) => {
    if (event.target.closest("[data-magic-close]")) closeMagicSchoolModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && magicSchoolModal?.getAttribute("aria-hidden") === "false") {
      closeMagicSchoolModal();
    }
  });

  sideNav.addEventListener("click", (event) => {
    const button = event.target.closest("[data-nav-id]");
    if (!button) return;
    const target = navItems.find((item) => item.id === button.dataset.navId);
    if (!target) return;
    if (target.id === "english") {
      if (!requireLogin("英文学习")) return;
      activeNavId = target.id;
      renderNav();
      showEnglishLearningPage();
      return;
    }
    if (target.id === "gaokao" && target.href) {
      window.location.href = target.href;
      return;
    }
    if (target.id === "sentence") {
      activeNavId = target.id;
      renderNav();
      showSentencePage();
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
    if (course?.href) {
      window.location.href = course.href;
      return;
    }
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
    if (entry.id === "sentence") {
      activeNavId = "sentence";
      renderNav();
      showSentencePage();
      return;
    }
    showToast(`${entry.title}已预留入口，后续接动态页面。`);
  });

  todayGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-task-id]");
    if (!button) return;
    const task = todayTasks.find((item) => item.id === button.dataset.taskId);
    if (task.id === "task-english") {
      if (!requireLogin("英文学习")) return;
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

  sentenceSearchButton.addEventListener("click", renderSentenceResults);
  sentenceSearchInput.addEventListener("input", renderSentenceResults);
  sentenceTypeSelect.addEventListener("change", renderSentenceResults);
  sentenceKeywordRow.addEventListener("click", (event) => {
    const button = event.target.closest("[data-sentence-keyword]");
    if (!button) return;
    sentenceSearchInput.value = button.dataset.sentenceKeyword;
    renderSentenceResults();
  });
  sentenceResultList.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-copy-sentence]");
    if (!button) return;
    await copySentenceText(button.dataset.copySentence);
  });

  document.querySelector("#noticeButton").addEventListener("click", () => {
    showToast("你有3条学习提醒：完成英文学习卡、整理资料库、继续好句积累。");
  });

  loginEntryButton?.addEventListener("click", (event) => {
    event.stopPropagation();
    if (isLoggedIn) {
      toggleLoginDropdown();
      return;
    }
    openLoginPage();
  });

  logoutButton?.addEventListener("click", logoutCurrentUser);
  loginDropdown?.addEventListener("click", (event) => event.stopPropagation());

  document.addEventListener("click", (event) => {
    if (!event.target.closest("#loginMenu")) closeLoginDropdown();
  });

  document.querySelector("#showAllButton").addEventListener("click", () => {
    searchInput.value = "";
    renderCourses(courses);
    showToast("已展示全部推荐内容。");
  });

  englishUnitGrid.addEventListener("click", (event) => {
    const unitButton = event.target.closest("[data-english-unit]");
    if (!unitButton) return;
    if (unitButton.disabled || unitButton.classList.contains("is-empty")) {
      showToast("这个单元资料还没有导入，暂时不能进入。");
      return;
    }
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
      if (!requireLogin("资料下载")) return;
      window.open(file.dataset.fileUrl, "_blank");
    }
  });

  librarySearchInput.addEventListener("input", renderLibraryFiles);

  libraryUploadInput.addEventListener("change", async () => {
    if (!libraryCurrentNode || !libraryUploadInput.files.length) return;
    if (!requireLogin("资料上传")) {
      libraryUploadInput.value = "";
      return;
    }
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

  gaokaoForm.addEventListener("input", (event) => {
    if (!event.target.matches("[data-gaokao-field]")) return;
    saveGaokaoField(event.target);
    updateGaokaoProgress();
  });

  gaokaoForm.addEventListener("click", (event) => {
    const button = event.target.closest("[data-gaokao-action]");
    if (!button) return;
    const action = button.dataset.gaokaoAction;
    if (action === "prev") {
      moveGaokaoStep(-1);
      return;
    }
    if (action === "next") {
      if (gaokaoCurrentStep >= getGaokaoQuestionSteps().length) {
        saveGaokaoValues();
        showToast("采集表已保存。");
        return;
      }
      moveGaokaoStep(1);
      return;
    }
    if (action === "skip-info") {
      saveGaokaoValues();
      showToast("已跳过补充信息，前面填写的 90 问已保存。");
      return;
    }
    if (action === "demo-report") {
      generateGaokaoDemoReport();
      return;
    }
    if (action === "analyze") {
      analyzeGaokaoReport();
    }
  });

  gaokaoForm.addEventListener("keydown", (event) => {
    if (!event.target.matches("[data-gaokao-question-input]")) return;
    if (event.key !== "Enter" || event.shiftKey) return;
    event.preventDefault();
    moveGaokaoStep(1);
  });
}

function showGaokaoPage() {
  homeView.classList.add("is-hidden");
  libraryView.classList.add("is-hidden");
  sentenceView.classList.add("is-hidden");
  englishLearningView.classList.add("is-hidden");
  gaokaoView.classList.remove("is-hidden");
  renderGaokaoForm();
  if (window.location.hash !== "#gaokao") {
    window.location.hash = "gaokao";
  }
}

function showEnglishLearningPage() {
  if (!requireLogin("英文学习")) return;
  homeView.classList.add("is-hidden");
  libraryView.classList.add("is-hidden");
  sentenceView.classList.add("is-hidden");
  gaokaoView.classList.add("is-hidden");
  englishLearningView.classList.remove("is-hidden");
  renderEnglishLearningPage();
  if (window.location.hash !== "#english") {
    window.location.hash = "english";
  }
}

function showSentencePage() {
  homeView.classList.add("is-hidden");
  libraryView.classList.add("is-hidden");
  englishLearningView.classList.add("is-hidden");
  gaokaoView.classList.add("is-hidden");
  sentenceView.classList.remove("is-hidden");
  renderSentenceResults();
  if (window.location.hash !== "#sentence") {
    window.location.hash = "sentence";
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
      const lesson = findEnglishLesson(unit);
      const hasResource = hasEnglishUnitResource(selectedGrade, unit);
      const unitTitle = getDisplayEnglishUnitTitle(selectedGrade, unit, lesson);
      return `
        <button class="learning-unit-card ${hasResource ? "" : "is-empty"}" type="button" data-english-unit="${unit}" ${hasResource ? "" : "disabled"}>
          <span class="learning-unit-name">${escapeHtml(unitTitle)}</span>
          ${hasResource ? renderEnglishLearningCount(learner, selectedGrade, unit) : '<span class="learning-unit-count">暂无资料</span>'}
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

function getEnglishUnitLearningCount(learner, gradeOption, unit) {
  const counts = readEnglishLearningCounts();
  const count = counts[getEnglishLearningCountKey(learner, gradeOption, unit)];
  return Number.isFinite(Number(count)) ? Number(count) : 0;
}

function renderEnglishLearningCount(learner, gradeOption, unit) {
  const count = getEnglishUnitLearningCount(learner, gradeOption, unit);
  return `<span class="learning-unit-count">已学习 ${count} 次</span>`;
}

function incrementEnglishUnitLearningCount(learner, gradeOption, unit) {
  const counts = readEnglishLearningCounts();
  const key = getEnglishLearningCountKey(learner, gradeOption, unit);
  counts[key] = (Number(counts[key]) || 0) + 1;
  writeEnglishLearningCounts(counts);
}

function getEnglishLearningCountKey(learner, gradeOption, unit) {
  return `${learner.id}:${gradeOption.grade}:${gradeOption.semester}:${unit}`;
}

function readEnglishLearningCounts() {
  try {
    return JSON.parse(window.localStorage.getItem(englishLearningCountStorageKey) || "{}");
  } catch (error) {
    return {};
  }
}

function writeEnglishLearningCounts(counts) {
  try {
    window.localStorage.setItem(englishLearningCountStorageKey, JSON.stringify(counts));
  } catch (error) {
    showToast("当前浏览器无法保存学习次数。");
  }
}

function getEnglishProgressStatus(progress) {
  if (progress >= 100) return "已完成";
  if (progress > 0) return "学习中";
  return "未开始";
}

function openEnglishUnit(unit) {
  const learner = getActiveEnglishLearner();
  const selectedGrade = getSelectedEnglishGrade();
  if (!hasEnglishUnitResource(selectedGrade, unit)) {
    showToast("这个单元资料还没有导入，暂时不能进入。");
    return;
  }
  incrementEnglishUnitLearningCount(learner, selectedGrade, unit);
  const params = new URLSearchParams({
    grade: selectedGrade.grade,
    semester: selectedGrade.semester,
    unit: `unit${unit}`
  });
  window.location.href = `./english-card.html?${params.toString()}`;
}

async function loadEnglishLessonBook() {
  try {
    const response = await fetch("./data/english/grade3-up.json");
    if (!response.ok) throw new Error("english data unavailable");
    englishLessonBook = await response.json();
  } catch (error) {
    englishLessonBook = fallbackEnglishLessonBook;
  }
  englishLessonBook.units = (englishLessonBook.units || []).map((lesson) => normalizeEnglishLesson(lesson));
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

function normalizeEnglishLesson(lesson) {
  const unit = Number(lesson?.unit) || 1;
  const unitTitle = getCompleteEnglishUnitTitle(lesson, unit);
  const readingTitle = getCompleteEnglishReadingTitle(lesson, unitTitle, unit);
  return {
    ...lesson,
    unit,
    unitTitle,
    lesson: lesson?.lesson || String(unit),
    reading: {
      ...(lesson?.reading || {}),
      title: readingTitle
    }
  };
}

function getCompleteEnglishUnitTitle(lesson, unit) {
  const catalogTitle = findEnglishUnitTitle(getSelectedEnglishGrade(), unit)?.unitTitle;
  const title = removeGarbledText(String(lesson?.unitTitle || "").trim());
  const titleUnit = title.match(/^Unit\s+(\d+)/i);
  if (title && (!titleUnit || Number(titleUnit[1]) === Number(unit))) return title;
  if (catalogTitle) return catalogTitle;
  const englishTitle = getEnglishTitleText(lesson?.title || lesson?.reading?.title || "");
  return englishTitle ? `Unit ${unit}  ${englishTitle}` : `Unit ${unit}`;
}

function getCompleteEnglishReadingTitle(lesson, unitTitle, unit) {
  const catalogTitle = findEnglishUnitTitle(getSelectedEnglishGrade(), unit)?.readingTitle;
  const title = removeGarbledText(String(lesson?.reading?.title || lesson?.title || "").trim());
  const unitPrefix = new RegExp(`^Unit\\s+${unit}\\s*`, "i");
  const titleFromUnit = getEnglishTitleText(unitTitle.replace(unitPrefix, ""));
  if (catalogTitle && Number(lesson?.unit) !== Number(unit)) return catalogTitle;
  if (!title) return titleCase(titleFromUnit || `Unit ${unit}`);
  if (titleFromUnit && title.split(/\s+/).length <= 1 && titleFromUnit.split(/\s+/).length > 1) {
    return titleCase(titleFromUnit);
  }
  if (catalogTitle && hasGarbledText(title)) return catalogTitle;
  return title;
}

function getEnglishTitleText(value) {
  return String(value || "")
    .replace(/^Unit\s+\d+\s*/i, "")
    .split(/[\u4e00-\u9fff]/)[0]
    .replace(/[?？]+/g, "")
    .trim();
}

function titleCase(value) {
  return String(value || "").replace(/\b[A-Za-z][A-Za-z']*/g, (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  });
}

function getDisplayEnglishUnitTitle(gradeOption, unit, lesson) {
  return removeGarbledText(lesson?.unitTitle) || findEnglishUnitTitle(gradeOption, unit)?.unitTitle || `Unit ${unit}`;
}

function findEnglishUnitTitle(gradeOption, unit) {
  return englishUnitTitleCatalog.find((item) => (
    item.grade === gradeOption.grade &&
    item.semester === gradeOption.semester &&
    Number(item.unit) === Number(unit)
  ));
}

function hasGarbledText(value) {
  return /\?{2,}|？{2,}/.test(String(value || ""));
}

function removeGarbledText(value) {
  return String(value || "")
    .replace(/\s*[?？]{2,}\s*/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function hasEnglishUnitResource(gradeOption, unit) {
  const catalog = englishResourceCatalog.find((item) => item.grade === gradeOption.grade && item.semester === gradeOption.semester);
  return Boolean(catalog?.units.includes(Number(unit)));
}

function getEnglishUnitMeta(lesson) {
  if (lesson) return `${getLessonWordCount(lesson)} 个单词`;
  return "可学习";
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
    if (!requireLogin("英文学习")) return;
    activeNavId = "english";
    renderNav();
    showEnglishLearningPage();
    return;
  }
  if (window.location.hash === "#gaokao") {
    window.location.href = "./admission.html";
    return;
  }
  if (window.location.hash === "#sentence") {
    activeNavId = "sentence";
    renderNav();
    showSentencePage();
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
  sentenceView.classList.add("is-hidden");
  englishLearningView.classList.add("is-hidden");
  gaokaoView.classList.add("is-hidden");
}

function showAdmissionHomePage() {
  homeView.classList.remove("is-hidden");
  libraryView.classList.add("is-hidden");
  sentenceView.classList.add("is-hidden");
  englishLearningView.classList.add("is-hidden");
  gaokaoView.classList.add("is-hidden");
  renderAdmissionHome();
  if (window.location.hash !== "#gaokao") {
    window.location.hash = "gaokao";
  }
  window.requestAnimationFrame(() => {
    admissionHome?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function showLibraryRoot() {
  homeView.classList.add("is-hidden");
  sentenceView.classList.add("is-hidden");
  englishLearningView.classList.add("is-hidden");
  gaokaoView.classList.add("is-hidden");
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
  sentenceView.classList.add("is-hidden");
  englishLearningView.classList.add("is-hidden");
  gaokaoView.classList.add("is-hidden");
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
      <small>${isLoggedIn ? "点击下载" : "登录后下载"}</small>
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

async function copySentenceText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast("好句已复制。");
  } catch (error) {
    showToast("当前浏览器不支持自动复制，请手动选中文字。");
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
