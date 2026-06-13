"use client";

export default function StrategicRoadmap() {
    const roadmap = [
        {
            phase: "Phase 1",
            timeline: "0-3 Months",
            title: "Strengthen AI Foundation",
            description:
                "Improve workforce readiness through AI training programs and identify high-impact automation opportunities.",
        },
        {
            phase: "Phase 2",
            timeline: "3-6 Months",
            title: "Scale AI Deployment",
            description:
                "Expand successful AI initiatives across departments and integrate AI into core business processes.",
        },
        {
            phase: "Phase 3",
            timeline: "6-12 Months",
            title: "Optimize & Innovate",
            description:
                "Leverage advanced analytics and AI-driven decision making to maximize ROI and create competitive advantages.",
        },
    ];

    return (
        <section
            className="
                p-8
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-900/20
            "
        >
            <h2 className="text-2xl font-bold mb-2">
                Strategic Roadmap
            </h2>

            <p className="text-zinc-500 mb-10">
                Recommended implementation journey based on your AI readiness profile.
            </p>

            <div className="space-y-6">

                {roadmap.map((step) => (
                    <div
                        key={step.phase}
                        className="
                            flex
                            gap-6
                            p-6
                            rounded-2xl
                            border
                            border-zinc-800
                            bg-zinc-950/40
                        "
                    >

                        <div
                            className="
                                flex-shrink-0
                                w-14
                                h-14
                                rounded-full
                                bg-green-500
                                text-black
                                font-bold
                                flex
                                items-center
                                justify-center
                            "
                        >
                            {step.phase.replace("Phase ", "")}
                        </div>

                        <div>
                            <p className="text-green-400 text-sm mb-1">
                                {step.timeline}
                            </p>

                            <h3 className="font-semibold text-lg mb-2">
                                {step.title}
                            </h3>

                            <p className="text-zinc-400">
                                {step.description}
                            </p>
                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
}