import joblib
import pandas as pd

cost_model = joblib.load("ml/artifacts/cost_savings_model.pkl")
revenue_model = joblib.load("ml/artifacts/revenue_impact_model.pkl")
productivity_model = joblib.load("ml/artifacts/productivity_gain_model.pkl")
roi_model = joblib.load("ml/artifacts/roi_model.pkl")

INDUSTRY_MAP = {
    "Agriculture": 0,
    "Education": 1,
    "Energy": 2,
    "Financial Services": 3,
    "Healthcare": 4,
    "Logistics": 5,
    "Manufacturing": 6,
    "Retail": 7,
    "Technology": 8,
    "Telecom": 9
}

COUNTRY_MAP = {
    "Australia": 0,
    "Brazil": 1,
    "Canada": 2,
    "China": 3,
    "France": 4,
    "Germany": 5,
    "India": 6,
    "Japan": 7,
    "Netherlands": 8,
    "Singapore": 9,
    "South Korea": 10,
    "Sweden": 11,
    "UAE": 12,
    "United Kingdom": 13,
    "United States": 14
}

def encode(input_df):
    df = input_df.copy()
    df["industry"] = df["industry"].map(INDUSTRY_MAP)
    df["country"] = df["country"].map(COUNTRY_MAP)
    return df

def predict_cost_savings(input_df):
    return cost_model.predict(encode(input_df))[0]

def predict_revenue(input_df):
    return revenue_model.predict(encode(input_df))[0]

def predict_productivity(input_df):
    return productivity_model.predict(encode(input_df))[0]

def predict_roi(input_df):
    return roi_model.predict(encode(input_df))[0]

def predict_all(input_df):
    cost = predict_cost_savings(input_df)
    revenue = predict_revenue(input_df)
    productivity = predict_productivity(input_df)
    roi = predict_roi(input_df)

    return {
        "cost_savings": float(cost),
        "revenue_impact": float(revenue),
        "productivity_gain": float(productivity),
        "roi": float(roi)
    }