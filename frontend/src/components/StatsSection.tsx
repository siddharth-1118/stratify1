export default function StatsSection() {
    const steps = [
        {
            number: "01",
            title: "Assess",
            description:
                "Provide information about AI adoption, investments, workforce readiness, and organizational maturity.",
        },
        {
            number: "02",
            title: "Analyze",
            description:
                "Machine learning models evaluate business outcomes, ROI potential, and AI success probability.",
        },
        {
            number: "03",
            title: "Benchmark",
            description:
                "Compare your organization against industry averages, top performers, and similar companies.",
        },
        {
            number: "04",
            title: "Transform",
            description:
                "Receive strategic recommendations, roadmaps, and executive-ready reports for long-term success.",
        },
    ];

    return (
        <section className="relative z-10 py-24 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-green-400 uppercase tracking-[0.25em] text-sm mb-4">
                        How It Works
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold">
                        From Assessment To AI Transformation
                    </h2>

                    <p className="mt-6 text-zinc-400 max-w-3xl mx-auto text-base md:text-lg">
                        Stratify guides organizations through a structured AI
                        transformation journey, from initial assessment to
                        strategic execution and measurable business outcomes.
                    </p>
                </div>

                {/* Workflow Cards */}
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="
                p-8
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-900/30
                backdrop-blur-md
                hover:border-green-500/50
                hover:-translate-y-2
                transition-all
                duration-300
              "
                        >
                            <p className="text-green-400 text-3xl font-bold mb-6">
                                {step.number}
                            </p>

                            <h3 className="text-2xl font-semibold mb-4">
                                {step.title}
                            </h3>

                            <p className="text-zinc-400 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}