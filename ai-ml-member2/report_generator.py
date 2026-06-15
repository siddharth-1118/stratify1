"""
Stratify AI - Report Generation & Intelligence Layer
Author: Baani

This module takes:
  1. User inputs (from the assessment form)
  2. Derived values (calculated by backend - automation rate, maturity score, etc.)
  3. ML outputs (from Ayush's model)

And returns a structured JSON report with 9 sections written in
consulting-style business language, generated using NVIDIA NIM (Llama model).
"""

from openai import OpenAI
from dotenv import load_dotenv
import json
import os

load_dotenv()


# ============================================================
# CONFIGURATION
# ============================================================

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


# ============================================================
# PROMPT BUILDER
# ============================================================

def build_prompt(user_inputs: dict, derived_values: dict, ml_outputs: dict) -> str:
    """
    Builds the full prompt sent to the LLM, combining:
    - user inputs (form data)
    - derived values (calculated by backend)
    - ml outputs (Ayush's model predictions)

    Returns a single string - the prompt.
    """

    prompt = f"""
You are a senior AI strategy consultant at a top-tier management consulting firm
(McKinsey / BCG / Deloitte level). You are writing a strategic assessment report
for a corporate executive.

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
- Automation Rate: {derived_values['automation_rate']:.2f}
  (meaning: {round(derived_values['automation_rate']*100)}% of workflows are AI-enabled)
- AI Adoption Level: {derived_values['ai_adoption_level']:.2f}
  (scale 0-1, measures depth of AI integration)
- AI Maturity Score: {derived_values['ai_maturity_score']:.1f}/10
  (1-3: Early Stage, 4-6: Developing, 7-8: Mature, 9-10: Industry Leading)

ML MODEL PREDICTIONS:
- Predicted Cost Savings: ${ml_outputs['cost_savings']:,.0f} USD
- Predicted Revenue Impact: ${ml_outputs['revenue_impact']:,.0f} USD
- Predicted Productivity Gain: {ml_outputs['productivity_gain']:.2f} (scale 0-1)
- Predicted ROI: {ml_outputs['roi']:.1f}%
- AI Success Probability: {ml_outputs['success_probability']:.0f}%
- Model Recommendations: {ml_outputs.get('recommendations', [])}

---

REPORT SECTIONS REQUIRED:

Write all 9 sections below. Each section must reference the actual numbers above.
Never write generic advice. Always tie every statement to specific metrics.

SECTION 1 - EXECUTIVE SUMMARY
Write 150-200 words. Cover: current AI state, biggest opportunity, biggest risk,
overall outlook. The executive will read ONLY this section. Make it count.

SECTION 2 - CURRENT AI POSITION
Translate these 3 derived metrics into plain business language:
1. Automation Rate ({derived_values['automation_rate']:.2f}) - what does this mean operationally?
2. AI Adoption Level ({derived_values['ai_adoption_level']:.2f}) - how deeply is AI integrated?
3. AI Maturity Score ({derived_values['ai_maturity_score']:.1f}/10) - where on the maturity journey?
Do NOT state the raw numbers. Explain what they MEAN for the business.

SECTION 3 - PREDICTION ANALYSIS
Interpret each ML prediction:
- Cost Savings of ${ml_outputs['cost_savings']:,.0f} - what operational efficiencies does this suggest?
- Revenue Impact of ${ml_outputs['revenue_impact']:,.0f} - what does this mean for growth?
- Productivity Gain of {ml_outputs['productivity_gain']:.2f} - what organizational improvement is expected?
- ROI of {ml_outputs['roi']:.1f}% - is this investment efficient? What should leadership think?

SECTION 4 - STRENGTHS
List exactly 3 strengths. For each: name it, explain why it is a strength based
on the data, explain the business advantage it creates.

SECTION 5 - RISKS AND WEAKNESSES
List exactly 3 risks. For each: name it, explain what metric reveals it, explain
the business consequence if unaddressed.

SECTION 6 - IMPROVEMENT OPPORTUNITIES
For each risk from Section 5, generate one improvement opportunity with:
- Problem: [what is wrong]
- Business Impact: [what it costs the company]
- Recommended Action: [specific, actionable step]
- Expected Outcome: [what improves if they follow this]

SECTION 7 - STRATEGIC ROADMAP
Create a 3-phase roadmap:
Phase 1 (Months 1-3): Foundation and Quick Wins - objective, 3 actions, expected outcome
Phase 2 (Months 3-6): Scaling - objective, 3 actions, expected outcome
Phase 3 (Months 6-12): Optimization - objective, 3 actions, expected outcome
Every action must reference specific metrics from the data above.

SECTION 8 - SUCCESS PROBABILITY ANALYSIS
The success probability is {ml_outputs['success_probability']:.0f}%.
Write 100-150 words interpreting this score: what it means, what factors are
increasing it, what factors are decreasing it, what would move it above 75%.

SECTION 9 - BENCHMARK NARRATIVE
Write this section as if industry benchmark data will be injected later.
Use placeholder language like:
"Compared with {{{{industry}}}} sector peers, the organization demonstrates..."
Keep placeholders in double curly braces so they can be replaced later.

---

CRITICAL INSTRUCTIONS:
- Return ONLY a valid JSON object. No extra text before or after.
- Do not include markdown code blocks or backticks.
- Every section must reference actual numbers from the data above.
- Do not use phrases like "as an AI" or "based on the data provided."
- Write as a human consultant would write.

Return this exact JSON structure:
{{
    "executive_summary": "...",
    "current_position": "...",
    "prediction_analysis": "...",
    "strengths": [
        {{"title": "...", "explanation": "...", "business_advantage": "..."}},
        {{"title": "...", "explanation": "...", "business_advantage": "..."}},
        {{"title": "...", "explanation": "...", "business_advantage": "..."}}
    ],
    "risks": [
        {{"title": "...", "explanation": "...", "consequence": "..."}},
        {{"title": "...", "explanation": "...", "consequence": "..."}},
        {{"title": "...", "explanation": "...", "consequence": "..."}}
    ],
    "improvement_opportunities": [
        {{"problem": "...", "business_impact": "...", "recommended_action": "...", "expected_outcome": "..."}}
    ],
    "roadmap": {{
        "phase_1": {{"title": "Foundation and Quick Wins (Months 1-3)", "objective": "...", "actions": ["...", "...", "..."], "expected_outcome": "..."}},
        "phase_2": {{"title": "Scaling (Months 3-6)", "objective": "...", "actions": ["...", "...", "..."], "expected_outcome": "..."}},
        "phase_3": {{"title": "Optimization (Months 6-12)", "objective": "...", "actions": ["...", "...", "..."], "expected_outcome": "..."}}
    }},
    "success_probability_analysis": "...",
    "benchmark_analysis": "..."
}}
"""

    return prompt


# ============================================================
# CALL NVIDIA NIM AND PARSE RESPONSE
# ============================================================

def generate_report(user_inputs: dict, derived_values: dict, ml_outputs: dict) -> dict:
    """
    Builds the prompt, sends it to NVIDIA NIM (Llama model), and returns
    a parsed Python dictionary matching the 9-section report structure.

    If anything fails (API error, bad JSON), returns a dict with
    an "error" key instead of crashing.
    """

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


# ============================================================
# EXAMPLE INPUT DATA (for testing)
# ============================================================

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


# ============================================================
# TEST - generate a real report
# ============================================================

if __name__ == "__main__":
    report = generate_report(user_inputs, derived_values, ml_outputs)
    print(json.dumps(report, indent=2))