from pathlib import Path
import json


def recommend_fabric(project_id: str):

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

    recommended_fabrics = [
        "Cotton",
        "Rayon",
        "Linen"
    ]

    estimated_fabric = "2.5 meters"

    if sleeve == "Long Sleeve":
        estimated_fabric = "3.0 meters"

    fabric = {
        "projectId": project_id,
        "garmentType": garment,
        "recommendedFabrics": recommended_fabrics,
        "fabricWeight": "120 GSM",
        "fabricWidth": "150 cm",
        "estimatedConsumption": estimated_fabric,
        "needleSize": "80/12",
        "threadType": "Polyester Thread",
        "liningRequired": False,
        "interfacing": "Lightweight Fusible",
        "careInstructions": [
            "Pre-wash fabric before cutting",
            "Iron before cutting",
            "Machine wash cold",
            "Do not bleach"
        ]
    }

    fabric_file = project_folder / "fabric.json"

    with fabric_file.open("w", encoding="utf-8") as f:
        json.dump(fabric, f, indent=4)

    return fabric