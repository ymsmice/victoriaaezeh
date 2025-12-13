import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import DeepfakesSection from "@/components/DeepfakesSection";
import PhishingSection from "@/components/PhishingSection";
import PasswordSection from "@/components/PasswordSection";
import SocialMediaSection from "@/components/SocialMediaSection";
import CyberbullyingSection from "@/components/CyberbullyingSection";
import PrivacySection from "@/components/PrivacySection";
import ResourcesSection from "@/components/ResourcesSection";
import QuizSection from "@/components/QuizSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <DeepfakesSection />
        <PhishingSection />
        <PasswordSection />
        <SocialMediaSection />
        <CyberbullyingSection />
        <PrivacySection />
        <ResourcesSection />
        <QuizSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
