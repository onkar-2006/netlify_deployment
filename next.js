import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! We will get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>NeuralEdge AI - AI Solutions</title>
        <meta name="description" content="Innovative AI solutions for businesses" />
      </Head>
      <div className="flex flex-col items-center justify-center p-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-4"
        >
          Welcome to NeuralEdge AI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg text-center mb-6 max-w-2xl"
        >
          Innovating businesses with AI-powered solutions. Transform your ideas into reality with cutting-edge artificial intelligence.
        </motion.p>
      </div>
      
      {/* About Section */}
      <section className="mt-12 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg">
          NeuralEdge AI specializes in AI-driven automation, chatbots, and machine learning solutions to help businesses thrive.
        </p>
      </section>

      {/* Services Section */}
      <section className="mt-12 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <ul className="text-lg list-disc list-inside">
          <li>AI Chatbots & Virtual Assistants</li>
          <li>Machine Learning Solutions</li>
          <li>Data Analytics & AI Automation</li>
          <li>AI-powered Web & Mobile Apps</li>
        </ul>
      </section>
      
      {/* Contact Section */}
      <section className="mt-12 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input name="name" type="text" placeholder="Your Name" className="p-2 rounded-md text-black" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Your Email" className="p-2 rounded-md text-black" onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" className="p-2 rounded-md text-black" onChange={handleChange} required></textarea>
          <button type="submit" className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl text-lg">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
