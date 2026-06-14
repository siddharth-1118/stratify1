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

        strengths: string[];

        risks: string[];

        roadmap: {
            phase1: string[];
            phase2: string[];
            phase3: string[];
        };
    };
}