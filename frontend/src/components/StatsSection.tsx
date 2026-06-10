export default function StatsSection() {
    const stats = [
        {
            value: "500+",
            label: "Companies Analyzed",
        },
        {
            value: "95%",
            label: "Prediction Accuracy",
        },
        {
            value: "30+",
            label: "Industries Supported",
        },
        {
            value: "20+",
            label: "Countries Covered",
        },
    ];

    return (
        <section className="relative z-10 py-20 px-4">
            <div className="text-center mb-12">
                <p className="text-green-400 uppercase tracking-[0.25em] text-sm mb-4">
                    Platform Insights
                </p>

                <h2 className="text-3xl md:text-5xl font-bold">
                    Trusted Across Industries
                </h2>
            </div>
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="
                text-center
                p-6
                rounded-2xl
                border border-zinc-800
                bg-zinc-900/30
                hover:border-green-500/50
                hover:-translate-y-2
                transition-all duration-300
                backdrop-blur-md
              "
                        >
                            <h3 className="text-3xl md:text-4xl font-bold text-green-400">
                                {stat.value}
                            </h3>

                            <p className="mt-2 text-zinc-400 text-sm md:text-base">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}