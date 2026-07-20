from pathlib import Path


def generate_svg(project_folder: Path, calculations):

    scale = 10

    x = 80
    y = 60

    bust = calculations["frontBodiceWidth"] * scale
    waist = calculations["waistWidth"] * scale
    hip = calculations["hipWidth"] * scale
    shoulder = calculations["shoulderLength"] * scale
    neck_width = calculations["neckWidth"] * scale
    neck_depth = calculations["neckDepth"] * scale
    length = calculations["dressLength"] * scale / 2

    svg = f"""
<svg xmlns="http://www.w3.org/2000/svg"
     width="700"
     height="900"
     viewBox="0 0 700 900">

<style>
text {{
    font-family: Arial;
}}
.pattern {{
    fill:none;
    stroke:black;
    stroke-width:2;
}}
.guide {{
    stroke:#bbbbbb;
    stroke-dasharray:5 5;
}}
</style>

<text
    x="40"
    y="30"
    font-size="22">
PatternAI - Front Bodice
</text>

<path
class="pattern"
d="
M{x},{y}

L{x+shoulder},{y}

Q{x+shoulder+20},{y+20}
{x+bust},{y+120}

L{x+hip},{y+length}

L{x},{y+length}

Z
"/>

<path
class="pattern"
d="
M{x},{y}
Q{x+neck_width},{y}
{x+neck_width},{y+neck_depth}
"/>

<line
class="guide"
x1="{x}"
y1="{y+length/2}"
x2="{x+hip}"
y2="{y+length/2}"
/>

<text
x="{x+20}"
y="{y+length/2-10}"
font-size="14">
Waist Line
</text>

<text
x="{x+10}"
y="{y+length+30}"
font-size="14">
Dress Length:
{calculations["dressLength"]} cm
</text>

</svg>
"""

    svg_path = project_folder / "pattern.svg"

    svg_path.write_text(svg, encoding="utf-8")

    return str(svg_path)