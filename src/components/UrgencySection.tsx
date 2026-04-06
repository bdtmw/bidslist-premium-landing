import { motion } from "framer-motion";

const UrgencySection = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 gradient-section-alt">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contractors Are <span className="text-gradient-brand">Actively Looking</span> for New Projects
          </h2>
          <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
            Submit your project today and start receiving bids within hours. The
            sooner you post, the faster contractors can compete for your job.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToForm}
            className="gradient-cta text-primary-foreground font-bold px-10 py-4 rounded-xl text-base shadow-cta hover:shadow-cta-hover transition-all duration-300"
          >
            Get My Bids Now →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default UrgencySection;
