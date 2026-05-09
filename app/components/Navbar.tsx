"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      className={`
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        w-[92%] max-w-6xl
        rounded-2xl
        px-6 py-3
        transition-all duration-500
        ${
          scrolled
            ? "bg-white/90 dark:bg-[rgba(5,5,16,0.85)] backdrop-blur-2xl border border-indigo-200 dark:border-indigo-500/20 shadow-[0_8px_40px_rgba(99,102,241,0.15)]"
            : "bg-white/50 dark:bg-transparent backdrop-blur-md border border-black/5 dark:border-white/5"
        }
      `}
    >
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          whileHover={{ scale: 1.03 }}
        >
          <div className="relative w-10 h-10">
            {/* Spinning ring */}
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-indigo-400 border-r-violet-400 spin-slow" />
            <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
              N
            </div>
          </div>
          <span className="font-bold text-slate-900 dark:text-white tracking-wide text-lg hidden sm:block">
            Nagen<span className="gradient-text">.</span>
          </span>
        </motion.div>

        {/* NAV LINKS (Desktop) */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="
                  relative px-4 py-2 rounded-xl
                  text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white
                  text-sm font-medium
                  transition-all duration-300
                  hover:bg-indigo-50 dark:hover:bg-indigo-500/10
                  group
                "
              >
                {item.name}
                <span
                  className="
                  absolute bottom-1.5 left-1/2 -translate-x-1/2
                  h-[2px] w-0 rounded-full
                  bg-gradient-to-r from-indigo-400 to-violet-400
                  transition-all duration-300
                  group-hover:w-3/4
                "
                />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="
              px-5 py-2 rounded-xl text-sm font-semibold
              bg-gradient-to-r from-indigo-500 to-violet-500
              hover:from-indigo-400 hover:to-violet-400
              text-white transition-all duration-300
              shadow-lg shadow-indigo-500/25
              hover:shadow-indigo-500/40 hover:-translate-y-0.5
            "
          >
            Hire Me ✨
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-slate-900 dark:text-white p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU DRAWER */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden mt-4 pt-4 border-t border-black/10 dark:border-white/10"
        >
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition font-medium"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block mt-2 text-center px-4 py-3 rounded-xl font-semibold bg-gradient-to-r from-indigo-500 to-violet-500 text-white"
              >
                Hire Me ✨
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
