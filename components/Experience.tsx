"use client";

import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { experience } from "@/data/content";
import { Briefcase, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've made an impact"
        subtitle="Independent client engagements across finance, security, analytics, real estate — plus Healthcare AI."
      />
      <div className="relative space-y-8 before:absolute before:left-[19px] before:top-2 before:h-full before:w-px before:bg-gradient-to-b before:from-violet-500/60 before:via-blue-500/40 before:to-transparent md:before:left-1/2">
        {experience.map((e, i) => (
          <Reveal key={e.role + e.org} delay={0.05}>
            <div
              className={`relative flex flex-col gap-4 md:w-[calc(50%-2rem)] ${
                i % 2 === 0 ? "md:ml-auto" : ""
              } ml-12 md:ml-0 ${i % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}
            >
              <span
                aria-hidden
                className={`absolute -left-[45px] top-6 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 text-white shadow-glow-sm md:top-6 ${
                  i % 2 === 0 ? "md:-left-[54px]" : "md:-right-[54px] md:left-auto"
                }`}
              >
                <Briefcase size={15} />
              </span>
              <div className="glass gradient-border rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
                <h3 className="font-display text-lg font-semibold">{e.role}</h3>
                <p className="mt-0.5 text-sm font-medium text-cyan-300">{e.org}</p>
                {e.period && <p className="mt-0.5 text-xs text-muted">{e.period}</p>}
                <p className="mt-3 text-sm text-muted">{e.summary}</p>
                <ul className="mt-4 space-y-2">
                  {e.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-[13px] text-muted">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-violet-400" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {e.tags.map((t) => (
                    <span key={t} className="rounded-full bg-violet-500/10 px-2.5 py-0.5 text-[11px] font-medium text-violet-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
