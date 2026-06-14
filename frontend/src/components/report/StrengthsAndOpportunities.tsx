export default function StrengthsAndOpportunities() {
    const strengths = [
        "Strong projected revenue growth potential",
        "Above-average AI adoption maturity",
        "Consistent AI investment commitment",
        "Positive productivity improvement forecast",
    ];

    const opportunities = [
        "Increase employee AI training hours",
        "Expand automation across repetitive workflows",
        "Improve AI governance and compliance",
        "Scale successful deployments company-wide",
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
                Strengths & Opportunities
            </h2>

            <p className="text-zinc-500 mb-8">
                Key organizational advantages and areas with the highest improvement potential.
            </p>

            <div className="grid md:grid-cols-2 gap-6">

                {/* Strengths */}

                <div
                    className="
                        border
                        border-green-500/20
                        bg-green-500/5
                        rounded-2xl
                        p-6
                    "
                >
                    <h3 className="text-xl font-semibold text-green-400 mb-4">
                        Strengths
                    </h3>

                    <div className="space-y-4">
                        {strengths.map((item) => (
                            <div
                                key={item}
                                className="flex gap-3 items-start"
                            >
                                <span className="text-green-400 mt-1">
                                    ✓
                                </span>

                                <span className="text-zinc-200">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Opportunities */}

                <div
                    className="
                        border
                        border-amber-500/20
                        bg-amber-500/5
                        rounded-2xl
                        p-6
                    "
                >
                    <h3 className="text-xl font-semibold text-amber-400 mb-4">
                        Opportunities
                    </h3>

                    <div className="space-y-4">
                        {opportunities.map((item) => (
                            <div
                                key={item}
                                className="flex gap-3 items-start"
                            >
                                <span className="text-amber-400 mt-1">
                                    →
                                </span>

                                <span className="text-zinc-200">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}