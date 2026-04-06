import { motion } from "framer-motion";
import { ShieldCheck, Lock, UserCheck } from "lucide-react";

const items = [
  { icon: UserCheck, text: "You are never required to hire anyone" },
  { icon: ShieldCheck, text: "Only verified contractors can submit bids" },
  { icon: Lock, text: "Your information is secure and private" },
];

const TrustSection = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12"
      >
        No Pressure. <span className="text-gradient-brand">No Obligation.</span>
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-8 justify-center max-w-3xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={item.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
              <item.icon className="w-7 h-7 text-brand-blue" />
            </div>
            <p className="text-sm text-foreground font-medium max-w-[200px]">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
