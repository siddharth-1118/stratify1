"""
Test script for report_generator.py
Run this to verify the report generation works correctly.
"""

import json
from report_generator import generate_report

# Sample data - same shape as what the backend will send
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


def test_report_generation():
    report = generate_report(user_inputs, derived_values, ml_outputs)

    # Check for errors
    if "error" in report:
        print("FAILED:", report["error"])
        return

    # Check all 9 sections are present
    required_keys = [
        "executive_summary", "current_position", "prediction_analysis",
        "strengths", "risks", "improvement_opportunities", "roadmap",
        "success_probability_analysis", "benchmark_analysis"
    ]

    missing = [key for key in required_keys if key not in report]

    if missing:
        print("FAILED: Missing sections:", missing)
    else:
        print("PASSED: All 9 sections present")
        print(json.dumps(report, indent=2))


if __name__ == "__main__":
    test_report_generation()