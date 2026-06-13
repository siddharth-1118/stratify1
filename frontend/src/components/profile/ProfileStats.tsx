export default function ProfileStats() {
    const stats = [
        {
            label: "Assessments",
            value: "12",
        },
        {
            label: "Reports",
            value: "12",
        },
        {
            label: "Avg Success",
            value: "68%",
        },
        {
            label: "Member Since",
            value: "Jun 2026",
        },
    ];

    return (
        <section
            className="
                grid
                md:grid-cols-4
                gap-6
            "
        >
            {stats.map((stat) => (
                <div
                    key={stat.label}
                    className="
                        p-6
                        rounded-3xl
                        border
                        border-zinc-800
                        bg-zinc-900/20
                    "
                >
                    <p className="text-zinc-500 text-sm mb-2">
                        {stat.label}
                    </p>

                    <p className="text-3xl font-bold">
                        {stat.value}
                    </p>
                </div>
            ))}
        </section>
    );
}