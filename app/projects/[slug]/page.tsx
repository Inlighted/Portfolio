import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import Reveal from "@/components/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import {
  Github,
  ExternalLink,
  ArrowLeft,
  Target,
  TrendingUp,
  Wrench,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-4xl px-6 pb-24 pt-32">
      <ButtonLink href="/#projects" variant="ghost" className="mb-8 px-0">
        <ArrowLeft size={16} /> All projects
      </ButtonLink>

      <Reveal>
        <span className="mb-4 inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
          Freelance Project
        </span>
        <h1 className="font-display text-3xl font-bold sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-muted">{project.summary}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.github && (
            <ButtonLink href={project.github} external>
              <Github size={16} /> GitHub
            </ButtonLink>
          )}
          {project.demo && (
            <ButtonLink href={project.demo} external variant="outline">
              <ExternalLink size={16} /> Live Demo
            </ButtonLink>
          )}
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <Reveal>
          <div className="glass gradient-border h-full rounded-2xl p-6">
            <h2 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-widest text-rose-400">
              <Target size={15} /> Problem
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{project.problem}</p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="glass gradient-border h-full rounded-2xl p-6">
            <h2 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-widest text-emerald-400">
              <TrendingUp size={15} /> Business impact
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{project.impact}</p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.05} className="mt-6">
        <div className="glass gradient-border rounded-2xl p-6">
          <h2 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-widest text-violet-400">
            <Wrench size={15} /> Technology stack
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span key={t} className="rounded-full border border-soft px-3 py-1 text-xs text-muted">
                {t}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.05} className="mt-6">
        <div className="glass gradient-border rounded-2xl p-6">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Key features
          </h2>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-muted">
                <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-cyan-300" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <Reveal>
          <div className="glass gradient-border h-full rounded-2xl p-6">
            <h2 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-widest text-amber-400">
              <AlertTriangle size={15} /> Challenges
            </h2>
            <ul className="mt-4 space-y-2.5">
              {project.challenges.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="glass gradient-border h-full rounded-2xl p-6">
            <h2 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-widest text-violet-400">
              <Lightbulb size={15} /> Solution
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{project.solution}</p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.05} className="mt-6">
        <div className="glass gradient-border rounded-2xl p-6">
          <h2 className="mb-5 font-display text-sm font-semibold uppercase tracking-widest text-violet-400">
            Architecture
          </h2>
          <ArchitectureDiagram stages={project.architecture} />
        </div>
      </Reveal>
    </article>
  );
}
