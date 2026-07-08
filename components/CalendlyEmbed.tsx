"use client";

import { useEffect, useRef, useState } from "react";
import { CalendarClock } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

/**
 * Calendly inline embed.
 * Set NEXT_PUBLIC_CALENDLY_URL to your event link. Connect Google Calendar
 * inside Calendly (Settings → Calendar Connections) and set the event
 * location to "Google Meet" — Calendly then auto-creates the Meet link,
 * calendar invite, confirmation email and reminder emails, all time-zone aware.
 */
export default function CalendlyEmbed() {
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL;
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!url) return;
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setLoaded(true);
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [url]);

  if (!url) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-soft p-8 text-center">
        <CalendarClock size={32} className="text-violet-400" />
        <p className="max-w-sm text-sm text-muted">
          Calendly isn&apos;t configured yet. Add your booking link as
          <code className="mx-1 rounded bg-card px-1.5 py-0.5 text-xs">NEXT_PUBLIC_CALENDLY_URL</code>
          and this becomes a live scheduler.
        </p>
        <ButtonLink href="/#contact" variant="outline">
          Contact me to schedule
        </ButtonLink>
      </div>
    );
  }

  return (
    <div className="relative">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-violet-500 border-t-transparent" />
        </div>
      )}
      <div
        ref={ref}
        className="calendly-inline-widget rounded-xl"
        data-url={`${url}?hide_gdpr_banner=1&background_color=0b0e1d&text_color=eaeefa&primary_color=8b5cf6`}
        style={{ minWidth: "300px", height: "680px" }}
      />
    </div>
  );
}
