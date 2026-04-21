"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import CTA from "@/components/CTA";

const categories = ["All", "Branding", "Social Media", "Websites", "Videos"];

const projects = [
  { title: "Modern Brand Identity", category: "Branding", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" },
  { title: "E-commerce Redesign", category: "Websites", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
  { title: "Tech Startup Campaign", category: "Social Media", image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800&auto=format&fit=crop" },
  { title: "Corporate Promo Video", category: "Videos", image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800&auto=format&fit=crop" },
  { title: "Luxury Real Estate Branding", category: "Branding", image: "https://images.unsplash.com/photo-1454165833767-027ff33027ef?q=80&w=800&auto=format&fit=crop" },
  { title: "Fitness App Interface", category: "Websites", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
            Our <span className="text-gradient">Work</span>
          </h1>
          <p className="text-xl text-[var(--foreground)]/60 leading-relaxed">
            We take pride in delivering creative and impactful projects for our clients. Each project is a testament to our commitment to excellence and growth.
          </p>
        </motion.div>
      </section>

      {/* Filter */}
      <section className="container mx-auto px-6 mb-12">
        <div className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === cat 
                  ? "bg-blue-600 text-white" 
                  : "bg-[var(--foreground)]/5 text-[var(--foreground)]/60 hover:bg-[var(--foreground)]/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group relative rounded-3xl overflow-hidden aspect-square cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">{project.title}</h3>
                <div className="flex items-center gap-2 text-[var(--foreground)] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  View Project <ExternalLink size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
