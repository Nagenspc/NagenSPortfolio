"use client";

import { motion } from "framer-motion";
import {
  FaJava, FaJs, FaPython, FaReact, FaNodeJs, FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql, SiPostgresql, SiFirebase, SiDjango,
} from "react-icons/si";

const skills = [
  {
    title: "Languages",
    gradient: "from-blue-500 to-cyan-400",
    glow: "rgba(59,130,246,0.4)",
    items: [
      { name: "Java", icon: FaJava, color: "#f89820" },
      { name: "Python", icon: FaPython, color: "#3b7fc4" },
      { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
    ],
  },
  {
    title: "Frontend",
    gradient: "from-violet-500 to-purple-400",
    glow: "rgba(139,92,246,0.4)",
    items: [
      { name: "React", icon: FaReact, color: "#61dafb" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
    ],
  },
  {
    title: "Backend",
    gradient: "from-emerald-500 to-teal-400",
    glow: "rgba(16,185,129,0.4)",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "#68a063" },
      { name: "REST APIs", icon: FaDatabase, color: "#a5b4fc" },
      { name: "Django", icon: SiDjango, color: "#44b78b" },
    ],
  },
  {
    title: "Database",
    gradient: "from-orange-500 to-amber-400",
    glow: "rgba(249,115,22,0.4)",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "MySQL", icon: SiMysql, color: "#00758f" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
    ],
  },
];

export default function TechStack() {
  return (
    <section
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(99,102,241,0.12) 0%, transparent 70%), var(--background)" }}
      id="skills"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="absolute -top-20 left-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute top-1/2 -right-20 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl" />

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
            <span>⚡</span> My Toolkit
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-md mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="glass-card p-6 relative overflow-hidden group"
              style={{
                "--glow-color": skill.glow,
              } as React.CSSProperties}
            >
              {/* Card top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${skill.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />

              {/* Card glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: `inset 0 0 40px rgba(99,102,241,0.05)` }}
              />

              {/* Title */}
              <h3 className={`text-lg font-bold mb-6 flex items-center gap-2 bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent`}>
                ◈ {skill.title}
              </h3>

              {/* Items */}
              <ul className="space-y-3.5">
                {skill.items.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.li
                      key={i}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 group/item cursor-default"
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/5 group-hover/item:border-slate-300 dark:group-hover/item:border-white/20 transition-all flex-shrink-0">
                        <Icon className="text-base" style={{ color: item.color }} />
                      </div>
                      <span className="text-slate-600 dark:text-slate-400 text-sm font-medium group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">
                        {item.name}
                      </span>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Skills ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 overflow-hidden"
        >
          <div className="flex ticker-track gap-8 w-max">
            {[...skills.flatMap(s => s.items), ...skills.flatMap(s => s.items)].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm whitespace-nowrap px-4 py-2 rounded-full border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/[0.02]">
                  <Icon style={{ color: item.color }} />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}