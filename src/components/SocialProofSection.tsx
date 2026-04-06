import { motion } from "framer-motion";
import { BarChart3, ShieldCheck, Clock } from "lucide-react";

const items = [
  { icon: BarChart3, title: "Compare Multiple Quotes", desc: "Without chasing contractors yourself" },
  { icon: ShieldCheck, title: "Avoid Overpaying", desc: "See real market pricing from competing bids" },
  { icon: Clock, title: "Choose on Your Terms", desc: "Pick based on price, experience, and timeline" },
];

const SocialProofSection = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Homeowners Are Getting Better Deals with{" "}
          <span className="text-gradient-brand">Competitive Bidding</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Most homeowners receive 3–5 bids within 24 hours
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl bg-background p-7 shadow-card hover:shadow-card-hover transition-shadow duration-300 text-center"
          >
            <div className="w-12 h-12 rounded-xl gradient-cta flex items-center justify-center mx-auto mb-4">
              <item.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
