from fastapi import APIRouter
from pydantic import BaseModel

from services.fabric_service import recommend_fabric

router = APIRouter(
    prefix="/fabric",
    tags=["Fabric"]
)


class FabricRequest(BaseModel):
    projectId: str


@router.post("/")
def fabric(request: FabricRequest):
    data = recommend_fabric(request.projectId)

    return {
        "success": True,
        "data": data
    }