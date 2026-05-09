"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";

const socials = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/NagensPC", color: "#ffffff" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "https://linkedin.com/in/yourusername", color: "#0077b5" },
  { icon: FaEnvelope, label: "Email", href: "mailto:nagennayak8@gmail.com", color: "#6366f1" },
  { icon: FaPhoneAlt, label: "Phone", href: "tel:+918260826598", color: "#22c55e" },
];

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setTimeout(() => setSent(false), 3500);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(99,102,241,0.12) 0%, transparent 70%), var(--background)" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-indigo-500/5 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-violet-500/5 blur-3xl" />

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
            <span>💬</span> Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Let&apos;s <span className="gradient-text">Collaborate</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-md mx-auto">
            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT: FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="form-input"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="form-input"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="form-input"
              />

              <textarea
                placeholder="Tell me about your project..."
                rows={6}
                required
                className="form-input resize-none"
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={sending}
                className="
                  w-full flex items-center justify-center gap-3
                  py-4 rounded-xl font-semibold text-white
                  bg-gradient-to-r from-indigo-500 to-violet-500
                  hover:from-indigo-400 hover:to-violet-400
                  shadow-lg shadow-indigo-500/30
                  hover:shadow-indigo-500/50
                  transition-all duration-300
                  disabled:opacity-70 disabled:cursor-not-allowed
                "
              >
                {sent ? (
                  <>✅ Message Sent!</>
                ) : sending ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-sm" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* RIGHT: SOCIALS + INFO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Reach out anywhere 👋
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                I&apos;m always open to new opportunities, interesting ideas,
                or a friendly chat. I usually respond within 24 hours.
              </p>
            </div>

            {/* Social cards */}
            <div className="grid grid-cols-2 gap-3">
              {socials.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4 }}
                    className="contact-btn"
                    style={{ "--icon-color": s.color } as React.CSSProperties}
                  >
                    <Icon style={{ color: s.color }} />
                    {s.label}
                  </motion.a>
                );
              })}
            </div>

            {/* Availability badge */}
            <div className="glass-card p-4 flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-2xl">
                  ✅
                </div>
                <div className="absolute top-0.5 right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-[#050510]">
                  <div className="absolute inset-0 rounded-full bg-green-400 animate-ping" />
                </div>
              </div>
              <div>
                <div className="text-slate-900 dark:text-white font-semibold text-sm">Available for Projects</div>
                <div className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Open to freelance & full-time roles</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}