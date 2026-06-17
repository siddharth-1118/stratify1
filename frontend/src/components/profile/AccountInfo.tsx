"use client";

import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";

interface UserInfo {
    full_name: string;
    email: string;
    created_at: string;
}

export default function AccountInfo() {
    const [user, setUser] = useState<UserInfo | null>(null);

    useEffect(() => {
        apiGet("/auth/me").then(data => setUser(data));
    }, []);

    const formatDate = (dateStr: string) => {
        if (!dateStr) return "—";
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
    };

    return (
        <section className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/20">
            <h2 className="text-2xl font-bold mb-6">Account Information</h2>

            <div className="space-y-5">

                <div className="flex justify-between">
                    <span className="text-zinc-500">Email</span>
                    <span>{user?.email || "Loading..."}</span>
                </div>

                <div className="flex justify-between">
                    <span className="text-zinc-500">Role</span>
                    <span>Business User</span>
                </div>

                <div className="flex justify-between">
                    <span className="text-zinc-500">Member Since</span>
                    <span>{user?.created_at ? formatDate(user.created_at) : "—"}</span>
                </div>

            </div>
        </section>
    );
}