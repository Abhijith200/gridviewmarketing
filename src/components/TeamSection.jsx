"use client";

import { motion } from "framer-motion";
import { Linkedin, Facebook, Instagram } from "lucide-react";

const team = [
  {
    name: "Indrajith V",
    role: "CEO & Founder",
    image: "/ceo-jithu.jpeg",
    social: { linkedin: "https://www.linkedin.com/in/indrajith-verengal-551016393/", facebook: "https://www.facebook.com/profile.php?id=61557835264128", instagram: "https://www.instagram.com/_indrajith_jithu/" }
  },
  {
    name: "John Constantine",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
    social: { linkedin: "#", facebook: "", instagram: "#" }
  },
  {
    name: "Emily Johnson",
    role: "Head of Product Development",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    social: { linkedin: "#", facebook: "#", instagram: "#" }
  }
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-[var(--background)] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4"
          >
            Our <span className="text-blue-500">Extraordinary</span> Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[var(--foreground)]/60 max-w-2xl mx-auto"
          >
            Meet the creative minds behind GridView Marketing. We are a diverse team of experts dedicated to your success.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-[2.5rem] bg-[var(--foreground)]/[0.03] border border-[var(--card-border)] hover:border-blue-500/20 hover:bg-[var(--foreground)]/[0.05] transition-all duration-500 text-center"
            >
              {/* Profile Image with Ring */}
              <div className="relative w-40 h-40 mx-auto mb-8">
                <div className="absolute inset-0 rounded-full border-2 border-[var(--card-border)] group-hover:border-blue-500/50 transition-colors duration-500" />
                <div className="absolute inset-2 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name & Role */}
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">{member.name}</h3>
              <p className="text-[var(--foreground)]/60 font-medium mb-8">{member.role}</p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4">
                {[
                  { icon: Linkedin, href: member.social.linkedin },
                  { icon: Facebook, href: member.social.facebook },
                  { icon: Instagram, href: member.social.instagram }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="w-12 h-12 rounded-2xl bg-[var(--foreground)]/[0.05] border border-[var(--card-border)] flex items-center justify-center text-[var(--foreground)]/60 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
