import ContactForm from '../components/contactForm';

export default function Contact() {
  return (
    <section className="container mx-auto px-4 py-16 animate-fadeIn">
      <h2 className="text-3xl font-bold text-emerald-700 mb-4">Contact Us</h2>
      <p>
        We’d love to hear from you! If you have any inquiries about screen printing, send them here. Our team is ready to assist you with any questions or requests you may have. 
      </p>
      <ContactForm />
    </section>
  );
}
