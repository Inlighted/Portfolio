"use client";

import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { education } from "@/data/content";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading eyebrow="Education" title="Academic foundation" />
      <div className="relative space-y-8 border-l border-violet-500/30 pl-8">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 0.1}>
            <div className="relative">
              <span
                aria-hidden
                className="absolute -left-[45px] flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 text-white shadow-glow-sm"
              >
                <GraduationCap size={14} />
              </span>
              <div className="glass gradient-border rounded-2xl p-5 transition-transform hover:-translate-y-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display font-semibold">{e.degree}</h3>
                  <span className="text-xs font-semibold text-cyan-300">{e.year}</span>
                </div>
                <p className="mt-1.5 text-sm text-muted">{e.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
