import json
import re
from pathlib import Path

from PIL import Image, ImageChops


ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "data" / "english" / "grade3-up.json"
DATA_JS_EXPORTER = ROOT / "scripts" / "export_english_data_js.py"
SOURCE_DIR = ROOT / "照片素材库"
OUTPUT_DIR = ROOT / "assets" / "english" / "tagged-word-art"
MANIFEST_PATH = ROOT / "assets" / "english" / "word-image-manifest.json"
PREVIEW_PATH = ROOT / "assets" / "english" / "tagged-word-art-preview.png"


UNIT_SHEETS = {
    1: SOURCE_DIR / "三年级上unit1.png",
    2: SOURCE_DIR / "unit2.png",
    3: SOURCE_DIR / "unit3.png",
    4: SOURCE_DIR / "unit4.png",
    5: SOURCE_DIR / "unit5.png",
    6: SOURCE_DIR / "unit6.png",
}


def slug(value):
    value = value.lower().replace("’", "'")
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-")


def grid_boxes(xs, ys, width, height):
    return [(x, y, x + width, y + height) for y in ys for x in xs]


def unit_card_boxes():
    return {
        1: dict(zip(
            [
                "hello", "hi", "I", "am", "I'm", "name",
                "my", "your", "Miss", "Mr", "boy", "girl",
                "friend", "goodbye", "new friend", "classmate", "meet", "teacher",
            ],
            grid_boxes([25, 274, 522, 771, 1019, 1268], [23, 360, 689], 234, 321),
        )),
        2: {
            "father": (21, 18, 250, 317),
            "dad": (269, 18, 500, 317),
            "mother": (518, 18, 750, 317),
            "mum": (767, 18, 1000, 317),
            "brother": (1018, 18, 1250, 317),
            "sister": (1267, 18, 1500, 317),
            "grandfather": (21, 333, 272, 577),
            "grandmother": (282, 333, 534, 577),
            "family": (543, 333, 849, 577),
            "this": (865, 333, 1149, 577),
            "that": (1180, 333, 1513, 577),
            "grandpa": (21, 590, 272, 824),
            "grandma": (282, 590, 534, 824),
            "uncle": (543, 590, 849, 824),
            "aunt": (865, 590, 1149, 824),
            "cousin": (1180, 590, 1513, 824),
            "parent": (21, 840, 272, 1012),
            "photo": (282, 840, 534, 1012),
        },
        3: {
            "pet": (20, 16, 350, 343),
            "my favorite pet": (365, 16, 728, 343),
            "bird": (740, 16, 1088, 343),
            "fish": (1102, 16, 1515, 343),
            "cat": (20, 356, 350, 664),
            "dog": (365, 356, 728, 664),
            "rabbit": (740, 356, 1088, 664),
            "panda": (1102, 356, 1515, 664),
            "monkey": (20, 677, 350, 1004),
            "tiger": (365, 677, 728, 1004),
            "elephant": (740, 677, 1088, 1004),
            "lion": (1102, 677, 1515, 1004),
        },
        4: {
            "apple": (17, 15, 318, 481),
            "banana": (341, 15, 642, 481),
            "orange": (665, 15, 966, 481),
            "grape": (988, 15, 1289, 481),
            "tree": (1293, 15, 1601, 481),
            "flower": (17, 493, 318, 958),
            "grass": (341, 493, 642, 958),
            "sun": (665, 493, 966, 958),
            "water": (988, 493, 1289, 958),
            "air": (1293, 493, 1601, 958),
        },
        5: {
            "red": (21, 20, 295, 360),
            "yellow": (314, 20, 588, 360),
            "blue": (606, 20, 880, 360),
            "green": (900, 20, 1175, 360),
            "orange": (1197, 20, 1517, 360),
            "white": (21, 374, 295, 692),
            "black": (314, 374, 588, 692),
            "brown": (606, 374, 880, 692),
            "colour": (900, 374, 1175, 692),
            "rainbow": (1197, 374, 1517, 692),
            "pink": (23, 722, 232, 1002),
            "purple": (257, 722, 485, 1002),
            "colourful": (500, 722, 756, 1002),
            "light": (765, 722, 1012, 1002),
            "dark": (1024, 722, 1271, 1002),
            "picture": (1284, 722, 1517, 1002),
        },
        6: {
            "one": (21, 20, 295, 294),
            "two": (314, 20, 588, 294),
            "three": (606, 20, 880, 294),
            "four": (900, 20, 1175, 294),
            "five": (1197, 20, 1517, 294),
            "six": (21, 310, 295, 560),
            "seven": (314, 310, 588, 560),
            "eight": (606, 310, 890, 560),
            "nine": (900, 310, 1175, 560),
            "ten": (1197, 310, 1517, 560),
            "how many": (21, 574, 326, 825),
            "number": (341, 574, 646, 825),
            "candle": (662, 574, 940, 825),
            "book": (956, 574, 1197, 825),
            "pen": (1220, 574, 1517, 825),
            "pencil": (22, 835, 340, 1013),
            "bag": (376, 835, 733, 1013),
            "count": (746, 835, 1153, 1013),
        },
    }


SOURCE_FOR_WORD = {
    3: {
        "zoo": "lion",
        "funny": "monkey",
        "cute": "rabbit",
        "look at": "my favorite pet",
        "bear": "panda",
        "duck": "pet",
        "pig": "pet",
        "small": "rabbit",
        "big": "elephant",
        "lovely": "rabbit",
    },
    4: {
        "leaf": "grape",
        "plant": "tree",
        "green": "grass",
        "grow": "tree",
        "beautiful": "flower",
        "nature": "air",
        "red flower": "flower",
        "tall": "tree",
        "short": "grass",
        "garden": "flower",
        "seed": "apple",
        "fresh": "air",
    },
}


def crop_ratio(unit, source_word, box):
    _, y1, _, y2 = box
    if unit in (1, 2):
        if unit == 2 and y1 > 320:
            return 0.40
        return 0.34
    if unit == 3:
        return 0.32
    if unit == 4:
        return 0.25
    if unit == 5:
        return 0.50 if y1 > 700 else 0.36
    if unit == 6:
        if y1 > 800:
            return 0.48
        if y1 > 560:
            return 0.35
        return 0.36
    return 0.34


def trim_near_white(image):
    rgb = image.convert("RGB")
    white = Image.new("RGB", rgb.size, (255, 255, 255))
    diff = ImageChops.difference(rgb, white)
    mask = diff.convert("L").point(lambda value: 255 if value > 13 else 0)
    bbox = mask.getbbox()
    if not bbox:
        return image
    left, top, right, bottom = bbox
    margin = 10
    return image.crop((
        max(0, left - margin),
        max(0, top - margin),
        min(image.width, right + margin),
        min(image.height, bottom + margin),
    ))


def pad_square(image, size=360):
    image = image.convert("RGBA")
    ratio = min(size / image.width, size / image.height)
    resized = image.resize((max(1, round(image.width * ratio)), max(1, round(image.height * ratio))), Image.LANCZOS)
    canvas = Image.new("RGBA", (size, size), (255, 255, 255, 0))
    canvas.alpha_composite(resized, ((size - resized.width) // 2, (size - resized.height) // 2))
    return canvas


def crop_art(sheet, box, ratio):
    x1, y1, x2, y2 = box
    width = x2 - x1
    height = y2 - y1
    inner_margin_x = max(14, round(width * 0.055))
    lower = (
        x1 + inner_margin_x,
        y1 + round(height * ratio),
        x2 - inner_margin_x,
        y2 - max(8, round(height * 0.025)),
    )
    art = sheet.crop(lower)
    art = trim_near_white(art)
    return pad_square(art)


def word_image_path(word):
    return f"./assets/english/tagged-word-art/{slug(word)}.png"


def update_item_image(item):
    word = item.get("word") or item.get("answer")
    if word:
        item["image"] = word_image_path(word)


def collect_used_words(data):
    used = {}
    for unit in data["units"]:
        unit_no = int(unit["unit"])
        used.setdefault(unit_no, set())
        for group in ("keywords", "practice", "exercise"):
            for item in unit.get(group, []):
                word = item.get("word") or item.get("answer")
                if word:
                    used[unit_no].add(word)
    return used


def build_preview(images):
    thumb_size = 112
    cols = 12
    rows = (len(images) + cols - 1) // cols
    preview = Image.new("RGBA", (cols * thumb_size, rows * (thumb_size + 28)), (255, 255, 255, 255))
    for index, (word, image) in enumerate(images):
        x = (index % cols) * thumb_size
        y = (index // cols) * (thumb_size + 28)
        preview.alpha_composite(image.resize((thumb_size, thumb_size), Image.LANCZOS), (x, y))
    preview.save(PREVIEW_PATH)


def main():
    data = json.loads(DATA_PATH.read_text(encoding="utf-8"))
    boxes_by_unit = unit_card_boxes()
    used_by_unit = collect_used_words(data)
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    manifest = {
        "source": "照片素材库",
        "items": {},
    }
    preview_items = []

    for unit_no, words in used_by_unit.items():
        sheet = Image.open(UNIT_SHEETS[unit_no]).convert("RGBA")
        boxes = boxes_by_unit[unit_no]
        fallback_map = SOURCE_FOR_WORD.get(unit_no, {})
        for word in sorted(words, key=lambda item: [kw.get("word", kw.get("answer", "")) for kw in data["units"][unit_no - 1].get("keywords", [])].index(item) if item in [kw.get("word") for kw in data["units"][unit_no - 1].get("keywords", [])] else 999):
            source_word = word if word in boxes else fallback_map.get(word)
            if source_word not in boxes:
                continue
            box = boxes[source_word]
            image = crop_art(sheet, box, crop_ratio(unit_no, source_word, box))
            tag = slug(word)
            target = OUTPUT_DIR / f"{tag}.png"
            image.save(target)
            preview_items.append((word, image))
            manifest["items"][tag] = {
                "word": word,
                "image": f"./assets/english/tagged-word-art/{tag}.png",
                "sourceSheet": str(UNIT_SHEETS[unit_no].relative_to(ROOT)).replace("\\", "/"),
                "sourceWord": source_word,
                "unit": unit_no,
                "box": list(box),
            }

    for unit in data["units"]:
        for group in ("keywords", "practice", "exercise"):
            for item in unit.get(group, []):
                update_item_image(item)

    DATA_PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    MANIFEST_PATH.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    build_preview(preview_items)
    print(f"created {len(preview_items)} images in {OUTPUT_DIR}")
    print(f"updated {DATA_PATH}")
    print(f"preview {PREVIEW_PATH}")


if __name__ == "__main__":
    main()
