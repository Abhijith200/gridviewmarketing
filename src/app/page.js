"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, Zap, Users, Target, ShieldCheck } from "lucide-react";
import GridScene from "@/components/GridScene";
import ClientLogos from "@/components/ClientLogos";
import CTA from "@/components/CTA";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <GridScene />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium backdrop-blur-sm"
          >
            Creative Marketing Excellence
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight"
          >
            We Think For You.<br />
            <span className="text-gradient">We Grow Your Brand.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            GridView is a creative marketing agency helping businesses stand out, scale faster, and turn audiences into loyal customers through strategy, design, and digital innovation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 group shadow-lg shadow-blue-600/20"
            >
              Get Free Consultation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
        >
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-gray-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Trusted Clients Section */}
      <ClientLogos />

      {/* Who We Are Preview */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-blue-500 font-bold mb-4 uppercase tracking-widest text-sm">Who We Are</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Empowering Brands Through Creative Innovation
              </h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                GridView is a full-service creative marketing agency focused on building impactful digital experiences. We combine creativity with data-driven strategies to help brands grow, connect, and succeed in today’s competitive market.
              </p>
              <Link
                href="/about"
                className="text-blue-400 font-bold flex items-center gap-2 hover:text-blue-300 transition-colors group"
              >
                Learn More About Us
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "Successful Projects", value: "200+" },
                { label: "Happy Clients", value: "150+" },
                { label: "Growth Generated", value: "300%" },
                { label: "Expert Members", value: "15+" },
              ].map((stat, i) => (
                <div key={i} className="p-8 rounded-2xl glass border border-white/5 hover:border-blue-500/20 transition-colors">
                  <div className="text-3xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-[#080808]">
        <div className="container mx-auto px-6 text-center mb-16">
          <motion.div {...fadeInUp}>
            <h2 className="text-blue-500 font-bold mb-4 uppercase tracking-widest text-sm">What We Do</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Specialized Services</h3>
          </motion.div>
        </div>
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Branding Design", icon: Target, desc: "We create powerful brand identities that leave a lasting impression." },
            { title: "Digital Marketing", icon: Zap, desc: "Promoting your brand across platforms to reach the right audience." },
            { title: "Website Development", icon: Target, desc: "Building responsive, fast, and user-friendly websites." },
            { title: "Graphic Designing", icon: Star, desc: "Designing visuals that communicate your brand effectively." },
            { title: "Video Production", icon: Target, desc: "Transforming ideas into engaging visual stories." },
            { title: "GMB Optimization", icon: Target, desc: "Helping your business get discovered locally." },
          ].map((service, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl glass hover:bg-white/5 transition-all group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-blue-500" size={30} />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{service.title}</h4>
              <p className="text-gray-400 mb-6">{service.desc}</p>
              <Link href="/services" className="text-sm font-bold text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                Explore More <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="container mx-auto px-6 text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white font-bold border-b-2 border-blue-500 pb-1 hover:text-blue-400 hover:border-blue-400 transition-all"
          >
            Explore All Services <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-black overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div {...fadeInUp} className="flex-1">
              <h2 className="text-blue-500 font-bold mb-4 uppercase tracking-widest text-sm">Why Choose Us</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 text-white">Drive Growth With A Partner You Can Trust</h3>
              <div className="space-y-6">
                {[
                  { title: "Creative + Strategy Driven Approach", icon: Zap },
                  { title: "Result-Oriented Campaigns", icon: Target },
                  { title: "Experienced & Dedicated Team", icon: Users },
                  { title: "End-to-End Digital Solutions", icon: Target },
                  { title: "Focus on Growth & ROI", icon: ShieldCheck },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <CheckCircle2 size={24} />
                    </div>
                    <span className="text-xl text-gray-300 group-hover:text-white transition-colors">{item.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 relative"
            >
              <div className="w-full aspect-square rounded-[3rem] bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 glow-mesh opacity-30" />
                 <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                   className="w-2/3 h-2/3 border-2 border-dashed border-blue-500/30 rounded-full flex items-center justify-center"
                 >
                   <div className="w-3/4 h-3/4 border-2 border-dashed border-purple-500/30 rounded-full" />
                 </motion.div>
                 <img 
                   src="/why-choose-us.jpg" 
                   alt="Data Analysis Illustration" 
                   className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-lighten" 
                 />
                 <img 
                   src="/logo-blue.png" 
                   alt="Grid View Logo" 
                   className="absolute w-1/4 h-auto object-contain opacity-30 bottom-8 right-8 pointer-events-none z-10" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <CTA />
    </div>
  );
}
