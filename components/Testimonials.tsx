"use client";

import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { testimonials } from "@/data/content";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Testimonials"
        title="What clients & students say"
      />
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <figure className="glass gradient-border flex h-full flex-col rounded-2xl p-7 transition-transform hover:-translate-y-1">
              <Quote size={24} className="mb-4 text-violet-400" aria-hidden />
              <blockquote className="flex-1 text-sm leading-relaxed text-muted">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-soft pt-4">
                <p className="font-display text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted">{t.title}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
