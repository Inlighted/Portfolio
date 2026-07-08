"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Briefcase,
  GraduationCap,
  BrainCircuit,
  Database,
  Sparkles,
  BarChart3,
} from "lucide-react";
import ParticleField from "@/components/ParticleField";
import TypingText from "@/components/TypingText";
import { ButtonLink } from "@/components/ui/Button";
import { profile } from "@/data/profile";

const floaters = [
  { Icon: BrainCircuit, className: "left-[8%] top-[22%]", delay: 0 },
  { Icon: Database, className: "right-[10%] top-[30%]", delay: 1.2 },
  { Icon: Sparkles, className: "left-[14%] bottom-[18%]", delay: 0.6 },
  { Icon: BarChart3, className: "right-[16%] bottom-[24%]", delay: 1.8 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24"
    >
      {/* animated gradient blobs */}
      <div
        aria-hidden
        className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-violet-600/25 blur-[130px] animate-aurora"
      />
      <div
        aria-hidden
        className="absolute -bottom-48 -right-40 h-[560px] w-[560px] rounded-full bg-cyan-500/20 blur-[130px] animate-aurora [animation-delay:4s]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-slate [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]"
      />
      <ParticleField />

      {/* floating AI icons */}
      {floaters.map(({ Icon, className, delay }, i) => (
        <motion.div
          key={i}
          aria-hidden
          className={`glass absolute hidden rounded-2xl p-3 text-violet-400 md:block ${className}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 + delay * 0.3 }}
        >
          <div className="animate-float" style={{ animationDelay: `${delay}s` }}>
            <Icon size={22} />
          </div>
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* avatar placeholder — drop /public/profile.jpg and swap in next/image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-500 p-[3px] shadow-glow"
        >
          <div className="flex h-full w-full items-center justify-center rounded-full bg-night-900 font-display text-4xl font-bold text-white">
            PD
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="font-display text-4xl font-bold leading-tight sm:text-6xl md:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-4 font-display text-xl font-semibold sm:text-3xl"
        >
          <TypingText phrases={profile.roles} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mx-auto mt-6 max-w-2xl text-muted"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <ButtonLink href={profile.resumeUrl} external>
            <Download size={16} /> Download Resume
          </ButtonLink>
          <ButtonLink href="/#contact" variant="outline">
            <Briefcase size={16} /> Hire Me
          </ButtonLink>
          <ButtonLink href="/tutoring" variant="outline">
            <GraduationCap size={16} /> Book Tutoring Session
          </ButtonLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          {[
            { href: profile.github, Icon: Github, label: "GitHub" },
            { href: profile.linkedin, Icon: Linkedin, label: "LinkedIn" },
            { href: `mailto:${profile.email}`, Icon: Mail, label: "Email" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="glass btn-glow flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:text-current"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
