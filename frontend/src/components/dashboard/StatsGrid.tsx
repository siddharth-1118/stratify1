export default function StatsGrid() {
    const stats = [
        {
            title: "Assessments",
            value: "0",
        },
        {
            title: "Success Probability",
            value: "--",
        },
        {
            title: "Reports Generated",
            value: "0",
        },
        {
            title: "Benchmark Score",
            value: "--",
        },
    ];

    return (
        <section className="mb-10">
            <div className="grid md:grid-cols-4 gap-5">

                {stats.map((stat) => (
                    <div
                        key={stat.title}
                        className="
                            p-6
                            rounded-3xl
                            border
                            border-zinc-800
                            bg-zinc-900/20
                        "
                    >
                        <p className="text-zinc-500 text-sm mb-3">
                            {stat.title}
                        </p>

                        <h3 className="text-3xl font-bold text-green-400">
                            {stat.value}
                        </h3>
                    </div>
                ))}

            </div>
        </section>
    );
}