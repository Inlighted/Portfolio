"use client";

import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { Card } from "@/components/ui/Card";
import { profile } from "@/data/profile";
import { MapPin, BadgeCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="About Me"
        title="Turning data into decisions"
        subtitle="AI/ML engineer, data engineer and mentor — building responsible, production-grade AI."
      />
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="space-y-5 lg:col-span-3">
          {profile.about.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="leading-relaxed text-muted">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.35}>
            <div className="flex flex-wrap gap-4 pt-2 text-sm text-muted">
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} className="text-cyan-300" /> {profile.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <BadgeCheck size={15} className="text-violet-400" />
                {profile.workAuthorization}
              </span>
            </div>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 gap-4 self-start lg:col-span-2">
          {profile.highlights.map((h, i) => (
            <Reveal key={h.label} delay={i * 0.1}>
              <Card className="text-center hover:-translate-y-1">
                <div className="gradient-text font-display text-3xl font-bold">
                  <Counter to={h.value} suffix={h.suffix} />
                </div>
                <p className="mt-2 text-xs text-muted">{h.label}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
