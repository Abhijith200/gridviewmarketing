"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-[120px] h-[32px]" />;

  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-3">
      {/* <span className={`text-sm font-bold transition-colors ${!isDark ? "text-slate-900" : "text-slate-400"}`}>
        Light
      </span> */}

      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="relative w-[70px] h-[32px] rounded-full bg-blue-400/90 flex items-center px-1 overflow-hidden cursor-pointer"
        aria-label="Toggle Theme"
      >
        {/* Animated Background Elements (Bubbles/Stars) */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1 pointer-events-none">
          <div className="w-2 h-2 rounded-full bg-white opacity-90" />
          <div className="w-1 h-1 rounded-full bg-white opacity-70 mt-2" />
        </div>

        <motion.div
          className="w-6 h-6 rounded-full bg-white shadow-sm z-10"
          animate={{
            x: isDark ? 38 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        />
      </button>

      {/* <span className={`text-sm font-bold transition-colors ${isDark ? "text-slate-200" : "text-slate-400"}`}>
      </span> */}
    </div>
  );
}
