import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now we just log the data; integration with backend/email service can be added later.
    console.log("Contact form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative z-10 py-20 bg-gradient-to-b from-[#020108] to-[#040112] text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-purple-400">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-[#020108]/60 backdrop-blur-xl p-6 rounded-xl border border-purple-500/10">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#040112] border border-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#040112] border border-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#040112] border border-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              required
            />
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6 text-lg">
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-purple-400" size={20} />
              <a href="mailto:aniketdev005@gmail.com" className="hover:underline">aniketdev005@gmail.com</a>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhone className="text-purple-400" size={20} />
              <a href="tel:+919325649006" className="hover:underline">+91 93256 49006</a>
            </div>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-purple-400" size={20} />
              <span>Pune, Wagholi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
