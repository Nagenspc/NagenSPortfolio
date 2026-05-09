"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Python Mario Game",
    description:
      "A Python-based Mario-Style Game Featuring Character movement , Obstacles , Scoring , and Interactive gameplay Machines.",
    tech: ["Python","Pygame"],
    github: "https://github.com/Nagenspc/Python-Mario-Game",
    demo: "#",
    emoji: "🤖",
    gradient: "from-blue-500 to-cyan-400",
    glow: "rgba(59,130,246,0.25)",
  },
  {
    title: "Carrier Guide Prediction System",
    description:
      "A full-stack carrier guidance system that helps students explore carrier paths,skill recommedations and future opportunites using frontend and backend technologies.",
    tech: ["Java", "Python", "MySQL", "HTML", "CSS","JavaScript"],
    github: "https://github.com/Nagenspc/Carrier-Guide-Prediction-System-",
    demo: "#",
    emoji: "🌍",
    gradient: "from-violet-500 to-purple-400",
    glow: "rgba(139,92,246,0.25)",
  },
  {
    title: "Portfolio Website",
    description:
      "This very portfolio — built with Next.js, Tailwind CSS, and Framer Motion for silky-smooth animations and a premium feel.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    github: "https://github.com/Nagenspc/NagenSPortfolio",
    demo: "https://nagen-s-portfolio.vercel.app/",
    emoji: "✨",
    gradient: "from-pink-500 to-rose-400",
    glow: "rgba(236,72,153,0.25)",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139,92,246,0.1) 0%, transparent 70%), var(--background)" }}
    >
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      {/* BG orbs */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-violet-500/5 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-pink-500/5 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="section-badge mx-auto w-fit mb-4">
            <span>🚀</span> Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-md mx-auto">
            A selection of things I&apos;ve built with passion and precision
          </p>
        </motion.div>

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group glass-card p-6 flex flex-col relative overflow-hidden"
            >
              {/* Card gradient top accent */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity`} />

              {/* Emoji icon */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/5 group-hover:border-slate-300 dark:group-hover:border-white/15 transition-all">
                {project.emoji}
              </div>

              {/* Title */}
              <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 dark:text-slate-400 mb-5 text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-auto pt-4 border-t border-black/5 dark:border-white/5">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors group/link"
                >
                  <FaGithub className="text-base group-hover/link:scale-110 transition-transform" />
                  Source Code
                </a>
                <a
                  href={project.demo}
                  className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group/link ml-auto"
                >
                  Live Demo
                  <FaExternalLinkAlt className="text-xs group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/NagensPC"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 px-8 py-3.5 rounded-xl
              inline-flex items-center gap-2 px-8 py-3.5 rounded-xl
              border border-slate-300 dark:border-white/15 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white
              hover:border-indigo-500/50 hover:bg-indigo-50 dark:hover:bg-indigo-500/10
              transition-all duration-300 font-medium
            "
          >
            <FaGithub />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}