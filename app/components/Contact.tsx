import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactMe = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send(
      'service_mbm2lta',
      'template_wiitp57',
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      'akdTUBwNOp4KUOKkn'
    ).then(() => {
      alert('✅ Message sent!');
      setForm({ name: '', email: '', message: '' });
    }).catch((error) => {
      console.error('❌ Failed to send message:', error);
      alert('Failed to send message. Try again later.');
    });
  };

  return (
    <div className="relative z-10 h-[600px] p-6 flex flex-col rounded-3xl">
      {/* Top-left title */}
      <div className="flex items-center bg-amber-100 px-4 py-2 rounded-2xl border-2 border-amber-300 w-fit mb-4">
        <span className="text-3xl mr-2">☕</span>
        <h1 className="text-3xl font-bold text-amber-800 tracking-wide">Contact Me</h1>
      </div>

      {/* Form centered in remaining space */}
      <div className="flex flex-1 items-center justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-5 text-amber-900">
          <label className="flex flex-col text-lg font-semibold">
            Name 🧙‍♂️
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 p-3 rounded-xl border-2 border-amber-300 bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
              required
            />
          </label>

          <label className="flex flex-col text-lg font-semibold">
            Email 📬
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 p-3 rounded-xl border-2 border-yellow-300 bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
              required
            />
          </label>

          <label className="flex flex-col text-lg font-semibold">
            Message 🗨️
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="mt-1 p-3 rounded-xl border-2 border-amber-300 bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
              required
            ></textarea>
          </label>

          <button
            type="submit"
            className="w-full bg-amber-700 text-white py-3 rounded-full hover:bg-amber-800 transition-all duration-300 font-bold text-lg flex items-center justify-center gap-2 shadow-[3px_3px_0_0_#78350f]"
          >
            ✉️ Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
