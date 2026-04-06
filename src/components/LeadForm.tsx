import { useState } from "react";
import { motion } from "framer-motion";

interface LeadFormProps {
  variant?: "hero" | "section";
}

const LeadForm = ({ variant = "hero" }: LeadFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    projectType: "",
    estimatedBudget: "",
    timeline: "",
    zipCode: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://services.leadconnectorhq.com/hooks/suAZp50xNC77tiayOgih/webhook-trigger/6595c9fb-5f3e-457c-8476-d39c7605c606",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
console.log(response)
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Failed to submit form");
      }
    } catch (error) {
      console.error("Webhook error:", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div
        className={`rounded-2xl p-8 text-center ${
          variant === "hero" ? "glass-card shadow-form" : "bg-card shadow-card"
        }`}
      >
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
          You're In!
        </h3>
        <p className="text-muted-foreground">
          We'll match you with contractors ready to compete for your project.
          Expect bids within 24 hours.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all";
  const selectCls = inputCls;

  return (
    <div
      id={variant === "section" ? "lead-form" : undefined}
      className={`rounded-2xl p-6 md:p-8 ${
        variant === "hero"
          ? "glass-card shadow-form animate-float"
          : "bg-card shadow-card"
      }`}
    >
      <h3 className="font-heading text-xl font-bold text-foreground mb-1">
        {variant === "hero" ? "Get Your Free Bids" : "Start Getting Bids Now"}
      </h3>
      <p className="text-sm text-muted-foreground mb-5">
        We'll match you with contractors ready to compete for your project
      </p>

      <form onSubmit={handleSubmit} className="space-y-3.5">
        <select
          className={selectCls}
          required
          value={formData.projectType}
          onChange={(e) =>
            setFormData({ ...formData, projectType: e.target.value })
          }
        >
          <option value="" disabled>
            Project Type
          </option>
          <option>Kitchen Remodel</option>
          <option>Bathroom Remodel</option>
          <option>General Renovation</option>
          <option>Roofing</option>
          <option>Other</option>
        </select>

        <select
          className={selectCls}
          required
          value={formData.estimatedBudget}
          onChange={(e) =>
            setFormData({ ...formData, estimatedBudget: e.target.value })
          }
        >
          <option value="" disabled>
            Estimated Budget
          </option>
          <option>Under $10,000</option>
          <option>$10,000 – $25,000</option>
          <option>$25,000 – $50,000</option>
          <option>$50,000+</option>
        </select>

        <select
          className={selectCls}
          required
          value={formData.timeline}
          onChange={(e) =>
            setFormData({ ...formData, timeline: e.target.value })
          }
        >
          <option value="" disabled>
            Timeline
          </option>
          <option>ASAP</option>
          <option>1–3 Months</option>
          <option>Flexible</option>
        </select>

        <input
          className={inputCls}
          placeholder="Zip Code"
          required
          maxLength={10}
          value={formData.zipCode}
          onChange={(e) =>
            setFormData({ ...formData, zipCode: e.target.value })
          }
        />

        <div className="grid grid-cols-2 gap-3">
          <input
            className={inputCls}
            placeholder="First Name"
            required
            maxLength={50}
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
          <input
            className={inputCls}
            placeholder="Last Name"
            required
            maxLength={50}
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </div>

        <input
          className={inputCls}
          type="tel"
          placeholder="Phone"
          required
          maxLength={20}
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
        />

        <input
          className={inputCls}
          type="email"
          placeholder="Email"
          required
          maxLength={100}
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading}
          className="w-full gradient-cta text-primary-foreground font-bold py-3.5 rounded-xl text-base shadow-cta hover:shadow-cta-hover transition-shadow duration-300 disabled:opacity-70"
        >
          {loading ? "Submitting..." : "Get My Bids →"}
        </motion.button>
      </form>
    </div>
  );
};

export default LeadForm;