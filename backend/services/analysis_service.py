from pathlib import Path
import json

from ai.analyzer import analyze_image
from ai.parser import parse_analysis


def analyze_garment(project_id: str):

    # Project folder
    project_folder = Path("uploads") / project_id

    if not project_folder.exists():
        raise FileNotFoundError(
            f"Project folder not found: {project_folder}"
        )

    # Find front image
    front_images = list(project_folder.glob("front.*"))

    if not front_images:
        raise FileNotFoundError(
            f"No front image found for project {project_id}"
        )

    image_path = front_images[0]


    # Florence-2 analysis
    raw_result = analyze_image(str(image_path))

    # Convert caption into structured data
    parsed = parse_analysis(raw_result)

    # Save analysis.json
    analysis_file = project_folder / "analysis.json"

    with analysis_file.open("w", encoding="utf-8") as f:
        json.dump(parsed, f, indent=4)

    return parsed