"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institute: "Indira Gandhi Institute Of Technology, Sarang",
    year: "2025 – 2027",
    status: "Pursuing",
    details:
      "Focused on software development, data structures, databases, and modern web technologies.",
    emoji: "🎓",
    gradient: "from-indigo-500 to-violet-400",
    side: "left",
  },
  {
    degree: "B.Sc. in Computer Science",
    institute: "Dhenkanal Autonomous College, Dhenkanal",
    year: "2022 – 2025",
    status: "Completed",
    details:
      "Studied core computer science subjects including OOP, algorithms, and computer networks.",
    emoji: "🖥️",
    gradient: "from-blue-500 to-cyan-400",
    side: "right",
  },
  {
    degree: "Intermediate (12th Standard)",
    institute: "Dhenkanal Higher Secondary School",
    year: "2020 – 2022",
    status: "Completed",
    details:
      "Completed higher secondary education with focus on Mathematics, Physics, and Computer Science.",
    emoji: "📚",
    gradient: "from-emerald-500 to-teal-400",
    side: "left",
  },
  {
    degree: "Matriculation (10th Standard)",
    institute: "Panchayat High School, Sanamunda",
    year: "2016 – 2018",
    status: "Completed",
    details:
      "Completed matriculation with a strong academic foundation in core subjects.",
    emoji: "🏫",
    gradient: "from-orange-500 to-amber-400",
    side: "right",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(59,130,246,0.08) 0%, transparent 70%), var(--background)" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="absolute -top-20 right-1/4 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="section-badge mx-auto w-fit mb-4">
            <span>🎓</span> Background
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-md mx-auto">
            The academic journey that shaped my technical skills
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">
          {/* Center gradient line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 hidden md:block"
            style={{ background: "linear-gradient(to bottom, transparent, #6366f1, #8b5cf6, #6366f1, transparent)" }}
          />

          <div className="space-y-16">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: item.side === "left" ? -60 : 60,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: true }}
                className={`relative flex md:${item.side === "left" ? "justify-start" : "justify-end"} justify-center`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-8 -translate-x-1/2 z-10 hidden md:block">
                  <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${item.gradient} shadow-[0_0_20px_rgba(99,102,241,0.7)]`} />
                  <div className="absolute inset-0 rounded-full animate-ping bg-indigo-400/30" />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="w-full md:w-[44%] glass-card p-6 relative overflow-hidden group"
                >
                  {/* Gradient top bar */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />

                  {/* Emoji + Status row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/5 flex items-center justify-center text-2xl">
                      {item.emoji}
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                      item.status === "Pursuing"
                        ? "bg-green-100 dark:bg-green-500/15 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-500/30"
                        : "bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600/30"
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  {/* Degree */}
                  <h3 className={`text-lg font-bold mb-1 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                    {item.degree}
                  </h3>

                  {/* Institute */}
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-2">
                    {item.institute}
                  </p>

                  {/* Year */}
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500 mb-3">
                    📅 {item.year}
                  </span>

                  {/* Details */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-200 dark:border-white/5 pt-3">
                    {item.details}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}