import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import LeadForm from "./LeadForm";
import heroBg from "@/assets/hero-bg.jpg";

const trustItems = [
  "Local Licensed Contractors",
  "Multiple Bids in 24–48 Hours",
  "No Obligation to Hire",
];

const HeroSection = () => {
  const scrollToHowItWorks = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.4rem] leading-tight font-bold text-foreground mb-6">
              Get Contractors{" "}
              <span className="text-gradient-brand">Competing</span> for Your
              Kitchen Remodel
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Post your project once and receive multiple bids from qualified
              local contractors. Compare pricing, timelines, and choose the best
              fit.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={() =>
                  document
                    .getElementById("lead-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="gradient-cta text-primary-foreground font-semibold px-8 py-3.5 rounded-xl text-base shadow-cta hover:shadow-cta-hover transition-all duration-300 hover:scale-105"
              >
                Get My Free Bids →
              </button>
              <button
                onClick={scrollToHowItWorks}
                className="bg-card text-foreground font-semibold px-8 py-3.5 rounded-xl text-base border border-border hover:border-primary/30 transition-all duration-300"
              >
                See How It Works
              </button>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <LeadForm variant="hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
