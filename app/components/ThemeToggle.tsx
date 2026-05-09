"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.92 }}
      className="
        fixed bottom-6 right-6 z-50
        w-13 h-13 rounded-full
        flex items-center justify-center
        border border-white/15
        shadow-xl backdrop-blur-xl
        transition-all duration-300
      "
      style={{
        background: isDark
          ? "radial-gradient(circle, rgba(99,102,241,0.25) 0%, rgba(5,5,16,0.9) 100%)"
          : "radial-gradient(circle, rgba(251,191,36,0.25) 0%, rgba(255,255,255,0.9) 100%)",
        boxShadow: isDark
          ? "0 0 25px rgba(99,102,241,0.4), 0 8px 24px rgba(0,0,0,0.5)"
          : "0 0 25px rgba(251,191,36,0.5), 0 8px 24px rgba(0,0,0,0.2)",
        width: "52px",
        height: "52px",
      }}
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={isDark ? "dark" : "light"}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.25 }}
          className="text-xl"
        >
          {isDark ? "🌙" : "☀️"}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}