import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


export default function ContactPage() {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_mdvk7w9",
        "template_mwc3b85",
        {
          from_name: form.name,
          to_name: "Dinesh",
          from_email: form.email,
          to_email: "dineshrathnasiri017@gmail.com",
          message: form.message,
        },
        "6c2RdbrexBIYBNQhg"
      );
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("Ahh, something went wrong. Please try again.");
    }
  };

  return (
    <div className="mt-2 ">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        {/* Heading */}
        <h2 className="text-md font-bold text-black text-center mb-3">
          Get in Touch
        </h2>
        <p className="text-gray-600 text-center text-xs mb-8">
          Fill out the form below and I’ll get back to you as soon as possible.
        </p>

        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="text-black w-full rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 text-xs px-4 py-2 outline-none transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="text-black w-full rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 text-xs px-4 py-2 outline-none transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Write your message here..."
              className="text-black w-full rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 text-xs px-4 py-2 outline-none transition resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 text-sm py-1 bg-gradient-to-r from-blue-900 via-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
