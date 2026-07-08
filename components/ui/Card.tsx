import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "glass gradient-border rounded-2xl p-6 transition-transform duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
