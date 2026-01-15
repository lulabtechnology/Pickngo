import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type CommonProps = {
  variant?: "solid" | "outline" | "ghost";
  size?: "lg" | "md" | "sm";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 ring-offset-white " +
  "disabled:pointer-events-none disabled:opacity-50";

const variants: Record<NonNullable<CommonProps["variant"]>, string> = {
  solid:
    "bg-brand text-white shadow-softer hover:bg-brandDark active:translate-y-[1px]",
  outline:
    "border border-border bg-white text-ink hover:bg-slate-50 active:translate-y-[1px]",
  ghost: "text-ink hover:bg-slate-100 active:translate-y-[1px]",
};

const sizes: Record<NonNullable<CommonProps["size"]>, string> = {
  lg: "h-12 px-6 text-base",
  md: "h-10 px-4 text-sm",
  sm: "h-9 px-3 text-sm",
};

export function Button({
  className,
  variant = "solid",
  size = "md",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & CommonProps) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

export function ButtonLink({
  href,
  className,
  variant = "solid",
  size = "md",
  children,
  ...props
}: React.ComponentProps<typeof Link> & CommonProps) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Link>
  );
}
