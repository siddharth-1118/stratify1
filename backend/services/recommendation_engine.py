def generate_recommendations(automation, training, maturity):

    recommendations = []

    if automation < 0.40:
        recommendations.append("Increase business process automation.")

    if training < 50:
        recommendations.append("Provide additional AI training programs.")

    if maturity < 50:
        recommendations.append("Improve AI governance and maturity.")

    if automation > 0.70:
        recommendations.append("Maintain current automation strategy.")

    if maturity > 80:
        recommendations.append("Scale AI initiatives across departments.")

    if len(recommendations) == 0:
        recommendations.append("Current AI strategy is performing well.")

    return recommendations