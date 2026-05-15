import os
BASE = r"C:\Users\ningbo\.openclaw\workspace\game-guides\guides\dETAIL"
filepath = os.path.join(BASE, "strategy-01.html")

with open(filepath, "r", encoding="utf-8") as f:
    text = f.read()

start = text.find('<div class="guide-body">')
# Show content from 2500 to 2600
chunk = text[2500:2600]
print("Chars 2500-2600:")
print(repr(chunk))

# Search for </div>
import re
all_divs = [(m.start(), text[m.start():m.start()+20]) for m in re.finditer(r'</div>', text)]
print(f"\nAll </div> positions:")
for pos, ctx in all_divs:
    print(f"  pos {pos}: {repr(ctx)}")
