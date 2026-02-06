import { useState } from "react";

const ContactModal = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return; // extra safety

    setSubmitting(true);
    try {
      const res = await fetch("http://localhost:5000/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        alert("Message sent successfully!");
        onClose();
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Please try later.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* blurred backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
        onClick={onClose}
      />

      {/* modal */}
      <div className="relative bg-white rounded-2xl p-8 w-[500px] shadow-xl">
        <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="name"
            placeholder="Name"
            className="border border-[#CFCFE2] p-3 rounded-lg"
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="border border-[#CFCFE2] p-3 rounded-lg"
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            className="border border-[#CFCFE2] p-3 rounded-lg h-32"
            onChange={handleChange}
            required
          />

          <button
            disabled={submitting}
            className={`py-3 rounded-lg text-white cursor-pointer transition
              ${
                submitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#0085F6] hover:opacity-90"
              }
            `}
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
