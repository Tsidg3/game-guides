import os
BASE = r"C:\Users\ningbo\.openclaw\workspace\game-guides\guides\dETAIL"
filepath = os.path.join(BASE, "strategy-01.html")

with open(filepath, "r", encoding="utf-8") as f:
    text = f.read()

start = text.find('<div class="guide-body">')
print("guide-body at pos:", start)

# Find affiliate-links marker
aff_marker = '<div class="affiliate-links"'
aff_pos = text.find(aff_marker, start)
print("affiliate-links marker at pos:", aff_pos)

# Find </div> between start and aff_pos
end_div = text.rfind('</div>', start, aff_pos)
print("last </div> before marker at:", end_div)

# Context around that position
print("Context around end_div:")
print(repr(text[end_div-30:end_div+40]))
