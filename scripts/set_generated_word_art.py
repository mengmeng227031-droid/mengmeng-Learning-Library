import json
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "data" / "english" / "grade3-up.json"


def main():
    if len(sys.argv) < 3:
        raise SystemExit("usage: set_generated_word_art.py <image-path> <word> [<word>...]")
    image = sys.argv[1].replace("\\", "/")
    words = {word.lower() for word in sys.argv[2:]}
    data = json.loads(DATA_PATH.read_text(encoding="utf-8"))
    for unit in data["units"]:
        for group in ("keywords", "practice", "exercise"):
            for item in unit.get(group, []):
                value = (item.get("word") or item.get("answer") or "").lower()
                if value in words:
                    item["image"] = image
    DATA_PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")


if __name__ == "__main__":
    main()
