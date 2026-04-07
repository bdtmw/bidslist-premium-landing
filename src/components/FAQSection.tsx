import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Do I have to hire someone?",
    a: "Absolutely not. There's zero obligation. You're simply collecting competitive bids so you can make the best decision for your project.",
  },
  {
    q: "How fast will I get bids?",
    a: "Most homeowners receive 3–5 bids within the first 24 hours of posting their project.",
  },
  {
    q: "Are contractors vetted?",
    a: "Yes. Only licensed, insured contractors who meet our quality standards can submit bids on BidsList.",
  },
  {
    q: "How much does this cost?",
    a: "Homeowners pay a small fee to receive competitive bids from vetted contractors. It's a fraction of what you'd save by comparing multiple quotes.",
  },
];

const FAQSection = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4 max-w-2xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
      >
        Frequently Asked Questions
      </motion.h2>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="rounded-xl bg-background border border-border px-5 shadow-card"
          >
            <AccordionTrigger className="font-heading font-semibold text-foreground hover:no-underline text-left">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
