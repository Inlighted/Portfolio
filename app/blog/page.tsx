import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { blogPosts } from "@/data/content";
import { Clock, PenLine } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on AI, machine learning, GenAI, MLOps and data engineering.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pb-24 pt-32">
      <SectionHeading
        eyebrow="Blog"
        title="Notes from the field"
        subtitle="Practical lessons from shipping AI, ML and data systems. Full articles coming soon — these are previews."
      />
      <div className="space-y-5">
        {blogPosts.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.06}>
            <article className="glass gradient-border rounded-2xl p-7 transition-transform hover:-translate-y-1">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="rounded-full bg-cyan-500/10 px-3 py-1 font-semibold text-cyan-300">
                  {p.tag}
                </span>
                <span className="inline-flex items-center gap-1 text-muted">
                  <Clock size={12} /> {p.readTime}
                </span>
                <span className="inline-flex items-center gap-1 text-muted">
                  <PenLine size={12} /> Draft preview
                </span>
              </div>
              <h2 className="mt-3 font-display text-xl font-semibold">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.excerpt}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
