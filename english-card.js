const fallbackLesson = {
  unitTitle: "Unit 3  Amazing animals 神奇的动物",
  grade: "三年级上",
  gradeLabel: "三年级上",
  lesson: "3",
  keywords: [
    { word: "lion", meaning: "狮子", image: "./assets/english/tagged-word-art/lion.png" }
  ],
  keySentences: ["I like you."],
  talk: [{ speaker: "A", text: "I like you." }],
  practice: [],
  homework: "Read the words and sentences.",
  dialogue: [{ speaker: "A", text: "I like you." }],
  reading: { title: "Demo", lines: ["I like you."] },
  grammar: [{ pattern: "I like ...", meaning: "我喜欢……" }],
  exercise: [],
  summaryChecks: ["核心单词", "核心句型", "日常对话"],
  selfRating: { maxStars: 5, value: 0 }
};

const unitTitleCatalog = {
  1: { unitTitle: "Unit 1  Making friends 结交朋友", readingTitle: "Making Friends", pdfUrl: "./outputs/english-pdf/grade3-up-unit1.pdf" },
  2: { unitTitle: "Unit 2  Different families 不同的家庭", readingTitle: "Different Families", pdfUrl: "./outputs/english-pdf/grade3-up-unit2.pdf" },
  3: { unitTitle: "Unit 3  Amazing animals 神奇的动物", readingTitle: "Amazing Animals", pdfUrl: "./outputs/english-pdf/grade3-up-unit3.pdf" },
  4: { unitTitle: "Unit 4  Plants around us 我们身边的植物", readingTitle: "Plants Around Us", pdfUrl: "./outputs/english-pdf/grade3-up-unit4.pdf" },
  5: { unitTitle: "Unit 5  The colourful world 多彩的世界（颜色）", readingTitle: "The Colourful World", pdfUrl: "./outputs/english-pdf/grade3-up-unit5.pdf" },
  6: { unitTitle: "Unit 6  Useful numbers 有用的数字（1-10）", readingTitle: "Useful Numbers", pdfUrl: "./outputs/english-pdf/grade3-up-unit6.pdf" }
};

const phoneticMap = {
  "hello": "/həˈləʊ/", "hi": "/haɪ/", "i": "/aɪ/", "am": "/æm/", "i'm": "/aɪm/", "name": "/neɪm/",
  "my": "/maɪ/", "your": "/jɔːr/", "miss": "/mɪs/", "mr": "/ˈmɪstə/", "boy": "/bɔɪ/", "girl": "/ɡɜːrl/",
  "friend": "/frend/", "goodbye": "/ˌɡʊdˈbaɪ/", "new friend": "/njuː frend/", "classmate": "/ˈklæsmeɪt/", "meet": "/miːt/", "teacher": "/ˈtiːtʃər/",
  "father": "/ˈfɑːðər/", "dad": "/dæd/", "mother": "/ˈmʌðər/", "mum": "/mʌm/", "brother": "/ˈbrʌðər/", "sister": "/ˈsɪstər/",
  "grandfather": "/ˈɡrænfɑːðər/", "grandmother": "/ˈɡrænmʌðər/", "family": "/ˈfæməli/", "this": "/ðɪs/", "that": "/ðæt/",
  "grandpa": "/ˈɡrænpɑː/", "grandma": "/ˈɡrænmɑː/", "uncle": "/ˈʌŋkl/", "aunt": "/ænt/", "cousin": "/ˈkʌzn/",
  "parent": "/ˈperənt/", "photo": "/ˈfəʊtəʊ/", "pet": "/pet/", "my favorite pet": "/maɪ ˈfeɪvərɪt pet/",
  "bird": "/bɜːrd/", "fish": "/fɪʃ/", "cat": "/kæt/", "dog": "/dɔːɡ/", "rabbit": "/ˈræbɪt/", "panda": "/ˈpændə/",
  "monkey": "/ˈmʌŋki/", "tiger": "/ˈtaɪɡər/", "elephant": "/ˈelɪfənt/", "lion": "/ˈlaɪən/",
  "apple": "/ˈæpl/", "banana": "/bəˈnænə/", "orange": "/ˈɒrɪndʒ/", "grape": "/ɡreɪp/", "tree": "/triː/",
  "flower": "/ˈflaʊər/", "grass": "/ɡræs/", "sun": "/sʌn/", "water": "/ˈwɔːtər/", "air": "/er/",
  "red": "/red/", "yellow": "/ˈjeləʊ/", "blue": "/bluː/", "green": "/ɡriːn/", "white": "/waɪt/",
  "black": "/blæk/", "brown": "/braʊn/", "colour": "/ˈkʌlər/", "rainbow": "/ˈreɪnbəʊ/", "pink": "/pɪŋk/",
  "purple": "/ˈpɜːrpl/", "colourful": "/ˈkʌlərfl/", "light": "/laɪt/", "dark": "/dɑːrk/", "picture": "/ˈpɪktʃər/",
  "one": "/wʌn/", "two": "/tuː/", "three": "/θriː/", "four": "/fɔːr/", "five": "/faɪv/", "six": "/sɪks/",
  "seven": "/ˈsevn/", "eight": "/eɪt/", "nine": "/naɪn/", "ten": "/ten/", "how many": "/haʊ ˈmeni/",
  "number": "/ˈnʌmbər/", "candle": "/ˈkændl/", "book": "/bʊk/", "pen": "/pen/", "pencil": "/ˈpensl/",
  "bag": "/bæɡ/", "count": "/kaʊnt/"
};

const sentenceZhMap = {
  "Hello! / Hi!": "你好！/ 嗨！",
  "I'm ...": "我是……",
  "I'm Mike.": "我是 Mike。",
  "What's your name?": "你叫什么名字？",
  "My name's John.": "我的名字叫 John。",
  "Nice to meet you.": "很高兴见到你。",
  "Hello! I'm Amy.": "你好！我是 Amy。",
  "Hi! I'm Zhang Peng.": "嗨！我是张鹏。",
  "Nice to meet you, too.": "我也很高兴见到你。",
  "Goodbye, Zhang Peng.": "再见，张鹏。",
  "Bye, Amy.": "再见，Amy。",
  "Hello, Tom. This is my new friend, Lily.": "你好，Tom。这是我的新朋友 Lily。",
  "Hi, Lily. Nice to meet you.": "嗨，Lily。很高兴见到你。",
  "Nice to meet you too.": "我也很高兴见到你。",
  "We are classmates.": "我们是同班同学。",
  "Great!": "太好了！",
  "This is ...": "这是……",
  "This is my father.": "这是我的爸爸。",
  "Who's that?": "那是谁？",
  "He's my brother.": "他是我的哥哥/弟弟。",
  "She's ... / He's ...": "她是…… / 他是……",
  "This is my family.": "这是我的家庭。",
  "Who's this?": "这是谁？",
  "He's my father.": "他是我的爸爸。",
  "She's my mother.": "她是我的妈妈。",
  "Cool!": "真酷！",
  "Look at my family photo.": "看我的家庭照片。",
  "Who's that man?": "那个男人是谁？",
  "He's my uncle.": "他是我的叔叔/舅舅。",
  "Who's that woman?": "那个女人是谁？",
  "She's my aunt.": "她是我的阿姨/姑姑。",
  "Is this your cousin?": "这是你的表兄弟/表姐妹吗？",
  "Yes, he is.": "是的，他是。",
  "What's this?": "这是什么？",
  "It's a bird.": "它是一只鸟。",
  "What's that?": "那是什么？",
  "It's a fish.": "它是一条鱼。",
  "I like my favorite pet.": "我喜欢我最喜欢的宠物。",
  "Look at the panda.": "看这只熊猫。",
  "It's a pet.": "它是一只宠物。",
  "Is it your favorite pet?": "它是你最喜欢的宠物吗？",
  "Yes, it is.": "是的，它是。",
  "Look at the tiger.": "看这只老虎。",
  "It's big.": "它很大。",
  "Look at the rabbit.": "看这只兔子。",
  "It's cute.": "它很可爱。",
  "I see an apple.": "我看见一个苹果。",
  "I see a tree.": "我看见一棵树。",
  "The grass is green.": "草是绿色的。",
  "The sun is bright.": "太阳很明亮。",
  "Water helps plants.": "水帮助植物生长。",
  "I like fresh air.": "我喜欢新鲜空气。",
  "Look! I see an apple.": "看！我看见一个苹果。",
  "I see a banana.": "我看见一根香蕉。",
  "The tree is tall.": "这棵树很高。",
  "I like the sun and air.": "我喜欢太阳和空气。",
  "Me too.": "我也是。",
  "What do you see?": "你看见了什么？",
  "I see a flower.": "我看见一朵花。",
  "What do you like?": "你喜欢什么？",
  "I like grapes.": "我喜欢葡萄。",
  "The sun is warm.": "太阳很温暖。",
  "And the air is fresh.": "空气也很新鲜。",
  "What colour is it?": "它是什么颜色？",
  "It's red.": "它是红色的。",
  "I see ...": "我看见……",
  "I see blue.": "我看见蓝色。",
  "Colour it ...": "把它涂成……",
  "Colour it yellow.": "把它涂成黄色。",
  "It's green.": "它是绿色的。",
  "I see a rainbow.": "我看见一道彩虹。",
  "Wow! It's red, yellow and blue.": "哇！它有红色、黄色和蓝色。",
  "So beautiful!": "真漂亮！",
  "Look at my picture.": "看我的图画。",
  "Nice! What colour are the flowers?": "真好！花是什么颜色？",
  "They are pink.": "它们是粉色的。",
  "Colour the tree brown, please.": "请把树涂成棕色。",
  "All right.": "好的。",
  "How many ...?": "多少……？",
  "How many pens?": "多少支钢笔？",
  "One. / Two.": "一。/ 二。",
  "I'm ... years old.": "我……岁。",
  "I'm six years old.": "我六岁。",
  "Show me ...": "给我看……",
  "How many candles?": "多少根蜡烛？",
  "One, two, three ... seven.": "一、二、三……七。",
  "I'm seven years old.": "我七岁。",
  "Happy birthday!": "生日快乐！",
  "Thank you!": "谢谢你！",
  "Let's count the pencils.": "我们来数铅笔吧。",
  "OK! One, two, three, four, five.": "好的！一、二、三、四、五。",
  "I have five pencils. How many do you have?": "我有五支铅笔。你有多少支？",
  "I have eight.": "我有八支。",
  "I like you.": "我喜欢你。"
};

const wordZhMap = {
  "i": "我", "you": "你", "your": "你的", "my": "我的", "me": "我", "we": "我们", "it": "它", "this": "这", "that": "那",
  "he": "他", "she": "她", "they": "它们", "are": "是", "is": "是", "am": "是", "do": "做/助动词", "does": "助动词",
  "yes": "是的", "no": "不", "not": "不", "too": "也", "and": "和", "the": "这个", "a": "一个", "an": "一个",
  "like": "喜欢", "see": "看见", "look": "看", "at": "在/向", "have": "有", "help": "帮助", "show": "展示",
  "count": "数", "colour": "涂色", "what": "什么", "who": "谁", "how": "怎样/多少", "many": "许多", "old": "岁",
  "years": "年", "name": "名字", "family": "家庭", "friend": "朋友", "classmates": "同班同学", "birthday": "生日",
  "happy": "快乐", "thank": "谢谢", "thanks": "谢谢", "great": "太好了", "cool": "酷", "nice": "高兴的",
  "meet": "遇见", "goodbye": "再见", "bye": "再见", "morning": "早上", "fresh": "新鲜的", "warm": "温暖的",
  "bright": "明亮的", "green": "绿色", "red": "红色", "yellow": "黄色", "blue": "蓝色", "pink": "粉色", "brown": "棕色",
  "beautiful": "漂亮的", "big": "大的", "cute": "可爱的", "tall": "高的", "please": "请", "ok": "好的"
};

const firstSoundMap = {
  a: "/æ/", b: "/b/", c: "/k/", d: "/d/", e: "/e/", f: "/f/", g: "/ɡ/", h: "/h/", i: "/aɪ/",
  j: "/dʒ/", k: "/k/", l: "/l/", m: "/m/", n: "/n/", o: "/ɒ/", p: "/p/", q: "/kw/",
  r: "/r/", s: "/s/", t: "/t/", u: "/ʌ/", v: "/v/", w: "/w/", x: "/ks/", y: "/j/", z: "/z/"
};

const vowelPhonicsRules = [
  // 20 core vowel sounds: /iː/ /ɪ/ /e/ /æ/ /ɑː/ /ɒ/ /ɔː/ /ʊ/ /uː/ /ʌ/ /ɜː/ /ə/ /eɪ/ /aɪ/ /ɔɪ/ /aʊ/ /əʊ/ /ɪə/ /eə/ /ʊə/
  { pattern: "ear", sound: "/ɪə/", type: "vowel" },
  { pattern: "eer", sound: "/ɪə/", type: "vowel" },
  { pattern: "air", sound: "/eə/", type: "vowel" },
  { pattern: "are", sound: "/eə/", type: "vowel" },
  { pattern: "ure", sound: "/ʊə/", type: "vowel" },
  { pattern: "eer", sound: "/ɪə/", type: "vowel" },
  { pattern: "igh", sound: "/aɪ/", type: "vowel" },
  { pattern: "eigh", sound: "/eɪ/", type: "vowel" },
  { pattern: "ai", sound: "/eɪ/", type: "vowel" },
  { pattern: "ay", sound: "/eɪ/", type: "vowel" },
  { pattern: "a_e", sound: "/eɪ/", type: "split-vowel" },
  { pattern: "ea", sound: "/iː/", type: "vowel" },
  { pattern: "ee", sound: "/iː/", type: "vowel" },
  { pattern: "ey", sound: "/iː/", type: "vowel" },
  { pattern: "e_e", sound: "/iː/", type: "split-vowel" },
  { pattern: "ie", sound: "/aɪ/", type: "vowel" },
  { pattern: "i_e", sound: "/aɪ/", type: "split-vowel" },
  { pattern: "oa", sound: "/əʊ/", type: "vowel" },
  { pattern: "ow", sound: "/əʊ/", type: "vowel" },
  { pattern: "oe", sound: "/əʊ/", type: "vowel" },
  { pattern: "o_e", sound: "/əʊ/", type: "split-vowel" },
  { pattern: "oi", sound: "/ɔɪ/", type: "vowel" },
  { pattern: "oy", sound: "/ɔɪ/", type: "vowel" },
  { pattern: "ou", sound: "/aʊ/", type: "vowel" },
  { pattern: "ow", sound: "/aʊ/", type: "vowel" },
  { pattern: "oo", sound: "/uː/", type: "vowel" },
  { pattern: "ew", sound: "/uː/", type: "vowel" },
  { pattern: "ue", sound: "/uː/", type: "vowel" },
  { pattern: "u_e", sound: "/uː/", type: "split-vowel" },
  { pattern: "ir", sound: "/ɜː/", type: "vowel" },
  { pattern: "ur", sound: "/ɜː/", type: "vowel" },
  { pattern: "er", sound: "/ɜː/", type: "vowel" },
  { pattern: "or", sound: "/ɔː/", type: "vowel" },
  { pattern: "ar", sound: "/ɑː/", type: "vowel" },
  { pattern: "al", sound: "/ɔː/", type: "vowel" },
  { pattern: "aw", sound: "/ɔː/", type: "vowel" },
  { pattern: "au", sound: "/ɔː/", type: "vowel" },
  { pattern: "all", sound: "/ɔː/", type: "vowel" },
  { pattern: "a", sound: "/æ/", type: "vowel" },
  { pattern: "e", sound: "/e/", type: "vowel" },
  { pattern: "i", sound: "/ɪ/", type: "vowel" },
  { pattern: "o", sound: "/ɒ/", type: "vowel" },
  { pattern: "u", sound: "/ʌ/", type: "vowel" },
  { pattern: "y", sound: "/ɪ/", type: "vowel" }
].sort((a, b) => b.pattern.replace("_", "").length - a.pattern.replace("_", "").length);

const wordPhonicsOverrides = {
  "lion": [
    { letters: "l", sound: "/l/", type: "consonant" },
    { letters: "i", sound: "/aɪ/", type: "vowel" },
    { letters: "on", sound: "/ən/", type: "vowel" }
  ],
  "teacher": [
    { letters: "t", sound: "/t/", type: "consonant" },
    { letters: "ea", sound: "/iː/", type: "vowel" },
    { letters: "ch", sound: "/tʃ/", type: "consonant" },
    { letters: "er", sound: "/ər/", type: "vowel" }
  ],
  "book": [
    { letters: "b", sound: "/b/", type: "consonant" },
    { letters: "oo", sound: "/ʊ/", type: "vowel" },
    { letters: "k", sound: "/k/", type: "consonant" }
  ],
  "goodbye": [
    { letters: "g", sound: "/ɡ/", type: "consonant" },
    { letters: "oo", sound: "/ʊ/", type: "vowel" },
    { letters: "d", sound: "/d/", type: "consonant" },
    { letters: "bye", sound: "/baɪ/", type: "vowel" }
  ],
  "girl": [
    { letters: "g", sound: "/ɡ/", type: "consonant" },
    { letters: "ir", sound: "/ɜːr/", type: "vowel" },
    { letters: "l", sound: "/l/", type: "consonant" }
  ],
  "bird": [
    { letters: "b", sound: "/b/", type: "consonant" },
    { letters: "ir", sound: "/ɜːr/", type: "vowel" },
    { letters: "d", sound: "/d/", type: "consonant" }
  ],
  "friend": [
    { letters: "fr", sound: "/fr/", type: "consonant" },
    { letters: "ie", sound: "/e/", type: "vowel" },
    { letters: "nd", sound: "/nd/", type: "consonant" }
  ],
  "meet": [
    { letters: "m", sound: "/m/", type: "consonant" },
    { letters: "ee", sound: "/iː/", type: "vowel" },
    { letters: "t", sound: "/t/", type: "consonant" }
  ],
  "tree": [
    { letters: "tr", sound: "/tr/", type: "consonant" },
    { letters: "ee", sound: "/iː/", type: "vowel" }
  ],
  "green": [
    { letters: "gr", sound: "/ɡr/", type: "consonant" },
    { letters: "ee", sound: "/iː/", type: "vowel" },
    { letters: "n", sound: "/n/", type: "consonant" }
  ],
  "three": [
    { letters: "thr", sound: "/θr/", type: "consonant" },
    { letters: "ee", sound: "/iː/", type: "vowel" }
  ],
  "flower": [
    { letters: "fl", sound: "/fl/", type: "consonant" },
    { letters: "ow", sound: "/aʊ/", type: "vowel" },
    { letters: "er", sound: "/ər/", type: "vowel" }
  ],
  "brown": [
    { letters: "br", sound: "/br/", type: "consonant" },
    { letters: "ow", sound: "/aʊ/", type: "vowel" },
    { letters: "n", sound: "/n/", type: "consonant" }
  ],
  "how many": [
    { letters: "how", sound: "/haʊ/", type: "vowel" },
    { letters: "many", sound: "/ˈmeni/", type: "vowel" }
  ],
  "count": [
    { letters: "c", sound: "/k/", type: "consonant" },
    { letters: "ou", sound: "/aʊ/", type: "vowel" },
    { letters: "nt", sound: "/nt/", type: "consonant" }
  ],
  "your": [
    { letters: "y", sound: "/j/", type: "consonant" },
    { letters: "our", sound: "/ɔːr/", type: "vowel" }
  ],
  "four": [
    { letters: "f", sound: "/f/", type: "consonant" },
    { letters: "our", sound: "/ɔːr/", type: "vowel" }
  ],
  "orange": [
    { letters: "or", sound: "/ɒr/", type: "vowel" },
    { letters: "a", sound: "/ɪ/", type: "vowel" },
    { letters: "nge", sound: "/ndʒ/", type: "consonant" }
  ],
  "water": [
    { letters: "w", sound: "/w/", type: "consonant" },
    { letters: "a", sound: "/ɔː/", type: "vowel" },
    { letters: "t", sound: "/t/", type: "consonant" },
    { letters: "er", sound: "/ər/", type: "vowel" }
  ],
  "colour": [
    { letters: "c", sound: "/k/", type: "consonant" },
    { letters: "o", sound: "/ʌ/", type: "vowel" },
    { letters: "our", sound: "/ər/", type: "vowel" }
  ],
  "purple": [
    { letters: "p", sound: "/p/", type: "consonant" },
    { letters: "ur", sound: "/ɜːr/", type: "vowel" },
    { letters: "ple", sound: "/pl/", type: "consonant" }
  ],
  "number": [
    { letters: "n", sound: "/n/", type: "consonant" },
    { letters: "u", sound: "/ʌ/", type: "vowel" },
    { letters: "mb", sound: "/m/", type: "consonant" },
    { letters: "er", sound: "/ər/", type: "vowel" }
  ],
  "pencil": [
    { letters: "p", sound: "/p/", type: "consonant" },
    { letters: "e", sound: "/e/", type: "vowel" },
    { letters: "nc", sound: "/ns/", type: "consonant" },
    { letters: "i", sound: "/əl/", type: "vowel" },
    { letters: "l", sound: "", type: "consonant" }
  ]
};

const tokenColors = ["#f05d5e", "#f5a400", "#2086c9", "#54a24b", "#9467bd", "#e377c2"];
let activePdfUrl = "";
let activePdfName = "english-card.pdf";

class WordGloss {
  constructor({ word, meaning = "", phonetic = "" }) {
    this.word = word || "";
    this.key = normalizeKey(this.word);
    this.meaning = meaning || getWordMeaning(this.word);
    this.phonetic = phonetic || phoneticMap[this.key] || "";
  }

  render(labelClass = "word-label") {
    return `
      <span class="hover-word ${labelClass}" tabindex="0">
        <span class="hover-word-text">${escapeHtml(this.word)}</span>
        <span class="hover-card word-hover-card">
          <span class="word-meta-row">
            <strong>${escapeHtml(this.word)}</strong>
            <em>${escapeHtml(this.phonetic || "音标待补充")}</em>
            <b>${escapeHtml(this.meaning || "中文待补充")}</b>
          </span>
          <span class="phonics-row">${this.renderPhonics()}</span>
        </span>
      </span>
    `;
  }

  renderPhonics() {
    const parts = splitWordParts(this.word, this.phonetic);
    let vowelIndex = 0;
    return parts.map((part) => {
      const color = part.type === "vowel" ? tokenColors[vowelIndex++ % tokenColors.length] : "#111111";
      const highlight = part.type === "vowel" ? " is-highlight" : "";
      return `
        <span class="phonics-part${highlight}" style="--token-color: ${color}">
          <span>${escapeHtml(part.letters)}</span>
          <i>${escapeHtml(part.sound)}</i>
        </span>
      `;
    }).join("");
  }
}

class SentenceGloss {
  constructor(text, translation = "") {
    this.text = text || "";
    this.translation = translation || getSentenceTranslation(this.text);
    this.tokens = tokenizeSentence(this.text);
  }

  render(className = "sentence-hover") {
    return `
      <span class="hover-sentence ${className}" tabindex="0">
        <span class="sentence-english">${this.renderEnglish()}</span>
        <span class="hover-card sentence-hover-card">
          <span class="sentence-zh-full">${escapeHtml(this.translation || "中文待补充")}</span>
          <span class="sentence-token-row">${this.renderChineseTokens()}</span>
        </span>
      </span>
    `;
  }

  renderEnglish() {
    return this.tokens.map((token, index) => {
      if (token.type === "space") return token.value;
      if (token.type === "punct") return `<span>${escapeHtml(token.value)}</span>`;
      const color = tokenColors[index % tokenColors.length];
      return `<span class="sentence-token" style="--token-color: ${color}">${escapeHtml(token.value)}</span>`;
    }).join("");
  }

  renderChineseTokens() {
    return this.tokens
      .filter((token) => token.type === "word")
      .map((token, index) => {
        const color = tokenColors[index % tokenColors.length];
        return `<span class="sentence-zh-token" style="--token-color: ${color}">${escapeHtml(getTokenZh(token.value))}</span>`;
      })
      .join("");
  }
}

document.getElementById("backButton").addEventListener("click", () => {
  if (window.history.length > 1) {
    window.history.back();
    return;
  }
  window.location.href = "./index.html#english";
});

const pdfButton = document.getElementById("printButton");
pdfButton.addEventListener("click", () => {
  if (!activePdfUrl) {
    window.alert("PDF 正在生成中，请稍后再试。");
    return;
  }
  const link = document.createElement("a");
  link.href = activePdfUrl;
  link.download = activePdfName;
  document.body.appendChild(link);
  link.click();
  link.remove();
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
    if (!response.ok) throw new Error(`English data request failed: ${response.status}`);
    const book = await response.json();
    const lesson = book.units.find((item) => Number(item.unit) === targetUnit);
    return normalizeLesson(lesson || fallbackLesson, targetUnit);
  } catch (error) {
    return normalizeLesson(fallbackLesson, targetUnit);
  }
}

function renderLesson(data) {
  document.title = `${data.unitTitle} - 英文学习卡片 - 蒙蒙学习库`;
  setPdfButton(data);
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
  const pdfUrl = lesson?.pdfUrl || unitTitleCatalog[unit]?.pdfUrl || "";
  return {
    ...lesson,
    unit,
    unitTitle,
    pdfUrl,
    lesson: lesson?.lesson || String(unit),
    reading: {
      ...(lesson?.reading || {}),
      title: readingTitle
    }
  };
}

function setPdfButton(data) {
  activePdfUrl = data.pdfUrl || "";
  activePdfName = `mengmeng-english-unit${data.unit || getTargetUnit()}.pdf`;
  pdfButton.textContent = activePdfUrl ? "保存 PDF" : "PDF 生成中";
  pdfButton.disabled = !activePdfUrl;
}

function getCompleteUnitTitle(lesson, unit) {
  const catalogTitle = unitTitleCatalog[unit]?.unitTitle;
  const title = removeGarbledText(lesson?.unitTitle);
  const hasChinese = /[\u4e00-\u9fff]/.test(title);
  const titleUnit = title.match(/^Unit\s+(\d+)/i);
  if (catalogTitle && (!title || !hasChinese || (titleUnit && Number(titleUnit[1]) !== Number(unit)))) return catalogTitle;
  if (title) return title;
  return catalogTitle || `Unit ${unit}`;
}

function getCompleteReadingTitle(lesson, unitTitle, unit) {
  const catalogTitle = unitTitleCatalog[unit]?.readingTitle;
  const title = removeGarbledText(lesson?.reading?.title || lesson?.title || "");
  if (!title || title.split(/\s+/).length <= 1) return catalogTitle || title || `Unit ${unit}`;
  return title;
}

function renderWords(words) {
  document.getElementById("wordGrid").innerHTML = words
    .map((item) => `
      <div class="word-card">
        ${renderWordArt(item.word, item.image, "word-art")}
        ${new WordGloss(item).render("word-label")}
      </div>
    `)
    .join("");
}

function renderSentences(sentences) {
  document.getElementById("sentenceList").innerHTML = sentences
    .map((sentence) => `<span class="bubble">${new SentenceGloss(sentence).render()}</span>`)
    .join("");
}

function renderDialogue(targetId, lines) {
  document.getElementById(targetId).innerHTML = lines
    .map((line) => `<p><span>${escapeHtml(line.speaker)}:</span> ${new SentenceGloss(line.text).render("dialogue-hover")}</p>`)
    .join("");
}

function renderPractice(items) {
  document.getElementById("practiceGrid").innerHTML = items
    .map((item, index) => `
      <div class="practice-item">
        <div class="practice-index">${index + 1}.</div>
        ${renderWordArt(item.answer, item.image, "practice-art")}
        <div class="choice-list">
          ${(item.options || []).map(renderChoice).join("")}
        </div>
      </div>
    `)
    .join("");
}

function renderChoice(option) {
  const match = String(option).match(/^([A-Z]\.\s*)(.+)$/);
  if (!match) return `<span>${escapeHtml(option)}</span>`;
  return `<span>${escapeHtml(match[1])}${new WordGloss({ word: match[2], meaning: getWordMeaning(match[2]) }).render("choice-word")}</span>`;
}

function renderReading(lines) {
  document.getElementById("readingLines").innerHTML = lines
    .map((line) => `<li>${new SentenceGloss(line).render("reading-hover")}</li>`)
    .join("");
}

function renderGrammar(items) {
  document.getElementById("grammarList").innerHTML = items
    .map((item) => `<li>${new SentenceGloss(item.pattern, item.meaning).render("grammar-hover")}</li>`)
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
  target.innerHTML = image ? `<img src="${escapeHtml(image)}" alt="" aria-hidden="true">` : "";
}

function renderExercise(items) {
  document.getElementById("exerciseGrid").innerHTML = items
    .map((item, index) => `
      <div class="exercise-item">
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

function renderWordArt(word, image, className) {
  if (image) return `<img class="${className}" src="${escapeHtml(image)}" alt="" aria-hidden="true">`;
  return `<span class="${className}" aria-hidden="true">${escapeHtml(word.slice(0, 1).toUpperCase())}</span>`;
}

function splitWordParts(word, phonetic) {
  const override = wordPhonicsOverrides[normalizeKey(word)];
  if (override) return override;
  const cleanWord = String(word || "").replace(/[^A-Za-z]+/g, "");
  if (!cleanWord) return [];
  const lowerWord = cleanWord.toLowerCase();
  const matches = collectVowelMatches(lowerWord);
  if (!matches.length) return fallbackWordParts(cleanWord, phonetic);

  const parts = [];
  let cursor = 0;
  matches.forEach((match) => {
    if (match.start > cursor) {
      parts.push(consonantPart(cleanWord.slice(cursor, match.start)));
    }
    parts.push({
      letters: cleanWord.slice(match.start, match.end),
      sound: getRuleSound(match, phonetic),
      type: "vowel"
    });
    cursor = match.end;
  });
  if (cursor < cleanWord.length) {
    parts.push(consonantPart(cleanWord.slice(cursor)));
  }
  return parts.filter((part) => part.letters);
}

function collectVowelMatches(lowerWord) {
  const matches = [];
  let index = 0;
  while (index < lowerWord.length) {
    const rule = vowelPhonicsRules.find((item) => matchesRuleAt(lowerWord, item, index));
    if (!rule) {
      index += 1;
      continue;
    }
    const end = rule.type === "split-vowel"
      ? index + rule.pattern.length
      : index + rule.pattern.length;
    matches.push({ start: index, end, rule });
    index = end;
  }
  return matches;
}

function matchesRuleAt(word, rule, index) {
  if (rule.type === "split-vowel") {
    const [first, last] = rule.pattern.split("_");
    return word[index] === first && word[index + 1] && word[index + 2] === last;
  }
  return word.startsWith(rule.pattern, index);
}

function getRuleSound(match, phonetic) {
  const normalizedPhonetic = String(phonetic || "");
  if (normalizedPhonetic.includes(match.rule.sound.replace(/\//g, ""))) return match.rule.sound;
  return match.rule.sound;
}

function consonantPart(letters) {
  const first = letters.slice(0, 1).toLowerCase();
  return {
    letters,
    sound: firstSoundMap[first] || "",
    type: "consonant"
  };
}

function fallbackWordParts(word, phonetic) {
  const cleanWord = String(word || "").replace(/[^A-Za-z]+/g, "");
  const first = cleanWord.slice(0, 1);
  const rest = cleanWord.slice(1);
  const soundChars = String(phonetic || `/${cleanWord.toLowerCase()}/`).replace(/^\/|\/$/g, "");
  return [
    { letters: first, sound: firstSoundMap[first.toLowerCase()] || `/${soundChars.slice(0, 1)}/`, type: "consonant" },
    { letters: rest, sound: "", type: "consonant" }
  ].filter((part) => part.letters);
}

function tokenizeSentence(text) {
  const pieces = String(text || "").match(/[A-Za-z']+|[0-9]+|\s+|[^A-Za-z0-9\s]/g) || [];
  return pieces.map((value) => {
    if (/^\s+$/.test(value)) return { type: "space", value };
    if (/^[A-Za-z0-9']+$/.test(value)) return { type: "word", value };
    return { type: "punct", value };
  });
}

function getSentenceTranslation(text) {
  const cleaned = String(text || "").trim();
  if (sentenceZhMap[cleaned]) return sentenceZhMap[cleaned];
  const zhTokens = tokenizeSentence(cleaned)
    .filter((token) => token.type === "word")
    .map((token) => getTokenZh(token.value))
    .filter(Boolean);
  return zhTokens.join(" ");
}

function getTokenZh(token) {
  const key = normalizeKey(token);
  return wordZhMap[key] || getWordMeaning(key) || token;
}

function getWordMeaning(word) {
  const key = normalizeKey(word);
  const book = window.ENGLISH_LESSON_BOOK;
  for (const unit of book?.units || []) {
    for (const item of unit.keywords || []) {
      if (normalizeKey(item.word) === key) return item.meaning || "";
    }
  }
  return wordZhMap[key] || "";
}

function normalizeKey(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[’]/g, "'")
    .replace(/[^a-z0-9']+/g, " ")
    .trim();
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
