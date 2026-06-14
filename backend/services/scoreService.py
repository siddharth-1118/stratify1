from datetime import datetime

def compute_derived_fields(data: dict) -> dict:
    deployment_count = data.get("deployment_count", 0)
    employee_training_hours = data.get("employee_training_hours", 0)
    ai_investment_usd = data.get("ai_investment_usd", 0)
    year = datetime.utcnow().year  # always current year

    automation_rate = min(
        ((deployment_count * 5) + (employee_training_hours * 0.1)) / 100,
        0.95
    )

    ai_adoption_level = (
        (deployment_count / 80) * 0.45 +
        (employee_training_hours / 200) * 0.45 +
        (ai_investment_usd / 60000000) * 0.10
    )
    ai_adoption_level = min(max(ai_adoption_level, 0), 1)

    normalized_score = (
        automation_rate * 0.30 +
        (deployment_count / 80) * 0.25 +
        (employee_training_hours / 200) * 0.25 +
        (ai_investment_usd / 60000000) * 0.20
    )
    ai_maturity_score = max(1, round(normalized_score * 10, 2))

    return {
        "year": year,
        "automation_rate": round(automation_rate, 4),
        "ai_adoption_level": round(ai_adoption_level, 4),
        "ai_maturity_score": ai_maturity_score
    }