from fastapi import APIRouter
from pydantic import BaseModel

from services.measurements_service import save_measurements


router = APIRouter(
    prefix="/measurements",
    tags=["Measurements"],
)


class MeasurementsRequest(BaseModel):
    projectId: str
    unit: str
    measurements: dict


@router.post("/")
def save(request: MeasurementsRequest):

    data = save_measurements(
        request.projectId,
        request.unit,
        request.measurements,
    )

    return {
        "success": True,
        "data": data,
    }