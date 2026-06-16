from fastapi import APIRouter, Depends
from pydantic import BaseModel
import pandas as pd
from datetime import datetime
from bson import ObjectId

from routes.auth import get_current_user
from database import db
from services.scoreService import compute_derived_fields
from services.assessment_service import full_assessment
from ml.benchmark import get_full_benchmark

router = APIRouter(prefix="/assessment", tags=["Assessment"])


class AssessmentInput(BaseModel):
    industry: str
    country: str
    ai_investment_usd: float
    deployment_count: float
    employee_training_hours: float


@router.post("")
async def create_assessment(data: AssessmentInput, user_id: str = Depends(get_current_user)):

    raw = data.dict()

    derived = compute_derived_fields(raw)

    input_row = {
        "industry": raw["industry"],
        "country": raw["country"],
        "year": derived["year"],
        "ai_adoption_level": derived["ai_adoption_level"],
        "ai_investment_usd": raw["ai_investment_usd"],
        "automation_rate": derived["automation_rate"],
        "employee_ai_training_hours": raw["employee_training_hours"],
        "ai_maturity_score": derived["ai_maturity_score"],
        "deployment_count": raw["deployment_count"],
    }

    input_df = pd.DataFrame([input_row])

    result = full_assessment(input_df)

    benchmark = get_full_benchmark(
        raw["industry"],
        {
            "cost_savings": result["cost_savings"],
            "revenue_impact": result["revenue_impact"],
            "productivity_gain": result["productivity_gain"],
            "automation_rate": derived["automation_rate"],
            "ai_maturity_score": derived["ai_maturity_score"],
        }
    )

    document = {
        "user_id": user_id,
        "inputs": raw,
        "derived": derived,
        "result": result,
        "benchmark": benchmark,
        "created_at": datetime.utcnow()
    }

    inserted = await db.assessments.insert_one(document)

    return {
        "assessment_id": str(inserted.inserted_id),
        "inputs": raw,
        "derived": derived,
        **result,
        "benchmark": benchmark
    }