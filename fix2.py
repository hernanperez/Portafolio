with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

import re

# Extract a simple structural view of each proyecto
def get_structure(content, proj_id, next_id):
    start = content.find(f'<div id="{proj_id}"')
    end = content.find(f'<div id="{next_id}"') if next_id else content.find('<!-- fin de los proyectos')
    block = content[start:end]
    # Extract only the opening tags and their indentation
    lines = block.split('\n')
    out = []
    for line in lines:
        stripped = line.strip()
        if stripped.startswith('<div') or stripped.startswith('</div>'):
            out.append(repr(line.rstrip()))
    return out

labo = get_structure(content, 'laboratorio-financiero-contable', 'proyecto-corona-training')
corona = get_structure(content, 'proyecto-corona-training', 'electrico')

print("=== LABORATORIO ===")
for l in labo:
    print(l)

print()
print("=== CORONA ===")
for l in corona:
    print(l)
