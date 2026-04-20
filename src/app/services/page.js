"use client";

import { motion } from "framer-motion";
import { 
  Palette, 
  TrendingUp, 
  Globe, 
  Layout, 
  Video, 
  MapPin,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Branding Design",
    icon: Palette,
    color: "from-blue-500 to-cyan-400",
    desc: "We create powerful brand identities that leave a lasting impression.",
    features: ["Logo Design", "Brand Guidelines", "Color Palette & Typography", "Brand Strategy", "Rebranding Solutions"],
    result: "A strong, consistent, and memorable brand identity."
  },
  {
    title: "Digital Marketing",
    icon: TrendingUp,
    color: "from-purple-500 to-pink-400",
    desc: "We promote your brand across digital platforms to reach the right audience.",
    features: ["Search Engine Optimization (SEO)", "Social Media Marketing", "Paid Advertising (Google & Meta Ads)", "Email Marketing", "Analytics & Performance Tracking"],
    result: "More traffic, leads, and conversions."
  },
  {
    title: "Website Development",
    icon: Globe,
    color: "from-blue-600 to-indigo-500",
    desc: "We build responsive, fast, and user-friendly websites.",
    features: ["Custom Website Design", "Front-end & Back-end Development", "E-commerce Solutions", "Mobile Optimization", "Performance Optimization"],
    result: "A professional online presence that converts visitors into customers."
  },
  {
    title: "Graphic Designing",
    icon: Layout,
    color: "from-orange-500 to-yellow-400",
    desc: "We design visuals that communicate your brand effectively.",
    features: ["Posters & Flyers", "Social Media Creatives", "Brochures & Banners", "Ad Creatives"],
    result: "Eye-catching designs that enhance brand visibility."
  },
  {
    title: "Video Production",
    icon: Video,
    color: "from-red-500 to-orange-400",
    desc: "We transform ideas into engaging visual stories.",
    features: ["Video Editing", "Motion Graphics", "Social Media Videos", "Promotional Videos"],
    result: "High-quality videos that capture attention and drive engagement."
  },
  {
    title: "GMB Optimization",
    icon: MapPin,
    color: "from-emerald-500 to-teal-400",
    desc: "We help your business get discovered locally.",
    features: ["Profile Setup & Verification", "Optimization & Updates", "Review Management", "Monthly Posts & Insights"],
    result: "Improved local visibility and customer trust."
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6 mb-24">
        <motion.div {...fadeInUp} className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            We offer complete digital solutions under one roof to help your business grow and succeed. Our approach combines artistic vision with technical precision.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-8 md:p-12 rounded-[3rem] glass border-white/5 hover:border-white/10 transition-all flex flex-col"
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} p-5 mb-8 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform`}>
                <service.icon className="text-white w-full h-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{service.title}</h2>
              <p className="text-gray-400 text-lg mb-8">{service.desc}</p>
              
              <div className="flex-grow">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  What we offer:
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3 mb-10">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-400">
                      <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-white/10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-blue-500 font-bold mb-1 block">The Result</span>
                    <p className="text-white font-medium">{service.result}</p>
                  </div>
                  <Link 
                    href="/contact"
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all group-hover:rotate-45"
                  >
                    <ArrowRight size={24} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 mt-24">
        <div className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Need a custom solution?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            We understand that every business is unique. Let's discuss your specific needs and create a tailored strategy for your success.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-bold text-xl hover:bg-blue-50 transition-all"
          >
            Let's Talk Business
            <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
}
