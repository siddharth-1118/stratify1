import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import AssessmentHeader from "@/components/assessment/AssessmentHeader";
import AssessmentForm from "@/components/assessment/AssessmentForm";
import ChatAssistantButton from "@/components/chat/ChatAssistantButton";

export default function AssessmentPage() {
    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white">

            <DashboardNavbar />

            <div className="max-w-5xl mx-auto px-6 py-12">

                <AssessmentHeader />

                <AssessmentForm />

            </div>
            <ChatAssistantButton />
        </main>
    );
}