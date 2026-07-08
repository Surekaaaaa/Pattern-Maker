from fastapi import APIRouter
from pydantic import BaseModel

from services.chatbot_service import get_chat_response

router = APIRouter(
    prefix="/chatbot",
    tags=["Chatbot"]
)


from typing import Optional
from pydantic import BaseModel

class ChatRequest(BaseModel):
    projectId: Optional[str] = None
    message: str
    context: Optional[dict] = None

@router.post("/")
def chatbot(request: ChatRequest):
    reply = get_chat_response(request.message)

    return {
        "success": True,
        "reply": reply
    }