"use client";

import { useEffect, useState } from "react";

interface UserInfo {
    full_name: string;
    email: string;
    created_at: string;
}

export default function ProfileStats() {
    const [user, setUser] = useState<UserInfo | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch("http://localhost:8000/auth/me", {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);

    const formatDate = (dateStr: string) => {
        if (!dateStr) return "—";
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
    };

    const stats = [
        { label: "Assessments", value: "0" },
        { label: "Reports", value: "0" },
        { label: "Avg Success", value: "--" },
        { label: "Member Since", value: user?.created_at ? formatDate(user.created_at) : "—" },
    ];

    return (
        <section className="grid md:grid-cols-4 gap-6">
            {stats.map((stat) => (
                <div
                    key={stat.label}
                    className="p-6 rounded-3xl border border-zinc-800 bg-zinc-900/20"
                >
                    <p className="text-zinc-500 text-sm mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                </div>
            ))}
        </section>
    );
}