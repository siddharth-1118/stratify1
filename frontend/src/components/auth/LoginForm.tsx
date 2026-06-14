"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiPost } from "@/lib/api";
import { Eye, EyeOff } from "lucide-react";

export default function LoginForm() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    const handleLogin = async () => {
        setError("");
        setLoading(true);
        try {
            const data = await apiPost("/auth/login", { email, password });
            localStorage.setItem("token", data.access_token);
            router.push("/dashboard");
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">

            {/* Error Message */}
            {error && (
                <div className="bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 rounded-xl text-sm">
                    {error}
                </div>
            )}

            {/* Email */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-zinc-950 focus:outline-none focus:border-green-500 transition-colors"
                />
            </div>

            {/* Password */}
            <div>
                <label
                    htmlFor="password"
                    className="block text-sm font-medium mb-2"
                >
                    Password
                </label>

                <div className="relative">

                   <input
    id="password"
    type={showPassword ? "text" : "password"}
    placeholder="Enter your password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="
        w-full
        px-4
        py-3
        pr-12
        rounded-xl
        border
        border-zinc-700
        bg-zinc-950
        focus:outline-none
        focus:border-green-500
        transition-colors
    "
/>

                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-zinc-400
                hover:text-green-400
                transition-colors
            "
                    >
                        {showPassword ? (
                            <EyeOff size={18} />
                        ) : (
                            <Eye size={18} />
                        )}
                    </button>

                </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
                <button type="button" className="text-sm text-zinc-400 hover:text-green-400 transition-colors">
                    Forgot Password?
                </button>
            </div>

            {/* Login Button */}
            <button
                type="button"
                onClick={handleLogin}
                disabled={loading}
                className="w-full bg-green-500 text-black py-3 rounded-xl font-semibold hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? "Logging in..." : "Login"}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4">
                <div className="h-px bg-zinc-800 flex-1" />
                <span className="text-zinc-500 text-sm">OR</span>
                <div className="h-px bg-zinc-800 flex-1" />
            </div>

            {/* Signup Link */}
            <p className="text-center text-zinc-400">
                Don't have an account?{" "}
                <Link href="/signup" className="text-green-400 hover:text-green-300">
                    Sign Up
                </Link>
            </p>

        </div>
    );
}