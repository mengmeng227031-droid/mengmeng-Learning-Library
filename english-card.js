const fallbackLesson = {
  unitTitle: "Unit 3  My Family",
  grade: "K2",
  lesson: "1",
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
  try {
    const response = await fetch("./data/english/grade3-up.json");
    if (!response.ok) {
      throw new Error(`English data request failed: ${response.status}`);
    }
    const book = await response.json();
    const lesson = book.units.find((item) => Number(item.unit) === targetUnit);
    return lesson || fallbackLesson;
  } catch (error) {
    return fallbackLesson;
  }
}

function renderLesson(data) {
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
  renderExercise(data.exercise || []);
  renderSummary(data.summaryChecks || []);
  renderStars(data.selfRating?.maxStars || 5, data.selfRating?.value || 0);
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
