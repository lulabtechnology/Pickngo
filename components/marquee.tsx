import Image from "next/image";
import { cn } from "@/lib/utils";

type Item = { src: string; alt: string; label?: string };

type Props = {
  items: Item[];
  className?: string;
  size?: "sm" | "md" | "lg";
  speed?: "slow" | "normal" | "fast";
  showLabels?: boolean;
};

const sizeMap = {
  sm: { box: "h-16 w-16", pad: "p-2", text: "text-[11px]" },
  md: { box: "h-20 w-20", pad: "p-2.5", text: "text-xs" },
  lg: { box: "h-24 w-24", pad: "p-3", text: "text-xs" },
} as const;

const speedMap = {
  slow: "animate-[marquee_28s_linear_infinite]",
  normal: "animate-[marquee_22s_linear_infinite]",
  fast: "animate-[marquee_16s_linear_infinite]",
} as const;

export default function Marquee({
  items,
  className,
  size = "lg",
  speed = "slow",
  showLabels = false,
}: Props) {
  const doubled = [...items, ...items];
  const s = sizeMap[size];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.35rem] border border-border bg-white/70",
        "shadow-[0_10px_30px_rgba(2,6,23,0.06)]",
        className
      )}
      aria-label="Productos (ruleta horizontal)"
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent" />

      <div
        className={cn(
          "flex w-[200%] gap-4 p-4 motion-reduce:animate-none",
          speedMap[speed],
          "hover:[animation-play-state:paused]"
        )}
      >
        {doubled.map((it, idx) => (
          <div key={`${it.src}-${idx}`} className="shrink-0">
            <div
              className={cn(
                "relative overflow-hidden rounded-2xl border border-border bg-white",
                s.box,
                "shadow-[0_8px_18px_rgba(2,6,23,0.05)]"
              )}
            >
              <Image
                src={it.src}
                alt={it.alt}
                fill
                className={cn("object-contain", s.pad)}
                sizes="96px"
                priority={idx < 8}
              />
            </div>

            {showLabels && (
              <div className={cn("mt-2 max-w-[96px] truncate text-center text-muted", s.text)}>
                {it.label ?? it.alt}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
