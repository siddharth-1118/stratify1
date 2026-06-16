def success_probability(maturity_score, automation_rate, training_hours):

    maturity_component = maturity_score * 0.4

    automation_component = automation_rate * 100 * 0.3

    training_component = min(training_hours, 100) * 0.3

    score = maturity_component + automation_component + training_component

    return round(min(score, 100), 2)