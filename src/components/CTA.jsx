"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600/10 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass p-12 md:p-20 rounded-[3rem] border-white/10"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
            Ready to take your brand to the next level?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Let’s build something amazing together. Reach out today and take the first step toward growing your brand.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-blue-600 text-white font-bold text-xl hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/40"
          >
            Contact Us Today
            <ArrowRight size={24} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
