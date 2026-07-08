from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers.upload import router as upload_router
from routers.analysis import router as analysis_router
from routers.pattern import router as pattern_router
from routers.fabric import router as fabric_router
from routers.chatbot import router as chatbot_router

app = FastAPI(title="PatternAI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(upload_router)
app.include_router(analysis_router)
app.include_router(pattern_router)
app.include_router(fabric_router)
app.include_router(chatbot_router)

@app.get("/")
def root():
    return {
        "message": "PatternAI Backend Running"
    }