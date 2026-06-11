const fallbackLesson = {
  unitTitle: "Unit 3  Amazing animals",
  grade: "三年级上",
  gradeLabel: "三年级上",
  lesson: "3",
  keywords: [
    { word: "sister", imagePrompt: "friendly young girl family member portrait" },
    { word: "have", imagePrompt: "a child holding a toy to show have" },
    { word: "ear", imagePrompt: "single clear ear body part" },
    { word: "share", imagePrompt: "two children sharing one toy happily" },
    { word: "aunt", imagePrompt: "friendly adult woman family member portrait" },
    { word: "arm", imagePrompt: "single clear arm body part" },
    { word: "eye", imagePrompt: "single clear eye body part" },
    { word: "help", imagePrompt: "one child helping another pick up books" },
    { word: "cousin", imagePrompt: "friendly child family member portrait" },
    { word: "grandma", imagePrompt: "friendly grandmother portrait" },
    { word: "smile", imagePrompt: "smiling child face" }
  ],
  keySentences: [
    "Is this your sister?",
    "Is that your brother?"
  ],
  talk: [
    { speaker: "A", text: "Is this your sister?" },
    { speaker: "B", text: "Yes, it is." },
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
    lines: [
      "I have a sister.",
      "I have a cousin.",
      "I help my grandma.",
      "We share and smile."
    ]
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
};

const unitTitleCatalog = {
  1: { unitTitle: "Unit 1  Making friends 结交朋友", readingTitle: "Making Friends" },
  2: { unitTitle: "Unit 2  Different families 不同的家庭", readingTitle: "Different Families" },
  3: { unitTitle: "Unit 3  Amazing animals 神奇的动物", readingTitle: "Amazing Animals" },
  4: { unitTitle: "Unit 4  Plants around us 我们身边的植物", readingTitle: "Plants Around Us" },
  5: { unitTitle: "Unit 5  The colourful world 多彩的世界（颜色）", readingTitle: "The Colourful World" },
  6: { unitTitle: "Unit 6  Useful numbers 有用的数字（1-10）", readingTitle: "Useful Numbers" }
};

const artMap = {
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

document.getElementById("backButton").addEventListener("click", () => {
  if (window.history.length > 1) {
    window.history.back();
    return;
  }
  window.location.href = "./index.html#english";
});

document.getElementById("printButton").addEventListener("click", () => {
  window.print();
});

loadLesson().then(renderLesson);

async function loadLesson() {
  const targetUnit = getTargetUnit();
  const inlineBook = window.ENGLISH_LESSON_BOOK;
  if (inlineBook?.units) {
    const lesson = inlineBook.units.find((item) => Number(item.unit) === targetUnit);
    if (lesson) return normalizeLesson(lesson, targetUnit);
  }
  try {
    const response = await fetch("./data/english/grade3-up.json");
    if (!response.ok) {
      throw new Error(`English data request failed: ${response.status}`);
    }
    const book = await response.json();
    const lesson = book.units.find((item) => Number(item.unit) === targetUnit);
    return normalizeLesson(lesson || fallbackLesson, targetUnit);
  } catch (error) {
    return normalizeLesson(fallbackLesson, targetUnit);
  }
}

function renderLesson(data) {
  document.title = `${data.unitTitle} - 英文学习卡片 - 蒙蒙学习库`;
  setText("frontTitle", data.unitTitle);
  setText("gradeText", data.gradeLabel || data.grade);
  setText("lessonText", data.lesson);
  setText("homeworkText", data.homework);
  setText("readingTitle", data.reading?.title || "Let's Read");

  renderWords(data.keywords || []);
  renderSentences(data.keySentences || []);
  renderDialogue("talkList", data.talk || []);
  renderPractice(data.practice || []);
  renderDialogue("dialogueList", data.dialogue || []);
  renderReading(data.reading?.lines || []);
  renderGrammar(data.grammar || []);
  renderSectionVisuals(data.sectionImages || {});
  renderExercise(data.exercise || []);
  renderSummary(data.summaryChecks || []);
  renderStars(data.selfRating?.maxStars || 5, data.selfRating?.value || 0);
}

function normalizeLesson(lesson, targetUnit) {
  const unit = Number(lesson?.unit) || targetUnit || 1;
  const unitTitle = getCompleteUnitTitle(lesson, unit);
  const readingTitle = getCompleteReadingTitle(lesson, unitTitle, unit);
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

function getCompleteUnitTitle(lesson, unit) {
  const catalogTitle = unitTitleCatalog[unit]?.unitTitle;
  const title = removeGarbledText(lesson?.unitTitle);
  const titleUnit = title.match(/^Unit\s+(\d+)/i);
  if (title && (!titleUnit || Number(titleUnit[1]) === Number(unit))) return title;
  if (catalogTitle) return catalogTitle;
  const titleSource = lesson?.title || lesson?.reading?.title || "";
  const englishTitle = getEnglishTitle(titleSource);
  return englishTitle ? `Unit ${unit}  ${englishTitle}` : `Unit ${unit}`;
}

function getCompleteReadingTitle(lesson, unitTitle, unit) {
  const catalogTitle = unitTitleCatalog[unit]?.readingTitle;
  const title = removeGarbledText(lesson?.reading?.title || lesson?.title || "");
  const titleFromUnit = getEnglishTitle(unitTitle.replace(new RegExp(`^Unit\\s+${unit}\\s*`, "i"), ""));
  if (catalogTitle && Number(lesson?.unit) !== Number(unit)) return catalogTitle;
  if (!title) return titleCase(titleFromUnit || catalogTitle || `Unit ${unit}`);
  if (titleFromUnit && title.split(/\s+/).length <= 1 && titleFromUnit.split(/\s+/).length > 1) {
    return titleCase(titleFromUnit);
  }
  return title;
}

function getEnglishTitle(value) {
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

function removeGarbledText(value) {
  return String(value || "")
    .replace(/\s*[?？]{2,}\s*/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function setText(id, value) {
  document.getElementById(id).textContent = value;
}

function renderWords(words) {
  document.getElementById("wordGrid").innerHTML = words
    .map((item) => `
      <div class="word-card" title="${escapeHtml(item.imagePrompt)}">
        ${renderWordArt(item.word, item.image, "word-art")}
        <strong>${escapeHtml(item.word)}</strong>
      </div>
    `)
    .join("");
}

function renderSentences(sentences) {
  document.getElementById("sentenceList").innerHTML = sentences
    .map((sentence) => `<span class="bubble">${escapeHtml(sentence)}</span>`)
    .join("");
}

function renderDialogue(targetId, lines) {
  document.getElementById(targetId).innerHTML = lines
    .map((line) => `<p><span>${escapeHtml(line.speaker)}:</span> ${escapeHtml(line.text)}</p>`)
    .join("");
}

function renderPractice(items) {
  document.getElementById("practiceGrid").innerHTML = items
    .map((item, index) => `
      <div class="practice-item" title="${escapeHtml(item.imagePrompt)}">
        <div class="practice-index">${index + 1}.</div>
        ${renderWordArt(item.answer, item.image, "practice-art")}
        <div class="choice-list">
          ${item.options.map((option) => `<span>${escapeHtml(option)}</span>`).join("")}
        </div>
      </div>
    `)
    .join("");
}

function renderReading(lines) {
  document.getElementById("readingLines").innerHTML = lines
    .map((line) => `<li>${escapeHtml(line)}</li>`)
    .join("");
}

function renderGrammar(items) {
  document.getElementById("grammarList").innerHTML = items
    .map((item) => `<li><strong>${escapeHtml(item.pattern)}</strong> ${escapeHtml(item.meaning)}</li>`)
    .join("");
}

function renderSectionVisuals(images) {
  renderSectionVisual("dialogueVisual", images.dialogue);
  renderSectionVisual("readVisual", images.read);
  renderSectionVisual("grammarVisual", images.grammar);
}

function renderSectionVisual(targetId, image) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = image
    ? `<img src="${escapeHtml(image)}" alt="" aria-hidden="true">`
    : "";
}

function renderExercise(items) {
  document.getElementById("exerciseGrid").innerHTML = items
    .map((item, index) => `
      <div class="exercise-item" title="${escapeHtml(item.imagePrompt)}">
        <div class="exercise-index">${index + 1}.</div>
        ${renderWordArt(item.answer, item.image, "exercise-art")}
        <div class="exercise-answer"></div>
      </div>
    `)
    .join("");
}

function renderSummary(items) {
  document.getElementById("summaryChecks").innerHTML = items
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
}

function renderStars(maxStars, value) {
  const stars = Array.from({ length: maxStars }, (_, index) => (index < value ? "★" : "☆")).join("");
  document.getElementById("starRating").textContent = stars;
}

function getArt(word) {
  return artMap[word] || word.slice(0, 1).toUpperCase();
}

function renderWordArt(word, image, className) {
  if (image) {
    return `<img class="${className}" src="${escapeHtml(image)}" alt="" aria-hidden="true">`;
  }
  return `<span class="${className}" aria-hidden="true">${getArt(word)}</span>`;
}

function getTargetUnit() {
  const pageMatch = window.location.pathname.match(/english-card-u(\d)\.html$/i);
  if (pageMatch) return Number(pageMatch[1]);
  const params = new URLSearchParams(window.location.search);
  const queryUnit = params.get("unit") || params.get("u");
  const normalized = String(queryUnit || "").replace(/^unit/i, "");
  return Number(normalized) || 3;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
