from pathlib import Path
import json

from pattern_engine.dress import generate_dress_pattern
from svg_generator.dress_svg import generate_svg


def generate_pattern(project_id: str):

    project_folder = Path("uploads") / project_id

    analysis_file = project_folder / "analysis.json"
    measurement_file = project_folder / "measurements.json"

    if not analysis_file.exists():
        raise FileNotFoundError(
            f"analysis.json not found for project {project_id}"
        )

    if not measurement_file.exists():
        raise FileNotFoundError(
            f"measurements.json not found for project {project_id}"
        )

    with analysis_file.open("r", encoding="utf-8") as f:
        analysis = json.load(f)

    with measurement_file.open("r", encoding="utf-8") as f:
        measurement_data = json.load(f)

    garment = analysis.get("garmentType", "Dress")
    difficulty = analysis.get("difficulty", "Intermediate")
    sleeve = analysis.get("sleeve", "Unknown")
    neckline = analysis.get("neckline", "Unknown")

    measurements = measurement_data["measurements"]

    # Generate pattern data
    pattern_data = generate_dress_pattern(measurements)

    # Generate SVG
    svg_files = generate_svg(
        project_folder,
        pattern_data,
    )

    pattern_pieces = [
        "Front Bodice",
        "Back Bodice",
        "Front Skirt",
        "Back Skirt",
    ]

    if sleeve != "Sleeveless":
        pattern_pieces.append("Sleeve x2")

    if neckline != "Unknown":
        pattern_pieces.append("Neck Facing")

    pattern = {
        "projectId": project_id,
        "garmentType": garment,
        "patternName": f"{garment} Pattern",
        "difficulty": difficulty,
        "patternPieces": pattern_pieces,
        "patternData": pattern_data,
        "svg": svg_files,
        "seamAllowance": "1 cm",
        "format": "JSON",
        "estimatedTime": "3-4 Hours",
    }

    pattern_file = project_folder / "pattern.json"

    with pattern_file.open("w", encoding="utf-8") as f:
        json.dump(pattern, f, indent=4)

    return pattern