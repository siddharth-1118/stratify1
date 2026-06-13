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
            "Strong AI investment commitment",
            "Above-average AI adoption",
            "Healthy deployment footprint",
        ],

        risks: [
            "Automation remains below top performers",
            "Workforce AI readiness can be improved",
            "Deployment scale remains limited",
        ],

        roadmap: {
            phase1: [
                "Launch workforce AI training initiatives",
                "Identify automation quick wins",
            ],

            phase2: [
                "Expand AI deployment across departments",
                "Measure ROI across business units",
            ],

            phase3: [
                "Scale successful implementations",
                "Optimize AI governance and monitoring",
            ],
        },
    },
};