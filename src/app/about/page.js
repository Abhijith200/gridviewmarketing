"use client";

import { motion } from "framer-motion";
import { Target, Eye, Rocket, CheckCircle2 } from "lucide-react";
import TeamSection from "@/components/TeamSection";
import CTA from "@/components/CTA";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function About() {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 mb-24">
        <motion.div {...fadeInUp} className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
            About <span className="text-gradient">GridView</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-8">
            GridView is a creative marketing agency dedicated to helping brands grow, stand out, and succeed in the digital world. We believe in combining creativity with strategy to deliver meaningful and measurable results.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            From startups to established businesses, we provide tailored solutions that strengthen brand identity, improve online presence, and drive customer engagement.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#080808] py-24 mb-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          <motion.div 
            {...fadeInUp}
            className="p-10 rounded-[2rem] glass border border-white/5"
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8">
              <Target className="text-blue-500" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              To empower businesses with creative and result-driven digital solutions that create lasting impact.
            </p>
          </motion.div>
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="p-10 rounded-[2rem] glass border border-white/5"
          >
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-8">
              <Eye className="text-purple-500" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              To become a trusted partner for brands looking to grow through innovation, design, and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="container mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <motion.h2 
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            What Makes Us Different
          </motion.h2>
          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            We don't just follow trends; we set them. Here is why businesses choose GridView.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Problem Solvers", desc: "We don’t just design — we solve business problems." },
            { title: "Result Focused", desc: "We focus on results, not just visuals or vanity metrics." },
            { title: "Creativity + Analytics", desc: "We blend creativity with deep data analytics." },
            { title: "Long-term Partners", desc: "We build long-term, value-driven client relationships." },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all hover:-translate-y-2 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <CheckCircle2 size={24} className="text-blue-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
