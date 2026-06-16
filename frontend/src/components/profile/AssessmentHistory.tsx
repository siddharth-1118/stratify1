"use client";

import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";

export default function AssessmentHistory() {
    const [assessments, setAssessments] = useState<any[]>([]);

    useEffect(() => {
        apiGet("/progress")
            .then(data => setAssessments(data.assessments ?? []))
            .catch(() => {});
    }, []);

    if (assessments.length === 0) {
        return (
            <section className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/20">
                <h2 className="text-2xl font-bold mb-6">Assessment History</h2>
                <p className="text-zinc-500">No assessments yet. Start your first assessment.</p>
            </section>
        );
    }

    return (
        <section className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/20">
            <h2 className="text-2xl font-bold mb-6">Assessment History</h2>

            <div className="space-y-4">
                {assessments.map((assessment, index) => (
                    <div
                        key={assessment.assessment_id}
                        className="p-5 rounded-2xl border border-zinc-800 flex justify-between items-center"
                    >
                        <div>
                            <h3 className="font-semibold">Assessment #{index + 1}</h3>
                            <p className="text-zinc-500 text-sm">
                                {assessment.inputs?.industry} • {assessment.inputs?.country}
                            </p>
                            <p className="text-zinc-600 text-xs mt-1">
                                {new Date(assessment.created_at).toLocaleDateString("en-US", {
                                    month: "short", day: "numeric", year: "numeric"
                                })}
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="text-green-400 font-semibold">
                                {Math.round(assessment.result?.success_probability ?? 0)}%
                            </p>
                            <p className="text-zinc-500 text-sm">Success Probability</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}