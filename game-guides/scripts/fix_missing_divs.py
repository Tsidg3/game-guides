import os
BASE = r"C:\Users\ningbo\.openclaw\workspace\game-guides\guides\dETAIL"
for n in [3, 5, 6, 7, 8]:
    fname = "strategy-0%d.html" % n
    fpath = os.path.join(BASE, fname)
    with open(fpath, "r", encoding="utf-8") as f:
        text = f.read()
    gb = text.find('<div class="guide-body">')
    hr = text.find('<hr style=', gb)
    print("%s: gb=%d, hr=%d, near_hr=%s" % (fname, gb, hr, repr(text[hr-40:hr+20])))
