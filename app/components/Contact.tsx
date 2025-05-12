/* eslint-disable */

import React, { useState } from 'react';
import emailjs from 'emailjs-com';


const ContactMe = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send(
      'service_mbm2lta',       // e.g. 'gmail'
      'template_wiitp57',      // e.g. 'contact_form'
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      'akdTUBwNOp4KUOKkn'        // found in EmailJS dashboard
    ).then(() => {
      alert('✅ Message sent!');
      setForm({ name: '', email: '', message: '' });
    }).catch((error) => {
      console.error('❌ Failed to send message:', error);
      alert('Failed to send message. Try again later.');
    });
  };

  return (
    <div className="relative z-10 h-[600px] p-6 flex flex-col">
      {/* Top-left title */}
      <div className="flex items-center bg-fuchsia-100 px-4 py-2 rounded-2xl border-2 border-fuchsia-300 w-fit mb-4">
        <span className="text-3xl mr-2">🧁</span>
        <h1 className="text-3xl font-bold text-fuchsia-800">Contact Me</h1>
      </div>

      {/* Form centered in remaining space */}
      <div className="flex flex-1 items-center justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-5 text-purple-900">
          <label className="flex flex-col text-lg font-semibold">
            Name 🧙‍♂️
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 p-3 rounded-xl border-2 border-pink-300 bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
              required
            />
          </label>

          <label className="flex flex-col text-lg font-semibold">
            Email 🐤
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 p-3 rounded-xl border-2 border-yellow-300 bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
              required
            />
          </label>

          <label className="flex flex-col text-lg font-semibold">
            Message 🗨️
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-3 rounded-xl border-2 border-green-300 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              required
            ></textarea>
          </label>

          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-3 rounded-full hover:bg-purple-600 transition-all duration-300 font-bold text-lg flex items-center justify-center gap-2 shadow-[3px_3px_0_0_#6b21a8]"
          >
            ✉️ Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
