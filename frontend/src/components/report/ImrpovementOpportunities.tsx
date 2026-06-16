"use client";

import { CheckCircle2 } from "lucide-react";

interface Props {
    data: any;
}

export default function ImprovementOpportunities({ data }: Props) {
    const opportunities = data?.improvement_opportunities ?? [
        {
            problem: "Limited workforce AI readiness",
            business_impact: "Slower AI adoption across departments",
            recommended_action: "Expand employee AI training programs",
            expected_outcome: "Higher AI adoption and productivity gains",
        },
        {
            problem: "Low automation coverage",
            business_impact: "Manual processes reduce operational efficiency",
            recommended_action: "Expand automation across repetitive workflows",
            expected_outcome: "Improved productivity and cost savings",
        },
        {
            problem: "Weak AI governance",
            business_impact: "Increased compliance and operational risks",
            recommended_action: "Establish stronger AI governance policies",
            expected_outcome: "Better oversight and reduced risk exposure",
        },
        {
            problem: "Limited deployment scale",
            business_impact: "Reduced business value from AI investments",
            recommended_action: "Scale successful AI deployments company-wide",
            expected_outcome: "Higher ROI and broader organizational impact",
        },
    ];

    return (
        <section className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/20">
            <h2 className="text-2xl font-bold mb-2">Improvement Opportunities</h2>
            <p className="text-zinc-500 mb-8">
                Priority improvement areas based on identified risks and organizational challenges.
            </p>

            <div className="space-y-4">
                {opportunities.map((opportunity: any, index: number) => (
                    <div key={index} className="flex gap-4 items-start p-4 rounded-2xl border border-zinc-800 bg-zinc-950/40">
                        <CheckCircle2 size={20} className="text-green-400 mt-1 flex-shrink-0" />
                        <div className="space-y-2">
                            <p>
                                <span className="font-semibold text-white">Problem: </span>
                                {opportunity.problem}
                            </p>
                            <p>
                                <span className="font-semibold text-white">Business Impact: </span>
                                {opportunity.business_impact ?? opportunity.businessImpact}
                            </p>
                            <p>
                                <span className="font-semibold text-green-400">Recommended Action: </span>
                                {opportunity.recommended_action ?? opportunity.recommendedAction}
                            </p>
                            <p>
                                <span className="font-semibold text-blue-400">Expected Outcome: </span>
                                {opportunity.expected_outcome ?? opportunity.expectedOutcome}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}