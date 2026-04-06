import { motion } from "framer-motion";

const StickyMobileCTA = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden glass-card border-t border-border/50 p-3"
    >
      <button
        onClick={scrollToForm}
        className="w-full gradient-cta text-primary-foreground font-bold py-3.5 rounded-xl text-base shadow-cta transition-all"
      >
        Get My Free Bids →
      </button>
    </motion.div>
  );
};

export default StickyMobileCTA;
