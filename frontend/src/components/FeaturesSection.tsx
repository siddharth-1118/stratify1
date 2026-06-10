export default function FeaturesSection() {
    const features = [
        {
            title: "ROI Prediction",
            description:
                "Predict expected returns from AI investments using machine learning models.",
        },
        {
            title: "Business Impact Analysis",
            description:
                "Estimate cost savings, revenue impact, and productivity improvements.",
        },
        {
            title: "AI Recommendations",
            description:
                "Receive industry-specific AI adoption recommendations tailored to business needs.",
        },
        {
            title: "Executive Strategy Report",
            description:
                "Generate actionable implementation roadmaps and executive-level insights.",
        },
        {
            title: "Interactive Dashboard",
            description:
                "Visualize key metrics, trends, and predictions through interactive analytics.",
        },
    ];

    return (
        <section className="relative z-10 py-24 px-4">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <p className="text-green-400 uppercase tracking-[0.25em] text-sm mb-4">
                        Key Features
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold">
                        Everything You Need To Evaluate AI Investments
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
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
                            <h3 className="text-2xl font-semibold mb-4">
                                {feature.title}
                            </h3>

                            <p className="text-zinc-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}