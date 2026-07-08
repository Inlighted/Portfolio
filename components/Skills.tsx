"use client";

import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { Card } from "@/components/ui/Card";
import { skillCategories } from "@/data/skills";
import {
  Code2,
  Database,
  BrainCircuit,
  Sparkles,
  BarChart3,
  Cloud,
  Users,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Code2,
  Database,
  BrainCircuit,
  Sparkles,
  BarChart3,
  Cloud,
  Users,
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Skills"
        title="A full-stack data toolkit"
        subtitle="From raw ingestion to LLM apps to executive dashboards."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => {
          const Icon = icons[cat.icon] ?? Sparkles;
          return (
            <Reveal key={cat.title} delay={(i % 3) * 0.1}>
              <Card className="group h-full hover:-translate-y-1.5">
                <div
                  className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${cat.accent} p-2.5 text-white shadow-glow-sm`}
                >
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold">
                  {cat.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-soft bg-card px-3 py-1 text-xs text-muted transition-colors group-hover:border-violet-500/30"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
