import os, re
BASE = r"C:\Users\ningbo\.openclaw\workspace\game-guides\guides\dETAIL"

guides = [
    ("strategy-01", "《文明6》领袖强度排名与最优开局策略"),
    ("strategy-02", "《星际争霸》各族基础运营与开局战术"),
    ("strategy-03", "《城市：天际线》终极城市规划指南"),
    ("strategy-04", "《火焰纹章：风花雪月》全路线攻略与角色培养"),
    ("strategy-05", "《幽浮2》铁人难度完整战术指南"),
    ("strategy-06", "《异星工场》自动化流水线设计指南"),
    ("strategy-07", "《钢铁雄心4》新手入门与德三速通攻略"),
    ("strategy-08", "《王国保卫战》全系列英雄评级与关卡攻略"),
]

for tag, title in guides:
    fpath = os.path.join(BASE, tag + ".html")
    with open(fpath, "r", encoding="utf-8") as f:
        text = f.read()
    gb_start = text.find('<div class="guide-body">')
    gb_end = text.find("</div>", gb_start)
    body = text[gb_start:gb_end]
    clean = re.sub(r'<[^>]+>', "", body)
    # Get character count (Chinese chars + punctuation, no whitespace)
    clean = re.sub(r'\s+', "", clean)
    print("%s: %d chars" % (tag, len(clean)))
