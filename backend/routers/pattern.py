from fastapi import APIRouter
from pydantic import BaseModel

from services.pattern_service import generate_pattern

router = APIRouter(
    prefix="/pattern",
    tags=["Pattern"]
)


class PatternRequest(BaseModel):
    projectId: str


@router.post("/")
def pattern(request: PatternRequest):
    data = generate_pattern(request.projectId)

    return {
        "success": True,
        "data": data
    }