from pathlib import Path

from svg_generator.svg_builder import SVGBuilder
from svg_generator.bodice_renderer import draw_front_bodice


def generate_svg(project_folder: Path, pattern_data):

    builder = SVGBuilder(
        width=1200,
        height=1400,
    )

    # Title
    builder.text(
        40,
        40,
        "PatternAI - Front Bodice Draft",
        size=24,
    )

    # Draw Front Bodice
    draw_front_bodice(
        builder,
        pattern_data["bodice"],
        scale=10,
        offset_x=120,
        offset_y=100,
    )

    svg = builder.build()

    svg_path = project_folder / "pattern.svg"

    svg_path.write_text(
        svg,
        encoding="utf-8",
    )

    return str(svg_path)