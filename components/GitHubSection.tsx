"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { ButtonLink } from "@/components/ui/Button";
import { profile } from "@/data/profile";
import { Github, Star, GitFork, BookMarked, ExternalLink } from "lucide-react";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  fork: boolean;
  pushed_at: string;
};

const langColor: Record<string, string> = {
  Python: "#3572A5",
  "Jupyter Notebook": "#DA5B0B",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  SQL: "#e38c00",
};

export default function GitHubSection() {
  const username =
    process.env.NEXT_PUBLIC_GITHUB_USERNAME || profile.githubUsername;
  const [repos, setRepos] = useState<Repo[]>([]);
  const [stats, setStats] = useState({ repos: 0, stars: 0, languages: 0 });
  const [status, setStatus] = useState<"loading" | "ok" | "error">("loading");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=pushed&per_page=100`
        );
        if (!res.ok) throw new Error(String(res.status));
        const data: Repo[] = await res.json();
        if (cancelled) return;
        const own = data.filter((r) => !r.fork);
        const langs = new Set(own.map((r) => r.language).filter(Boolean));
        setStats({
          repos: own.length,
          stars: own.reduce((s, r) => s + r.stargazers_count, 0),
          languages: langs.size,
        });
        setRepos(
          [...own]
            .sort(
              (a, b) =>
                b.stargazers_count - a.stargazers_count ||
                +new Date(b.pushed_at) - +new Date(a.pushed_at)
            )
            .slice(0, 6)
        );
        setStatus("ok");
      } catch {
        if (!cancelled) setStatus("error");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [username]);

  return (
    <section id="github" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Open Source"
        title="GitHub activity"
        subtitle={`Live data from github.com/${username}`}
      />

      {status === "ok" && (
        <Reveal>
          <div className="mb-8 grid grid-cols-3 gap-4">
            {[
              { label: "Public repositories", value: stats.repos },
              { label: "Stars earned", value: stats.stars },
              { label: "Languages used", value: stats.languages },
            ].map((s) => (
              <div key={s.label} className="glass gradient-border rounded-2xl p-5 text-center">
                <div className="gradient-text font-display text-3xl font-bold">
                  <Counter to={s.value} />
                </div>
                <p className="mt-1 text-xs text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      )}

      {status === "loading" && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-busy>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="glass h-40 animate-pulse rounded-2xl" />
          ))}
        </div>
      )}

      {status === "error" && (
        <p className="text-center text-muted">
          Couldn&apos;t reach the GitHub API right now — visit the profile
          directly instead.
        </p>
      )}

      {status === "ok" && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((r, i) => (
            <Reveal key={r.id} delay={(i % 3) * 0.08}>
              <a
                href={r.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass gradient-border group flex h-full flex-col rounded-2xl p-5 transition-transform hover:-translate-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <BookMarked size={16} className="text-violet-400" />
                  <span className="truncate font-mono text-sm font-semibold group-hover:text-cyan-300">
                    {r.name}
                  </span>
                  <ExternalLink size={13} className="ml-auto shrink-0 text-muted opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-muted">
                  {r.description || "No description provided."}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted">
                  {r.language && (
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ background: langColor[r.language] || "#8b5cf6" }}
                      />
                      {r.language}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1">
                    <Star size={12} /> {r.stargazers_count}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <GitFork size={12} /> {r.forks_count}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      )}

      {/* contribution graph */}
      <Reveal delay={0.1} className="mt-8">
        <div className="glass gradient-border overflow-x-auto rounded-2xl p-6">
          <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-violet-400">
            Contribution graph
          </h3>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://ghchart.rshah.org/8b5cf6/${username}`}
            alt={`GitHub contribution graph for ${username}`}
            className="min-w-[640px]"
            loading="lazy"
          />
        </div>
      </Reveal>

      <div className="mt-8 text-center">
        <ButtonLink href={profile.github} external variant="outline">
          <Github size={16} /> View full profile
        </ButtonLink>
      </div>
    </section>
  );
}
