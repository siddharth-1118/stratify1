"use client";

import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";

export default function StatsGrid() {
    const [assessments, setAssessments] = useState<any[]>([]);

    useEffect(() => {
        apiGet("/progress")
            .then(data => setAssessments(data.assessments ?? []))
            .catch(() => {});
    }, []);

    const count = assessments.length;
    const avgSuccess = count > 0
        ? Math.round(assessments.reduce((sum, a) => sum + (a.result?.success_probability ?? 0), 0) / count)
        : null;
    const avgBenchmark = count > 0
        ? Math.round(assessments.reduce((sum, a) => sum + (a.benchmark?.benchmark?.avg_roi ?? 0), 0) / count)
        : null;

    const stats = [
        { title: "Assessments", value: count.toString() },
        { title: "Success Probability", value: avgSuccess !== null ? `${avgSuccess}%` : "--" },
        { title: "Reports Generated", value: count.toString() },
        { title: "Benchmark Score", value: avgBenchmark !== null ? `${avgBenchmark}%` : "--" },
    ];

    return (
        <section className="mb-10">
            <div className="grid md:grid-cols-4 gap-5">
                {stats.map((stat) => (
                    <div
                        key={stat.title}
                        className="p-6 rounded-3xl border border-zinc-800 bg-zinc-900/20"
                    >
                        <p className="text-zinc-500 text-sm mb-3">{stat.title}</p>
                        <h3 className="text-3xl font-bold text-green-400">{stat.value}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}