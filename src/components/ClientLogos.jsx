"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import ATLogo from "../../public/akbar poster.png";
import Airhind from "../../public/Airhind.jpeg";
import TrackStudio from "../../public/track-studio.jpeg";

const logos = [
  { name: "ATLogo", image: ATLogo, id: 1 },
  { name: "Airhind", image: Airhind, id: 2 },
  { name: "ATLogo", image: TrackStudio, id: 3 },
  // { name: "Logoipsum 4", id: 4 },
  // { name: "Logoipsum 5", id: 5 },
  // { name: "Logoipsum 6", id: 6 },
];

// Duplicate logos for seamless marquee
const doubledLogos = [...logos, ...logos, ...logos];

export default function ClientLogos() {
  return (
    <section className="py-20 bg-[var(--background)]/50 backdrop-blur-sm border-y border-[var(--card-border)] overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[var(--foreground)]/50 text-sm font-medium uppercase tracking-widest"
        >
          Trusted by <span className="text-blue-400">4000+</span> industry leaders worldwide
        </motion.p>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap gap-20 items-center py-4"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {doubledLogos.map((logo, i) => (
            <div
              key={`${logo.id}-${i}`}
              className="flex items-center gap-3 group cursor-pointer opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              {logo.image ? (
                <div className="relative w-32 h-12 flex items-center justify-center">
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    className="object-contain"
                    placeholder="blur"
                  />
                </div>
              ) : (
                <>
                  <div className="w-8 h-8 rounded-lg bg-[var(--foreground)]/10 group-hover:bg-blue-500/20 transition-colors flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-[var(--foreground)]/50 group-hover:border-blue-400 rounded-sm rotate-45" />
                  </div>
                  <span className="text-xl font-bold text-[var(--foreground)]/60 group-hover:text-[var(--foreground)] transition-colors tracking-tighter uppercase">
                    {logo.name}
                  </span>
                </>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
