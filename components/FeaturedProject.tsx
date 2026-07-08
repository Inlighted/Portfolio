"use client";

import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import { ButtonLink } from "@/components/ui/Button";
import {
  featuredProject as project,
  featuredProjectStructure,
  featuredProjectSnippet,
} from "@/data/projects";
import {
  Github,
  ExternalLink,
  FileCode2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function FeaturedProject() {
  return (
    <section id="featured" className="relative overflow-hidden py-24">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[140px]"
      />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Featured Project"
          title={project.title}
          subtitle={project.summary}
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: story */}
          <Reveal>
            <div className="glass gradient-border h-full rounded-2xl p-7">
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                  <Sparkles size={13} /> RAG · Semantic Search · LLMs
                </span>
                {/* Streamlit deployment badge */}
                <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Open in Streamlit">
                  <span className="inline-flex items-center rounded-md bg-[#ff4b4b] px-2.5 py-1 text-[11px] font-bold text-white">
                    ▶ Streamlit App
                  </span>
                </a>
              </div>

              <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-violet-400">
                Key features
              </h3>
              <ul className="mt-3 space-y-2.5">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-cyan-300" />
                    {f}
                  </li>
                ))}
              </ul>

              <h3 className="mt-7 font-display text-sm font-semibold uppercase tracking-widest text-violet-400">
                Tech stack
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span key={t} className="rounded-full border border-soft px-3 py-1 text-xs text-muted">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.github && (
                  <ButtonLink href={project.github} external>
                    <Github size={16} /> GitHub Repository
                  </ButtonLink>
                )}
                {project.demo && (
                  <ButtonLink href={project.demo} external variant="outline">
                    <ExternalLink size={16} /> Live Demo
                  </ButtonLink>
                )}
              </div>
            </div>
          </Reveal>

          {/* Right: code + structure */}
          <div className="flex flex-col gap-6">
            <Reveal delay={0.1}>
              <div className="glass gradient-border overflow-hidden rounded-2xl">
                <div className="flex items-center gap-2 border-b border-soft px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  <span className="ml-3 text-xs text-muted">vector_store.py</span>
                </div>
                <pre className="overflow-x-auto p-5 text-[12.5px] leading-relaxed text-cyan-100/90">
                  <code>{featuredProjectSnippet}</code>
                </pre>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="glass gradient-border rounded-2xl p-6">
                <h3 className="mb-4 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-widest text-violet-400">
                  <FileCode2 size={15} /> Project structure
                </h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 font-mono text-xs text-muted sm:grid-cols-3">
                  {featuredProjectStructure.map((f) => (
                    <span key={f} className="truncate">
                      <span className="text-cyan-300/70">├─ </span>
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Workflow */}
        <Reveal delay={0.15} className="mt-10">
          <div className="glass gradient-border rounded-2xl p-6">
            <h3 className="mb-5 text-center font-display text-sm font-semibold uppercase tracking-widest text-violet-400">
              How it works — architecture & workflow
            </h3>
            <ArchitectureDiagram stages={project.architecture} />
            <p className="mt-5 text-center text-sm text-muted">{project.solution}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
