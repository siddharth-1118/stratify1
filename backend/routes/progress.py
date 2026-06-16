from fastapi import APIRouter, Depends
from routes.auth import get_current_user
from database import db

router = APIRouter(prefix="/progress", tags=["Progress"])


@router.get("")
async def get_assessment_history(user_id: str = Depends(get_current_user)):
    cursor = db.assessments.find({"user_id": user_id}).sort("created_at", -1)
    assessments = []

    async for doc in cursor:
        assessments.append({
            "assessment_id": str(doc["_id"]),
            "inputs": doc["inputs"],
            "derived": doc["derived"],
            "result": doc["result"],
            "created_at": doc["created_at"].isoformat()
        })

    return {"assessments": assessments}