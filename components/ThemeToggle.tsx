"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted)
    return <div className="h-10 w-10 rounded-full glass" aria-hidden />;

  const dark = resolvedTheme === "dark";
  return (
    <button
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="glass btn-glow flex h-10 w-10 items-center justify-center rounded-full"
    >
      {dark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
