# 功能：把多个单词小图合成为英文学习模块封面图，如 dialogue、read、grammar。
# 输入：data/english/grade3-up.json 和 assets/english/tagged-word-art 下的单词图片。
# 输出：assets/english/section-art 下的模块组合图片。
import json
import re
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "data" / "english" / "grade3-up.json"
OUTPUT_DIR = ROOT / "assets" / "english" / "section-art"


SECTION_WORDS = {
    1: {
        "dialogue": ["hello", "hi", "boy", "girl"],
        "read": ["friend", "new friend", "classmate", "teacher"],
        "grammar": ["I", "am", "I'm", "name"],
    },
    2: {
        "dialogue": ["father", "mother", "brother", "sister"],
        "read": ["family", "grandfather", "grandmother", "photo"],
        "grammar": ["this", "that", "parent"],
    },
    3: {
        "dialogue": ["pet", "cat", "dog", "rabbit"],
        "read": ["bird", "fish", "panda", "monkey"],
        "grammar": ["tiger", "elephant", "lion"],
    },
    4: {
        "dialogue": ["apple", "banana", "orange", "grape"],
        "read": ["tree", "flower", "grass", "water"],
        "grammar": ["sun", "air", "grass"],
    },
    5: {
        "dialogue": ["red", "yellow", "blue", "green"],
        "read": ["orange", "white", "black", "brown"],
        "grammar": ["colour", "rainbow", "colourful"],
    },
    6: {
        "dialogue": ["one", "two", "three", "four"],
        "read": ["five", "six", "seven", "eight"],
        "grammar": ["how many", "number", "count"],
    },
}


PALETTES = {
    "dialogue": ((235, 247, 255), (255, 244, 250), (77, 139, 255)),
    "read": ((255, 250, 229), (237, 255, 250), (55, 210, 198)),
    "grammar": ((246, 242, 255), (255, 248, 221), (123, 97, 255)),
}


def slug(value):
    value = value.lower().replace("’", "'")
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-")


def image_path(word):
    return ROOT / "assets" / "english" / "tagged-word-art" / f"{slug(word)}.png"


def rounded_rectangle_mask(size, radius):
    mask = Image.new("L", size, 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle((0, 0, size[0] - 1, size[1] - 1), radius=radius, fill=255)
    return mask


def gradient_background(size, start, end):
    width, height = size
    image = Image.new("RGBA", size)
    pixels = image.load()
    for y in range(height):
        ratio = y / max(1, height - 1)
        color = tuple(round(start[i] * (1 - ratio) + end[i] * ratio) for i in range(3)) + (255,)
        for x in range(width):
            pixels[x, y] = color
    return image


def paste_contained(canvas, source, box):
    source = source.convert("RGBA")
    x1, y1, x2, y2 = box
    max_width = x2 - x1
    max_height = y2 - y1
    ratio = min(max_width / source.width, max_height / source.height)
    resized = source.resize((max(1, round(source.width * ratio)), max(1, round(source.height * ratio))), Image.LANCZOS)
    x = x1 + (max_width - resized.width) // 2
    y = y1 + (max_height - resized.height) // 2
    canvas.alpha_composite(resized, (x, y))


def draw_card(canvas, source, box):
    x1, y1, x2, y2 = box
    shadow = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    shadow_draw = ImageDraw.Draw(shadow)
    shadow_draw.rounded_rectangle((x1 + 4, y1 + 8, x2 + 4, y2 + 8), radius=24, fill=(60, 80, 120, 26))
    canvas.alpha_composite(shadow.filter(ImageFilter.GaussianBlur(6)))

    layer = Image.new("RGBA", (x2 - x1, y2 - y1), (255, 255, 255, 238))
    layer_mask = rounded_rectangle_mask(layer.size, 24)
    canvas.paste(layer, (x1, y1), layer_mask)
    ImageDraw.Draw(canvas).rounded_rectangle((x1, y1, x2, y2), radius=24, outline=(255, 213, 112, 160), width=2)
    paste_contained(canvas, source, (x1 + 8, y1 + 8, x2 - 8, y2 - 8))


def make_section_image(unit_no, section, words):
    size = (520, 320) if section != "grammar" else (360, 300)
    start, end, accent = PALETTES[section]
    canvas = gradient_background(size, start, end)
    draw = ImageDraw.Draw(canvas)

    draw.ellipse((-40, -36, 108, 112), fill=accent + (34,))
    draw.ellipse((size[0] - 112, size[1] - 100, size[0] + 38, size[1] + 48), fill=(255, 110, 199, 28))
    draw.rounded_rectangle((12, 12, size[0] - 13, size[1] - 13), radius=30, outline=accent + (92,), width=3)

    sources = [Image.open(image_path(word)) for word in words if image_path(word).exists()]
    if not sources:
        return canvas

    if section == "dialogue":
        boxes = [(28, 56, 178, 220), (176, 34, 326, 198), (318, 78, 490, 250), (80, 182, 250, 306)]
        draw.rounded_rectangle((60, 16, 226, 62), radius=18, fill=(255, 255, 255, 235), outline=(77, 139, 255, 130), width=2)
        draw.rounded_rectangle((280, 20, 470, 68), radius=18, fill=(255, 255, 255, 235), outline=(255, 110, 199, 130), width=2)
    elif section == "read":
        boxes = [(28, 54, 184, 222), (176, 52, 332, 220), (318, 58, 492, 236), (138, 178, 374, 310)]
        draw.rounded_rectangle((66, 28, 454, 84), radius=28, fill=(255, 255, 255, 190))
    else:
        boxes = [(28, 82, 142, 218), (122, 46, 238, 182), (224, 92, 336, 226), (116, 170, 254, 292)]
        draw.rounded_rectangle((72, 26, 288, 76), radius=22, fill=(255, 255, 255, 205))
        draw.line((42, 250, 318, 250), fill=accent + (70,), width=5)

    for index, source in enumerate(sources):
        draw_card(canvas, source, boxes[index % len(boxes)])

    return canvas


def main():
    data = json.loads(DATA_PATH.read_text(encoding="utf-8"))
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    for unit in data["units"]:
        unit_no = int(unit["unit"])
        section_images = {}
        for section, words in SECTION_WORDS[unit_no].items():
            image = make_section_image(unit_no, section, words)
            target = OUTPUT_DIR / f"unit{unit_no}-{section}.png"
            image.save(target)
            section_images[section] = f"./assets/english/section-art/unit{unit_no}-{section}.png"
        unit["sectionImages"] = section_images

    DATA_PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"created {len(list(OUTPUT_DIR.glob('unit*-*.png')))} section images in {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
