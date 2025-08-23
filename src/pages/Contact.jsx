import ContactForm from "../components/contactForm";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-3xl animate-fadeIn space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
      >
        <h2 className="text-4xl font-bold text-emerald-700">
          Let's Create Something Together.
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto">
          Have a project in mind? Let us know what you're envisioning — we're ready to help bring
          it to life on fabric.
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="bg-gray-50 rounded-lg shadow p-6"
      >
        <ContactForm />
      </motion.div>

      {/* Email Contact Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="text-center space-y-2"
      >
        <p className="text-sm text-gray-600">
          You'll hear back from me within 24 hours. Let's make it happen.
        </p>
      </motion.div>
    </section>
  );
}
