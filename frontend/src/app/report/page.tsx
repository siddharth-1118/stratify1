import { mockReport } from "@/data/mockReport";

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
import ChatAssistantButton from "@/components/chat/ChatAssistantButton";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";

export default function ReportPage() {
    const data = mockReport;

    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white">
            <DashboardNavbar />

            <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 space-y-10">

                <ExecutiveSnapshot data={data} />
                <ExecutiveSummary />

                <MetricsGrid data={data} />

                <ImpactChart data={data} />

                <ReadinessChart data={data} />

                <BenchmarkSection />
                <StrategicRoadmap />
                <RecommendationsPanel />
                <StrengthsAndOpportunities />
                <ReportActions />

                {/* <StrengthsSection data={data} /> */}

                {/* <RisksSection data={data} /> */}

                {/* <RoadmapSection data={data} /> */}

                {/* <ReportActions /> */}

            </div>
            <ChatAssistantButton />
        </main>
    );
}