import pandas as pd
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_PATH = os.path.join(BASE_DIR, "data", "corporate_ai_adoption_dataset.csv")

df = pd.read_csv(DATA_PATH)


def get_industry_benchmark(industry: str) -> dict:
    filtered = df[df["industry"] == industry]

    if filtered.empty:
        return {"error": f"No data found for industry: {industry}"}

    return {
        "industry": industry,
        "sample_size": len(filtered),
        "avg_roi": round(filtered["revenue_impact"].mean() / filtered["ai_investment_usd"].mean() * 100, 2),
        "avg_cost_savings": round(filtered["cost_savings"].mean(), 2),
        "avg_revenue_impact": round(filtered["revenue_impact"].mean(), 2),
        "avg_productivity_gain": round(filtered["productivity_gain"].mean(), 4),
        "avg_automation_rate": round(filtered["automation_rate"].mean(), 4),
        "avg_ai_maturity_score": round(filtered["ai_maturity_score"].mean(), 2),
        "avg_ai_investment_usd": round(filtered["ai_investment_usd"].mean(), 2),
        "avg_deployment_count": round(filtered["deployment_count"].mean(), 2),
        "avg_training_hours": round(filtered["employee_ai_training_hours"].mean(), 2),
    }


def get_percentile(industry: str, metric: str, value: float) -> dict:
    filtered = df[df["industry"] == industry]

    if filtered.empty:
        return {"error": f"No data found for industry: {industry}"}

    if metric not in filtered.columns:
        return {"error": f"Metric '{metric}' not found in dataset"}

    below = (filtered[metric] < value).sum()
    percentile = round((below / len(filtered)) * 100, 1)

    return {
        "industry": industry,
        "metric": metric,
        "your_value": value,
        "industry_avg": round(filtered[metric].mean(), 4),
        "percentile": percentile,
        "interpretation": f"You are better than {percentile}% of {industry} companies"
    }


def get_full_benchmark(industry: str, user_metrics: dict) -> dict:
    benchmark = get_industry_benchmark(industry)

    if "error" in benchmark:
        return benchmark

    metrics_to_compare = [
        "cost_savings",
        "revenue_impact",
        "productivity_gain",
        "automation_rate",
        "ai_maturity_score",
    ]

    percentiles = {}
    for metric in metrics_to_compare:
        if metric in user_metrics:
            percentiles[metric] = get_percentile(industry, metric, user_metrics[metric])

    return {
        "benchmark": benchmark,
        "percentiles": percentiles
    }