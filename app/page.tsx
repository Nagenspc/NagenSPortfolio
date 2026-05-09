"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

const roles = [
  "Full-Stack Developer",
  "Java Programmer",
  "React Enthusiast",
  "Problem Solver",
  "Next.js Builder",
];

function TypingText() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else {
      setIsDeleting(false);
      setIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, index]);

  return (
    <span className="text-2xl md:text-3xl font-semibold">
      <span className="gradient-text">{displayed}</span>
      <span className="inline-block w-[2px] h-7 bg-indigo-400 ml-1 align-middle animate-pulse" />
    </span>
  );
}

const stats = [
  { value: "2+", label: "Years Coding" },
  { value: "10+", label: "Projects Built" },
  { value: "8+", label: "Technologies" },
];

export default function Home() {
  return (
    <>
      {/* 🌗 FLOATING THEME TOGGLE */}
      <ThemeToggle />

      {/* 🔝 NAVBAR */}
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.3) 0%, transparent 60%), var(--background)" }}
      >
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl float-anim" style={{ animationDelay: "0s" }} />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 rounded-full bg-violet-500/10 blur-3xl float-anim" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/5 blur-3xl" />

        <div className="relative max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center pt-24 pb-12">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="section-badge mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
              Available for Work
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight tracking-tight">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Nagen</span>
              <br />
              <span className="text-slate-900 dark:text-white">Nayak</span>
            </h1>

            <div className="mb-6">
              <TypingText />
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-lg leading-relaxed">
              Software Developer specializing in full-stack development,
              building modern, scalable and clean web applications that
              delight users and deliver results.
            </p>

            <div className="flex gap-4 flex-wrap mb-12">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="
                  px-8 py-3.5 rounded-xl font-semibold text-white
                  bg-gradient-to-r from-indigo-500 to-violet-500
                  shadow-lg shadow-indigo-500/30
                  hover:shadow-indigo-500/50
                  transition-all duration-300
                  flex items-center gap-2
                "
              >
                View Projects
                <span>→</span>
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="
                  px-8 py-3.5 rounded-xl font-semibold
                  border border-white/15
                  text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white
                  hover:border-indigo-500/50
                  hover:bg-indigo-500/10
                  transition-all duration-300
                  flex items-center gap-2
                "
              >
                Download CV
                <span className="text-xs">↓</span>
              </motion.a>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="text-3xl font-black gradient-text">{s.value}</div>
                  <div className="text-slate-600 dark:text-slate-500 text-sm">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}
            className="flex justify-center relative"
          >
            {/* Outer rings */}
            <div className="absolute w-80 h-80 rounded-full border border-indigo-500/10 animate-spin" style={{ animationDuration: "30s" }} />
            <div className="absolute w-72 h-72 rounded-full border border-violet-500/15" style={{ animation: "spin-slow 20s linear reverse infinite" }} />

            {/* Glowing backdrop */}
            <div className="absolute w-60 h-60 rounded-full bg-indigo-600/20 blur-3xl glow-pulse" />

            {/* Profile image */}
            <div className="relative w-60 h-60 md:w-72 md:h-72">
              <div className="
                absolute inset-0 rounded-full
                bg-gradient-to-br from-indigo-500 via-violet-500 to-pink-500
                p-1
                shadow-[0_0_60px_rgba(99,102,241,0.5)]
              ">
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-900">
                  <Image
                    src="/profile.png"
                    alt="Nagen Nayak - Full Stack Developer"
                    fill
                    className="rounded-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating skill badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white/90 dark:bg-slate-900/90 border border-indigo-200 dark:border-indigo-500/30 rounded-xl px-3 py-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-300 shadow-lg backdrop-blur"
              >
                💻 Next.js
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white/90 dark:bg-slate-900/90 border border-violet-200 dark:border-violet-500/30 rounded-xl px-3 py-1.5 text-xs font-semibold text-violet-600 dark:text-violet-300 shadow-lg backdrop-blur"
              >
                ☕ Java
              </motion.div>
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-10 bg-white/90 dark:bg-slate-900/90 border border-pink-200 dark:border-pink-500/30 rounded-xl px-3 py-1.5 text-xs font-semibold text-pink-600 dark:text-pink-300 shadow-lg backdrop-blur"
              >
                🐍 Python
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-slate-600 dark:text-slate-500 text-xs">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 h-8 rounded-full border border-slate-600 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-indigo-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills">
        <TechStack />
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects">
        <Projects />
      </section>

      {/* ================= EDUCATION ================= */}
      <section id="education">
        <Education />
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact">
        <Contact />
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
}