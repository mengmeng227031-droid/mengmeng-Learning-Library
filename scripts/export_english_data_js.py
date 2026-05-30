# 功能：把英文学习 JSON 数据导出为浏览器可直接加载的 JS 数据文件。
# 输入：data/english/grade3-up.json。
# 输出：data/english/grade3-up.js，内容挂载到 window.ENGLISH_LESSON_BOOK。
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
