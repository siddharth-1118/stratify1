export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Enter Company Data",
            description:
                "Provide industry, investment, adoption level, training hours and other business inputs.",
        },
        {
            number: "02",
            title: "ML Model Analysis",
            description:
                "Machine learning models analyze historical AI adoption and business performance patterns.",
        },
        {
            number: "03",
            title: "Predict Business Metrics",
            description:
                "Generate ROI, revenue impact, cost savings, productivity gain and efficiency insights.",
        },
        {
            number: "04",
            title: "AI Recommendations",
            description:
                "Identify AI opportunities and improvement areas tailored to the organization.",
        },
        {
            number: "05",
            title: "Strategy Report",
            description:
                "Generate a detailed executive-ready roadmap with recommendations and next steps.",
        },
    ];

    return (
        <section className="relative z-10 py-24 px-4">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-16">
                    <p className="text-green-400 uppercase tracking-[0.25em] text-sm mb-4">
                        Workflow
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold">
                        How It Works
                    </h2>
                </div>

                <div className="space-y-8">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="
                flex
                flex-col
                md:flex-row
                gap-6
                items-start
                p-8
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-900/30
                backdrop-blur-md
                hover:border-green-500/50
                transition-all
              "
                        >
                            <div
                                className="
                  text-green-400
                  text-4xl
                  font-bold
                  min-w-[90px]
                "
                            >
                                {step.number}
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-3">
                                    {step.title}
                                </h3>

                                <p className="text-zinc-400 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}