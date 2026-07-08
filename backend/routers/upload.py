from fastapi import APIRouter, UploadFile, File
from pathlib import Path
import shutil
import uuid

router = APIRouter(
    prefix="/upload",
    tags=["Upload"]
)

FRONT_FOLDER = Path("uploads/front")
BACK_FOLDER = Path("uploads/back")

FRONT_FOLDER.mkdir(parents=True, exist_ok=True)
BACK_FOLDER.mkdir(parents=True, exist_ok=True)


@router.post("/")
async def upload_images(
    front: UploadFile = File(...),
    back: UploadFile = File(...)
):
    project_id = str(uuid.uuid4())

    front_name = f"{project_id}_front.jpg"
    back_name = f"{project_id}_back.jpg"

    front_path = FRONT_FOLDER / front_name
    back_path = BACK_FOLDER / back_name

    with open(front_path, "wb") as buffer:
        shutil.copyfileobj(front.file, buffer)

    with open(back_path, "wb") as buffer:
        shutil.copyfileobj(back.file, buffer)

    return {
        "success": True,
        "projectId": project_id,
        "frontImage": str(front_path),
        "backImage": str(back_path),
    }