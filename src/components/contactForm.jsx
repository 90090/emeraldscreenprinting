import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const API_URL = "https://838jar0x74.execute-api.us-east-1.amazonaws.com/contact";
  const API_KEY = "zhUPrijdeGUZkwaqqaucIrJip1vHWqIZ";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setSuccess(false);
      }
    } catch (err) {
      console.error(err);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white text-black shadow rounded mt-8">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
      {success === true && (
        <p className="mt-4 text-green-600">Message sent successfully!</p>
      )}
      {success === false && (
        <p className="mt-4 text-red-600">Failed to send message. Please try again.</p>
      )}
    </div>
  );
}
