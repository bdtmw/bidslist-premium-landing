import { motion } from "framer-motion";

const FinalCTASection = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 gradient-hero-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
        backgroundSize: "32px 32px"
      }} />
      <div className="container mx-auto px-4 text-center relative z-10 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Stop Overpaying for Your Project
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Let contractors compete so you don't have to negotiate blindly
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToForm}
            className="gradient-cta text-primary-foreground font-bold px-12 py-4 rounded-xl text-lg shadow-cta hover:shadow-cta-hover transition-all duration-300"
          >
            Get My Bids →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
