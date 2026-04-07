import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const without = [
  "Call 5–10 contractors manually",
  "Wait days for callbacks",
  "No idea if pricing is fair",
];
const withBids = [
  "Post once, get multiple bids",
  "Contractors compete for your job",
  "Transparent pricing and faster responses",
];

const ComparisonSection = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 gradient-section-alt">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
        >
          Why Use <span className="text-gradient-brand">BidsList</span> Instead of Calling Contractors Yourself?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-card p-7 border border-destructive/20"
          >
            <h3 className="font-heading font-bold text-lg text-foreground mb-5 flex items-center gap-2">
              <X className="w-5 h-5 text-destructive" /> Without BidsList
            </h3>
            <ul className="space-y-3">
              {without.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-card p-7 border border-primary/20 shadow-card"
          >
            <h3 className="font-heading font-bold text-lg text-foreground mb-5 flex items-center gap-2">
              <Check className="w-5 h-5 text-brand-blue" /> With BidsList
            </h3>
            <ul className="space-y-3">
              {withBids.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToForm}
            className="gradient-cta text-primary-foreground font-bold px-10 py-4 rounded-xl text-base shadow-cta hover:shadow-cta-hover transition-all duration-300"
          >
            Get My Bids →
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
