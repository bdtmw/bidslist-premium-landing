import { useState } from "react";
import { motion } from "framer-motion";

interface LeadFormProps {
  variant?: "hero" | "section";
}

const LeadForm = ({ variant = "hero" }: LeadFormProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`rounded-2xl p-8 text-center ${variant === "hero" ? "glass-card shadow-form" : "bg-card shadow-card"}`}>
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="font-heading text-2xl font-bold text-foreground mb-2">You're In!</h3>
        <p className="text-muted-foreground">We'll match you with contractors ready to compete for your project. Expect bids within 24 hours.</p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all";
  const selectCls = inputCls;

  return (
    <div
      id={variant === "section" ? "lead-form" : undefined}
      className={`rounded-2xl p-6 md:p-8 ${variant === "hero" ? "glass-card shadow-form animate-float" : "bg-card shadow-card"}`}
    >
      <h3 className="font-heading text-xl font-bold text-foreground mb-1">
        {variant === "hero" ? "Get Your Free Bids" : "Start Getting Bids Now"}
      </h3>
      <p className="text-sm text-muted-foreground mb-5">
        We'll match you with contractors ready to compete for your project
      </p>
      <form onSubmit={handleSubmit} className="space-y-3.5">
        <select className={selectCls} required defaultValue="">
          <option value="" disabled>Project Type</option>
          <option>Kitchen Remodel</option>
          <option>Bathroom Remodel</option>
          <option>General Renovation</option>
          <option>Roofing</option>
          <option>Other</option>
        </select>
        <select className={selectCls} required defaultValue="">
          <option value="" disabled>Estimated Budget</option>
          <option>Under $10,000</option>
          <option>$10,000 – $25,000</option>
          <option>$25,000 – $50,000</option>
          <option>$50,000+</option>
        </select>
        <select className={selectCls} required defaultValue="">
          <option value="" disabled>Timeline</option>
          <option>ASAP</option>
          <option>1–3 Months</option>
          <option>Flexible</option>
        </select>
        <input className={inputCls} placeholder="Zip Code" required maxLength={10} />
        <div className="grid grid-cols-2 gap-3">
          <input className={inputCls} placeholder="First Name" required maxLength={50} />
          <input className={inputCls} placeholder="Last Name" required maxLength={50} />
        </div>
        <input className={inputCls} type="tel" placeholder="Phone" required maxLength={20} />
        <input className={inputCls} type="email" placeholder="Email" required maxLength={100} />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full gradient-cta text-primary-foreground font-bold py-3.5 rounded-xl text-base shadow-cta hover:shadow-cta-hover transition-shadow duration-300"
        >
          Get My Bids →
        </motion.button>
      </form>
    </div>
  );
};

export default LeadForm;
