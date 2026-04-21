"use client";

import Link from "next/link";
import { Grid, Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="bg-[var(--background)] border-t border-[var(--card-border)] pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center group mb-6">
              <img
                src={mounted && theme === "light" ? "/logo-blue.png" : "/logo.png"}
                alt="Grid View"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-[var(--foreground)]/60 leading-relaxed">
              Creative Marketing Solutions That Drive Results. We Think For You. We Grow Your Brand.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "https://www.instagram.com/gridview_/" },
                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61587199061456" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/grid-view-marketing-agency/" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-[var(--card-border)] flex items-center justify-center text-[var(--foreground)]/60 hover:text-blue-400 hover:border-blue-400 transition-all"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[var(--foreground)] font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-[var(--foreground)]/60 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[var(--foreground)] font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {[
                "Branding Design",
                "Digital Marketing",
                "Website Development",
                "Graphic Designing",
                "Video Production",
                "GMB Optimization",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-[var(--foreground)]/60 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[var(--foreground)] font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[var(--foreground)]/60">
                <Mail size={18} className="text-blue-400" />
                <span className="break-all">gridviewmarketingagency@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-[var(--foreground)]/60">
                <Phone size={18} className="text-blue-400" />
                <span>+91 7558040882</span>
              </li>
              <li className="flex items-center gap-3 text-[var(--foreground)]/60">
                <MapPin size={18} className="text-blue-400" />
                <span>Manjeri, Malappuram</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--card-border)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--foreground)]/40 text-sm text-center">
            © {new Date().getFullYear()} GridView Marketing Agency. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-[var(--foreground)]/40">
            <a href="#" className="hover:text-[var(--foreground)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--foreground)] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
