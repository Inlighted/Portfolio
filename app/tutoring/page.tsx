import type { Metadata } from "next";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import {
  GraduationCap,
  CheckCircle2,
  CalendarClock,
  Video,
  MailCheck,
  BellRing,
  Globe2,
  LayoutDashboard,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Python & Database Tutor — $3/30 min",
  description:
    "One-on-one mentoring in SQL, Python, Pandas, NumPy, Machine Learning, Data Engineering, Power BI and interview preparation. $3/30 min.",
};

const topics = [
  "SQL (queries, joins, window functions, optimization)",
  "Python fundamentals to advanced",
  "Pandas & NumPy for data analysis",
  "Machine Learning foundations",
  "Interview Preparation (mock interviews)",
  "Data Engineering (Azure, Spark, pipelines)",
  "Power BI dashboards & DAX",
];

const bookingFlow = [
  {
    Icon: CalendarClock,
    title: "Pick a time",
    desc: "See my live calendar availability and choose a slot in your own time zone.",
  },
  {
    Icon: Video,
    title: "Google Meet auto-created",
    desc: "A Google Calendar event with a Meet link is generated the moment you book.",
  },
  {
    Icon: MailCheck,
    title: "Instant confirmation",
    desc: "You get an email confirmation with the session details and Meet link.",
  },
  {
    Icon: BellRing,
    title: "Automatic reminders",
    desc: "Reminder emails before the session so you never miss it.",
  },
];

export default function TutoringPage() {
  return (
    <div className="pb-24 pt-32">
      <section className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Tutoring"
          title="Python & Database Tutor"
          subtitle="One-on-one mentoring, tailored to your goals — from first query to job offer."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="glass gradient-border h-full rounded-2xl p-8">
              <div className="flex items-center justify-between">
                <span className="inline-flex rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 p-3 text-white shadow-glow-sm">
                  <GraduationCap size={24} />
                </span>
                <div className="text-right">
                  <p className="gradient-text font-display text-4xl font-bold">$3</p>
                  <p className="text-xs text-muted">per 30 minutes</p>
                </div>
              </div>
              <h2 className="mt-6 font-display text-xl font-semibold">
                What we can work on
              </h2>
              <ul className="mt-4 space-y-2.5">
                {topics.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm text-muted">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-cyan-300" />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-start gap-2.5 rounded-xl bg-violet-500/10 p-4 text-sm text-muted">
                <Sparkles size={16} className="mt-0.5 shrink-0 text-violet-400" />
                Every session ends with a personalized practice plan, and you keep
                all notes, code and recordings.
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-xs text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Globe2 size={14} className="text-cyan-300" /> Time-zone aware booking
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <LayoutDashboard size={14} className="text-violet-400" /> Student dashboard: manage bookings from your Calendly confirmation email
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass gradient-border h-full rounded-2xl p-4 sm:p-6">
              <h2 className="mb-2 px-2 font-display text-xl font-semibold">
                Book a session
              </h2>
              <p className="mb-4 px-2 text-sm text-muted">
                Booking is powered by Calendly, synced to Google Calendar with an
                automatic Google Meet link.
              </p>
              <CalendlyEmbed />
            </div>
          </Reveal>
        </div>

        <div className="mt-14">
          <h2 className="mb-8 text-center font-display text-2xl font-semibold">
            How booking works
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {bookingFlow.map(({ Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="glass gradient-border h-full rounded-2xl p-6 text-center">
                  <span className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 p-3 text-white shadow-glow-sm">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-display font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-muted">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted">
            Prefer email first?
          </p>
          <div className="mt-4">
            <ButtonLink href="/#contact" variant="outline">
              Ask a question
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
