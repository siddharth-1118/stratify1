from openai import OpenAI
from dotenv import load_dotenv
import json
import os

load_dotenv()

NVIDIA_API_KEY = os.environ.get("NVIDIA_API_KEY")

if NVIDIA_API_KEY is None:
    raise ValueError(
        "NVIDIA_API_KEY environment variable not set. "
        "Create a .env file with NVIDIA_API_KEY=your_key"
    )

client = OpenAI(
    base_url="https://integrate.api.nvidia.com/v1",
    api_key=NVIDIA_API_KEY
)


def build_prompt(user_inputs: dict, derived_values: dict, ml_outputs: dict) -> str:

    data_section = f"""You are a senior AI strategy consultant at a top-tier management consulting firm (McKinsey / BCG / Deloitte level). You are writing a strategic assessment report for a corporate executive.

Your tone must be:
- Professional and authoritative
- Specific to the company's actual data - never generic
- Actionable - every point must lead to something the executive can do
- Executive-friendly - clear language, no ML jargon

---

COMPANY PROFILE:
- Industry: {user_inputs['industry']}
- Country: {user_inputs['country']}
- AI Investment: ${user_inputs['ai_investment_usd']:,.0f} USD
- Deployment Count: {user_inputs['deployment_count']} AI systems
- Employee AI Training Hours: {user_inputs['employee_training_hours']} hours/year

DERIVED ORGANIZATIONAL METRICS:
- Automation Rate: {derived_values['automation_rate']:.2f} ({round(derived_values['automation_rate']*100)}% of workflows are AI-enabled)
- AI Adoption Level: {derived_values['ai_adoption_level']:.2f} (scale 0-1)
- AI Maturity Score: {derived_values['ai_maturity_score']:.1f}/10 (1-3: Early Stage, 4-6: Developing, 7-8: Mature, 9-10: Industry Leading)

ML MODEL PREDICTIONS:
- Predicted Cost Savings: ${ml_outputs['cost_savings']:,.0f} USD
- Predicted Revenue Impact: ${ml_outputs['revenue_impact']:,.0f} USD
- Predicted Productivity Gain: {ml_outputs['productivity_gain']:.2f} (scale 0-1)
- Predicted ROI: {ml_outputs['roi']:.1f}%
- AI Success Probability: {ml_outputs['success_probability']:.0f}%
- Model Recommendations: {ml_outputs.get('recommendations', [])}

---

REPORT SECTIONS REQUIRED:

Write all 5 sections below. Each section must reference the actual numbers above.
Never write generic advice. Always tie every statement to specific metrics.

SECTION 1 - EXECUTIVE SUMMARY: Write 150-200 words covering current AI state, biggest opportunity, biggest risk, and overall outlook.

SECTION 2 - STRENGTHS: List exactly 4 strengths. For each: title, explanation, business_advantage.

SECTION 3 - RISKS AND WEAKNESSES: List exactly 4 risks. For each: title, explanation, consequence.

SECTION 4 - IMPROVEMENT OPPORTUNITIES: List exactly 4 opportunities. For each: problem, business_impact, recommended_action, expected_outcome.

SECTION 5 - STRATEGIC ROADMAP: 3 phases. For each: title, objective, 3 actions, expected_outcome.

CRITICAL INSTRUCTIONS:
- Return ONLY a valid JSON object. No extra text before or after.
- Do not include markdown code blocks or backticks.
- Every section must reference actual numbers from the data above.
- Write as a human consultant would write.
"""

    json_template = """
Return this exact JSON structure:
{
    "executive_summary": "...",
    "strengths": [
        {"title": "...", "explanation": "...", "business_advantage": "..."},
        {"title": "...", "explanation": "...", "business_advantage": "..."},
        {"title": "...", "explanation": "...", "business_advantage": "..."},
        {"title": "...", "explanation": "...", "business_advantage": "..."}
    ],
    "risks": [
        {"title": "...", "explanation": "...", "consequence": "..."},
        {"title": "...", "explanation": "...", "consequence": "..."},
        {"title": "...", "explanation": "...", "consequence": "..."},
        {"title": "...", "explanation": "...", "consequence": "..."}
    ],
    "improvement_opportunities": [
        {"problem": "...", "business_impact": "...", "recommended_action": "...", "expected_outcome": "..."},
        {"problem": "...", "business_impact": "...", "recommended_action": "...", "expected_outcome": "..."},
        {"problem": "...", "business_impact": "...", "recommended_action": "...", "expected_outcome": "..."},
        {"problem": "...", "business_impact": "...", "recommended_action": "...", "expected_outcome": "..."}
    ],
    "roadmap": {
        "phase_1": {"title": "Foundation and Quick Wins (Months 1-3)", "objective": "...", "actions": ["...", "...", "..."], "expected_outcome": "..."},
        "phase_2": {"title": "Scaling (Months 3-6)", "objective": "...", "actions": ["...", "...", "..."], "expected_outcome": "..."},
        "phase_3": {"title": "Optimization (Months 6-12)", "objective": "...", "actions": ["...", "...", "..."], "expected_outcome": "..."}
    }
}
"""

    return data_section + json_template


def generate_report(user_inputs: dict, derived_values: dict, ml_outputs: dict) -> dict:
    prompt = build_prompt(user_inputs, derived_values, ml_outputs)

    try:
        response = client.chat.completions.create(
            model="meta/llama-3.3-70b-instruct",
            messages=[{"role": "user", "content": prompt}]
        )
    except Exception as e:
        return {"error": f"NVIDIA API call failed: {str(e)}"}

    raw_text = response.choices[0].message.content.strip()

    if raw_text.startswith("```"):
        raw_text = raw_text.split("```")[1]
        if raw_text.startswith("json"):
            raw_text = raw_text[4:]
    raw_text = raw_text.strip()

    try:
        report = json.loads(raw_text)
    except json.JSONDecodeError as e:
        return {"error": f"Failed to parse response as JSON: {str(e)}", "raw_response": raw_text}

    return report


user_inputs = {
    "industry": "Technology",
    "country": "India",
    "ai_investment_usd": 25000000,
    "deployment_count": 15,
    "employee_training_hours": 80
}

derived_values = {
    "automation_rate": 0.58,
    "ai_adoption_level": 0.63,
    "ai_maturity_score": 7.2
}

ml_outputs = {
    "cost_savings": 464587.32,
    "revenue_impact": 3419763.77,
    "productivity_gain": 0.4266,
    "roi": -6.60,
    "success_probability": 61.0,
    "recommendations": ["Current AI strategy is performing well."]
}


if __name__ == "__main__":
    report = generate_report(user_inputs, derived_values, ml_outputs)
    print(json.dumps(report, indent=2))