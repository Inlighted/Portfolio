"use client";

import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { Card } from "@/components/ui/Card";
import { certifications, dataCamp } from "@/data/content";
import { Award, Flame, BookOpenCheck } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Certifications & Learning"
        title="Always leveling up"
        subtitle="Professional certifications plus a serious DataCamp learning streak."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.1}>
            <Card className="flex items-center gap-4 hover:-translate-y-1">
              <span className="inline-flex rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 p-3 text-white shadow-glow-sm">
                <Award size={22} />
              </span>
              <div>
                <h3 className="font-display font-semibold">{c.name}</h3>
                <p className="text-sm text-muted">{c.issuer}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mt-8">
        <div className="glass gradient-border rounded-2xl p-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center md:border-r md:border-soft">
              <Flame className="mx-auto mb-2 text-amber-400" size={26} />
              <div className="gradient-text font-display text-4xl font-bold">
                <Counter to={dataCamp.xp} />
              </div>
              <p className="mt-1 text-sm text-muted">DataCamp XP</p>
            </div>
            <div className="text-center md:border-r md:border-soft">
              <BookOpenCheck className="mx-auto mb-2 text-cyan-300" size={26} />
              <div className="gradient-text font-display text-4xl font-bold">
                <Counter to={dataCamp.coursesCompleted} />
              </div>
              <p className="mt-1 text-sm text-muted">Courses completed</p>
            </div>
            <div className="text-center">
              <Award className="mx-auto mb-2 text-violet-400" size={26} />
              <div className="gradient-text font-display text-4xl font-bold">
                <Counter to={certifications.length} />
              </div>
              <p className="mt-1 text-sm text-muted">Professional certifications</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {dataCamp.highlightedCourses.map((c) => (
              <span key={c} className="rounded-full border border-soft bg-card px-3 py-1.5 text-xs text-muted">
                {c}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
