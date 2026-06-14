"use client";

import { CheckCircle2 } from "lucide-react";

export default function RecommendationsPanel() {
    const recommendations = [
        "Increase employee AI training programs.",
        "Expand automation across repetitive workflows.",
        "Establish stronger AI governance policies.",
        "Scale successful AI deployments across departments.",
        "Track AI ROI using quarterly performance reviews.",
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
                Strategic Recommendations
            </h2>

            <p className="text-zinc-500 mb-8">
                Key actions that can improve AI readiness and business outcomes.
            </p>

            <div className="space-y-4">

                {recommendations.map((recommendation, index) => (
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

                        <p className="text-zinc-300">
                            {recommendation}
                        </p>
                    </div>
                ))}

            </div>
        </section>
    );
}