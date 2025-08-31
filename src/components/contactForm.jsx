import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", apparel: "", quantity: 0, ownArtwork: "", specialNotes: "", deadline: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const API_URL = "https://1nbp3s8fn9.execute-api.us-east-1.amazonaws.com/contact";
  const API_KEY = "NiGnTQHvA8z4WxlMPeL7g7eU52Z6PP1l";

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
    <div className=" bg-white text-black shadow rounded p-4 px-4 md:px-8 lg:px-16">
      {/* <h2 className="text-2xl font-bold mb-4 p-4">Contact Us</h2> */}
      <form onSubmit={handleSubmit} className="mx-auto max-w-6xl grid gap-4 md:grid-cols-2">
          <div className="space-y-4">
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
              name="apparel"
              placeholder="Type of Apparel You're Interested In"
              rows="4"
              value={form.apparel}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
            <div>
              <label className="block mb-1 font-medium">Quantity:</label>
              <input
                type="number"
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                min={0}
                step={1}
                required
              />
            </div>
          </div>
          <div className="space-y-4">
            

            <div>
              <label className="block mb-1 font-medium">Do you have your own artwork?</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="ownArtwork"
                    value="Yes"
                    checked={form.ownArtwork === 'Yes'}
                    onChange={handleChange}
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="ownArtwork"
                    value="No"
                    checked={form.ownArtwork === 'No'}
                    onChange={handleChange}
                  />
                  No
                </label>
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium">Any special notes or requests?</label>
              <textarea
                name="specialNotes"
                value={form.specialNotes}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                rows={4}
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Preferred deadline or event date</label>
              <input
                type="date"
                name="deadline"
                value={form.deadline}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
        </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
        
      </form>
      {success === true && (
        <p className="mt-4 text-green-600">Message sent successfully!  You'll hear back from me within 24 hours. Let's make it happen.</p>
      )}
      {success === false && (
        <p className="mt-4 text-red-600">Failed to send message. Please try again.</p>
      )}
    </div>
  );
}
