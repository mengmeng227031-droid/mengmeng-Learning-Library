from __future__ import annotations

import json
import re
from dataclasses import dataclass
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont
from pypdf import PdfReader


ROOT = Path(__file__).resolve().parent
PDF_PATH = Path("D:/天津考试合集/pdfcreatlatex/phonics-ppt-deck/output/phonics-all-pages.pdf")
OUT_DIR = ROOT / "音标练习"
CARDS_DIR = OUT_DIR / "cards"
DATA_DIR = OUT_DIR / "data"
WORD_ART_DIR = OUT_DIR / "word-art"

CANVAS = (768, 1536)

COLORS = {
    "green": "#8BC85A",
    "light_green": "#E8F5C9",
    "pale_green": "#F7F9E8",
    "yellow": "#FFC83D",
    "orange": "#FF8A42",
    "cream": "#FFFDF4",
    "ink": "#333333",
    "muted": "#666666",
    "line": "#B8DD83",
    "white": "#FFFFFF",
}


@dataclass
class PhonicsPage:
    page: int
    stage: str
    topic: str
    grapheme: str
    sound: str
    words: list[str]


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    candidates = [
        "C:/Windows/Fonts/msyhbd.ttc" if bold else "C:/Windows/Fonts/msyh.ttc",
        "C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf",
    ]
    for path in candidates:
        if Path(path).exists():
            return ImageFont.truetype(path, size=size)
    return ImageFont.load_default()


FONTS = {
    "title": font(64, True),
    "h1": font(42, True),
    "h2": font(28, True),
    "body": font(24),
    "small": font(20, True),
    "word": font(25, True),
    "big": font(124, True),
    "choice": font(25, True),
}

EMOJI_FONT = ImageFont.truetype("C:/Windows/Fonts/seguiemj.ttf", 92) if Path("C:/Windows/Fonts/seguiemj.ttf").exists() else FONTS["title"]

WORD_EMOJI = {
    "August": "☀️", "acorn": "🌰", "alligator": "🐊", "angel": "👼", "ant": "🐜", "apple": "🍎", "apron": "🥼",
    "ball": "⚽", "banana": "🍌", "beach": "🏖️", "bed": "🛏️", "bee": "🐝", "bell": "🔔", "bike": "🚲",
    "bird": "🐦", "black": "⚫", "block": "🧱", "blue": "🔵", "boat": "⛵", "boil": "♨️", "boot": "🥾",
    "box": "📦", "boy": "👦", "bread": "🍞", "brick": "🧱", "brown": "🟤", "brush": "🖌️", "bus": "🚌",
    "buzz": "🐝", "cake": "🍰", "card": "🃏", "cat": "🐱", "caught": "🎣", "cent": "🪙", "chair": "🪑",
    "cheese": "🧀", "chew": "😋", "chick": "🐥", "church": "⛪", "circle": "⭕", "city": "🏙️", "clap": "👏",
    "cliff": "⛰️", "clip": "📎", "clock": "🕒", "cloud": "☁️", "clue": "🔎", "coat": "🧥", "coin": "🪙",
    "cone": "🍦", "corn": "🌽", "cow": "🐮", "crab": "🦀", "crayon": "🖍️", "cried": "😢", "crown": "👑",
    "cube": "🧊", "cup": "☕", "cute": "😊", "day": "☀️", "doe": "🦌", "dog": "🐶", "dolphin": "🐬",
    "donut": "🍩", "dragon": "🐉", "draw": "✏️", "dress": "👗", "drum": "🥁", "duck": "🦆", "egg": "🥚",
    "elephant": "🐘", "elf": "🧝", "eraser": "🧽", "fan": "🪭", "feet": "🦶", "fish": "🐟", "fizz": "🥤",
    "flag": "🚩", "flip": "🤸", "flower": "🌸", "fly": "🪰", "fork": "🍴", "fox": "🦊", "fries": "🍟",
    "frog": "🐸", "fruit": "🍇", "gate": "🚪", "gem": "💎", "ghost": "👻", "giant": "🧍", "gift": "🎁",
    "giraffe": "🦒", "glass": "🥛", "glasses": "👓", "glow": "💡", "glue": "🧴", "go": "➡️", "goat": "🐐",
    "grapes": "🍇", "grass": "🌱", "green": "🟢", "gum": "🍬", "harp": "🎻", "hat": "🎩", "hay": "🌾",
    "heart": "❤️", "hen": "🐔", "her": "👧", "hill": "⛰️", "hoe": "🪴", "home": "🏠", "hop": "🐇",
    "horse": "🐴", "house": "🏠", "hurt": "🤕", "igloo": "🧊", "ink": "🖋️", "insect": "🐞", "jam": "🍓",
    "jazz": "🎷", "jellyfish": "🪼", "jersey": "👕", "jet": "✈️", "joy": "😄", "juice": "🧃", "key": "🔑",
    "king": "🤴", "kiss": "😘", "kite": "🪁", "lamp": "💡", "leaf": "🍃", "lion": "🦁", "map": "🗺️",
    "money": "💰", "monkey": "🐵", "moon": "🌙", "mouth": "👄", "mule": "🐴", "music": "🎵", "my": "👋",
    "name": "🏷️", "nest": "🪹", "net": "🥅", "new": "✨", "nose": "👃", "octopus": "🐙", "off": "🔌",
    "oil": "🛢️", "ostrich": "🐦", "owl": "🦉", "ox": "🐂", "pan": "🍳", "pen": "🖊️", "pew": "🪑",
    "phone": "📱", "photo": "📷", "pie": "🥧", "pig": "🐷", "pin": "📌", "pipe": "🚰", "pizza": "🍕",
    "plane": "✈️", "plant": "🪴", "play": "🎮", "plug": "🔌", "pretzel": "🥨", "prince": "🤴", "prize": "🏆",
    "puff": "💨", "quack": "🦆", "queen": "👸", "quick": "⚡", "quilt": "🛏️", "quiz": "❓", "rain": "🌧️",
    "rainbow": "🌈", "read": "📖", "red": "🔴", "ring": "💍", "rock": "🪨", "rope": "🪢", "sauce": "🥫",
    "saw": "🪚", "scale": "⚖️", "scarf": "🧣", "scooter": "🛴", "shark": "🦈", "sheep": "🐑", "shell": "🐚",
    "ship": "🚢", "shop": "🏪", "sit": "🪑", "skateboard": "🛹", "skip": "⏭️", "skirt": "👗", "skunk": "🦨",
    "sky": "☁️", "sled": "🛷", "sleep": "😴", "slide": "🛝", "small": "🔹", "smell": "👃", "smile": "😊",
    "snail": "🐌", "snake": "🐍", "snow": "❄️", "soap": "🧼", "sock": "🧦", "spider": "🕷️", "spin": "🌀",
    "spoon": "🥄", "star": "⭐", "stir": "🥄", "stone": "🪨", "stop": "🛑", "strawberry": "🍓", "suit": "🤵",
    "sun": "☀️", "swan": "🦢", "sweet": "🍬", "swim": "🏊", "tape": "📼", "ten": "🔟", "then": "➡️",
    "they": "👥", "thin": "📏", "this": "☝️", "three": "3️⃣", "thumb": "👍", "tie": "👔", "toe": "🦶",
    "top": "🔝", "toy": "🧸", "train": "🚂", "tree": "🌳", "truck": "🚚", "turkey": "🦃", "turn": "↪️",
    "turtle": "🐢", "umbrella": "☂️", "under": "⬇️", "unicorn": "🦄", "unit": "🧩", "up": "⬆️",
    "van": "🚐", "vest": "🦺", "volcano": "🌋", "watermelon": "🍉", "web": "🕸️", "whale": "🐋", "wheel": "🛞",
    "white": "⚪", "wind": "💨", "x-ray": "🩻", "yak": "🐂", "yellow": "🟡", "yo-yo": "🪀", "zebra": "🦓",
    "zip": "🤐", "zoo": "🦁"
}


def extract_pages() -> list[PhonicsPage]:
    reader = PdfReader(str(PDF_PATH))
    pages: list[PhonicsPage] = []
    for index, page in enumerate(reader.pages, start=1):
        lines = [(line or "").strip() for line in (page.extract_text() or "").splitlines()]
        lines = [line for line in lines if line]
        if len(lines) < 9:
            continue

        stage = lines[0]
        topic = lines[1]
        grapheme = lines[2]
        sound = lines[3]

        words_by_number: dict[int, str] = {}
        for pos, line in enumerate(lines):
            inline_match = re.match(r"^([123])\s+(.+)$", line)
            if inline_match:
                words_by_number[int(inline_match.group(1))] = inline_match.group(2).strip()
                continue
            if line in {"1", "2", "3"} and pos + 1 < len(lines):
                words_by_number[int(line)] = lines[pos + 1]
        words = [words_by_number[number] for number in (1, 2, 3) if number in words_by_number]
        if len(words) != 3:
            continue

        pages.append(
            PhonicsPage(
                page=index,
                stage=stage,
                topic=topic,
                grapheme=grapheme,
                sound=sound,
                words=words,
            )
        )
    return pages


def safe_name(value: str) -> str:
    cleaned = re.sub(r"[^A-Za-z0-9]+", "-", value).strip("-").lower()
    return cleaned or "phonics"


def text_size(draw: ImageDraw.ImageDraw, text: str, selected_font: ImageFont.FreeTypeFont) -> tuple[int, int]:
    left, top, right, bottom = draw.textbbox((0, 0), text, font=selected_font)
    return right - left, bottom - top


def centered_text(
    draw: ImageDraw.ImageDraw,
    box: tuple[int, int, int, int],
    text: str,
    selected_font: ImageFont.FreeTypeFont,
    fill: str,
) -> None:
    x, y, w, h = box
    left, top, right, bottom = draw.textbbox((0, 0), text, font=selected_font)
    tw = right - left
    th = bottom - top
    draw.text((x + (w - tw) / 2 - left, y + (h - th) / 2 - top), text, font=selected_font, fill=fill)


def fitting_font(text: str, max_width: int, start_size: int, minimum_size: int = 16, bold: bool = True) -> ImageFont.FreeTypeFont:
    probe = ImageDraw.Draw(Image.new("RGB", (10, 10)))
    for size in range(start_size, minimum_size - 1, -1):
        selected = font(size, bold)
        if text_size(probe, text, selected)[0] <= max_width:
            return selected
    return font(minimum_size, bold)


def fitting_font_box(
    text: str,
    max_width: int,
    max_height: int,
    start_size: int,
    minimum_size: int = 16,
    bold: bool = True,
) -> ImageFont.FreeTypeFont:
    probe = ImageDraw.Draw(Image.new("RGB", (10, 10)))
    for size in range(start_size, minimum_size - 1, -1):
        selected = font(size, bold)
        left, top, right, bottom = probe.textbbox((0, 0), text, font=selected)
        if right - left <= max_width and bottom - top <= max_height:
            return selected
    return font(minimum_size, bold)


def wrap_text(draw: ImageDraw.ImageDraw, text: str, selected_font: ImageFont.FreeTypeFont, max_width: int) -> list[str]:
    if not text:
        return []
    tokens = text.split(" ")
    lines: list[str] = []
    current = ""
    for token in tokens:
        candidate = token if not current else f"{current} {token}"
        if text_size(draw, candidate, selected_font)[0] <= max_width:
            current = candidate
            continue
        if current:
            lines.append(current)
        if text_size(draw, token, selected_font)[0] <= max_width:
            current = token
            continue
        chunk = ""
        for char in token:
            candidate_chunk = f"{chunk}{char}"
            if text_size(draw, candidate_chunk, selected_font)[0] <= max_width:
                chunk = candidate_chunk
            else:
                if chunk:
                    lines.append(chunk)
                chunk = char
        current = chunk
    if current:
        lines.append(current)
    return lines


def draw_wrapped_text(
    draw: ImageDraw.ImageDraw,
    xy: tuple[int, int],
    text: str,
    selected_font: ImageFont.FreeTypeFont,
    fill: str,
    max_width: int,
    line_height: int,
    max_lines: int,
) -> None:
    x, y = xy
    for line in wrap_text(draw, text, selected_font, max_width)[:max_lines]:
        draw.text((x, y), line, font=selected_font, fill=fill)
        y += line_height


def round_rect(
    draw: ImageDraw.ImageDraw,
    box: tuple[int, int, int, int],
    radius: int,
    fill: str,
    outline: str | None = None,
    width: int = 1,
) -> None:
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def pill(draw: ImageDraw.ImageDraw, x: int, y: int, text: str, fill: str = COLORS["light_green"]) -> None:
    tw, th = text_size(draw, text, FONTS["h2"])
    round_rect(draw, (x, y, x + tw + 34, y + 44), 22, fill=fill)
    draw.text((x + 17, y + 5), text, font=FONTS["h2"], fill=COLORS["ink"])


def draw_panel(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], title: str) -> None:
    round_rect(draw, box, 18, COLORS["cream"], COLORS["line"], 2)
    pill(draw, box[0], box[1] - 2, title)


def draw_star(draw: ImageDraw.ImageDraw, cx: int, cy: int, size: int, fill: str) -> None:
    points = [
        (cx, cy - size),
        (cx + size * 0.28, cy - size * 0.32),
        (cx + size, cy - size * 0.32),
        (cx + size * 0.42, cy + size * 0.1),
        (cx + size * 0.62, cy + size * 0.82),
        (cx, cy + size * 0.38),
        (cx - size * 0.62, cy + size * 0.82),
        (cx - size * 0.42, cy + size * 0.1),
        (cx - size, cy - size * 0.32),
        (cx - size * 0.28, cy - size * 0.32),
    ]
    draw.polygon(points, fill=fill)


def draw_word_art(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], word: str, color: str) -> None:
    x, y, w, h = box
    round_rect(draw, (x, y, x + w, y + h), 18, "#FFFFFF", "#DDECB7", 2)
    draw.ellipse((x + 20, y + 12, x + w - 20, y + h - 28), fill="#FFF3BF", outline="#F4D15E", width=2)
    centered_text(draw, (x + 8, y + 8, w - 16, h - 36), word[:1].upper(), FONTS["h1"], color)
    centered_text(draw, (x + 0, y + h - 34, w, 28), word, fitting_font(word, w - 8, 25, 16), COLORS["ink"])


def create_word_art(word: str) -> Path:
    path = WORD_ART_DIR / f"{safe_name(word)}.png"
    image = Image.new("RGBA", (220, 220), (255, 255, 255, 0))
    draw = ImageDraw.Draw(image)
    round_rect(draw, (12, 12, 208, 208), 34, "#FFFFFF", "#C7E69A", 3)
    draw.ellipse((42, 28, 178, 164), fill="#FFF3BF", outline="#F4D15E", width=3)
    emoji = WORD_EMOJI.get(word, "⭐")
    bbox = draw.textbbox((0, 0), emoji, font=EMOJI_FONT, embedded_color=True)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    draw.text(((220 - tw) / 2 - bbox[0], 42 - bbox[1]), emoji, font=EMOJI_FONT, embedded_color=True)
    centered_text(draw, (16, 170, 188, 34), word, fitting_font(word, 184, 25, 15), COLORS["ink"])
    image.save(path)
    return path


def draw_word_image(canvas: Image.Image, box: tuple[int, int, int, int], word: str) -> None:
    x, y, w, h = box
    art_path = WORD_ART_DIR / f"{safe_name(word)}.png"
    if not art_path.exists():
        raise FileNotFoundError(f"missing word art for {word}: {art_path}")
    art = Image.open(art_path).convert("RGBA")
    art.thumbnail((w, h), Image.Resampling.LANCZOS)
    px = x + (w - art.width) // 2
    py = y + (h - art.height) // 2
    canvas.paste(art, (px, py), art)


def draw_pencil(draw: ImageDraw.ImageDraw, x: int, y: int) -> None:
    draw.rounded_rectangle((x, y + 18, x + 12, y + 58), radius=5, fill=COLORS["orange"])
    draw.polygon([(x, y + 18), (x + 6, y), (x + 12, y + 18)], fill=COLORS["yellow"])
    draw.polygon([(x + 4, y + 5), (x + 6, y), (x + 8, y + 5)], fill=COLORS["ink"])
    draw.line((x + 2, y + 24, x + 10, y + 24), fill="#FFFFFF", width=2)


def draw_grapheme(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], text: str) -> None:
    x, y, w, h = box
    selected = fitting_font_box(text, w - 54, h - 52, 118, 56, True)
    centered_text(draw, (x + 27, y + 24, w - 54, h - 58), text, selected, COLORS["green"])


def make_choices(answer: str, all_words: list[str], index: int) -> list[str]:
    pool = [word for word in all_words if word != answer]
    distractor = pool[index % len(pool)] if pool else "word"
    return [answer, distractor]


def draw_card(item: PhonicsPage, all_words: list[str]) -> Path:
    image = Image.new("RGB", CANVAS, COLORS["pale_green"])
    draw = ImageDraw.Draw(image)

    for cx, cy, radius, color in [
        (96, 90, 72, "#FFF8D8"),
        (650, 130, 96, "#EEF7D0"),
        (130, 1320, 110, "#F5F0D8"),
        (630, 1360, 120, "#EEF7D0"),
    ]:
        draw.ellipse((cx - radius, cy - radius, cx + radius, cy + radius), fill=color)

    round_rect(draw, (10, 10, 758, 1526), 28, "rgba(255,255,255,0)", COLORS["line"], 3)
    draw_star(draw, 84, 108, 24, COLORS["yellow"])
    draw_star(draw, 680, 100, 31, COLORS["yellow"])

    centered_text(draw, (172, 54, 424, 84), "Phonics", FONTS["title"], COLORS["orange"])
    centered_text(draw, (272, 132, 224, 34), f"{item.stage} · {item.topic}", FONTS["small"], COLORS["muted"])

    draw_panel(draw, (42, 196, 360, 472), "字母组合")
    round_rect(draw, (74, 256, 328, 434), 22, "#FBFFF4", "#C7E69A", 2)
    draw_grapheme(draw, (74, 256, 254, 178), item.grapheme)

    draw_panel(draw, (386, 196, 726, 472), "发音规则")
    draw.text((418, 292), item.sound, font=FONTS["h2"], fill=COLORS["ink"])
    rule = f"{item.grapheme} 在这些单词中练习 {item.sound.replace('letter sound ', '').replace('blend ', '').replace('short ', '').replace('long ', '').replace('vowel ', '')} 的发音。"
    draw_wrapped_text(draw, (418, 356), rule, FONTS["body"], COLORS["ink"], 270, 36, 3)

    draw_panel(draw, (42, 500, 360, 930), "例词 Examples")
    positions = [(78, 580), (216, 580), (78, 738)]
    art_colors = [COLORS["green"], COLORS["orange"], "#D08CFF"]
    for word, (x, y), color in zip(item.words, positions, art_colors):
        draw_word_image(image, (x - 8, y, 128, 128), word)

    draw_panel(draw, (386, 500, 726, 930), "跟读句子")
    sentences = [
        f"I can say {item.grapheme}.",
        f"{item.words[0].capitalize()} starts with {item.grapheme}.",
        f"I see a {item.words[1]}."
    ]
    y = 604
    for sentence in sentences:
        draw.text((430, y), sentence, font=FONTS["body"], fill=COLORS["ink"])
        y += 68

    draw_panel(draw, (42, 958, 726, 1340), "练习 Practice")
    draw.text((66, 1030), "看图，选择正确的单词。", font=FONTS["body"], fill=COLORS["ink"])
    for idx, word in enumerate(item.words):
        x = 66 + idx * 214
        if idx:
            draw.line((x - 16, 1082, x - 16, 1310), fill="#DDECB7", width=2)
        draw.text((x, 1084), f"{idx + 1}.", font=FONTS["small"], fill=COLORS["ink"])
        draw_word_image(image, (x + 36, 1080, 124, 124), word)
        choices = make_choices(word, all_words, item.page + idx)
        draw.text((x + 14, 1230), f"A. {choices[0]}", font=FONTS["choice"], fill=COLORS["ink"])
        draw.text((x + 14, 1280), f"B. {choices[1]}", font=FONTS["choice"], fill=COLORS["ink"])

    draw_panel(draw, (42, 1370, 726, 1488), "小贴士")
    short_sound = item.sound.split(" ", 2)[-1] if " " in item.sound else item.sound
    tip = f"听清 {short_sound}，再连到例词里反复练。"
    draw_wrapped_text(draw, (70, 1432), tip, FONTS["body"], COLORS["ink"], 588, 34, 1)
    draw_pencil(draw, 682, 1416)

    filename = f"{item.page:03d}-{safe_name(item.grapheme)}.png"
    path = CARDS_DIR / filename
    image.save(path, quality=95)
    return path


def build_image_prompt(word: str) -> str:
    return (
        f"A cute children textbook illustration of {word}, single object, easy for children to recognize, "
        "soft rounded shape, clean colors, white or transparent background, no letters, no caption, no watermark."
    )


def write_index(card_paths: list[Path]) -> None:
    cards = "\n".join(
        f'      <figure><img src="cards/{path.name}" alt="{path.stem}"><figcaption>{path.stem}</figcaption></figure>'
        for path in card_paths
    )
    html = f"""<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>音标练习卡片</title>
  <style>
    body {{ margin: 0; font-family: "Microsoft YaHei", Arial, sans-serif; background: #f5f7fa; color: #333; }}
    header {{ position: sticky; top: 0; padding: 18px 28px; background: rgba(255,255,255,.92); border-bottom: 1px solid #dde6c5; }}
    h1 {{ margin: 0; font-size: 24px; }}
    p {{ margin: 8px 0 0; color: #666; }}
    main {{ display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 18px; padding: 22px; }}
    figure {{ margin: 0; padding: 10px; border-radius: 16px; background: #fff; box-shadow: 0 12px 28px rgba(77,139,255,.12); }}
    img {{ width: 100%; display: block; border-radius: 12px; }}
    figcaption {{ margin-top: 8px; color: #666; font-size: 13px; text-align: center; }}
  </style>
</head>
<body>
  <header>
    <h1>音标练习卡片</h1>
    <p>共 {len(card_paths)} 张，可直接打印或继续替换单词配图。</p>
  </header>
  <main>
{cards}
  </main>
</body>
</html>
"""
    (OUT_DIR / "index.html").write_text(html, encoding="utf-8")


def main() -> None:
    CARDS_DIR.mkdir(parents=True, exist_ok=True)
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    WORD_ART_DIR.mkdir(parents=True, exist_ok=True)

    pages = extract_pages()
    all_words = sorted({word for item in pages for word in item.words})
    for word in all_words:
        create_word_art(word)
    card_paths = [draw_card(item, all_words) for item in pages]

    data = [
        {
            "page": item.page,
            "stage": item.stage,
            "topic": item.topic,
            "grapheme": item.grapheme,
            "sound": item.sound,
            "words": item.words,
            "card": f"cards/{path.name}",
        }
        for item, path in zip(pages, card_paths)
    ]
    prompts = [
        {
            "word": word,
            "prompt": build_image_prompt(word),
            "suggestedOutput": f"word-art/{safe_name(word)}.png",
        }
        for word in all_words
    ]

    (DATA_DIR / "phonics-cards.json").write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    (DATA_DIR / "word-image-prompts.json").write_text(json.dumps(prompts, ensure_ascii=False, indent=2), encoding="utf-8")
    write_index(card_paths)
    print(f"generated {len(card_paths)} cards")
    print(OUT_DIR)


if __name__ == "__main__":
    main()
