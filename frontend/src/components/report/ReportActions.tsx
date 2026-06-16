"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiGetBlob } from "@/lib/api";

interface ReportActionsProps {
    assessmentId: string | null;
    onTalkToAI: () => void;
}

export default function ReportActions({ assessmentId, onTalkToAI }: ReportActionsProps) {
    const router = useRouter();
    const [downloading, setDownloading] = useState(false);

    const handleDownloadPDF = async () => {
        if (!assessmentId) return;
        setDownloading(true);
        try {
            const blob = await apiGetBlob(`/report/${assessmentId}/pdf`);
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `stratify_report_${assessmentId}.pdf`;
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (err) {
            alert("Failed to download report. Try again.");
        } finally {
            setDownloading(false);
        }
    };

    return (
        <section className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/20">
            <h2 className="text-2xl font-bold mb-6">Next Actions</h2>

            <div className="flex flex-wrap gap-4">

                <button
                    onClick={handleDownloadPDF}
                    disabled={downloading}
                    className="px-6 py-3 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                    {downloading ? (
                        <>
                            <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                            Generating PDF...
                        </>
                    ) : (
                        "Download Report"
                    )}
                </button>

                <button
                    onClick={() => router.push("/assessment")}
                    className="px-6 py-3 rounded-xl border border-zinc-700 hover:border-green-500 transition-colors"
                >
                    Start New Assessment
                </button>

                <button
                    onClick={onTalkToAI}
                    className="px-6 py-3 rounded-xl border border-zinc-700 hover:border-green-500 transition-colors"
                >
                    Talk To Stratify AI
                </button>

            </div>
        </section>
    );
}