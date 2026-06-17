"use client";

interface Props {
    data: any;
}

export default function StrategicRoadmap({ data }: Props) {
    const roadmapData = data?.roadmap;

    const phases = roadmapData ? [
        {
            phase: "Phase 1",
            timeline: "0-3 Months",
            title: roadmapData.phase_1?.title || "Foundation and Quick Wins",
            description: roadmapData.phase_1?.objective || "",
            actions: roadmapData.phase_1?.actions || [],
            outcome: roadmapData.phase_1?.expected_outcome || "",
        },
        {
            phase: "Phase 2",
            timeline: "3-6 Months",
            title: roadmapData.phase_2?.title || "Scaling",
            description: roadmapData.phase_2?.objective || "",
            actions: roadmapData.phase_2?.actions || [],
            outcome: roadmapData.phase_2?.expected_outcome || "",
        },
        {
            phase: "Phase 3",
            timeline: "6-12 Months",
            title: roadmapData.phase_3?.title || "Optimization",
            description: roadmapData.phase_3?.objective || "",
            actions: roadmapData.phase_3?.actions || [],
            outcome: roadmapData.phase_3?.expected_outcome || "",
        },
    ] : [
        {
            phase: "Phase 1",
            timeline: "0-3 Months",
            title: "Strengthen AI Foundation",
            description: "Improve workforce readiness through AI training programs and identify high-impact automation opportunities.",
            actions: [],
            outcome: "",
        },
        {
            phase: "Phase 2",
            timeline: "3-6 Months",
            title: "Scale AI Deployment",
            description: "Expand successful AI initiatives across departments and integrate AI into core business processes.",
            actions: [],
            outcome: "",
        },
        {
            phase: "Phase 3",
            timeline: "6-12 Months",
            title: "Optimize & Innovate",
            description: "Leverage advanced analytics and AI-driven decision making to maximize ROI and create competitive advantages.",
            actions: [],
            outcome: "",
        },
    ];

    return (
        <section className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/20">
            <h2 className="text-2xl font-bold mb-2">Strategic Roadmap</h2>
            <p className="text-zinc-500 mb-10">
                Recommended implementation journey based on your AI readiness profile.
            </p>

            <div className="space-y-6">
                {phases.map((step) => (
                    <div key={step.phase} className="flex gap-6 p-6 rounded-2xl border border-zinc-800 bg-zinc-950/40">

                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-green-500 text-black font-bold flex items-center justify-center">
                            {step.phase.replace("Phase ", "")}
                        </div>

                        <div className="flex-1">
                            <p className="text-green-400 text-sm mb-1">{step.timeline}</p>
                            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                            <p className="text-zinc-400 mb-3">{step.description}</p>

                            {step.actions.length > 0 && (
                                <ul className="space-y-1 mb-3">
                                    {step.actions.map((action: string, i: number) => (
                                        <li key={i} className="text-zinc-300 text-sm flex gap-2">
                                            <span className="text-green-500">•</span>
                                            {action}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {step.outcome && (
                                <p className="text-zinc-500 text-sm italic">
                                    Expected: {step.outcome}
                                </p>
                            )}
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}