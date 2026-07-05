from fastapi import APIRouter, File, UploadFile, HTTPException

from services.upload_service import save_uploaded_images

router = APIRouter(prefix="/upload", tags=["Upload"])


@router.post("/")
async def upload_images(
    front: UploadFile = File(...),
    back: UploadFile = File(...),
):
    if not front.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="Front file must be an image.")

    if not back.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="Back file must be an image.")

    result = save_uploaded_images(front, back)

    return {
        "success": True,
        "data": result,
    }