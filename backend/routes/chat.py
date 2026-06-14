from fastapi import APIRouter, Depends
from pydantic import BaseModel
from typing import Optional
from groq import Groq
from routes.auth import get_current_user
from services.scoreService import compute_derived_fields
import os

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

router = APIRouter(prefix="/chat", tags=["Chat"])

class ChatMessage(BaseModel):
    role: str
    content: str

class ChatInput(BaseModel):
    message: str
    inputs_so_far: Optional[dict] = {}
    report: Optional[dict] = {}
    history: list[ChatMessage] = []

@router.post("")
async def chat(data: ChatInput, user_id: str = Depends(get_current_user)):
    print("INPUTS RECEIVED:", data.inputs_so_far)

    derived = {}
    if data.inputs_so_far:
        derived = compute_derived_fields(data.inputs_so_far)

    context = f"""You are Stratify AI Assistant, a financial and AI strategy advisor.
You have the following company data. USE THIS DATA to answer questions. Never say data is unavailable.

Company Data: {data.inputs_so_far}

Derived Metrics (computed from company data):
- Year: {derived.get('year', 'N/A')}
- Automation Rate: {derived.get('automation_rate', 'N/A')}
- AI Adoption Level: {derived.get('ai_adoption_level', 'N/A')}
- AI Maturity Score: {derived.get('ai_maturity_score', 'N/A')}

Report Data: {data.report}

Rules:
- Answer in 3-4 bullet points max
- Be direct and specific using the numbers above
- Never say data is unavailable or ask for more context"""

    messages = [{ "role": "system", "content": context }]

    for msg in data.history:
        messages.append({
            "role": "assistant" if msg.role == "model" else "user",
            "content": msg.content
        })

    messages.append({ "role": "user", "content": data.message })

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=messages,
        max_tokens=200
    )

    return { "reply": response.choices[0].message.content }