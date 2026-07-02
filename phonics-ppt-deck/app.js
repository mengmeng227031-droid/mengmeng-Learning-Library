const cards = [
  { stage: "1", section: "Alphabet 字母表", phoneme: "Aa", sound: "letter sound /a/", highlight: "a", words: ["apple", "ant", "alligator"] },
  { stage: "1", section: "Alphabet 字母表", phoneme: "Bb", sound: "letter sound /b/", highlight: "b", words: ["banana", "ball", "bed"] },
  { stage: "1", section: "Alphabet 字母表", phoneme: "Cc", sound: "letter sound /k/", highlight: "c", words: ["cat", "cup", "cake"] },
  { stage: "1", section: "Alphabet 字母表", phoneme: "Dd", sound: "letter sound /d/", highlight: "d", words: ["donut", "dog", "duck"] },
  { stage: "1", section: "Alphabet 字母表", phoneme: "Ee", sound: "letter sound /e/", highlight: "e", words: ["elephant", "egg", "elf"] },
  { stage: "1", section: "Alphabet 字母表", phoneme: "Ff", sound: "letter sound /f/", highlight: "f", words: ["fish", "fan", "frog"] },
  { stage: "1", section: "Alphabet 字母表", phoneme: "Gg", sound: "letter sound /g/", highlight: "g", words: ["gum", "goat", "gift"] },
  { stage: "1", section: "Alphabet 字母表", phoneme: "Hh", sound: "letter sound /h/", highlight: "h", words: ["heart", "hat", "hen"] },
  { stage: "1", section: "Alphabet 字母表", phoneme: "Ii", sound: "letter sound /i/", highlight: "i", words: ["igloo", "insect", "ink"] },
  { stage: "1", section: "Alphabet 字母表", phoneme: "Jj", sound: "letter sound /j/", highlight: "j", words: ["jellyfish", "jam", "jet"] },
  { stage: "1", section: "Alphabet 字母表", phoneme: "Kk", sound: "letter sound /k/", highlight: "k", words: ["kite", "king", "key"] },
  { stage: "1", section: "Alphabet 字母表", phoneme: "Ll", sound: "letter sound /l/", highlight: "l", words: ["lion", "leaf", "lamp"] },
  { stage: "1", section: "Alphabet 字母表", phoneme: "Mm", sound: "letter sound /m/", highlight: "m", words: ["monkey", "map", "moon"] },
  { stage: "1", section: "Alphabet 字母表", phoneme: "Nn", sound: "letter sound /n/", highlight: "n", words: ["nose", "nest", "net"] },
  { stage: "1", section: "Alphabet 字母表", phoneme: "Oo", sound: "letter sound /o/", highlight: "o", words: ["octopus", "ox", "ostrich"] },
  { stage: "1", section: "Alphabet 字母表", phoneme: "Pp", sound: "letter sound /p/", highlight: "p", words: ["pizza", "pig", "pan"] },
  { stage: "1", section: "Alphabet 字母表", phoneme: "Qq", sound: "letter sound /kw/", highlight: "qu", words: ["queen", "quilt", "quiz"] },
  { stage: "1", section: "Alphabet 字母表", phoneme: "Rr", sound: "letter sound /r/", highlight: "r", words: ["rainbow", "red", "ring"] },
  { stage: "1", section: "Alphabet 字母表", phoneme: "Ss", sound: "letter sound /s/", highlight: "s", words: ["star", "sun", "sock"] },
  { stage: "1", section: "Alphabet 字母表", phoneme: "Tt", sound: "letter sound /t/", highlight: "t", words: ["turtle", "top", "ten"] },
  { stage: "1", section: "Alphabet 字母表", phoneme: "Uu", sound: "letter sound /u/", highlight: "u", words: ["umbrella", "up", "under"] },
  { stage: "1", section: "Alphabet 字母表", phoneme: "Vv", sound: "letter sound /v/", highlight: "v", words: ["volcano", "van", "vest"] },
  { stage: "1", section: "Alphabet 字母表", phoneme: "Ww", sound: "letter sound /w/", highlight: "w", words: ["watermelon", "web", "wind"] },
  { stage: "1", section: "Alphabet 字母表", phoneme: "Xx", sound: "letter sound /ks/", highlight: "x", words: ["x-ray", "box", "fox"] },
  { stage: "1", section: "Alphabet 字母表", phoneme: "Yy", sound: "letter sound /y/", highlight: "y", words: ["yo-yo", "yellow", "yak"] },
  { stage: "1", section: "Alphabet 字母表", phoneme: "Zz", sound: "letter sound /z/", highlight: "z", words: ["zebra", "zip", "zoo"] },
  { stage: "1", section: "Vowel 短元音", phoneme: "a", sound: "short /a/", highlight: "a", words: ["hat", "cat", "map"] },
  { stage: "1", section: "Vowel 短元音", phoneme: "e", sound: "short /e/", highlight: "e", words: ["bed", "hen", "pen"] },
  { stage: "1", section: "Vowel 短元音", phoneme: "i", sound: "short /i/", highlight: "i", words: ["pig", "sit", "pin"] },
  { stage: "1", section: "Vowel 短元音", phoneme: "o", sound: "short /o/", highlight: "o", words: ["dog", "box", "hop"] },
  { stage: "1", section: "Vowel 短元音", phoneme: "u", sound: "short /u/", highlight: "u", words: ["bus", "sun", "cup"] },
  { stage: "2", section: "Beginning Blends 词首辅音连缀", phoneme: "bl", sound: "blend /bl/", highlight: "bl", words: ["block", "black", "blue"] },
  { stage: "2", section: "Beginning Blends 词首辅音连缀", phoneme: "cl", sound: "blend /cl/", highlight: "cl", words: ["clock", "clap", "clip"] },
  { stage: "2", section: "Beginning Blends 词首辅音连缀", phoneme: "fl", sound: "blend /fl/", highlight: "fl", words: ["flower", "flag", "flip"] },
  { stage: "2", section: "Beginning Blends 词首辅音连缀", phoneme: "gl", sound: "blend /gl/", highlight: "gl", words: ["glasses", "glue", "glow"] },
  { stage: "2", section: "Beginning Blends 词首辅音连缀", phoneme: "pl", sound: "blend /pl/", highlight: "pl", words: ["plug", "plant", "plane"] },
  { stage: "2", section: "Beginning Blends 词首辅音连缀", phoneme: "sl", sound: "blend /sl/", highlight: "sl", words: ["slide", "sled", "sleep"] },
  { stage: "2", section: "Beginning Blends 词首辅音连缀", phoneme: "br", sound: "blend /br/", highlight: "br", words: ["bread", "brush", "brick"] },
  { stage: "2", section: "Beginning Blends 词首辅音连缀", phoneme: "cr", sound: "blend /cr/", highlight: "cr", words: ["crab", "crayon", "crown"] },
  { stage: "2", section: "Beginning Blends 词首辅音连缀", phoneme: "dr", sound: "blend /dr/", highlight: "dr", words: ["drum", "dress", "dragon"] },
  { stage: "2", section: "Beginning Blends 词首辅音连缀", phoneme: "fr", sound: "blend /fr/", highlight: "fr", words: ["fries", "frog", "fruit"] },
  { stage: "2", section: "Beginning Blends 词首辅音连缀", phoneme: "gr", sound: "blend /gr/", highlight: "gr", words: ["grapes", "grass", "green"] },
  { stage: "2", section: "Beginning Blends 词首辅音连缀", phoneme: "pr", sound: "blend /pr/", highlight: "pr", words: ["pretzel", "prince", "prize"] },
  { stage: "2", section: "Beginning Blends 词首辅音连缀", phoneme: "tr", sound: "blend /tr/", highlight: "tr", words: ["tree", "train", "truck"] },
  { stage: "2", section: "Beginning Blends 词首辅音连缀", phoneme: "sc", sound: "blend /sc/", highlight: "sc", words: ["scarf", "scale", "scooter"] },
  { stage: "2", section: "Beginning Blends 词首辅音连缀", phoneme: "sk", sound: "blend /sk/", highlight: "sk", words: ["skateboard", "skip", "skunk"] },
  { stage: "2", section: "Beginning Blends 词首辅音连缀", phoneme: "sm", sound: "blend /sm/", highlight: "sm", words: ["small", "smile", "smell"] },
  { stage: "2", section: "Beginning Blends 词首辅音连缀", phoneme: "sn", sound: "blend /sn/", highlight: "sn", words: ["snake", "snow", "snail"] },
  { stage: "2", section: "Beginning Blends 词首辅音连缀", phoneme: "sp", sound: "blend /sp/", highlight: "sp", words: ["spider", "spoon", "spin"] },
  { stage: "2", section: "Beginning Blends 词首辅音连缀", phoneme: "st", sound: "blend /st/", highlight: "st", words: ["star", "stop", "stone"] },
  { stage: "2", section: "Beginning Blends 词首辅音连缀", phoneme: "sw", sound: "blend /sw/", highlight: "sw", words: ["swim", "swan", "sweet"] },
  { stage: "2", section: "Digraph 辅音组合", phoneme: "qu", sound: "/kw/", highlight: "qu", words: ["queen", "quick", "quack"] },
  { stage: "2", section: "Digraph 辅音组合", phoneme: "sh", sound: "/sh/", highlight: "sh", words: ["shark", "ship", "shop"] },
  { stage: "2", section: "Digraph 辅音组合", phoneme: "ch", sound: "/ch/", highlight: "ch", words: ["cheese", "chair", "chick"] },
  { stage: "2", section: "Digraph 辅音组合", phoneme: "wh", sound: "/w/", highlight: "wh", words: ["wheel", "whale", "white"] },
  { stage: "2", section: "Digraph 辅音组合", phoneme: "th", sound: "voiceless /th/", highlight: "th", words: ["thumb", "thin", "three"] },
  { stage: "2", section: "Digraph 辅音组合", phoneme: "th", sound: "voiced /th/", highlight: "th", words: ["this", "then", "they"] },
  { stage: "2", section: "Digraph 辅音组合", phoneme: "ph", sound: "/f/", highlight: "ph", words: ["phone", "photo", "dolphin"] },
  { stage: "2", section: "Digraph 辅音组合", phoneme: "ck", sound: "/k/", highlight: "ck", words: ["sock", "duck", "rock"] },
  { stage: "2", section: "Hard and Soft Sounds 辅音软硬音", phoneme: "c", sound: "hard /k/", highlight: "c", words: ["cat", "cup", "cake"] },
  { stage: "2", section: "Hard and Soft Sounds 辅音软硬音", phoneme: "c", sound: "soft /s/", highlight: "c", words: ["circle", "city", "cent"] },
  { stage: "2", section: "Hard and Soft Sounds 辅音软硬音", phoneme: "g", sound: "hard /g/", highlight: "g", words: ["gum", "goat", "gate"] },
  { stage: "2", section: "Hard and Soft Sounds 辅音软硬音", phoneme: "g", sound: "soft /j/", highlight: "g", words: ["giraffe", "gem", "giant"] },
  { stage: "2", section: "Double Letter Endings 双写辅音结尾", phoneme: "ff", sound: "ending /f/", highlight: "ff", words: ["cliff", "puff", "off"] },
  { stage: "2", section: "Double Letter Endings 双写辅音结尾", phoneme: "ll", sound: "ending /l/", highlight: "ll", words: ["bell", "hill", "shell"] },
  { stage: "2", section: "Double Letter Endings 双写辅音结尾", phoneme: "ss", sound: "ending /s/", highlight: "ss", words: ["kiss", "dress", "glass"] },
  { stage: "2", section: "Double Letter Endings 双写辅音结尾", phoneme: "zz", sound: "ending /z/", highlight: "zz", words: ["buzz", "fizz", "jazz"] },
  { stage: "2", section: "Magic e 长元音魔法 e", phoneme: "a_e", sound: "/ay/", highlight: "a_e", words: ["tape", "cake", "name"] },
  { stage: "2", section: "Magic e 长元音魔法 e", phoneme: "i_e", sound: "/ie/", highlight: "i_e", words: ["pipe", "kite", "bike"] },
  { stage: "2", section: "Magic e 长元音魔法 e", phoneme: "o_e", sound: "/oa/", highlight: "o_e", words: ["cone", "home", "rope"] },
  { stage: "2", section: "Magic e 长元音魔法 e", phoneme: "u_e", sound: "/ue/", highlight: "u_e", words: ["cube", "cute", "mule"] },
  { stage: "2", section: "Vowel 长元音基础", phoneme: "a", sound: "long /a/", highlight: "a", words: ["acorn", "apron", "angel"] },
  { stage: "2", section: "Vowel 长元音基础", phoneme: "e", sound: "long /e/", highlight: "ee", words: ["sheep", "bee", "tree"] },
  { stage: "2", section: "Vowel 长元音基础", phoneme: "i", sound: "long /i/", highlight: "i", words: ["pie", "tie", "fly"] },
  { stage: "2", section: "Vowel 长元音基础", phoneme: "o", sound: "long /o/", highlight: "o", words: ["ghost", "go", "boat"] },
  { stage: "2", section: "Vowel 长元音基础", phoneme: "u", sound: "long /u/", highlight: "u", words: ["unicorn", "music", "unit"] },
  { stage: "3", section: "Vowel Teams 元音组合", phoneme: "ai", sound: "/ay/", highlight: "ai", words: ["rain", "snail", "train"] },
  { stage: "3", section: "Vowel Teams 元音组合", phoneme: "ay", sound: "/ay/", highlight: "ay", words: ["hay", "day", "play"] },
  { stage: "3", section: "Vowel Teams 元音组合", phoneme: "ea", sound: "/ee/", highlight: "ea", words: ["leaf", "read", "beach"] },
  { stage: "3", section: "Vowel Teams 元音组合", phoneme: "ee", sound: "/ee/", highlight: "ee", words: ["sleep", "feet", "green"] },
  { stage: "3", section: "Vowel Teams 元音组合", phoneme: "ey", sound: "/ay/", highlight: "ey", words: ["turkey", "key", "money"] },
  { stage: "3", section: "Vowel Teams 元音组合", phoneme: "ie", sound: "/ie/", highlight: "ie", words: ["tie", "pie", "cried"] },
  { stage: "3", section: "Vowel Teams 元音组合", phoneme: "oa", sound: "/oa/", highlight: "oa", words: ["boat", "coat", "soap"] },
  { stage: "3", section: "Vowel Teams 元音组合", phoneme: "oe", sound: "/oa/", highlight: "oe", words: ["toe", "doe", "hoe"] },
  { stage: "3", section: "Vowel Teams 元音组合", phoneme: "ue", sound: "/ue/", highlight: "ue", words: ["glue", "blue", "clue"] },
  { stage: "3", section: "Vowel Teams 元音组合", phoneme: "ui", sound: "/ue/", highlight: "ui", words: ["juice", "fruit", "suit"] },
  { stage: "3", section: "Bossy R r 控制元音", phoneme: "ar", sound: "/ar/", highlight: "ar", words: ["card", "harp", "star"] },
  { stage: "3", section: "Bossy R r 控制元音", phoneme: "or", sound: "/or/", highlight: "or", words: ["fork", "horse", "corn"] },
  { stage: "3", section: "Bossy R r 控制元音", phoneme: "er", sound: "/er/", highlight: "er", words: ["jersey", "eraser", "her"] },
  { stage: "3", section: "Bossy R r 控制元音", phoneme: "ir", sound: "/er/", highlight: "ir", words: ["stir", "skirt", "bird"] },
  { stage: "3", section: "Bossy R r 控制元音", phoneme: "ur", sound: "/er/", highlight: "ur", words: ["church", "hurt", "turn"] },
  { stage: "3", section: "Tricky Vowels 特殊元音", phoneme: "oo", sound: "/oo/", highlight: "oo", words: ["boot", "moon", "spoon"] },
  { stage: "3", section: "Tricky Vowels 特殊元音", phoneme: "ou", sound: "/ow/", highlight: "ou", words: ["mouth", "cloud", "house"] },
  { stage: "3", section: "Tricky Vowels 特殊元音", phoneme: "oi", sound: "/oy/", highlight: "oi", words: ["coin", "oil", "boil"] },
  { stage: "3", section: "Tricky Vowels 特殊元音", phoneme: "oy", sound: "/oy/", highlight: "oy", words: ["boy", "toy", "joy"] },
  { stage: "3", section: "Tricky Vowels 特殊元音", phoneme: "au", sound: "/aw/", highlight: "au", words: ["caught", "sauce", "August"] },
  { stage: "3", section: "Tricky Vowels 特殊元音", phoneme: "aw", sound: "/aw/", highlight: "aw", words: ["strawberry", "saw", "draw"] },
  { stage: "3", section: "Tricky Vowels 特殊元音", phoneme: "ow", sound: "/ow/", highlight: "ow", words: ["cow", "owl", "brown"] },
  { stage: "3", section: "Tricky Vowels 特殊元音", phoneme: "ew", sound: "/ue/", highlight: "ew", words: ["pew", "new", "chew"] },
  { stage: "3", section: "Tricky Vowels 特殊元音", phoneme: "y", sound: "consonant /y/", highlight: "y", words: ["yellow", "yo-yo", "yak"] },
  { stage: "3", section: "Tricky Vowels 特殊元音", phoneme: "y", sound: "vowel /ie/", highlight: "y", words: ["fly", "sky", "my"] },
];

const vowel20Cards = [
  { stage: "20元音", section: "20 Vowels 短元音", phoneme: "ă", sound: "short /æ/", highlight: "a", words: ["cat", "map", "jam"] },
  { stage: "20元音", section: "20 Vowels 短元音", phoneme: "ĕ", sound: "short /e/", highlight: "e", words: ["bed", "pen", "hen"] },
  { stage: "20元音", section: "20 Vowels 短元音", phoneme: "ĭ", sound: "short /ɪ/", highlight: "i", words: ["pig", "sit", "pin"] },
  { stage: "20元音", section: "20 Vowels 短元音", phoneme: "ŏ", sound: "short /ɒ/", highlight: "o", words: ["dog", "box", "hop"] },
  { stage: "20元音", section: "20 Vowels 短元音", phoneme: "ŭ", sound: "short /ʌ/", highlight: "u", words: ["sun", "cup", "bus"] },
  { stage: "20元音", section: "20 Vowels 长元音", phoneme: "a_e", sound: "long /eɪ/", highlight: "a_e", words: ["cake", "name", "tape"] },
  { stage: "20元音", section: "20 Vowels 长元音", phoneme: "i_e", sound: "long /aɪ/", highlight: "i_e", words: ["kite", "bike", "pipe"] },
  { stage: "20元音", section: "20 Vowels 长元音", phoneme: "o_e", sound: "long /oʊ/", highlight: "o_e", words: ["home", "rope", "cone"] },
  { stage: "20元音", section: "20 Vowels 长元音", phoneme: "u_e", sound: "long /juː/", highlight: "u_e", words: ["cube", "cute", "mule"] },
  { stage: "20元音", section: "20 Vowels 元音组合", phoneme: "ai", sound: "/eɪ/", highlight: "ai", words: ["rain", "snail", "train"] },
  { stage: "20元音", section: "20 Vowels 元音组合", phoneme: "ay", sound: "/eɪ/", highlight: "ay", words: ["day", "play", "hay"] },
  { stage: "20元音", section: "20 Vowels 元音组合", phoneme: "ee", sound: "/iː/", highlight: "ee", words: ["bee", "feet", "green"] },
  { stage: "20元音", section: "20 Vowels 元音组合", phoneme: "ea", sound: "/iː/", highlight: "ea", words: ["leaf", "beach", "read"] },
  { stage: "20元音", section: "20 Vowels 元音组合", phoneme: "oa", sound: "/oʊ/", highlight: "oa", words: ["boat", "coat", "soap"] },
  { stage: "20元音", section: "20 Vowels 元音组合", phoneme: "ow", sound: "/oʊ/", highlight: "ow", words: ["snow", "window", "yellow"] },
  { stage: "20元音", section: "20 Vowels 双元音", phoneme: "oi", sound: "/ɔɪ/", highlight: "oi", words: ["coin", "oil", "boil"] },
  { stage: "20元音", section: "20 Vowels 双元音", phoneme: "oy", sound: "/ɔɪ/", highlight: "oy", words: ["boy", "toy", "joy"] },
  { stage: "20元音", section: "20 Vowels 双元音", phoneme: "ou", sound: "/aʊ/", highlight: "ou", words: ["cloud", "house", "mouth"] },
  { stage: "20元音", section: "20 Vowels R 控制元音", phoneme: "ar", sound: "/ɑːr/", highlight: "ar", words: ["car", "star", "park"] },
  { stage: "20元音", section: "20 Vowels R 控制元音", phoneme: "er", sound: "/ɜːr/", highlight: "er", words: ["her", "fern", "letter"] },
];

cards.push(...vowel20Cards);

const initialParams = new URLSearchParams(window.location.search);
let currentStage = initialParams.get("stage") || "all";
let currentIndex = Math.max(0, Math.min(cards.length - 1, Number(new URLSearchParams(window.location.search).get("slide") || 1) - 1));

const stageButtons = document.querySelectorAll(".stage-button");
const stageLabel = document.getElementById("stageLabel");
const sectionLabel = document.getElementById("sectionLabel");
const phonemeText = document.getElementById("phonemeText");
const soundLabel = document.getElementById("soundLabel");
const wordList = document.getElementById("wordList");
const pageCounter = document.getElementById("pageCounter");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const progressDots = document.getElementById("progressDots");
const printButton = document.getElementById("printButton");
const printDeck = document.getElementById("printDeck");

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[char]);
}

const wordPhoneticMap = {
  "alligator": "/ˈælɪɡeɪtər/",
  "angel": "/ˈeɪndʒəl/",
  "ant": "/ænt/",
  "apple": "/ˈæpəl/",
  "apron": "/ˈeɪprən/",
  "august": "/ˈɔːɡəst/",
  "ball": "/bɔːl/",
  "banana": "/bəˈnænə/",
  "beach": "/biːtʃ/",
  "bed": "/bed/",
  "bee": "/biː/",
  "bell": "/bel/",
  "bike": "/baɪk/",
  "bird": "/bɜːrd/",
  "black": "/blæk/",
  "block": "/blɑːk/",
  "blue": "/bluː/",
  "boat": "/boʊt/",
  "boil": "/bɔɪl/",
  "boot": "/buːt/",
  "box": "/bɑːks/",
  "boy": "/bɔɪ/",
  "bread": "/bred/",
  "brown": "/braʊn/",
  "brush": "/brʌʃ/",
  "bus": "/bʌs/",
  "cake": "/keɪk/",
  "car": "/kɑːr/",
  "card": "/kɑːrd/",
  "cat": "/kæt/",
  "caught": "/kɔːt/",
  "chair": "/tʃer/",
  "cheese": "/tʃiːz/",
  "chew": "/tʃuː/",
  "chick": "/tʃɪk/",
  "church": "/tʃɜːrtʃ/",
  "city": "/ˈsɪti/",
  "clap": "/klæp/",
  "cliff": "/klɪf/",
  "clock": "/klɑːk/",
  "cloud": "/klaʊd/",
  "clue": "/kluː/",
  "coat": "/koʊt/",
  "coin": "/kɔɪn/",
  "cone": "/koʊn/",
  "corn": "/kɔːrn/",
  "cow": "/kaʊ/",
  "crab": "/kræb/",
  "crayon": "/ˈkreɪɑːn/",
  "crown": "/kraʊn/",
  "cube": "/kjuːb/",
  "cup": "/kʌp/",
  "cute": "/kjuːt/",
  "day": "/deɪ/",
  "dog": "/dɔːɡ/",
  "dolphin": "/ˈdɑːlfɪn/",
  "donut": "/ˈdoʊnʌt/",
  "draw": "/drɔː/",
  "dress": "/dres/",
  "drum": "/drʌm/",
  "duck": "/dʌk/",
  "egg": "/eɡ/",
  "elephant": "/ˈelɪfənt/",
  "elf": "/elf/",
  "eraser": "/ɪˈreɪsər/",
  "fan": "/fæn/",
  "feet": "/fiːt/",
  "fern": "/fɜːrn/",
  "fish": "/fɪʃ/",
  "flag": "/flæɡ/",
  "flower": "/ˈflaʊər/",
  "fly": "/flaɪ/",
  "fork": "/fɔːrk/",
  "fox": "/fɑːks/",
  "frog": "/frɔːɡ/",
  "fruit": "/fruːt/",
  "gate": "/ɡeɪt/",
  "gem": "/dʒem/",
  "ghost": "/ɡoʊst/",
  "giant": "/ˈdʒaɪənt/",
  "gift": "/ɡɪft/",
  "giraffe": "/dʒəˈræf/",
  "glass": "/ɡlæs/",
  "glasses": "/ˈɡlæsɪz/",
  "glue": "/ɡluː/",
  "go": "/ɡoʊ/",
  "goat": "/ɡoʊt/",
  "grapes": "/ɡreɪps/",
  "grass": "/ɡræs/",
  "green": "/ɡriːn/",
  "gum": "/ɡʌm/",
  "harp": "/hɑːrp/",
  "hat": "/hæt/",
  "hay": "/heɪ/",
  "heart": "/hɑːrt/",
  "hen": "/hen/",
  "her": "/hɜːr/",
  "hill": "/hɪl/",
  "home": "/hoʊm/",
  "hop": "/hɑːp/",
  "horse": "/hɔːrs/",
  "house": "/haʊs/",
  "hurt": "/hɜːrt/",
  "igloo": "/ˈɪɡluː/",
  "ink": "/ɪŋk/",
  "insect": "/ˈɪnsekt/",
  "jam": "/dʒæm/",
  "jellyfish": "/ˈdʒelifɪʃ/",
  "jet": "/dʒet/",
  "joy": "/dʒɔɪ/",
  "juice": "/dʒuːs/",
  "key": "/kiː/",
  "king": "/kɪŋ/",
  "kiss": "/kɪs/",
  "kite": "/kaɪt/",
  "lamp": "/læmp/",
  "leaf": "/liːf/",
  "letter": "/ˈletər/",
  "lion": "/ˈlaɪən/",
  "map": "/mæp/",
  "money": "/ˈmʌni/",
  "monkey": "/ˈmʌŋki/",
  "moon": "/muːn/",
  "mouth": "/maʊθ/",
  "mule": "/mjuːl/",
  "music": "/ˈmjuːzɪk/",
  "my": "/maɪ/",
  "name": "/neɪm/",
  "nest": "/nest/",
  "net": "/net/",
  "new": "/nuː/",
  "nose": "/noʊz/",
  "octopus": "/ˈɑːktəpəs/",
  "oil": "/ɔɪl/",
  "ostrich": "/ˈɑːstrɪtʃ/",
  "owl": "/aʊl/",
  "ox": "/ɑːks/",
  "pan": "/pæn/",
  "park": "/pɑːrk/",
  "pen": "/pen/",
  "phone": "/foʊn/",
  "photo": "/ˈfoʊtoʊ/",
  "pie": "/paɪ/",
  "pig": "/pɪɡ/",
  "pin": "/pɪn/",
  "pipe": "/paɪp/",
  "pizza": "/ˈpiːtsə/",
  "plane": "/pleɪn/",
  "plant": "/plænt/",
  "play": "/pleɪ/",
  "plug": "/plʌɡ/",
  "queen": "/kwiːn/",
  "quick": "/kwɪk/",
  "quilt": "/kwɪlt/",
  "quiz": "/kwɪz/",
  "rain": "/reɪn/",
  "rainbow": "/ˈreɪnboʊ/",
  "read": "/riːd/",
  "red": "/red/",
  "ring": "/rɪŋ/",
  "rock": "/rɑːk/",
  "rope": "/roʊp/",
  "sauce": "/sɔːs/",
  "saw": "/sɔː/",
  "shark": "/ʃɑːrk/",
  "sheep": "/ʃiːp/",
  "shell": "/ʃel/",
  "ship": "/ʃɪp/",
  "shop": "/ʃɑːp/",
  "sit": "/sɪt/",
  "skirt": "/skɜːrt/",
  "sky": "/skaɪ/",
  "sleep": "/sliːp/",
  "slide": "/slaɪd/",
  "smile": "/smaɪl/",
  "snail": "/sneɪl/",
  "snake": "/sneɪk/",
  "snow": "/snoʊ/",
  "soap": "/soʊp/",
  "sock": "/sɑːk/",
  "spoon": "/spuːn/",
  "star": "/stɑːr/",
  "stir": "/stɜːr/",
  "stone": "/stoʊn/",
  "stop": "/stɑːp/",
  "strawberry": "/ˈstrɔːberi/",
  "suit": "/suːt/",
  "sun": "/sʌn/",
  "swim": "/swɪm/",
  "tape": "/teɪp/",
  "ten": "/ten/",
  "then": "/ðen/",
  "they": "/ðeɪ/",
  "thin": "/θɪn/",
  "this": "/ðɪs/",
  "three": "/θriː/",
  "thumb": "/θʌm/",
  "tie": "/taɪ/",
  "top": "/tɑːp/",
  "toy": "/tɔɪ/",
  "train": "/treɪn/",
  "tree": "/triː/",
  "truck": "/trʌk/",
  "turn": "/tɜːrn/",
  "turtle": "/ˈtɜːrtl/",
  "umbrella": "/ʌmˈbrelə/",
  "under": "/ˈʌndər/",
  "unicorn": "/ˈjuːnɪkɔːrn/",
  "unit": "/ˈjuːnɪt/",
  "up": "/ʌp/",
  "van": "/væn/",
  "vest": "/vest/",
  "volcano": "/vɑːlˈkeɪnoʊ/",
  "watermelon": "/ˈwɔːtərmelən/",
  "web": "/web/",
  "whale": "/weɪl/",
  "wheel": "/wiːl/",
  "white": "/waɪt/",
  "window": "/ˈwɪndoʊ/",
  "wind": "/wɪnd/",
  "x-ray": "/ˈeks reɪ/",
  "yak": "/jæk/",
  "yellow": "/ˈjeloʊ/",
  "yo-yo": "/ˈjoʊ joʊ/",
  "zebra": "/ˈziːbrə/",
  "zip": "/zɪp/",
  "zoo": "/zuː/",
};

Object.assign(wordPhoneticMap, {
  "acorn": "/ˈeɪkɔːrn/",
  "brick": "/brɪk/",
  "buzz": "/bʌz/",
  "cent": "/sent/",
  "circle": "/ˈsɜːrkəl/",
  "clip": "/klɪp/",
  "cried": "/kraɪd/",
  "doe": "/doʊ/",
  "dragon": "/ˈdræɡən/",
  "fizz": "/fɪz/",
  "flip": "/flɪp/",
  "fries": "/fraɪz/",
  "glow": "/ɡloʊ/",
  "hoe": "/hoʊ/",
  "jazz": "/dʒæz/",
  "jersey": "/ˈdʒɜːrzi/",
  "off": "/ɔːf/",
  "pew": "/pjuː/",
  "pretzel": "/ˈpretsəl/",
  "prince": "/prɪns/",
  "prize": "/praɪz/",
  "puff": "/pʌf/",
  "quack": "/kwæk/",
  "scale": "/skeɪl/",
  "scarf": "/skɑːrf/",
  "scooter": "/ˈskuːtər/",
  "skateboard": "/ˈskeɪtbɔːrd/",
  "skip": "/skɪp/",
  "skunk": "/skʌŋk/",
  "sled": "/sled/",
  "small": "/smɔːl/",
  "smell": "/smel/",
  "spider": "/ˈspaɪdər/",
  "spin": "/spɪn/",
  "swan": "/swɑːn/",
  "sweet": "/swiːt/",
  "toe": "/toʊ/",
  "turkey": "/ˈtɜːrki/",
});

function normalizeWordKey(word) {
  return String(word).trim().toLowerCase();
}

function getWordPhonetic(word, card) {
  const mapped = wordPhoneticMap[normalizeWordKey(word)];
  if (mapped) return mapped;
  const match = String(card.sound || "").match(/\/[^/]+\//);
  return match ? match[0] : "";
}

function getTargetPhoneticParts(card) {
  const sound = String(card.sound || "").toLowerCase();
  const highlight = String(card.highlight || "").toLowerCase();
  const phoneme = String(card.phoneme || "").toLowerCase();
  const table = [
    [/voiced\s+\/th\//, ["ð"]],
    [/voiceless\s+\/th\//, ["θ"]],
    [/soft\s+\/s\//, ["s"]],
    [/hard\s+\/k\//, ["k"]],
    [/soft\s+\/j\//, ["dʒ"]],
    [/hard\s+\/g\//, ["ɡ", "g"]],
    [/short\s+\/a\//, ["æ"]],
    [/short\s+\/e\//, ["e"]],
    [/short\s+\/i\//, ["ɪ"]],
    [/short\s+\/o\//, ["ɑː", "ɒ"]],
    [/short\s+\/u\//, ["ʌ"]],
    [/long\s+\/a\//, ["eɪ"]],
    [/long\s+\/e\//, ["iː"]],
    [/long\s+\/i\//, ["aɪ"]],
    [/long\s+\/o\//, ["oʊ"]],
    [/long\s+\/u\//, ["juː", "uː"]],
    [/\/ay\//, ["eɪ"]],
    [/\/ie\//, ["aɪ"]],
    [/\/oa\//, ["oʊ"]],
    [/\/ue\//, ["juː", "uː"]],
    [/\/ee\//, ["iː"]],
    [/\/ow\//, ["aʊ"]],
    [/\/oy\//, ["ɔɪ"]],
    [/\/aw\//, ["ɔː"]],
    [/\/oo\//, ["uː"]],
    [/\/ar\//, ["ɑːr", "ɑː"]],
    [/\/or\//, ["ɔːr", "ɔː"]],
    [/\/er\//, ["ɜːr", "ɜː"]],
    [/\/sh\//, ["ʃ"]],
    [/\/ch\//, ["tʃ"]],
    [/\/kw\//, ["kw"]],
    [/\/ks\//, ["ks"]],
    [/\/th\//, ["θ", "ð"]],
  ];
  const matched = table.find(([pattern]) => pattern.test(sound));
  if (matched) return matched[1];

  if (highlight === "qu") return ["kw"];
  if (highlight === "ph") return ["f"];
  if (highlight === "ck" || highlight === "c" || highlight === "k") return ["k"];
  if (highlight === "sh") return ["ʃ"];
  if (highlight === "ch") return ["tʃ"];
  if (highlight === "th") return ["θ", "ð"];
  if (phoneme === "a" || phoneme === "aa") return ["æ"];
  if (phoneme === "e" || phoneme === "ee") return ["e"];
  if (phoneme === "i" || phoneme === "ii") return ["ɪ"];
  if (phoneme === "o" || phoneme === "oo") return ["ɑː", "ɒ"];
  if (phoneme === "u" || phoneme === "uu") return ["ʌ"];
  return [highlight].filter(Boolean);
}

function renderPhonetic(phonetic, card) {
  const parts = getTargetPhoneticParts(card).sort((a, b) => b.length - a.length);
  const target = parts.find((part) => phonetic.includes(part));
  if (!target) return escapeHtml(phonetic);
  const index = phonetic.indexOf(target);
  return [
    escapeHtml(phonetic.slice(0, index)),
    `<mark>${escapeHtml(target)}</mark>`,
    escapeHtml(phonetic.slice(index + target.length)),
  ].join("");
}

function getWordFitChars(word, phonetic) {
  return Math.max(8, Array.from(`${word}${phonetic}`).length);
}

function visibleCards() {
  return currentStage === "all" ? cards : cards.filter((card) => card.stage === currentStage);
}

function highlightMagicE(word, pattern) {
  const first = pattern[0];
  const last = pattern[2];
  const lower = word.toLowerCase();
  const firstIndex = lower.indexOf(first);
  const lastIndex = lower.lastIndexOf(last);
  if (firstIndex === -1 || lastIndex === -1 || firstIndex >= lastIndex) {
    return escapeHtml(word);
  }

  return [
    escapeHtml(word.slice(0, firstIndex)),
    `<mark>${escapeHtml(word[firstIndex])}</mark>`,
    escapeHtml(word.slice(firstIndex + 1, lastIndex)),
    `<mark>${escapeHtml(word[lastIndex])}</mark>`,
    escapeHtml(word.slice(lastIndex + 1)),
  ].join("");
}

function highlightWord(word, highlight) {
  if (highlight.includes("_")) {
    return highlightMagicE(word, highlight);
  }

  const lower = word.toLowerCase();
  const target = highlight.toLowerCase();
  const index = lower.indexOf(target);
  if (index === -1) {
    return escapeHtml(word);
  }

  return [
    escapeHtml(word.slice(0, index)),
    `<mark>${escapeHtml(word.slice(index, index + target.length))}</mark>`,
    escapeHtml(word.slice(index + target.length)),
  ].join("");
}

function renderWordCard(word, card, index, print = false) {
  const prefix = print ? "print-" : "";
  const phonetic = getWordPhonetic(word, card);
  const length = getWordFitChars(word, phonetic);
  return `
    <article class="${prefix}word-card">
      <span class="${prefix}word-index">${index + 1}</span>
      <div class="${prefix}word-entry" style="--chars:${length}">
        <span class="${prefix}word">${highlightWord(word, card.highlight)}</span>
        <span class="${prefix}phonetic">${renderPhonetic(phonetic, card)}</span>
      </div>
    </article>
  `;
}

function renderDots(total) {
  const maxDots = Math.min(total, 24);
  const dots = [];
  for (let i = 0; i < maxDots; i += 1) {
    const mappedIndex = Math.floor((i / Math.max(maxDots - 1, 1)) * Math.max(total - 1, 0));
    dots.push(`<span class="dot ${Math.abs(mappedIndex - currentIndex) <= 1 ? "active" : ""}"></span>`);
  }
  progressDots.innerHTML = dots.join("");
}

function render() {
  const list = visibleCards();
  if (!list.length) {
    currentStage = "all";
    return render();
  }
  currentIndex = Math.max(0, Math.min(currentIndex, list.length - 1));
  const card = list[currentIndex];
  stageLabel.textContent = card.stage === "20元音" ? "20元音" : `阶段 ${card.stage}`;
  sectionLabel.textContent = card.section;
  phonemeText.textContent = card.phoneme;
  soundLabel.textContent = card.sound;
  pageCounter.textContent = `${currentIndex + 1} / ${list.length}`;
  wordList.innerHTML = card.words.map((word, index) => renderWordCard(word, card, index)).join("");
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === list.length - 1;
  renderDots(list.length);
}

function renderPrintDeck() {
  printDeck.innerHTML = cards.map((card, index) => `
    <article class="print-slide">
      <aside class="print-phoneme">
        <p class="print-stage">${card.stage === "20元音" ? "20元音" : `阶段 ${escapeHtml(card.stage)}`}</p>
        <p class="print-section">${escapeHtml(card.section)}</p>
        <div class="print-phoneme-text">${escapeHtml(card.phoneme)}</div>
        <p class="print-sound">${escapeHtml(card.sound)}</p>
      </aside>
      <section class="print-words">
        <div class="print-header">
          <span>三个例词</span>
          <span>${index + 1} / ${cards.length}</span>
        </div>
        <div class="print-word-list">
          ${card.words.map((word, wordIndex) => renderWordCard(word, card, wordIndex, true)).join("")}
        </div>
      </section>
    </article>
  `).join("");
}

stageButtons.forEach((button) => {
  button.classList.toggle("active", button.dataset.stage === currentStage);
  button.addEventListener("click", () => {
    stageButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    currentStage = button.dataset.stage;
    currentIndex = 0;
    render();
  });
});

prevButton.addEventListener("click", () => {
  currentIndex = Math.max(0, currentIndex - 1);
  render();
});

nextButton.addEventListener("click", () => {
  currentIndex = Math.min(visibleCards().length - 1, currentIndex + 1);
  render();
});

printButton.addEventListener("click", () => {
  renderPrintDeck();
  window.print();
});

window.addEventListener("beforeprint", renderPrintDeck);

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    prevButton.click();
  }
  if (event.key === "ArrowRight") {
    nextButton.click();
  }
});

window.PHONICS_CARDS = cards;
renderPrintDeck();
render();
