import { AssessmentReport } from "@/types/report";

interface Props {
    data: AssessmentReport;
}

export default function MetricsGrid({ data }: Props) {
    const metrics = [
        {
            title: "Cost Savings",
            value: `$${data.metrics.costSavings.toLocaleString()}`,
        },
        {
            title: "Revenue Impact",
            value: `$${data.metrics.revenueImpact.toLocaleString()}`,
        },
        {
            title: "Productivity Gain",
            value: `${data.metrics.productivityGain}%`,
        },
        {
            title: "ROI",
            value: `${data.metrics.roi}%`,
        },
        {
            title: "Automation Rate",
            value: `${data.metrics.automationRate}%`,
        },
        {
            title: "AI Adoption",
            value: `${data.metrics.aiAdoptionLevel}%`,
        },
    ];

    return (
        <section>
            <div className="grid md:grid-cols-3 gap-5">

                {metrics.map((metric) => (
                    <div
                        key={metric.title}
                        className="
                            p-6
                            rounded-3xl
                            border
                            border-zinc-800
                            bg-zinc-900/20
                        "
                    >
                        <p className="text-zinc-500 text-sm mb-3">
                            {metric.title}
                        </p>

                        <h3 className="text-3xl font-bold text-green-400">
                            {metric.value}
                        </h3>
                    </div>
                ))}

            </div>
        </section>
    );
}