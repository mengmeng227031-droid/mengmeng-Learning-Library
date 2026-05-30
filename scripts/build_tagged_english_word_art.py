# 功能：根据单词图片 manifest 生成按 tag 命名的英文单词图片目录，并回写数据中的图片路径。
# 输入：assets/english/word-image-manifest.json、data/english/grade3-up.json 和 manifest 指向的源图片。
# 输出：assets/english/tagged-word-art 下的图片、更新后的 manifest 和 data/english/grade3-up.json。
import json
import os
import shutil
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
MANIFEST_PATH = ROOT / "assets" / "english" / "word-image-manifest.json"
TAGGED_DIR = ROOT / "assets" / "english" / "tagged-word-art"
DATA_PATH = ROOT / "data" / "english" / "grade3-up.json"


def project_path(relative_path):
    return ROOT / relative_path.replace("./", "", 1)


def link_or_copy(source, target):
    if target.exists():
        return
    try:
        os.link(source, target)
    except OSError:
        shutil.copy2(source, target)


def main():
    manifest = json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))
    TAGGED_DIR.mkdir(parents=True, exist_ok=True)
    for tag, item in manifest["items"].items():
        source = project_path(item["image"])
        if not source.exists():
            continue
        target = TAGGED_DIR / f"{tag}.png"
        link_or_copy(source, target)
        item["taggedImage"] = f"./assets/english/tagged-word-art/{tag}.png"

    data = json.loads(DATA_PATH.read_text(encoding="utf-8"))
    for unit in data.get("units", []):
        for group in ("keywords", "practice", "exercise"):
            for item in unit.get(group, []):
                word = item.get("word") or item.get("answer") or ""
                tag = normalize_tag(word)
                tagged = manifest["items"].get(tag, {}).get("taggedImage")
                if tagged:
                    item["image"] = tagged

    MANIFEST_PATH.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    DATA_PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"{len(list(TAGGED_DIR.glob('*.png')))} tagged files -> {TAGGED_DIR}")


def normalize_tag(value):
    import re

    value = value.lower().replace("’", "'")
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-")


if __name__ == "__main__":
    main()
