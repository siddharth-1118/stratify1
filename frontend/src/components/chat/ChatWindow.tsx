"use client";

import { useState, useEffect } from "react";
import { X, Send } from "lucide-react";
import { apiPostAuth } from "@/lib/api";

interface Message {
    role: "user" | "assistant";
    content: string;
}

interface ChatWindowProps {
    onClose: () => void;
    inputsSoFar?: Record<string, any>;
    report?: Record<string, any>;
}

export default function ChatWindow({ onClose, inputsSoFar = {}, report = {} }: ChatWindowProps) {
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content: "Hi! I'm Stratify AI Assistant. Ask me anything about AI strategy, ROI, or your company's data.",
        },
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [contextData, setContextData] = useState<Record<string, any>>({});

    useEffect(() => {
        if (Object.keys(inputsSoFar).length === 0) {
            const stored = localStorage.getItem("assessmentData");
            if (stored) setContextData(JSON.parse(stored));
        } else {
            setContextData(inputsSoFar);
        }
    }, [inputsSoFar]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage: Message = { role: "user", content: input };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setInput("");
        setLoading(true);

        try {
            const data = await apiPostAuth("/chat", {
                message: input,
                inputs_so_far: contextData,
                report: report,
                history: updatedMessages.slice(1).map((m) => ({
                    role: m.role === "assistant" ? "model" : "user",
                    content: m.content,
                })),
            });
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: data.reply },
            ]);
        } catch (err) {
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: "Something went wrong. Try again." },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-zinc-900 border border-zinc-700 rounded-2xl flex flex-col shadow-2xl shadow-black/50">

            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-700">
                <div>
                    <p className="font-semibold text-white text-sm">Stratify AI Assistant</p>
                    <p className="text-xs text-green-400">Online</p>
                </div>
                <button onClick={onClose} className="text-zinc-400 hover:text-white transition-colors">
                    <X size={18} />
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
                {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed
                            ${msg.role === "user"
                                ? "bg-green-500 text-black"
                                : "bg-zinc-800 text-zinc-100"
                            }`}>
                            {msg.content}
                        </div>
                    </div>
                ))}
                {loading && (
                    <div className="flex justify-start">
                        <div className="bg-zinc-800 px-3 py-2 rounded-xl text-sm text-zinc-400">
                            Thinking...
                        </div>
                    </div>
                )}
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-zinc-700 flex gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Ask anything..."
                    className="flex-1 bg-zinc-800 text-white text-sm px-3 py-2 rounded-xl border border-zinc-700 focus:outline-none focus:border-green-500 transition-colors"
                />
                <button
                    onClick={sendMessage}
                    disabled={loading}
                    className="w-9 h-9 bg-green-500 text-black rounded-xl flex items-center justify-center hover:bg-green-400 transition-colors disabled:opacity-50"
                >
                    <Send size={16} />
                </button>
            </div>

        </div>
    );
}