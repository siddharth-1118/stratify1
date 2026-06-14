"use client";

export default function ExecutiveSummary() {
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
                Executive Summary
            </h2>

            <p className="text-zinc-500 mb-8">
                AI-generated assessment of your organization's current AI readiness and future opportunities.
            </p>

            <div
                className="
                    rounded-2xl
                    border
                    border-zinc-800
                    bg-zinc-950/40
                    p-6
                    space-y-4
                    leading-relaxed
                "
            >
                <p>
                    Your organization demonstrates a moderate level of AI maturity,
                    supported by consistent investments in AI initiatives and a
                    growing deployment footprint across business functions.
                </p>

                <p>
                    Current projections indicate strong revenue growth potential and
                    measurable productivity improvements. However, workforce
                    enablement and automation coverage remain key areas for further
                    development.
                </p>

                <p>
                    Based on benchmark analysis, your organization currently
                    performs above the industry average but remains behind
                    top-performing AI-driven enterprises. Strategic investments in
                    employee training, process automation, and AI governance could
                    significantly improve long-term ROI.
                </p>

                <p>
                    If the recommended roadmap is followed, the organization is
                    expected to strengthen its AI readiness profile and achieve
                    greater business value from future AI initiatives.
                </p>
            </div>
        </section>
    );
}