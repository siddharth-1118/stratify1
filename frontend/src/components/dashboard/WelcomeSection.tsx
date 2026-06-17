"use client";

import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";

export default function WelcomeSection() {
    const [name, setName] = useState("");

    useEffect(() => {
        apiGet("/auth/me")
            .then(data => setName(data.full_name?.split(" ")[0] ?? ""))
            .catch(() => {});
    }, []);

    return (
        <section className="mb-10">
            <p className="text-green-400 uppercase tracking-[0.25em] text-sm mb-3">
                Dashboard
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome Back{name ? `, ${name}` : ""}
            </h1>
            <p className="text-zinc-400 max-w-2xl">
                Track AI transformation progress, review historical assessments, and generate new strategic insights.
            </p>
        </section>
    );
}