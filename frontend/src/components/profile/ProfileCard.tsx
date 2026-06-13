"use client";

import { useEffect, useState } from "react";

export default function ProfileCard() {
    const [user, setUser] = useState<{ full_name: string; email: string } | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch("http://localhost:8000/auth/me", {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);

    const initials = user?.full_name
        .split(" ")
        .map(n => n[0])
        .join("")
        .toUpperCase() || "..";

    return (
        <section className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/20 flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-green-500 text-black flex items-center justify-center text-2xl font-bold">
                {initials}
            </div>
            <div>
                <h2 className="text-2xl font-semibold">
                    {user?.full_name || "Loading..."}
                </h2>
                <p className="text-zinc-500">
                    {user?.email || ""}
                </p>
            </div>
        </section>
    );
}