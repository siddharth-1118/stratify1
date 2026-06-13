"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SliderInput from "./SliderInput";
import ChatWindow from "@/components/chat/ChatWindow";
import { Bot } from "lucide-react";

export default function AssessmentForm() {

    const [industry, setIndustry] = useState("");
    const [country, setCountry] = useState("");
    const [investment, setInvestment] = useState(1000000);
    const [deploymentCount, setDeploymentCount] = useState(10);
    const [trainingHours, setTrainingHours] = useState(50);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const router = useRouter();

    const [inputsSoFar, setInputsSoFar] = useState({
        industry: "",
        country: "",
        ai_investment_usd: 1000000,
        deployment_count: 10,
        employee_training_hours: 50,
    });

    const industries = [
        "Agriculture", "Education", "Energy", "Financial Services",
        "Healthcare", "Logistics", "Manufacturing", "Retail", "Technology", "Telecom",
    ];
    const countries = [
        "Australia", "Brazil", "Canada", "China", "France", "Germany",
        "India", "Japan", "Netherlands", "Singapore", "South Korea",
        "Sweden", "UAE", "United Kingdom", "United States",
    ];

    return (
        <>
            <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/20 space-y-8">

                <div className="grid md:grid-cols-2 gap-6">

                    {/* Industry */}
                    <div>
                        <label className="block mb-2 font-medium">Industry</label>
                        <div className="relative">
                            <select
                                value={industry}
                                onChange={(e) => {
                                    setIndustry(e.target.value);
                                    setInputsSoFar(prev => ({ ...prev, industry: e.target.value }));
                                }}
                                className="w-full px-4 py-3 pr-12 rounded-xl bg-zinc-950 border border-zinc-700 appearance-none focus:outline-none focus:border-green-500"
                            >
                                <option value="">Select Industry</option>
                                {industries.map((i) => <option key={i} value={i}>{i}</option>)}
                            </select>
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none">▼</span>
                        </div>
                    </div>

                    {/* Country */}
                    <div>
                        <label className="block mb-2 font-medium">Country</label>
                        <div className="relative">
                            <select
                                value={country}
                                onChange={(e) => {
                                    setCountry(e.target.value);
                                    setInputsSoFar(prev => ({ ...prev, country: e.target.value }));
                                }}
                                className="w-full px-4 py-3 pr-12 rounded-xl bg-zinc-950 border border-zinc-700 appearance-none focus:outline-none focus:border-green-500"
                            >
                                <option value="">Select Country</option>
                                {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                            </select>
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none">▼</span>
                        </div>
                    </div>

                </div>

                <div>
                    <label className="block text-lg font-medium mb-1">AI Investment (USD)</label>
                    <p className="text-sm text-zinc-500 mb-4">Annual organizational investment in AI initiatives.</p>
                    <SliderInput
                        label=""
                        value={investment}
                        setValue={(val) => {
                            setInvestment(val);
                            setInputsSoFar(prev => ({ ...prev, ai_investment_usd: val }));
                        }}
                        min={0}
                        max={60000000}
                        step={100000}
                        prefix="$"
                    />
                </div>

                <div>
                    <label className="block text-lg font-medium mb-1">Deployment Count</label>
                    <p className="text-sm text-zinc-500 mb-4">Number of AI systems currently deployed across the organization.</p>
                    <SliderInput
                        label=""
                        value={deploymentCount}
                        setValue={(val) => {
                            setDeploymentCount(val);
                            setInputsSoFar(prev => ({ ...prev, deployment_count: val }));
                        }}
                        min={0}
                        max={80}
                    />
                </div>

                <div>
                    <label className="block text-lg font-medium mb-1">Employee Training Hours</label>
                    <p className="text-sm text-zinc-500 mb-4">Average annual AI training hours invested in workforce readiness.</p>
                    <SliderInput
                        label=""
                        value={trainingHours}
                        setValue={(val) => {
                            setTrainingHours(val);
                            setInputsSoFar(prev => ({ ...prev, employee_training_hours: val }));
                        }}
                        min={0}
                        max={200}
                    />
                </div>

                <button
                    onClick={() => {
                        localStorage.setItem("assessmentData", JSON.stringify(inputsSoFar));
                        router.push("/report");
                    }}
                    className="w-full bg-green-500 text-black py-4 rounded-xl font-semibold hover:scale-[1.01] transition-all"
                >
                    Generate Strategic Assessment
                </button>

            </div>

            {/* Chat Button */}
            <div className="fixed bottom-6 right-6 z-50 group">
                <div className="absolute right-20 top-1/2 -translate-y-1/2 px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-sm text-white whitespace-nowrap opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
                    Stratify AI Assistant
                </div>
                <button
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    className="w-16 h-16 rounded-full bg-green-500 text-black flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-all duration-300"
                >
                    <Bot size={28} strokeWidth={2.2} />
                </button>
            </div>

            {/* Chat Window always mounted */}
            <div className={isChatOpen ? "block" : "hidden"}>
                <ChatWindow
                    onClose={() => setIsChatOpen(false)}
                    inputsSoFar={inputsSoFar}
                    report={{}}
                />
            </div>
        </>
    );
}