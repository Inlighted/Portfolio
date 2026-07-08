import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-soft">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <Link href="/" className="font-display text-lg font-bold">
          <span className="gradient-text">{profile.firstName}</span>
          <span className="text-cyan-300">.dev</span>
        </Link>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-5 text-sm text-muted">
            <li><Link href="/#projects" className="hover:text-current">Projects</Link></li>
            <li><Link href="/#services" className="hover:text-current">Services</Link></li>
            <li><Link href="/tutoring" className="hover:text-current">Tutoring</Link></li>
            <li><Link href="/blog" className="hover:text-current">Blog</Link></li>
            <li><Link href="/#contact" className="hover:text-current">Contact</Link></li>
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="glass flex h-9 w-9 items-center justify-center rounded-full text-muted hover:text-current">
            <Github size={16} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="glass flex h-9 w-9 items-center justify-center rounded-full text-muted hover:text-current">
            <Linkedin size={16} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="glass flex h-9 w-9 items-center justify-center rounded-full text-muted hover:text-current">
            <Mail size={16} />
          </a>
        </div>
      </div>
      <p className="pb-8 text-center text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js, Tailwind
        CSS &amp; Framer Motion <Heart size={11} className="inline text-rose-400" aria-hidden />
      </p>
    </footer>
  );
}
