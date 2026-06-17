import pandas as pd
from ml.predict import predict_all
from services.success_probability import success_probability
from services.recommendation_engine import generate_recommendations


def full_assessment(input_df: pd.DataFrame):

    predictions = predict_all(input_df)

    success_score = success_probability(
        input_df["ai_maturity_score"].iloc[0],
        input_df["automation_rate"].iloc[0],
        input_df["employee_ai_training_hours"].iloc[0]
    )

    recommendations = generate_recommendations(
        input_df["automation_rate"].iloc[0],
        input_df["employee_ai_training_hours"].iloc[0],
        input_df["ai_maturity_score"].iloc[0]
    )

    return {
        **predictions,
        "success_probability": float(success_score),
        "recommendations": recommendations
    }