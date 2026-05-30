# 功能：把音标练习生成的单词图片复制到英文学习资源目录，并为三年级上册单词数据补齐图片路径。
# 输入：data/english/grade3-up.json、音标练习/word-art 下的图片，以及脚本内置的单词 fallback 映射。
# 输出：assets/english/word-art 图片文件、更新后的 data/english/grade3-up.json。
import json
import re
import shutil
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "data" / "english" / "grade3-up.json"
SOURCE_DIR = ROOT / "音标练习" / "word-art"
TARGET_DIR = ROOT / "assets" / "english" / "word-art"

FALLBACK_MAP = {
    "i": "my",
    "i'm": "my",
    "hello": "smile",
    "goodbye": "go",
    "miss": "her",
    "mr": "boy",
    "friend": "boy",
    "girl": "her",
    "new friend": "new",
    "classmate": "boy",
    "meet": "smile",
    "teacher": "her",
    "father": "boy",
    "dad": "boy",
    "mother": "her",
    "mum": "her",
    "brother": "boy",
    "sister": "her",
    "grandfather": "her",
    "grandmother": "her",
    "grandpa": "her",
    "grandma": "her",
    "family": "home",
    "parent": "home",
    "aunt": "her",
    "uncle": "boy",
    "cousin": "boy",
    "that": "this",
    "how many": "three",
    "number": "three",
    "one": "ten",
    "two": "three",
    "four": "three",
    "five": "three",
    "six": "three",
    "seven": "three",
    "eight": "three",
    "nine": "three",
    "candle": "cake",
    "bag": "box",
    "book": "read",
    "pencil": "pen",
    "colour": "rainbow",
    "colourful": "rainbow",
    "pink": "red",
    "purple": "blue",
    "orange": "red",
    "dark": "black",
    "light": "white",
    "picture": "card",
    "red flower": "flower",
    "beautiful": "flower",
    "fresh": "leaf",
    "grow": "plant",
    "garden": "flower",
    "nature": "tree",
    "look at": "glasses",
    "lovely": "heart",
    "funny": "smile",
    "hi": "smile",
    "am": "name",
    "count": "three",
    "big": "giant",
    "bear": "lion",
    "panda": "cat",
    "tiger": "lion",
    "seed": "plant",
    "short": "small",
    "tall": "giant",
    "water": "rain",
    "your": "my",
}


def slug(value):
    value = value.lower().replace("’", "'")
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-")


def copy_asset(asset_name):
    source = SOURCE_DIR / f"{asset_name}.png"
    if not source.exists():
        return ""
    TARGET_DIR.mkdir(parents=True, exist_ok=True)
    target = TARGET_DIR / f"{asset_name}.png"
    if not target.exists():
        shutil.copy2(source, target)
    return f"./assets/english/word-art/{asset_name}.png"


def main():
    data = json.loads(DATA_PATH.read_text(encoding="utf-8"))
    source_assets = {path.stem.lower(): path.stem for path in SOURCE_DIR.glob("*.png")}
    missing = []
    attached = 0

    for unit in data["units"]:
        for item in unit.get("keywords", []):
            word = item["word"].lower().replace("’", "'")
            candidates = [slug(word), slug(FALLBACK_MAP.get(word, ""))]
            image = ""
            for candidate in candidates:
                if candidate and candidate in source_assets:
                    image = copy_asset(source_assets[candidate])
                    break
            item["image"] = image
            if image:
                attached += 1
            else:
                missing.append(item["word"])

        for group in ("practice", "exercise"):
            for item in unit.get(group, []):
                answer = item.get("answer", "").lower().replace("’", "'")
                candidates = [slug(answer), slug(FALLBACK_MAP.get(answer, ""))]
                image = ""
                for candidate in candidates:
                    if candidate and candidate in source_assets:
                        image = copy_asset(source_assets[candidate])
                        break
                item["image"] = image

    data["imageAssetStatus"] = {
        "attached": attached,
        "missing": sorted(set(missing)),
        "style": "imagegen-phonics-card-style compatible cute educational mascot art",
    }
    DATA_PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps(data["imageAssetStatus"], ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
