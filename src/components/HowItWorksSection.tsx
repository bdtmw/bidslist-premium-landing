import { motion } from "framer-motion";
import { ClipboardList, Users, ThumbsUp } from "lucide-react";

const steps = [
  { icon: ClipboardList, num: "1", title: "Post Your Project", desc: "Tell us what you need — it takes 60 seconds." },
  { icon: Users, num: "2", title: "Contractors Compete", desc: "Licensed pros in your area submit their best bids." },
  { icon: ThumbsUp, num: "3", title: "Choose the Best Option", desc: "Compare bids, reviews, and timelines — then decide." },
];

const HowItWorksSection = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="how-it-works" className="py-20 gradient-section-alt">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-14"
        >
          How <span className="text-gradient-brand">BidsList</span> Works
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="relative w-16 h-16 rounded-2xl gradient-cta flex items-center justify-center mx-auto mb-5">
                <step.icon className="w-7 h-7 text-primary-foreground" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center">
                  {step.num}
                </span>
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToForm}
            className="gradient-cta text-primary-foreground font-bold px-10 py-4 rounded-xl text-base shadow-cta hover:shadow-cta-hover transition-all duration-300"
          >
            Get My Free Bids →
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
