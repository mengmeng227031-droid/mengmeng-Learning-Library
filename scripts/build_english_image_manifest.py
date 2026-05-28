import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "data" / "english" / "grade3-up.json"
MANIFEST_PATH = ROOT / "assets" / "english" / "word-image-manifest.json"


def slug(value):
    value = value.lower().replace("’", "'")
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-")


def main():
    data = json.loads(DATA_PATH.read_text(encoding="utf-8"))
    entries = {}
    for unit in data.get("units", []):
        for item in unit.get("keywords", []):
            word = item.get("word", "")
            tag = slug(word)
            image = item.get("image", "")
            if not tag or not image:
                continue
            entries[tag] = {
                "tag": tag,
                "word": word,
                "image": image,
                "unit": unit.get("unit"),
                "unitTitle": unit.get("unitTitle"),
                "meaning": item.get("meaning", ""),
                "imagePrompt": item.get("imagePrompt", ""),
            }

    manifest = {
        "version": 1,
        "description": "English word image lookup manifest. Use normalized tag to retrieve images by word.",
        "tagRule": "lowercase; replace non a-z/0-9 with hyphen; trim hyphens",
        "style": data.get("stylePrompt", ""),
        "items": entries,
    }
    MANIFEST_PATH.parent.mkdir(parents=True, exist_ok=True)
    MANIFEST_PATH.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"{len(entries)} tags -> {MANIFEST_PATH}")


if __name__ == "__main__":
    main()
