interface Props {
    data: any;
}

export default function StrengthsAndRisks({ data }: Props) {
    const strengths = data?.strengths?.map((s: any) => s.title) ?? [
        "Strong projected revenue growth potential",
        "Above-average AI adoption maturity",
        "Consistent AI investment commitment",
        "Positive productivity improvement forecast",
    ];

    const risks = data?.risks?.map((r: any) => r.title) ?? [
        "Automation remains below top-performing organizations",
        "Workforce AI readiness requires improvement",
        "AI governance maturity is still developing",
        "Scaling deployments may create operational complexity",
    ];

    return (
        <section className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/20">
            <h2 className="text-2xl font-bold mb-2">Strengths & Risks</h2>
            <p className="text-zinc-500 mb-8">
                Key organizational advantages and areas requiring attention.
            </p>

            <div className="grid md:grid-cols-2 gap-6">

                {/* Strengths */}
                <div className="border border-green-500/20 bg-green-500/5 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-green-400 mb-4">Strengths</h3>
                    <div className="space-y-4">
                        {strengths.map((item: string, i: number) => (
                            <div key={i} className="flex gap-3 items-start">
                                <span className="text-green-400 mt-1">✓</span>
                                <div>
                                    <span className="text-zinc-200">{item}</span>
                                    {data?.strengths?.[i]?.explanation && (
                                        <p className="text-zinc-500 text-sm mt-1">{data.strengths[i].explanation}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Risks */}
                <div className="border border-red-500/20 bg-red-500/5 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-red-400 mb-4">Risks</h3>
                    <div className="space-y-4">
                        {risks.map((item: string, i: number) => (
                            <div key={i} className="flex gap-3 items-start">
                                <span className="text-red-400 mt-1">!</span>
                                <div>
                                    <span className="text-zinc-200">{item}</span>
                                    {data?.risks?.[i]?.consequence && (
                                        <p className="text-zinc-500 text-sm mt-1">{data.risks[i].consequence}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}