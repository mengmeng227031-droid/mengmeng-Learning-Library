from __future__ import annotations

import json
import math
import re
from dataclasses import dataclass
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
SOURCE_JSON = Path(r"C:\Users\HP\Downloads\heathers_phonics_flashcards.json")
OUT_DIR = ROOT / "outputs" / "abcflashcard"
ASSET_DIR = OUT_DIR / "image_assets"
CARD_DIR = OUT_DIR / "cards"
MANIFEST = OUT_DIR / "manifest.json"

W = H = 1600
BRAND = {
    "blue": "#4D8BFF",
    "pink": "#FF6EC7",
    "yellow": "#FFC83D",
    "cyan": "#37D2C6",
    "purple": "#7B61FF",
    "orange": "#FF8A42",
    "green": "#A0E75A",
    "coral": "#FF6F91",
    "sky": "#6AD4FF",
    "lavender": "#B8A0FF",
    "title": "#333333",
    "body": "#666666",
    "muted": "#999999",
    "line": "#CCCCCC",
    "bg": "#F5F7FA",
}

CARD_OVERRIDES = {
    "a": ("apple", "big open mouth", "Open arms wide like a big /a/ mouth."),
    "e": ("egg", "small open smile", "Tap an egg shape with both hands."),
    "i": ("ink", "tiny smile mouth", "Point to a tiny dot of ink."),
    "o": ("octopus", "round lips", "Make a round O with both hands."),
    "u": ("umbrella", "small pushed lips", "Lift an umbrella over your head."),
    "b": ("ball", "lips together then pop", "Bounce an imaginary ball."),
    "c": ("cat", "open back mouth", "Make cat whiskers with fingers."),
    "d": ("dog", "tongue taps behind teeth", "Pat knees like dog paws."),
    "f": ("fish", "teeth on lip", "Wiggle a fish tail hand."),
    "g": ("goat", "back throat sound", "Show little goat horns."),
    "h": ("hat", "breathy open mouth", "Breathe warm air on your palm."),
    "j": ("jam", "soft lip push", "Spread jam with one hand."),
    "k": ("kite", "back throat pop", "Fly a kite upward."),
    "l": ("lion", "tongue touches top teeth", "Make a lion mane circle."),
    "m": ("moon", "closed humming lips", "Rub tummy and hum /m/."),
    "n": ("nest", "tongue up, nose hum", "Cup hands like a nest."),
    "p": ("pig", "quiet lip pop", "Pop both lips with a finger tap."),
    "qu": ("queen", "rounded quick lips", "Put on an imaginary crown."),
    "r": ("rainbow", "curled tongue", "Trace a rainbow arc."),
    "s": ("sun", "snake smile teeth", "Slide one hand like a snake."),
    "t": ("top", "tongue tap", "Spin one finger like a top."),
    "v": ("van", "teeth on lip with voice", "Drive a tiny van in the air."),
    "w": ("whale", "rounded lips", "Make a water wave with arms."),
    "x": ("box", "ks mouth finish", "Cross arms into an X."),
    "y": ("yo-yo", "smiling glide mouth", "Move hand up and down like a yo-yo."),
    "z": ("zipper", "buzzing teeth", "Zip your finger upward."),
    "ch": ("chair", "popped lips", "Push both hands forward: ch-ch."),
    "sh": ("ship", "rounded quiet lips", "Finger on lips: shhh."),
    "th": ("thumb", "tongue between teeth", "Show a thumbs-up by the mouth."),
    "wh": ("whale", "rounded windy lips", "Blow a soft wind from your hand."),
    "ph": ("phone", "teeth on lip", "Hold a pretend phone."),
    "-ck": ("duck", "back throat stop", "Quack once, then freeze."),
    "-ng": ("ring", "back nose sound", "Draw a ring circle in the air."),
    "-nk": ("sink", "back nose stop", "Push both hands down like a sink plug."),
    "bl": ("blue balloon", "two quick sounds", "Blow up a balloon."),
    "cl": ("cloud", "two quick sounds", "Clap once, then float hands."),
    "fl": ("flower", "teeth on lip then tongue up", "Open fingers like a flower."),
    "gl": ("globe", "back sound then tongue up", "Spin an imaginary globe."),
    "pl": ("plane", "lip pop then tongue up", "Fly a plane hand forward."),
    "sl": ("slide", "snake sound then tongue up", "Slide one palm down the other."),
    "br": ("brush", "lips then curled tongue", "Brush with an imaginary brush."),
    "cr": ("crab", "back sound then curled tongue", "Pinch crab claws."),
    "dr": ("drum", "tongue tap then curled tongue", "Drum both hands softly."),
    "fr": ("frog", "teeth on lip then curled tongue", "Hop two fingers like a frog."),
    "gr": ("grapes", "back sound then curled tongue", "Pick grapes from a vine."),
    "pr": ("present", "lip pop then curled tongue", "Open a present box."),
    "tr": ("train", "tongue tap then curled tongue", "Pull a train whistle."),
    "st": ("star", "snake sound then tongue tap", "Twinkle fingers like a star."),
    "sp": ("spoon", "snake sound then lip pop", "Scoop with a spoon."),
    "sk": ("skateboard", "snake sound then back pop", "Roll one hand like skating."),
    "a_e": ("cake", "long A smile", "Wave a magic-e wand."),
    "i_e": ("kite", "long I wide mouth", "Wave a magic-e wand."),
    "o_e": ("home", "long O round lips", "Wave a magic-e wand."),
    "u_e": ("tube", "long U pushed lips", "Wave a magic-e wand."),
    "ai": ("rain", "long A smile", "Tap falling rain with fingers."),
    "ay": ("play", "long A smile", "Swing both arms like playing."),
    "ee": ("bee", "wide smile mouth", "Smile wide and buzz fingers."),
    "ea": ("leaf", "wide smile mouth", "Open one hand like a leaf."),
    "-y": ("candy", "wide smile mouth", "Pretend to unwrap candy."),
    "oa": ("boat", "round lips", "Row a boat with both arms."),
    "ow": ("snow", "round lips", "Let snow fall with fingers."),
    "igh": ("night", "long I wide mouth", "Point up to a night star."),
    "ie": ("pie", "long I wide mouth", "Draw a pie circle."),
    "ue": ("blue glue", "long U pushed lips", "Squeeze a glue bottle."),
    "ew": ("flew", "long U pushed lips", "Flap arms as something flew."),
    "oi": ("boil", "rounded moving lips", "Wiggle fingers upward like steam."),
    "oy": ("toy", "rounded moving lips", "Wiggle fingers upward like steam."),
    "ou": ("out", "wide to small mouth", "Push both hands out."),
    "au": ("autumn", "big open mouth", "Let leaves fall from your fingers."),
    "aw": ("saw", "big open mouth", "Move one hand like a gentle saw."),
    "ar": ("car", "bossy R mouth", "Steer a car wheel."),
    "or": ("sport", "round bossy R lips", "Throw a soft ball."),
    "ore": ("store", "round bossy R lips", "Open a shop door."),
    "er": ("her", "relaxed R mouth", "Point kindly to a friend."),
    "ur": ("fur", "relaxed R mouth", "Stroke soft fur."),
    "ir": ("bird", "relaxed R mouth", "Flap little wings."),
}


@dataclass
class Card:
    index: int
    category_key: str
    category_name: str
    sub_category: str
    pattern: str
    word: str
    mouth: str
    movement: str
    teaching_tip: str

    @property
    def slug(self) -> str:
        safe_pattern = re.sub(r"[^a-z0-9]+", "", self.pattern.lower()) or "dash"
        safe_word = re.sub(r"[^a-z0-9]+", "_", self.word.lower()).strip("_")
        return f"{self.index:03d}_{safe_pattern}_{safe_word}"

    @property
    def display_pattern(self) -> str:
        return self.pattern.replace("_", "-")


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    candidates = [
        r"C:\Windows\Fonts\msyhbd.ttc" if bold else r"C:\Windows\Fonts\msyh.ttc",
        r"C:\Windows\Fonts\seguisb.ttf" if bold else r"C:\Windows\Fonts\segoeui.ttf",
        r"C:\Windows\Fonts\arialbd.ttf" if bold else r"C:\Windows\Fonts\arial.ttf",
    ]
    for name in candidates:
        try:
            return ImageFont.truetype(name, size=size)
        except OSError:
            pass
    return ImageFont.load_default()


def load_cards() -> list[Card]:
    data = json.loads(SOURCE_JSON.read_text(encoding="utf-8"))
    cards: list[Card] = []
    for category_key, category in data.items():
        for item in category["items"]:
            for pattern in item["phonics_patterns"]:
                word, mouth, movement = CARD_OVERRIDES[pattern]
                cards.append(
                    Card(
                        index=len(cards) + 1,
                        category_key=category_key,
                        category_name=category["category_name"],
                        sub_category=item["sub_category"],
                        pattern=pattern,
                        word=word,
                        mouth=mouth,
                        movement=movement,
                        teaching_tip=item["teaching_tips"],
                    )
                )
    return cards


def rounded(draw: ImageDraw.ImageDraw, box, radius: int, fill, outline=None, width: int = 1):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def centered_text(draw, box, text, fnt, fill):
    left, top, right, bottom = box
    bbox = draw.textbbox((0, 0), text, font=fnt)
    x = left + (right - left - (bbox[2] - bbox[0])) / 2
    y = top + (bottom - top - (bbox[3] - bbox[1])) / 2 - bbox[1]
    draw.text((x, y), text, font=fnt, fill=fill)


def wrap(draw, text: str, fnt, max_width: int) -> list[str]:
    lines: list[str] = []
    current = ""
    for char in text:
        trial = current + char
        if draw.textlength(trial, font=fnt) <= max_width or not current:
            current = trial
        else:
            lines.append(current)
            current = char
    if current:
        lines.append(current)
    return lines


def paste_asset(card: Card, base: Image.Image):
    asset_path = ASSET_DIR / f"{card.slug}.png"
    draw = ImageDraw.Draw(base)
    if not asset_path.exists():
        draw_fallback_visual(draw, card)
        return

    asset = Image.open(asset_path).convert("RGBA")
    asset = asset.resize((1240, 1240), Image.Resampling.LANCZOS)
    x = (W - asset.width) // 2
    y = 170
    base.alpha_composite(asset, (x, y))


def draw_fallback_visual(draw: ImageDraw.ImageDraw, card: Card):
    # Backup renderer for cards whose imagegen asset has not been copied yet.
    palette = [BRAND["blue"], BRAND["pink"], BRAND["yellow"], BRAND["cyan"], BRAND["purple"], BRAND["orange"], BRAND["green"]]
    color = palette[(card.index - 1) % len(palette)]
    cx, cy = W // 2, 760
    rounded(draw, (330, 385, 1270, 1090), 56, "#FFFFFF", "#E6EAF2", 4)
    draw.ellipse((cx - 260, cy - 210, cx + 260, cy + 210), fill=color, outline="#FFFFFF", width=18)
    draw.ellipse((cx - 115, cy - 55, cx - 45, cy + 15), fill="#FFFFFF")
    draw.ellipse((cx + 45, cy - 55, cx + 115, cy + 15), fill="#FFFFFF")
    draw.arc((cx - 120, cy - 20, cx + 120, cy + 120), 15, 165, fill="#333333", width=10)
    centered_text(draw, (430, 955, 1170, 1065), card.word, font(72, True), "#FFFFFF")


def draw_mouth_badge(draw: ImageDraw.ImageDraw, card: Card):
    rounded(draw, (1022, 295, 1468, 568), 44, "#FFF6FBEE", BRAND["pink"], 5)
    centered_text(draw, (1085, 314, 1405, 370), "看嘴型", font(38, True), BRAND["pink"])
    draw.ellipse((1160, 390, 1320, 505), fill="#FFD0D8", outline="#E88A9A", width=5)
    if "round" in card.mouth or "O" in card.mouth or "圆" in card.mouth:
        draw.ellipse((1213, 417, 1267, 481), fill="#5C2D2D")
    elif "closed" in card.mouth:
        draw.line((1195, 453, 1285, 453), fill="#5C2D2D", width=8)
    else:
        draw.pieslice((1198, 423, 1282, 495), 0, 180, fill="#5C2D2D")
    centered_text(draw, (1065, 504, 1425, 555), card.mouth, font(28), BRAND["body"])


def draw_motion_badge(draw: ImageDraw.ImageDraw, card: Card):
    draw.ellipse((124, 1178, 220, 1274), fill=BRAND["cyan"])
    centered_text(draw, (124, 1178, 220, 1274), "动", font(46, True), "#FFFFFF")
    lines = wrap(draw, card.movement, font(38), 1120)
    y = 1179 if len(lines) > 1 else 1203
    for line in lines[:2]:
        draw.text((268, y), line, font=font(38, True), fill=BRAND["title"], stroke_width=4, stroke_fill="#FFFFFF")
        y += 49


def render_card(card: Card):
    base = Image.new("RGBA", (W, H), "#FFFFFF")
    draw = ImageDraw.Draw(base)

    draw.rounded_rectangle((34, 34, W - 34, H - 34), radius=86, fill="#FFFDF7", outline=BRAND["yellow"], width=18)
    draw.rounded_rectangle((78, 78, W - 78, H - 78), radius=64, outline="#FFD96B", width=4)

    paste_asset(card, base)

    overlay = Image.new("RGBA", (W, H), (255, 255, 255, 0))
    odraw = ImageDraw.Draw(overlay)
    chip_color = [BRAND["blue"], BRAND["pink"], BRAND["yellow"], BRAND["cyan"], BRAND["purple"]][(card.index - 1) % 5]
    rounded(odraw, (118, 100, 505, 185), 42, chip_color)
    centered_text(odraw, (118, 100, 505, 185), card.sub_category.split("(")[0].strip(), font(30, True), "#FFFFFF")
    rounded(odraw, (565, 80, 1035, 275), 54, "#FFFFFFDD", "#FFE28C", 4)
    centered_text(odraw, (565, 78, 1035, 218), card.display_pattern, font(132, True), BRAND["title"])
    centered_text(odraw, (610, 205, 990, 258), f"/ {card.display_pattern} /", font(34, True), BRAND["purple"])
    base.alpha_composite(overlay)

    draw = ImageDraw.Draw(base)
    draw_motion_badge(draw, card)

    rounded(draw, (290, 1362, 1310, 1508), 58, "#FFFFFFEE", "#DDE8CE", 5)
    centered_text(draw, (290, 1348, 1310, 1455), card.word, font(92, True), BRAND["title"])
    centered_text(draw, (410, 1448, 1190, 1494), "Say it. Watch the mouth. Move the body.", font(31), BRAND["muted"])

    final = base.convert("RGB")
    CARD_DIR.mkdir(parents=True, exist_ok=True)
    final.save(CARD_DIR / f"{card.slug}.png", quality=95)


def build_manifest(cards: list[Card]):
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    ASSET_DIR.mkdir(parents=True, exist_ok=True)
    rows = []
    for card in cards:
        rows.append(
            {
                "index": card.index,
                "pattern": card.pattern,
                "word": card.word,
                "category": card.category_name,
                "sub_category": card.sub_category,
                "mouth": card.mouth,
                "movement": card.movement,
                "source_tip": card.teaching_tip,
                "asset": str((ASSET_DIR / f"{card.slug}.png").resolve()),
                "card": str((CARD_DIR / f"{card.slug}.png").resolve()),
                "imagegen_prompt": imagegen_prompt(card),
            }
        )
    MANIFEST.write_text(json.dumps(rows, ensure_ascii=False, indent=2), encoding="utf-8")


def imagegen_prompt(card: Card) -> str:
    return (
        "Use case: scientific-educational\n"
        "Asset type: preschool phonics flashcard illustration asset\n"
        f"Primary request: Create a unique square image asset for the phonics pattern '{card.display_pattern}' "
        f"and example word '{card.word}'. Show one clear representative visual: {card.word}. "
        f"Also include a small clean mouth-formation bubble for '{card.mouth}' and a small body movement cue: {card.movement}. "
        "Do not include written words, letters, logos, watermarks, or captions; the final card text will be added later.\n"
        "Composition: simple centered object or mascot-object scene, generous empty margins, child-friendly classroom flashcard feel.\n"
        "Style: Cute educational mascot character, 3-head-tall proportions, large glossy anime eyes, soft pastel color palette, "
        "soft ambient lighting, rounded shapes, minimal clean background, high-end children brand illustration, soft 3D texture, "
        "kawaii Japanese preschool design, warm and joyful emotion, consistent mascot universe.\n"
        "Constraints: make this asset visually distinct from other phonics cards, no dark background, no clutter, no photorealism."
    )


def main():
    cards = load_cards()
    build_manifest(cards)
    for card in cards:
        render_card(card)
    rows = len(list(CARD_DIR.glob("*.png")))
    print(f"Rendered {rows} cards to {CARD_DIR}")
    print(f"Manifest: {MANIFEST}")
    missing = [card.slug for card in cards if not (ASSET_DIR / f"{card.slug}.png").exists()]
    print(f"Missing imagegen assets: {len(missing)}")


if __name__ == "__main__":
    main()
