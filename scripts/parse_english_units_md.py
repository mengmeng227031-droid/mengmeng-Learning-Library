# 功能：解析三年级上册英语 Markdown 单元资料，生成统一的英文学习 JSON 数据。
# 输入：命令行传入的 Markdown 文件路径，内容包含单元标题、重点单词、核心句型和对话。
# 输出：data/english/grade3-up.json，并可配合 export_english_data_js.py 生成前端 JS 数据。
import json
import re
import sys
from pathlib import Path


STYLE_PROMPT = (
    "Cute educational mascot character, 3-head-tall proportions, large glossy anime eyes, "
    "soft pastel color palette, soft ambient lighting, rounded shapes, minimal clean background, "
    "high-end children brand illustration, soft 3D texture, kawaii Japanese preschool design, "
    "warm and joyful emotion, consistent mascot universe"
)


def clean_english(text):
    text = re.sub(r"`([^`]+)`", r"\1", text.strip())
    text = re.sub(r"^\d+\.\s*", "", text)
    text = re.sub(r"^-+\s*", "", text)
    text = text.replace("’", "'").replace("…", "...")
    return text.strip()


def english_part(text):
    text = clean_english(text)
    text = re.split(r"\s*[\u4e00-\u9fff]", text, maxsplit=1)[0]
    text = re.sub(r"\s*[；;].*$", "", text)
    return text.strip(" -")


def reading_title_from_unit_title(unit_title, unit_number):
    title = english_part(unit_title)
    return title.title() if title else f"Unit {unit_number}"


def split_word_line(line):
    line = clean_english(line)
    match = re.match(r"([A-Za-z][A-Za-z'’\-]*(?:\s+[A-Za-z][A-Za-z'’\-]*)*)\s+(.+)", line)
    if not match:
        return line, ""
    return match.group(1).replace("’", "'"), match.group(2).strip()


def section_between(text, start, end_patterns):
    start_match = re.search(start, text, re.M)
    if not start_match:
        return ""
    tail = text[start_match.end():]
    end_positions = []
    for pattern in end_patterns:
        match = re.search(pattern, tail, re.M)
        if match:
            end_positions.append(match.start())
    return tail[: min(end_positions)] if end_positions else tail


def parse_dialogues(block):
    lines = []
    for raw in block.splitlines():
        raw = raw.strip()
        if not raw.startswith(">"):
            continue
        raw = raw.lstrip("> ").strip()
        match = re.match(r"([A-Z]):\s*(.+)", raw)
        if match:
            lines.append({"speaker": match.group(1), "text": english_part(match.group(2))})
    return lines


def parse_unit(unit_number, unit_title, body):
    unit_title_en = english_part(unit_title)
    words_block = section_between(body, r"^### 一、重点单词\s*$", [r"^### 二、核心句型\s*$"])
    sentence_block = section_between(body, r"^### 二、核心句型\s*$", [r"^### 三、对话\s*$"])
    dialogue_block = section_between(body, r"^### 三、对话\s*$", [r"^---\s*$", r"^## Unit\s+\d+"])

    keywords = []
    seen = set()
    for raw in words_block.splitlines():
      raw = raw.strip()
      if not raw.startswith("- "):
          continue
      word, meaning = split_word_line(raw[2:])
      key = word.lower()
      if not word or key in seen:
          continue
      seen.add(key)
      keywords.append({
          "word": word,
          "meaning": meaning,
          "phonetic": "",
          "imagePrompt": (
              f"A cute educational mascot-style illustration representing {word}, "
              "single clear subject, white or transparent background, no text. "
              f"{STYLE_PROMPT}"
          )
      })

    key_sentences = []
    for raw in sentence_block.splitlines():
        raw = raw.strip()
        if re.match(r"^\d+\.\s+", raw) or raw.strip().startswith("- "):
            sentence = english_part(raw)
            if sentence and not sentence.startswith("基础句型") and sentence not in key_sentences:
                key_sentences.append(sentence)

    dialogues = parse_dialogues(dialogue_block)
    talk = dialogues[:6]

    practice_words = keywords[:3]
    practice = []
    for index, item in enumerate(practice_words):
        wrong = keywords[index + 3]["word"] if len(keywords) > index + 3 else "friend"
        practice.append({
            "answer": item["word"],
            "imagePrompt": item["imagePrompt"],
            "options": [f"A. {item['word']}", f"B. {wrong}"]
        })

    exercise = [
        {"answer": item["word"], "imagePrompt": item["imagePrompt"]}
        for item in keywords[3:6]
    ]

    reading_lines = []
    for item in keywords[:4]:
        if item["word"]:
            reading_lines.append(f"I see {article_for(item['word'])} {item['word']}.")
    if not reading_lines:
        reading_lines = ["Words are waiting."]

    return {
        "unit": unit_number,
        "unitTitle": f"Unit {unit_number}  {unit_title_en or f'Unit {unit_number}'}",
        "pdfUrl": f"./outputs/english-pdf/grade3-up-unit{unit_number}.pdf",
        "gradeLabel": "三年级上",
        "lesson": str(unit_number),
        "keywords": keywords,
        "keySentences": key_sentences[:6],
        "talk": talk,
        "practice": practice,
        "homework": f"Read Unit {unit_number} words and make two sentences.",
        "dialogue": dialogues,
        "reading": {
            "title": reading_title_from_unit_title(unit_title, unit_number),
            "lines": reading_lines,
            "scenePrompt": (
                f"A cute educational mascot-style scene for Unit {unit_number} {unit_title_en}, "
                f"warm classroom workbook style, no text. {STYLE_PROMPT}"
            )
        },
        "grammar": [
            {"pattern": sentence, "meaning": ""}
            for sentence in key_sentences[:3]
        ],
        "exercise": exercise,
        "summaryChecks": ["核心单词", "核心句型", "日常对话"],
        "selfRating": {"maxStars": 5, "value": 0}
    }


def article_for(word):
    return "an" if word[:1].lower() in "aeiou" else "a"


def parse_document(markdown):
    unit_pattern = re.compile(r"^## Unit\s+(\d+)\s+(.+)$", re.M)
    matches = list(unit_pattern.finditer(markdown))
    units = []
    for index, match in enumerate(matches):
        unit_number = int(match.group(1))
        title = match.group(2).strip()
        start = match.end()
        end = matches[index + 1].start() if index + 1 < len(matches) else len(markdown)
        if 1 <= unit_number <= 6:
            units.append(parse_unit(unit_number, title, markdown[start:end]))
    return units


def main():
    source = Path(sys.argv[1])
    target = Path(sys.argv[2])
    markdown = source.read_text(encoding="utf-8")
    units = parse_document(markdown)
    data = {
        "grade": "grade3",
        "semester": "上册",
        "label": "三年级上",
        "source": str(source),
        "sourceStatus": "parsed",
        "stylePrompt": STYLE_PROMPT,
        "units": units,
    }
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")


if __name__ == "__main__":
    main()
