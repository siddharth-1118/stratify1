import { AssessmentReport } from "@/types/report";

export const mockReport: AssessmentReport = {
    company: {
        industry: "Technology",
        country: "India",
    },

    metrics: {
        costSavings: 464587,
        revenueImpact: 3419763,
        productivityGain: 42.6,
        roi: 18.2,

        successProbability: 61,

        aiMaturity: 7.2,
        automationRate: 58,
        aiAdoptionLevel: 63,
    },

    benchmark: {
        adoption: 52,
        automation: 49,
        maturity: 6.1,
        successProbability: 54,
    },

    report: {
        executiveSummary:
            "The organization demonstrates a strong AI foundation with healthy investment levels and moderate deployment maturity. Significant opportunities remain in scaling automation and workforce enablement.",

        strengths: [
            {
                title: "Strong AI Investment",
                explanation:
                    "The organization continues to invest consistently in AI initiatives.",
                businessAdvantage:
                    "Creates a strong foundation for future AI expansion.",
            },
            {
                title: "Above-Average AI Adoption",
                explanation:
                    "AI technologies are already being used across multiple business functions.",
                businessAdvantage:
                    "Accelerates future deployment and scaling efforts.",
            },
            {
                title: "Healthy Deployment Footprint",
                explanation:
                    "Several AI projects have already reached implementation stage.",
                businessAdvantage:
                    "Reduces risk associated with future rollouts.",
            },
            {
                title: "Positive Productivity Outlook",
                explanation:
                    "Forecasted productivity gains indicate operational benefits.",
                businessAdvantage:
                    "Supports long-term efficiency improvements.",
            },
        ],

        risks: [
            {
                title: "Limited Automation Coverage",
                explanation:
                    "Automation remains below top-performing organizations.",
                consequence:
                    "Manual processes may continue reducing operational efficiency.",
            },
            {
                title: "Workforce Readiness Gap",
                explanation:
                    "Employee AI capability can still be improved.",
                consequence:
                    "Adoption may slow as initiatives scale.",
            },
            {
                title: "Governance Maturity",
                explanation:
                    "Governance processes require further development.",
                consequence:
                    "Increased compliance and oversight risks.",
            },
            {
                title: "Scaling Challenges",
                explanation:
                    "Deployment scale remains moderate.",
                consequence:
                    "Business value from AI may remain limited.",
            },
        ],

        improvementOpportunities: [
            {
                problem: "Limited workforce AI readiness",
                businessImpact:
                    "Slower AI adoption across departments.",
                recommendedAction:
                    "Expand employee AI training programs.",
                expectedOutcome:
                    "Higher adoption and improved productivity.",
            },
            {
                problem: "Low automation coverage",
                businessImpact:
                    "Manual processes reduce efficiency.",
                recommendedAction:
                    "Expand automation across repetitive workflows.",
                expectedOutcome:
                    "Increased operational efficiency.",
            },
            {
                problem: "Weak AI governance",
                businessImpact:
                    "Higher compliance and operational risk.",
                recommendedAction:
                    "Establish stronger AI governance policies.",
                expectedOutcome:
                    "Improved oversight and reduced risk.",
            },
            {
                problem: "Limited deployment scale",
                businessImpact:
                    "Lower returns from AI investments.",
                recommendedAction:
                    "Scale successful AI deployments company-wide.",
                expectedOutcome:
                    "Greater ROI and business value.",
            },
        ],

        roadmap: {
            phase1: {
                title: "Foundation and Quick Wins",
                objective:
                    "Improve readiness and identify automation opportunities.",
                actions: [
                    "Launch workforce AI training initiatives",
                    "Identify automation quick wins",
                    "Establish governance guidelines",
                ],
                expectedOutcome:
                    "Improved AI readiness and adoption.",
            },

            phase2: {
                title: "Scaling",
                objective:
                    "Expand successful AI deployments.",
                actions: [
                    "Deploy AI across departments",
                    "Measure ROI across business units",
                    "Increase automation coverage",
                ],
                expectedOutcome:
                    "Broader business impact from AI.",
            },

            phase3: {
                title: "Optimization",
                objective:
                    "Maximize long-term AI value.",
                actions: [
                    "Scale successful implementations",
                    "Optimize governance processes",
                    "Monitor and improve performance",
                ],
                expectedOutcome:
                    "Sustainable AI-driven growth.",
            },
        },
    },
};