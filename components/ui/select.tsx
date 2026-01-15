import * as React from "react";
import { cn } from "@/lib/utils";

export function Select({
  className,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "h-11 w-full appearance-none rounded-2xl border border-border bg-white px-4 text-sm text-ink " +
          "shadow-[0_1px_0_rgba(2,6,23,0.02)] focus:outline-none focus:ring-2 focus:ring-brand/30",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}
