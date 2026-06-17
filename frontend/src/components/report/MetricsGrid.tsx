interface Props {
    data: any;
}

export default function MetricsGrid({ data }: Props) {
    if (!data) return null;

    const metrics = [
        {
            title: "Cost Savings",
            value: `$${Math.round(data.cost_savings ?? 0).toLocaleString("en-US")}`,
        },
        {
            title: "Revenue Impact",
            value: `$${Math.round(data.revenue_impact ?? 0).toLocaleString("en-US")}`,
        },
        {
            title: "Productivity Gain",
            value: `${((data.productivity_gain ?? 0) * 100).toFixed(1)}%`,
        },
        {
            title: "ROI",
            value: `${(data.roi ?? 0).toFixed(1)}%`,
        },
        {
            title: "Automation Rate",
            value: `${((data.derived?.automation_rate ?? 0) * 100).toFixed(1)}%`,
        },
        {
            title: "AI Adoption",
            value: `${((data.derived?.ai_adoption_level ?? 0) * 100).toFixed(1)}%`,
        },
    ];

    return (
        <section>
            <div className="grid md:grid-cols-3 gap-5">
                {metrics.map((metric) => (
                    <div
                        key={metric.title}
                        className="p-6 rounded-3xl border border-zinc-800 bg-zinc-900/20"
                    >
                        <p className="text-zinc-500 text-sm mb-3">{metric.title}</p>
                        <h3 className="text-3xl font-bold text-green-400">{metric.value}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}