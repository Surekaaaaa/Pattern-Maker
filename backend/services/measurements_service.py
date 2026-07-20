from pathlib import Path
import json


def save_measurements(project_id: str, unit: str, measurements: dict):

    project_folder = Path("uploads") / project_id

    if not project_folder.exists():
        raise FileNotFoundError(
            f"Project {project_id} not found."
        )

    data = {
        "projectId": project_id,
        "unit": unit,
        "measurements": measurements,
    }

    measurement_file = project_folder / "measurements.json"

    with measurement_file.open("w", encoding="utf-8") as f:
        json.dump(data, f, indent=4)

    return data