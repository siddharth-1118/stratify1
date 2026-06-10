export default function ResultsPreview() {
    const metrics = [
        {
            title: "ROI %",
            value: "35%",
            status: "Excellent",
        },
        {
            title: "Revenue Impact",
            value: "$2.7M",
            status: "Projected",
        },
        {
            title: "Cost Savings",
            value: "$1.5M",
            status: "Annual",
        },
        {
            title: "Productivity Gain",
            value: "24%",
            status: "Improvement",
        },
        {
            title: "AI Efficiency Score",
            value: "2.1",
            status: "High",
        },
        {
            title: "Training Effectiveness",
            value: "0.002",
            status: "Moderate",
        },
    ];

    return (
        <section className="relative z-10 py-24 px-4">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <p className="text-green-400 uppercase tracking-[0.25em] text-sm mb-4">
                        Sample Insights
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold">
                        See What You'll Discover
                    </h2>

                    <p className="text-zinc-400 mt-6 max-w-3xl mx-auto">
                        Gain actionable insights into AI investments, business impact,
                        efficiency, and workforce readiness.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {metrics.map((metric) => (
                        <div
                            key={metric.title}
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
                            <p className="text-zinc-400 text-sm mb-4">
                                {metric.title}
                            </p>

                            <h3 className="text-4xl font-bold text-green-400 mb-3">
                                {metric.value}
                            </h3>

                            <span
                                className="
                  inline-block
                  px-3
                  py-1
                  rounded-full
                  text-sm
                  bg-green-500/10
                  text-green-400
                "
                            >
                                {metric.status}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}