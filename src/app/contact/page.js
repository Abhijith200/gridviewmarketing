"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin, Loader2, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const services = [
    "Branding Design",
    "Digital Marketing",
    "Website Development",
    "Graphic Designing",
    "Video Production",
    "GMB Optimization"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      // Using Web3Forms for easy email handling
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", // User needs to replace this
          from_name: "GridView Website Contact",
          subject: `New Project Inquiry: ${formData.service}`,
          ...formData
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
            Let’s Work <span className="text-gradient">Together</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Have a project in mind? We’d love to hear from you. Reach out today and take the first step toward growing your brand.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email Us", value: "gridviewmarketingagency@gmail.com", href: "mailto:gridviewmarketingagency@gmail.com" },
                { icon: Phone, label: "Call Us", value: "+91 7558040882", href: "tel:+917558040882" },
                { icon: MapPin, label: "Visit Us", value: "Manjeri, Malappuram", href: "#" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-start gap-6 p-6 rounded-2xl glass border-white/5 hover:border-blue-500/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-widest block mb-1">{item.label}</span>
                    <span className="text-lg text-white font-medium group-hover:text-blue-400 transition-colors">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">Follow Our Journey</h3>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-14 h-14 rounded-full glass flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400 transition-all"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-12 rounded-[3rem] glass border-white/5 relative overflow-hidden"
        >
          {status.success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
            >
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center">
                <CheckCircle2 size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thank you for reaching out. We'll get back to you shortly.</p>
              </div>
              <button
                onClick={() => setStatus({ ...status, success: false })}
                className="text-blue-400 font-bold hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 ml-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 0000000000"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 ml-1">Select Service</label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-black">Choose a service</option>
                    {services.map(service => (
                      <option key={service} value={service} className="bg-black">{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 ml-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              {status.error && (
                <p className="text-red-500 text-sm font-medium ml-1">{status.error}</p>
              )}

              <button
                type="submit"
                disabled={status.loading}
                className="w-full py-5 rounded-2xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.loading ? (
                  <>
                    Sending...
                    <Loader2 size={20} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </section>

      <section className="container mx-auto px-6 mt-24 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Let’s create something amazing together.</h2>
        <p className="text-gray-400">Reach out today and take the first step toward growing your brand.</p>
      </section>
    </div>
  );
}
