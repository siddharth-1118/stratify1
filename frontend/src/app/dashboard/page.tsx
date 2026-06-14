import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import WelcomeSection from "@/components/dashboard/WelcomeSection";
import QuickActions from "@/components/dashboard/QuickActions";
import EmptyState from "@/components/dashboard/EmptyState";
import StatsGrid from "@/components/dashboard/StatsGrid";
import ChatAssistantButton from "@/components/chat/ChatAssistantButton";

export default function DashboardPage() {
    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white">

            <DashboardNavbar />

            <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">

                <WelcomeSection />
                <StatsGrid />

                <QuickActions />

                <EmptyState />

            </div>
            <ChatAssistantButton />
        </main>
    );
}