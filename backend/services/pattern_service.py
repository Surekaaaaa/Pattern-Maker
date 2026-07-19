from pathlib import Path
import json


def generate_pattern(project_id: str):

    project_folder = Path("uploads") / project_id

    analysis_file = project_folder / "analysis.json"

    if not analysis_file.exists():
        raise FileNotFoundError(
            f"analysis.json not found for project {project_id}"
        )

    with analysis_file.open("r", encoding="utf-8") as f:
        analysis = json.load(f)

    garment = analysis.get("garmentType", "Dress")
    sleeve = analysis.get("sleeve", "Unknown")
    neckline = analysis.get("neckline", "Unknown")
    difficulty = analysis.get("difficulty", "Intermediate")

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
        "patternName": f"{garment} Pattern",
        "garmentType": garment,
        "patternPieces": pattern_pieces,
        "seamAllowance": "1 cm",
        "difficulty": difficulty,
        "estimatedTime": "3-4 Hours",
        "estimatedFabric": "2.5 meters",
        "fabricWidth": "150 cm",
        "format": "JSON (SVG/PDF coming later)"
    }

    pattern_file = project_folder / "pattern.json"

    with pattern_file.open("w", encoding="utf-8") as f:
        json.dump(pattern, f, indent=4)

    return pattern