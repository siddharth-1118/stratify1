export default function FeaturesSection() {
    const features = [
        {
            title: "AI Success Probability",
            description:
                "Predict the likelihood of achieving AI transformation goals using machine learning and organizational readiness indicators.",
        },
        {
            title: "Industry Benchmarking",
            description:
                "Compare your organization against industry averages, top performers, and similar companies.",
        },
        {
            title: "Progress Tracking",
            description:
                "Track ROI, productivity gains, cost savings, and AI maturity across multiple assessments.",
        },
        {
            title: "Strategic Roadmaps",
            description:
                "Receive structured 90-day, 6-month, and 12-month AI transformation plans tailored to your organization.",
        },
        {
            title: "Executive Reports",
            description:
                "Generate consulting-style reports containing predictions, benchmarks, recommendations, and transformation strategies.",
        },
        {
            title: "Predictive Business Outcomes",
            description:
                "Forecast revenue impact, cost savings, productivity gains, and overall AI efficiency before scaling investments.",
        },
    ];

    return (
        <section className="relative z-10 py-24 px-4">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <p className="text-green-400 uppercase tracking-[0.25em] text-sm mb-4">
                        Core Capabilities
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold">
                        Everything You Need To Drive AI Transformation
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