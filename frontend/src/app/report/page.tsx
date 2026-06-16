"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { apiGet } from "@/lib/api";
import { Bot } from "lucide-react";

import ExecutiveSnapshot from "@/components/report/ExecutiveSnapshot";
import MetricsGrid from "@/components/report/MetricsGrid";
import ReadinessChart from "@/components/report/ReadinessChart";
import ImpactChart from "@/components/report/ImpactChart";
import BenchmarkSection from "@/components/report/BenchmarkSection";
import StrategicRoadmap from "@/components/report/StrategicRoadmap";
import ExecutiveSummary from "@/components/report/ExecutiveSummary";
import RecommendationsPanel from "@/components/report/ImrpovementOpportunities";
import StrengthsAndOpportunities from "@/components/report/StrengthsAndRisks";
import ReportActions from "@/components/report/ReportActions";
import ChatWindow from "@/components/chat/ChatWindow";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";

export default function ReportPage() {
    const [data, setData] = useState<any>(null);
    const [report, setReport] = useState<any>(null);
    const [assessmentId, setAssessmentId] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const id = localStorage.getItem("assessmentId");
        const assessmentResult = localStorage.getItem("assessmentResult");

        if (!id || !assessmentResult) {
            router.push("/assessment");
            return;
        }

        setAssessmentId(id);
        setData(JSON.parse(assessmentResult));

        apiGet(`/report/${id}`)
            .then(res => {
                setReport(res.report);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <main className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center">
                <div className="text-center space-y-4">
                    <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto" />
                    <p className="text-zinc-400">Generating your AI strategy report...</p>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white">
            <DashboardNavbar />

            <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 space-y-10">

                <ExecutiveSnapshot data={data} />
                <ExecutiveSummary data={report} />
                <MetricsGrid data={data} />
                <ImpactChart data={data} />
                <ReadinessChart data={data} />
                <BenchmarkSection data={data} />
                <StrategicRoadmap data={report} />
                <RecommendationsPanel data={report} />
                <StrengthsAndOpportunities data={report} />
                <ReportActions
                    assessmentId={assessmentId}
                    onTalkToAI={() => setIsChatOpen(true)}
                />

            </div>

            {/* Chat Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    className="w-16 h-16 rounded-full bg-green-500 text-black flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-all duration-300"
                    aria-label="Open Stratify AI Assistant"
                >
                    <Bot size={28} strokeWidth={2.2} />
                </button>
            </div>

            {/* Chat Window with full report context */}
            <div className={isChatOpen ? "block" : "hidden"}>
                <ChatWindow
                    onClose={() => setIsChatOpen(false)}
                    inputsSoFar={data?.inputs ?? {}}
                    report={report ?? {}}
                />
            </div>
        </main>
    );
}