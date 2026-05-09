"use client";

import { motion } from "framer-motion";
import {
  FaGithub, FaLinkedinIn, FaEnvelope, FaHeart,
} from "react-icons/fa";

const links = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: FaGithub, href: "https://github.com/NagensPC", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://linkedin.com/in/NagenNayak", label: "LinkedIn" },
  { icon: FaEnvelope, href: "mailto:nagennayak8@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/5 dark:border-white/5 bg-slate-50 dark:bg-[#030308]">
      {/* Top gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-indigo-400 border-r-violet-400 spin-slow" />
                <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold text-xs">
                  N
                </div>
              </div>
              <span className="font-bold text-slate-900 dark:text-white text-lg tracking-wide">
                Nagen<span className="gradient-text">.</span>
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-500 text-sm leading-relaxed max-w-xs">
              Full-Stack Developer passionate about building beautiful, performant web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-widest uppercase text-slate-500 dark:text-slate-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-slate-600 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-widest uppercase text-slate-500 dark:text-slate-400">
              Connect
            </h4>
            <div className="flex gap-3">
              {socials.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-indigo-500/40 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all"
                  >
                    <Icon className="text-sm" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Nagen Nayak. All rights reserved.
          </p>
          <p className="text-slate-600 text-sm flex items-center gap-1.5">
            Made with <FaHeart className="text-red-500 text-xs animate-pulse" /> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}