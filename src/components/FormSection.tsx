import { motion } from "framer-motion";
import LeadForm from "./LeadForm";

const FormSection = () => (
  <section id="lead-form" className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto"
      >
        <LeadForm variant="section" />
      </motion.div>
    </div>
  </section>
);

export default FormSection;
