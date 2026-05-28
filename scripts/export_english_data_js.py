import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
JSON_PATH = ROOT / "data" / "english" / "grade3-up.json"
JS_PATH = ROOT / "data" / "english" / "grade3-up.js"


def main():
    data = json.loads(JSON_PATH.read_text(encoding="utf-8"))
    payload = json.dumps(data, ensure_ascii=False, indent=2)
    JS_PATH.write_text(f"window.ENGLISH_LESSON_BOOK = {payload};\n", encoding="utf-8")


if __name__ == "__main__":
    main()
