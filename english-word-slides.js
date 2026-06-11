const beginnerSlideCards = [
  {
    title: "PART 1 · Animals",
    words: "lion, elephant, cat, dog, giraffe, have",
    image: "./assets/english/beginner-slides/part-1-animals.png"
  },
  {
    title: "PART 2 · Animals & Body",
    words: "tiger, monkey, rabbit, ear, eye",
    image: "./assets/english/beginner-slides/part-2-animals-body.png"
  },
  {
    title: "PART 3 · Body & Help",
    words: "hand, arm, nose, mouth, help",
    image: "./assets/english/beginner-slides/part-3-body-help.png"
  },
  {
    title: "PART 4 · Actions",
    words: "share, listen, smile, good morning",
    image: "./assets/english/beginner-slides/part-4-actions.png"
  }
];

const wordDecks = {
  beginner1: {
    label: "英文初级1班",
    tip: "4 张整页学习卡：先看图认词，再读句子和对话。",
    cards: beginnerSlideCards
  },
  beginner2: {
    label: "英文初级2班",
    tip: "4 张整页学习卡：左右滑动，一页一练，不做上下滚动。",
    cards: beginnerSlideCards
  }
};

const viewport = document.querySelector("#slideViewport");
const dots = document.querySelector("#slideDots");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const slideCounter = document.querySelector("#slideCounter");
const deckLabel = document.querySelector("#deckLabel");
const lessonTip = document.querySelector("#lessonTip");
const backButton = document.querySelector("#backButton");

let activeIndex = 0;
let activeDeck = getActiveDeck();

renderDeck(activeDeck);
bindSlideActions();
updateSlideState();

function getActiveDeck() {
  const params = new URLSearchParams(window.location.search);
  return wordDecks[params.get("class")] || wordDecks.beginner1;
}

function renderDeck(deck) {
  document.title = `${deck.label} - 英文单词看片 - 蒙蒙学习库`;
  deckLabel.textContent = deck.label;
  lessonTip.textContent = deck.tip;
  viewport.innerHTML = deck.cards.map((card, index) => renderSlide(deck, card, index)).join("");
  dots.innerHTML = deck.cards
    .map((_, index) => `<button type="button" data-slide-dot="${index}" aria-label="第 ${index + 1} 张"></button>`)
    .join("");
}

function renderSlide(deck, card, index) {
  return `
    <article class="word-slide" aria-label="${escapeHtml(card.title)}">
      <figure class="slide-card-panel">
        <img src="${escapeHtml(card.image)}" alt="${escapeHtml(card.title)}：${escapeHtml(card.words)}">
        <figcaption>${escapeHtml(deck.label)} · ${index + 1} / ${deck.cards.length} · ${escapeHtml(card.words)}</figcaption>
      </figure>
    </article>
  `;
}

function bindSlideActions() {
  prevButton.addEventListener("click", () => goToSlide(activeIndex - 1));
  nextButton.addEventListener("click", () => goToSlide(activeIndex + 1));
  dots.addEventListener("click", (event) => {
    const button = event.target.closest("[data-slide-dot]");
    if (!button) return;
    goToSlide(Number(button.dataset.slideDot));
  });
  viewport.addEventListener("scroll", handleViewportScroll, { passive: true });
  viewport.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") goToSlide(activeIndex - 1);
    if (event.key === "ArrowRight") goToSlide(activeIndex + 1);
  });
  backButton.addEventListener("click", () => {
    window.location.href = "./index.html";
  });
}

function handleViewportScroll() {
  const nextIndex = Math.round(viewport.scrollLeft / viewport.clientWidth);
  if (nextIndex === activeIndex) return;
  activeIndex = Math.max(0, Math.min(activeDeck.cards.length - 1, nextIndex));
  updateSlideState();
}

function goToSlide(index) {
  activeIndex = Math.max(0, Math.min(activeDeck.cards.length - 1, index));
  viewport.scrollTo({ left: viewport.clientWidth * activeIndex, behavior: "smooth" });
  updateSlideState();
}

function updateSlideState() {
  slideCounter.textContent = `${activeIndex + 1} / ${activeDeck.cards.length}`;
  prevButton.disabled = activeIndex === 0;
  nextButton.disabled = activeIndex === activeDeck.cards.length - 1;
  dots.querySelectorAll("[data-slide-dot]").forEach((button) => {
    button.classList.toggle("is-active", Number(button.dataset.slideDot) === activeIndex);
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
