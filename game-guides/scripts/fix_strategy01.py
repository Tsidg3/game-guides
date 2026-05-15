import os
BASE = r"C:\Users\ningbo\.openclaw\workspace\game-guides\guides\dETAIL"
filepath = os.path.join(BASE, "strategy-01.html")

with open(filepath, "r", encoding="utf-8") as f:
    text = f.read()

# The guide-body's opening tag
open_tag = '<div class="guide-body">'
start = text.find(open_tag)

# The affiliate-links marker is right after where guide-body should close
marker = '<div class="affiliate-links"'
marker_pos = text.find(marker, start)

# Check: is there a </div> between start and marker?
closing = text.find('</div>', start, marker_pos)
if closing == -1:
    print("No closing div found - inserting one")
    # Insert </div> before the marker
    spaces_before_marker = marker_pos
    while text[spaces_before_marker-1] in ' \n\r\t':
        spaces_before_marker -= 1
    new_text = text[:spaces_before_marker] + '\n                </div>\n                ' + text[spaces_before_marker:]
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_text)
    print("Fixed!")
else:
    print(f"Found closing div at {closing}, no fix needed")
