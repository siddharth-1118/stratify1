# ==========================================
# IMPORTS
# ==========================================

import joblib
import pandas as pd

# ==========================================
# LOAD MODELS
# ==========================================

cost_model = joblib.load(
    "models/cost_savings_model.pkl"
)

revenue_model = joblib.load(
    "models/revenue_impact_model.pkl"
)

productivity_model = joblib.load(
    "models/productivity_gain_model.pkl"
)

roi_model = joblib.load(
    "models/roi_model.pkl"
)

print("All models loaded successfully")

# ==========================================
# COST SAVINGS PREDICTION
# ==========================================

def predict_cost_savings(
    input_df
):

    return cost_model.predict(
        input_df
    )[0]

# ==========================================
# REVENUE IMPACT PREDICTION
# ==========================================

def predict_revenue(
    input_df
):

    return revenue_model.predict(
        input_df
    )[0]

# ==========================================
# PRODUCTIVITY PREDICTION
# ==========================================

def predict_productivity(
    input_df
):

    return productivity_model.predict(
        input_df
    )[0]

# ==========================================
# ROI PREDICTION
# ==========================================

def predict_roi(
    input_df
):

    return roi_model.predict(
        input_df
    )[0]

# ==========================================
# MASTER PREDICTION FUNCTION
# ==========================================

def predict_all(
    input_df
):

    cost = predict_cost_savings(
        input_df
    )

    revenue = predict_revenue(
        input_df
    )

    productivity = predict_productivity(
        input_df
    )

    roi = predict_roi(
        input_df
    )

    return {

        "cost_savings": float(cost),

        "revenue_impact": float(revenue),

        "productivity_gain": float(productivity),

        "roi": float(roi)

    }

# ==========================================
# SUCCESS PROBABILITY ENGINE
# ==========================================

def success_probability(

    maturity_score,

    automation_rate,

    training_hours

):

    score = (

        maturity_score * 0.4

        +

        automation_rate * 100 * 0.3

        +

        training_hours * 0.3

    )

    return min(

        round(score, 2),

        100

    )

# ==========================================
# RECOMMENDATION ENGINE
# ==========================================

def generate_recommendations(

    automation,

    training,

    maturity

):

    recommendations = []

    if automation < 0.40:

        recommendations.append(
            "Increase automation initiatives"
        )

    if training < 50:

        recommendations.append(
            "Increase employee AI training"
        )

    if maturity < 50:

        recommendations.append(
            "Improve AI maturity strategy"
        )

    if len(recommendations) == 0:

        recommendations.append(
            "AI strategy is performing well"
        )

    return recommendations

# ==========================================
# FINAL ASSESSMENT FUNCTION
# ==========================================

def full_assessment(
    input_df
):

    predictions = predict_all(
        input_df
    )

    success_score = success_probability(

        input_df[
            "ai_maturity_score"
        ].iloc[0],

        input_df[
            "automation_rate"
        ].iloc[0],

        input_df[
            "employee_ai_training_hours"
        ].iloc[0]

    )

    recommendations = (

        generate_recommendations(

            input_df[
                "automation_rate"
            ].iloc[0],

            input_df[
                "employee_ai_training_hours"
            ].iloc[0],

            input_df[
                "ai_maturity_score"
            ].iloc[0]

        )

    )

    return {

        **predictions,

        "success_probability":
        float(success_score),

        "recommendations":
        recommendations

    }
# ==========================================
# SUCCESS PROBABILITY ENGINE
# ==========================================

def success_probability(

    maturity_score,

    automation_rate,

    training_hours

):

    maturity_component = (

        maturity_score * 0.4

    )

    automation_component = (

        automation_rate * 100 * 0.3

    )

    training_component = (

        min(training_hours,100) * 0.3

    )

    score = (

        maturity_component

        +

        automation_component

        +

        training_component

    )

    return round(

        min(score,100),

        2

    )


# ==========================================
# RECOMMENDATION ENGINE
# ==========================================

def generate_recommendations(

    automation,

    training,

    maturity

):

    recommendations = []

    if automation < 0.40:

        recommendations.append(

            "Increase business process automation."

        )

    if training < 50:

        recommendations.append(

            "Provide additional AI training programs."

        )

    if maturity < 50:

        recommendations.append(

            "Improve AI governance and maturity."

        )

    if automation > 0.70:

        recommendations.append(

            "Maintain current automation strategy."

        )

    if maturity > 80:

        recommendations.append(

            "Scale AI initiatives across departments."

        )

    if len(recommendations) == 0:

        recommendations.append(

            "Current AI strategy is performing well."

        )

    return recommendations


# ==========================================
# FINAL RESPONSE FUNCTION
# ==========================================

def full_assessment(

    input_df

):

    predictions = predict_all(

        input_df

    )

    success_score = success_probability(

        input_df[
            "ai_maturity_score"
        ].iloc[0],

        input_df[
            "automation_rate"
        ].iloc[0],

        input_df[
            "employee_ai_training_hours"
        ].iloc[0]

    )

    recommendations = generate_recommendations(

        input_df[
            "automation_rate"
        ].iloc[0],

        input_df[
            "employee_ai_training_hours"
        ].iloc[0],

        input_df[
            "ai_maturity_score"
        ].iloc[0]

    )

    return {

        "cost_savings":

        predictions[
            "cost_savings"
        ],

        "revenue_impact":

        predictions[
            "revenue_impact"
        ],

        "productivity_gain":

        predictions[
            "productivity_gain"
        ],

        "roi":

        predictions[
            "roi"
        ],

        "success_probability":

        float(success_score),

        "recommendations":

        recommendations

    }

sample = pd.DataFrame({

    "industry":[3],

    "country":[2],

    "year":[2025],

    "ai_adoption_level":[1],

    "ai_investment_usd":[500000],

    "automation_rate":[0.60],

    "employee_ai_training_hours":[50],

    "ai_maturity_score":[70],

    "deployment_count":[8]

})

print(

    full_assessment(
        sample
    )

)
