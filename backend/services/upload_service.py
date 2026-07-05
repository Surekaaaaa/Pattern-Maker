from pathlib import Path
from uuid import uuid4
import shutil

UPLOAD_DIR = Path("uploads")
FRONT_DIR = UPLOAD_DIR / "front"
BACK_DIR = UPLOAD_DIR / "back"

FRONT_DIR.mkdir(parents=True, exist_ok=True)
BACK_DIR.mkdir(parents=True, exist_ok=True)


def save_uploaded_images(front_file, back_file):
    project_id = str(uuid4())

    front_filename = f"{project_id}_front{Path(front_file.filename).suffix}"
    back_filename = f"{project_id}_back{Path(back_file.filename).suffix}"

    front_path = FRONT_DIR / front_filename
    back_path = BACK_DIR / back_filename

    with front_path.open("wb") as buffer:
        shutil.copyfileobj(front_file.file, buffer)

    with back_path.open("wb") as buffer:
        shutil.copyfileobj(back_file.file, buffer)

    return {
        "projectId": project_id,
        "frontImage": str(front_path),
        "backImage": str(back_path),
    }