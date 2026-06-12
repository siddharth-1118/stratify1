"use client";

import { Bot } from "lucide-react";

export default function ChatAssistantButton() {
    return (
        <div className="fixed bottom-6 right-6 z-50 group">

            {/* Tooltip */}
            <div
                className="
                    absolute
                    right-20
                    top-1/2
                    -translate-y-1/2

                    px-3
                    py-2

                    rounded-lg
                    bg-zinc-900
                    border
                    border-zinc-700

                    text-sm
                    text-white
                    whitespace-nowrap

                    opacity-0
                    translate-x-2

                    group-hover:opacity-100
                    group-hover:translate-x-0

                    transition-all
                    duration-300

                    pointer-events-none
                "
            >
                Stratify AI Assistant
            </div>

            {/* Chat Button */}
            <button
                className="
                    w-16
                    h-16

                    rounded-full

                    bg-green-500
                    text-black

                    flex
                    items-center
                    justify-center

                    shadow-lg
                    shadow-green-500/30

                    hover:scale-110
                    hover:shadow-green-500/50

                    transition-all
                    duration-300
                "
                aria-label="Open Stratify AI Assistant"
            >
                <Bot size={28} strokeWidth={2.2} />
            </button>

        </div>
    );
}