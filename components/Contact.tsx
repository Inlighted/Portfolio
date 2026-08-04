"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { Button, ButtonLink } from "@/components/ui/Button";
import { profile } from "@/data/profile";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Download,
  Send,
  Loader2,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

const inputCls =
  "w-full rounded-xl border border-soft bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-violet-500/60";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const configured =
    !!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
    !!process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
    !!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;
    if (!configured) {
      // Graceful fallback until EmailJS keys are added: open the mail client.
      const data = new FormData(formRef.current);
      const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("from_name")}`);
      const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("from_name")} (${data.get("reply_to")})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }
    setStatus("sending");
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      setStatus("sent");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 h-[380px] w-[680px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[140px]"
      />
      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          subtitle="Have a project, role or tutoring question? My inbox is open."
        />
        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="glass gradient-border h-full rounded-2xl p-7">
              <h3 className="font-display text-lg font-semibold">Get in touch</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-muted transition-colors hover:text-current">
                    <Mail size={17} className="text-violet-400" /> {profile.email}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-muted">
                  <MapPin size={17} className="text-cyan-300" /> {profile.location}
                </li>
                <li>
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted transition-colors hover:text-current">
                    <Github size={17} className="text-violet-400" /> github.com/{profile.githubUsername}
                  </a>
                </li>
                <li>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted transition-colors hover:text-current">
                    <Linkedin size={17} className="text-cyan-300" /> LinkedIn
                  </a>
                </li>
              </ul>
              <div className="mt-8">
                <ButtonLink href={profile.resumeUrl} external variant="outline" className="w-full">
                  <Download size={16} /> Download Resume
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass gradient-border rounded-2xl p-7"
              aria-label="Contact form"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="from_name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">
                    Name
                  </label>
                  <input id="from_name" name="from_name" required placeholder="Your name" className={inputCls} suppressHydrationWarning />
                </div>
                <div>
                  <label htmlFor="reply_to" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">
                    Email
                  </label>
                  <input id="reply_to" name="reply_to" type="email" required placeholder="you@company.com" className={inputCls} suppressHydrationWarning />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">
                  Message
                </label>
                <textarea id="message" name="message" required rows={5} placeholder="Tell me about your project, role or question…" className={inputCls} />
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Button type="submit" disabled={status === "sending"} suppressHydrationWarning>
                  {status === "sending" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send message
                    </>
                  )}
                </Button>
                {status === "sent" && (
                  <span className="inline-flex items-center gap-1.5 text-sm text-emerald-400" role="status">
                    <CheckCircle2 size={16} /> Message sent — I&apos;ll reply soon.
                  </span>
                )}
                {status === "error" && (
                  <span className="inline-flex items-center gap-1.5 text-sm text-rose-400" role="alert">
                    <AlertTriangle size={16} /> Send failed. Email me directly instead.
                  </span>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
