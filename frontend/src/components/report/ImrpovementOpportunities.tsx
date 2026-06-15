"use client";

import { CheckCircle2 } from "lucide-react";

export default function ImprovementOpportunities() {
    const opportunities = [
        {
            problem: "Limited workforce AI readiness",
            businessImpact: "Slower AI adoption across departments",
            recommendedAction: "Expand employee AI training programs",
            expectedOutcome: "Higher AI adoption and productivity gains",
        },
        {
            problem: "Low automation coverage",
            businessImpact: "Manual processes reduce operational efficiency",
            recommendedAction: "Expand automation across repetitive workflows",
            expectedOutcome: "Improved productivity and cost savings",
        },
        {
            problem: "Weak AI governance",
            businessImpact: "Increased compliance and operational risks",
            recommendedAction: "Establish stronger AI governance policies",
            expectedOutcome: "Better oversight and reduced risk exposure",
        },
        {
            problem: "Limited deployment scale",
            businessImpact: "Reduced business value from AI investments",
            recommendedAction: "Scale successful AI deployments company-wide",
            expectedOutcome: "Higher ROI and broader organizational impact",
        },
    ];

    return (
        <section
            className="
                p-8
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-900/20
            "
        >
            <h2 className="text-2xl font-bold mb-2">
                Improvement Opportunities
            </h2>

            <p className="text-zinc-500 mb-8">
                Priority improvement areas based on identified risks and organizational challenges.
            </p>

            <div className="space-y-4">

                {opportunities.map((opportunity, index) => (
                    <div
                        key={index}
                        className="
                            flex
                            gap-4
                            items-start
                            p-4
                            rounded-2xl
                            border
                            border-zinc-800
                            bg-zinc-950/40
                        "
                    >
                        <CheckCircle2
                            size={20}
                            className="text-green-400 mt-1"
                        />

                        <div className="space-y-2">
                            <p>
                                <span className="font-semibold text-white">
                                    Problem:
                                </span>{" "}
                                {opportunity.problem}
                            </p>

                            <p>
                                <span className="font-semibold text-white">
                                    Business Impact:
                                </span>{" "}
                                {opportunity.businessImpact}
                            </p>

                            <p>
                                <span className="font-semibold text-green-400">
                                    Recommended Action:
                                </span>{" "}
                                {opportunity.recommendedAction}
                            </p>

                            <p>
                                <span className="font-semibold text-blue-400">
                                    Expected Outcome:
                                </span>{" "}
                                {opportunity.expectedOutcome}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}