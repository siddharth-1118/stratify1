"use client";

import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";

export default function ProfileStats() {
    const [user, setUser] = useState<any>(null);
    const [assessments, setAssessments] = useState<any[]>([]);

    useEffect(() => {
        apiGet("/auth/me").then(data => setUser(data)).catch(() => {});
        apiGet("/progress").then(data => setAssessments(data.assessments ?? [])).catch(() => {});
    }, []);

    const formatDate = (dateStr: string) => {
        if (!dateStr) return "—";
        return new Date(dateStr).toLocaleDateString("en-US", { month: "short", year: "numeric" });
    };

    const avgSuccess = assessments.length > 0
        ? Math.round(assessments.reduce((sum, a) => sum + (a.result?.success_probability ?? 0), 0) / assessments.length)
        : null;

    const stats = [
        { label: "Assessments", value: assessments.length.toString() },
        { label: "Reports", value: assessments.length.toString() },
        { label: "Avg Success", value: avgSuccess !== null ? `${avgSuccess}%` : "--" },
        { label: "Member Since", value: user?.created_at ? formatDate(user.created_at) : "—" },
    ];

    return (
        <section className="grid md:grid-cols-4 gap-6">
            {stats.map((stat) => (
                <div key={stat.label} className="p-6 rounded-3xl border border-zinc-800 bg-zinc-900/20">
                    <p className="text-zinc-500 text-sm mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                </div>
            ))}
        </section>
    );
}