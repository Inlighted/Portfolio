"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

/** Simple animated flow diagram built from ordered stage labels. */
export default function ArchitectureDiagram({ stages }: { stages: string[] }) {
  return (
    <div
      className="flex flex-col items-stretch gap-2 md:flex-row md:items-center md:gap-1"
      role="img"
      aria-label={`Architecture flow: ${stages.join(" to ")}`}
    >
      {stages.map((s, i) => (
        <div key={s} className="flex flex-col items-center gap-2 md:flex-1 md:flex-row md:gap-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass w-full rounded-xl border-violet-500/20 px-3 py-2.5 text-center text-[11px] font-medium leading-tight md:flex-1"
          >
            {s}
          </motion.div>
          {i < stages.length - 1 && (
            <>
              <ArrowRight size={14} className="hidden shrink-0 text-cyan-300 md:block" aria-hidden />
              <ArrowDown size={14} className="shrink-0 text-cyan-300 md:hidden" aria-hidden />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
