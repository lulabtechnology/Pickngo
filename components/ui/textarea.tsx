import * as React from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-[120px] w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink shadow-[0_1px_0_rgba(2,6,23,0.02)] " +
          "placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/30",
        className
      )}
      {...props}
    />
  );
}
