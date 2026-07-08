"use client";

import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { blogPosts } from "@/data/content";
import { ArrowUpRight, Clock } from "lucide-react";

export default function Blog() {
  return (
    <section id="blog" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Blog"
        title="Writing about AI & data"
        subtitle="Lessons from building production ML, GenAI and data platforms."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {blogPosts.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 4) * 0.08}>
            <Link
              href="/blog"
              className="glass gradient-border group flex h-full flex-col rounded-2xl p-6 transition-transform hover:-translate-y-1.5"
            >
              <span className="mb-3 inline-block w-fit rounded-full bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold text-cyan-300">
                {p.tag}
              </span>
              <h3 className="font-display text-base font-semibold leading-snug group-hover:text-cyan-300">
                {p.title}
              </h3>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-muted">{p.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-muted">
                <span className="inline-flex items-center gap-1">
                  <Clock size={12} /> {p.readTime}
                </span>
                <ArrowUpRight size={15} className="text-violet-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
