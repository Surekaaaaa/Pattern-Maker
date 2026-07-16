from pathlib import Path
from uuid import uuid4
import shutil

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)


def save_uploaded_images(front_file, back_file):
    # Generate unique project ID
    project_id = str(uuid4())

    # Create project folder
    project_folder = UPLOAD_DIR / project_id
    project_folder.mkdir(parents=True, exist_ok=True)

    # Preserve original extensions
    front_ext = Path(front_file.filename).suffix
    back_ext = Path(back_file.filename).suffix

    # Standardized filenames
    front_path = project_folder / f"front{front_ext}"
    back_path = project_folder / f"back{back_ext}"

    # Save front image
    with front_path.open("wb") as buffer:
        shutil.copyfileobj(front_file.file, buffer)

    # Save back image
    with back_path.open("wb") as buffer:
        shutil.copyfileobj(back_file.file, buffer)

    return {
        "projectId": project_id,
        "projectFolder": str(project_folder),
        "frontImage": str(front_path),
        "backImage": str(back_path),
    }