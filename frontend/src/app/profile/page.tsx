import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import ChatAssistantButton from "@/components/chat/ChatAssistantButton";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileCard from "@/components/profile/ProfileCard";
import ProfileStats from "@/components/profile/ProfileStats";
import AccountInfo from "@/components/profile/AccountInfo";
import AssessmentHistory from "@/components/profile/AssessmentHistory";

export default function ProfilePage() {
    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white">

            <DashboardNavbar />

            <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">

                <ProfileHeader />

                <ProfileCard />

                <ProfileStats />

                <AccountInfo />

                <AssessmentHistory />


            </div>

            <ChatAssistantButton />

        </main>
    );
}