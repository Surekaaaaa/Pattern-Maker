from fastapi import APIRouter, UploadFile, File

from services.upload_service import save_uploaded_images

router = APIRouter(
    prefix="/upload",
    tags=["Upload"]
)


@router.post("/")
async def upload_images(
    front: UploadFile = File(...),
    back: UploadFile = File(...)
):
    result = save_uploaded_images(front, back)

    return {
        "success": True,
        **result
    }