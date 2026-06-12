"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/login");
        }
    }, []);

    return (
        <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center gap-6">
            <h1 className="text-4xl font-bold text-green-400">Welcome to Stratify</h1>
            <p className="text-zinc-400">You are logged in successfully.</p>
            <button
                onClick={() => {
                    localStorage.removeItem("token");
                    router.push("/login");
                }}
                className="bg-red-500 text-white px-6 py-2 rounded-xl hover:bg-red-600 transition"
            >
                Logout
            </button>
        </div>
    );
}