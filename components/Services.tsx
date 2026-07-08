"use client";

import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { services } from "@/data/content";
import {
  Bot,
  BrainCircuit,
  Database,
  Code2,
  BarChart3,
  DatabaseZap,
  MessagesSquare,
  Compass,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Bot,
  BrainCircuit,
  Database,
  Code2,
  BarChart3,
  DatabaseZap,
  MessagesSquare,
  Compass,
};

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Services"
        title="How I can help"
        subtitle="Available for freelance projects, consulting and one-on-one mentoring."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => {
          const Icon = icons[s.icon] ?? Bot;
          return (
            <Reveal key={s.title} delay={(i % 4) * 0.08}>
              <div className="glass gradient-border group h-full rounded-2xl p-6 transition-transform hover:-translate-y-1.5">
                <span className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 p-2.5 text-white shadow-glow-sm transition-transform group-hover:scale-110">
                  <Icon size={19} />
                </span>
                <h3 className="font-display font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
