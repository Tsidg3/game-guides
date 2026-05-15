import os
BASE = r"C:\Users\ningbo\.openclaw\workspace\game-guides\guides\dETAIL"
filepath = os.path.join(BASE, "strategy-01.html")

with open(filepath, "r", encoding="utf-8") as f:
    text = f.read()

start = text.find('<div class="guide-body">')
print("guide-body at pos:", start)

end_marker = '<div class="affiliate-links"'
end_marker_pos = text.find(end_marker, start)
print("end marker at pos:", end_marker_pos)

# Search for </div> in the region
region = text[start:end_marker_pos]
# Find all </div> occurrences
import re
matches = list(re.finditer(r'</div>', region))
print(f"Found {len(matches)} closing divs in region:")
for m in matches:
    print(f"  pos {start + m.start()}: ...{region[max(0,m.start()-10):m.start()+10]}...")

# Also check what's between last closing div and end_marker
if matches:
    last = matches[-1]
    after_last = region[last.end():]
    print(f"\nContent after last </div> (len={len(after_last)}):")
    print(repr(after_last[:100]))
