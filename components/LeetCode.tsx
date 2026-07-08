"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { leetcode } from "@/data/content";
import { Trophy, Code2 } from "lucide-react";

function Bar({ label, percent, delay }: { label: string; percent: number; delay: number }) {
  return (
    <div>
      <div className="mb-1.5 flex justify-between text-xs">
        <span className="font-medium">{label}</span>
        <span className="text-muted">{percent}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-card">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
        />
      </div>
    </div>
  );
}

export default function LeetCode() {
  return (
    <section id="leetcode" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Problem Solving"
        title="LeetCode achievements"
        subtitle="Consistent algorithmic and SQL practice — sharp fundamentals, interview-ready."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        <Reveal>
          <div className="glass gradient-border flex h-full flex-col items-center justify-center rounded-2xl p-8 text-center">
            <Trophy size={30} className="mb-3 text-amber-400" />
            <div className="gradient-text font-display text-5xl font-bold">
              <Counter to={leetcode.solved} suffix="+" />
            </div>
            <p className="mt-2 text-sm text-muted">Problems solved</p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {leetcode.badges.map((b) => (
                <span key={b} className="rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="glass gradient-border h-full rounded-2xl p-8">
            <h3 className="mb-5 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-widest text-violet-400">
              <Code2 size={15} /> Languages
            </h3>
            <div className="space-y-5">
              {leetcode.languages.map((l, i) => (
                <Bar key={l.name} label={l.name} percent={l.percent} delay={i * 0.15} />
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="glass gradient-border h-full rounded-2xl p-8">
            <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-widest text-violet-400">
              Focus areas
            </h3>
            <div className="space-y-4">
              {leetcode.focusAreas.map((f, i) => (
                <Bar key={f.name} label={f.name} percent={f.percent} delay={i * 0.12} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
