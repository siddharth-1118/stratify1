import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BackgroundGlow from "../components/BackgroundGlow";
import StatsSection from "../components/StatsSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      <BackgroundGlow />

      <Navbar />

      <Hero />

      <StatsSection />

      <FeaturesSection />
      <Footer />
    </main>
  );
}