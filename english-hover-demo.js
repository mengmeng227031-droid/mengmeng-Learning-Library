class LearningItem {
  constructor(config) {
    this.config = config;
  }

  render() {
    const article = document.createElement("article");
    article.className = `learning-item ${this.config.type}-item`;
    article.innerHTML = `<h2>${this.config.title}</h2>`;
    return article;
  }

  tokenStyle(color) {
    return `--token-color: ${color}`;
  }
}

class VocabularyItem extends LearningItem {
  render() {
    const article = super.render();
    article.style.setProperty("--token-color", this.config.highlightColor);
    article.innerHTML += `
      <div class="word-stage">
        <img src="${this.config.image}" alt="">
        <div>
          <span class="word-text" tabindex="0">${this.config.word}</span>
          ${this.renderHoverPanel()}
        </div>
      </div>
    `;
    return article;
  }

  renderHoverPanel() {
    return `
      <div class="hover-panel word-hover-panel">
        <div class="word-meta">
          <strong>${this.config.word}</strong>
          <span>${this.config.phonetic}</span>
          <em>${this.config.meaning}</em>
        </div>
        <div class="phonics-grid">
          ${this.config.phonics.map((item) => `
            <span class="phonics-cell ${item.highlight ? "is-highlight" : ""}" style="${this.tokenStyle(item.color)}">
              <b>${item.letters}</b>
              <i>${item.sound}</i>
            </span>
          `).join("")}
        </div>
      </div>
    `;
  }
}

class SentenceItem extends LearningItem {
  render() {
    const article = super.render();
    article.innerHTML += `
      <div class="sentence-line">
        ${this.renderEnglishTokens()}
      </div>
      <div class="translation-line">
        ${this.renderTranslationTokens()}
      </div>
    `;
    return article;
  }

  renderEnglishTokens() {
    return this.config.tokens
      .map((token) => `
        <span class="gloss-token" style="${this.tokenStyle(token.color)}" tabindex="0">
          ${token.en}
        </span>
      `)
      .join("");
  }

  renderTranslationTokens() {
    return this.config.tokens
      .map((token) => `
        <span class="translation-token ${token.neutral ? "is-neutral" : ""}" style="${this.tokenStyle(token.color)}">
          ${token.zh}
        </span>
      `)
      .join("");
  }
}

class HoverGlossaryDemo {
  constructor(root, items) {
    this.root = root;
    this.items = items;
  }

  render() {
    this.root.innerHTML = "";
    this.items.forEach((item) => {
      this.root.append(item.render());
    });
  }
}

const demo = new HoverGlossaryDemo(document.getElementById("hoverDemo"), [
  new VocabularyItem({
    type: "vocabulary",
    title: "\u8bcd\u6c47\u5b66\u4e60 Vocabulary",
    word: "lion",
    phonetic: "/\u02c8la\u026a\u0259n/",
    meaning: "\u72ee\u5b50",
    image: "./assets/english/tagged-word-art/lion.png",
    highlightColor: "#f05d5e",
    phonics: [
      { letters: "l", sound: "/l/", color: "#f05d5e", highlight: true },
      { letters: "i", sound: "/a\u026a/", color: "#333333" },
      { letters: "on", sound: "/\u0259n/", color: "#333333" }
    ]
  }),
  new SentenceItem({
    type: "sentence",
    title: "\u53e5\u5b50\u5b66\u4e60 Sentences",
    tokens: [
      { en: "I", zh: "\u6211", color: "#f05d5e" },
      { en: "like", zh: "\u559c\u6b22", color: "#f5a400" },
      { en: "you.", zh: "\u4f60\u3002", color: "#2086c9" }
    ]
  })
]);

demo.render();
