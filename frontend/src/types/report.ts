export interface AssessmentReport {
    company: {
        industry: string;
        country: string;
    };

    metrics: {
        costSavings: number;
        revenueImpact: number;
        productivityGain: number;
        roi: number;

        successProbability: number;

        aiMaturity: number;
        automationRate: number;
        aiAdoptionLevel: number;
    };

    benchmark: {
        adoption: number;
        automation: number;
        maturity: number;
        successProbability: number;
    };

    report: {
        executiveSummary: string;

        strengths: {
            title: string;
            explanation: string;
            businessAdvantage: string;
        }[];

        risks: {
            title: string;
            explanation: string;
            consequence: string;
        }[];

        improvementOpportunities: {
            problem: string;
            businessImpact: string;
            recommendedAction: string;
            expectedOutcome: string;
        }[];

        roadmap: {
            phase1: {
                title: string;
                objective: string;
                actions: string[];
                expectedOutcome: string;
            };

            phase2: {
                title: string;
                objective: string;
                actions: string[];
                expectedOutcome: string;
            };

            phase3: {
                title: string;
                objective: string;
                actions: string[];
                expectedOutcome: string;
            };
        };
    };
}