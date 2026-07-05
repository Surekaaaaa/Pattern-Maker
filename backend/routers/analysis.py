from fastapi import APIRouter
from pydantic import BaseModel

from services.analysis_service import analyze_garment

router = APIRouter(
    prefix="/analysis",
    tags=["Analysis"]
)


class AnalysisRequest(BaseModel):
    projectId: str


@router.post("/")
def analyze(request: AnalysisRequest):
    data = analyze_garment(request.projectId)

    return {
        "success": True,
        "data": data
    }