"use client";

import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { otherProjects } from "@/data/projects";
import { Github, ExternalLink, ArrowUpRight, Layers } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Freelance Projects"
        title="Selected work"
        subtitle="Production ML, GenAI and data platforms — presented as independent freelance engagements."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {otherProjects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.1}>
            <article className="glass gradient-border group flex h-full flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1.5">
              {/* thumbnail */}
              <Link
                href={`/projects/${p.slug}`}
                className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${p.accent} bg-opacity-20`}
                aria-label={`${p.title} details`}
              >
                <div className="absolute inset-0 bg-night-950/55 transition-opacity group-hover:opacity-40" />
                <Layers
                  size={54}
                  className="relative text-white/85 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                />
                <ArrowUpRight
                  size={20}
                  className="absolute right-4 top-4 text-white/70 opacity-0 transition-opacity group-hover:opacity-100"
                />
              </Link>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold leading-snug">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 5).map((t) => (
                    <span key={t} className="rounded-full border border-soft px-2.5 py-0.5 text-[11px] text-muted">
                      {t}
                    </span>
                  ))}
                  {p.stack.length > 5 && (
                    <span className="rounded-full border border-soft px-2.5 py-0.5 text-[11px] text-muted">
                      +{p.stack.length - 5}
                    </span>
                  )}
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <ButtonLink
                    href={`/projects/${p.slug}`}
                    variant="outline"
                    className="px-4 py-2 text-xs"
                  >
                    Case Study <ArrowUpRight size={14} />
                  </ButtonLink>
                  {p.github && (
                    <ButtonLink href={p.github} external variant="ghost" className="px-3 py-2 text-xs">
                      <Github size={14} /> GitHub
                    </ButtonLink>
                  )}
                  {p.demo && (
                    <ButtonLink href={p.demo} external variant="ghost" className="px-3 py-2 text-xs">
                      <ExternalLink size={14} /> Live Demo
                    </ButtonLink>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
