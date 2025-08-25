import ContactForm from "../components/contactForm";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-3xl animate-fadeIn space-y-12">
      <head>
       <title>Contact Emerald Screen Printing</title>
       <meta name="description" content="Get in touch with Emerald Screen Printing for quotes, orders, or questions. Contact us today to start your custom t-shirt or promotional product project." />
      </head>
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
          Have a project in mind? Let us know what you're envisioning, we're ready to help bring
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
          You'll hear back from me within 1 - 3 hours. Let's make it happen.
        </p>
        <p className="text-sm text-gray-600">
          Call or Text me at 860-919-8449 
        </p>
      </motion.div>
    </section>
  );
}
