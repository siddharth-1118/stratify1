import { ReactNode } from "react";
import Link from "next/link";

interface AuthLayoutProps {
    title: string;
    subtitle: string;
    children: ReactNode;
}

export default function AuthLayout({
    title,
    subtitle,
    children,
}: AuthLayoutProps) {
    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white">
            <div className="grid lg:grid-cols-2 min-h-screen">

                {/* Left Side */}
                <div className="relative hidden lg:flex flex-col justify-center px-16  bg-[#0A0A0A]">

                    <div className="absolute inset-0 pointer-events-none">

                        <div
                            className="
    absolute
    inset-0
    pointer-events-none
  "
                        >
                            <div
                                className="
      absolute
top-[-700px]
left-[-600px]

      w-[1500px]
      h-[1500px]

      rounded-full

      bg-[radial-gradient(circle,_rgba(34,197,94,0.22)_0%,_rgba(34,197,94,0.12)_30%,_transparent_75%)]

      blur-[120px]
    "
                            />
                        </div>

                        <div
                            className="
        absolute
top-[100px]
left-[50px]

        w-[800px]
        h-[800px]

        rounded-full
        bg-green-500/10
        blur-[120px]
        "
                        />

                    </div>

                    <div className="relative z-10 max-w-xl">
                        <p className="text-green-400 uppercase tracking-[0.25em] text-sm mb-6">
                            Stratify
                        </p>

                        <h1 className="text-5xl font-bold leading-tight mb-6">
                            Your AI Transformation Advisor
                        </h1>

                        <p className="text-zinc-400 text-lg mb-10">
                            Evaluate AI initiatives, benchmark against industry
                            leaders, predict success probability, and generate
                            executive-ready transformation strategies.
                        </p>

                        <div className="space-y-4">

                            <div className="flex items-center gap-3">
                                <span className="text-green-400">✓</span>
                                <span>Predict Business Outcomes</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-green-400">✓</span>
                                <span>Industry Benchmarking</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-green-400">✓</span>
                                <span>Progress Tracking</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-green-400">✓</span>
                                <span>Executive Reports & Roadmaps</span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center justify-center px-6">
                    <Link
                        href="/"
                        className="
                        absolute
                        top-8
                        left-8
                        text-zinc-400
                        hover:text-green-400
                        transition-colors
                        "
                    >
                        ← Back to Home
                    </Link>

                    <div
                        className="
                    w-full
                    max-w-md
                    p-8
                    rounded-3xl
                    border
                    border-zinc-800
                    bg-zinc-900/40
                    backdrop-blur-md
                    "
                    >
                        <p
                            className="
                        text-green-400
                        uppercase
                        tracking-[0.25em]
                        text-sm
                        font-semibold
                        mb-4
                        "
                        >
                            Stratify
                        </p>
                        <h2 className="text-3xl font-bold mb-3">
                            {title}
                        </h2>

                        <p className="text-zinc-400 mb-8">
                            {subtitle}
                        </p>

                        {children}
                    </div>

                </div>

            </div>
        </main>
    );
}