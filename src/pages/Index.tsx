import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FormSection from "@/components/FormSection";
import ComparisonSection from "@/components/ComparisonSection";
import TrustSection from "@/components/TrustSection";
import UrgencySection from "@/components/UrgencySection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <SocialProofSection />
    <HowItWorksSection />
    <FormSection />
    <ComparisonSection />
    <TrustSection />
    <UrgencySection />
    <FAQSection />
    <FinalCTASection />
    <StickyMobileCTA />
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} BidsList. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
);

export default Index;
