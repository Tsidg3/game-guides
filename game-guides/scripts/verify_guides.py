import os
BASE = r"C:\Users\ningbo\.openclaw\workspace\game-guides\guides\dETAIL"
files = [f"strategy-0{n}.html" for n in range(1, 9)]

for fname in files:
    fpath = os.path.join(BASE, fname)
    with open(fpath, "r", encoding="utf-8") as f:
        text = f.read()
    
    gb = text.find('<div class="guide-body">')
    gb_end = text.find("</div>", gb)
    
    has_aff = "affiliate-links" in text
    has_hr = '<hr style=' in text
    
    opens = text.count("<div")
    closes = text.count("</div>")
    
    content = text[gb:gb_end] if gb_end > gb else text[gb:gb+200]
    content_len = len(content)
    word_count = len(content.split())
    
    print(f"{fname}: body-start={gb}, body-end={gb_end}, body-len={content_len}, words~{word_count}, aff={has_aff}, hr={has_hr}, <div>={opens}, </div>={closes}, ok={'YES' if opens==closes else 'NO'}")
