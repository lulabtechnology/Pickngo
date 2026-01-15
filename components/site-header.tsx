"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/content/site";
import { waLink } from "@/lib/links";
import { cn } from "@/lib/utils";

const lineTabs = [
  { label: "ALLERGY FREE LINE", href: "#line-allergy", tone: "allergy" },
  { label: "PREMIUM LINE", href: "#line-premium", tone: "premium" },
  { label: "STANDAR LINE", href: "#line-standard", tone: "standard" },
] as const;

const menuItems = [
  ...lineTabs,
  { label: "Nuestra historia", href: "#historia", tone: "neutral" },
  { label: "Nuestro servicio", href: "#servicio", tone: "neutral" },
  { label: "Contacto", href: "#contacto", tone: "neutral" },
] as const;

function toneDot(tone: (typeof menuItems)[number]["tone"]) {
  if (tone === "allergy") return "bg-allergy";
  if (tone === "premium") return "bg-premium";
  if (tone === "standard") return "bg-standard";
  return "bg-slate-300";
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Close on ESC
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const items = useMemo(() => menuItems, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/85 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3" aria-label="Ir al inicio">
          <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-border bg-white">
            <Image
              src="/brand/logo-pickngo.png"
              alt={`${site.name} logo`}
              fill
              className="object-contain p-1"
              sizes="36px"
              priority
            />
          </div>
          <div className="hidden leading-tight sm:block">
            <div className="text-sm font-extrabold tracking-tight text-ink">{site.name}</div>
            <div className="text-xs text-muted">{site.tagline}</div>
          </div>
        </Link>

        {/* Tabs (estilo mockup) */}
        <nav className="hidden lg:block" aria-label="Líneas de servicio">
          <div className="flex items-center rounded-[999px] bg-tab px-2 py-1 shadow-[0_10px_26px_rgba(2,6,23,0.10)]">
            {lineTabs.map((t) => (
              <a
                key={t.href}
                href={t.href}
                className={cn(
                  "mx-1 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-extrabold",
                  "tracking-[0.14em] text-white/95 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35"
                )}
              >
                <span className={cn("h-1.5 w-1.5 rounded-full", toneDot(t.tone))} aria-hidden="true" />
                {t.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            className="hidden sm:inline-flex"
          >
            WhatsApp
          </ButtonLink>

          <ButtonLink href="#contacto" variant="outline" size="sm" className="hidden md:inline-flex">
            Contacto
          </ButtonLink>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-white shadow-[0_8px_18px_rgba(2,6,23,0.06)] hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/35"
            aria-label="Abrir menú"
            aria-haspopup="dialog"
            aria-expanded={open}
          >
            <Menu className="h-5 w-5 text-ink" />
          </button>
        </div>
      </div>

      {/* Mobile/overlay menu */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60]"
        >
          <button
            className="absolute inset-0 bg-black/40"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
          />

          <div className="absolute right-4 top-4 w-[min(92vw,420px)] rounded-[2rem] border border-border bg-white p-5 shadow-[0_26px_90px_rgba(2,6,23,0.35)]">
            <div className="flex items-center justify-between">
              <div className="text-sm font-extrabold tracking-tight text-ink">Menú</div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-white hover:bg-slate-50"
                aria-label="Cerrar"
              >
                <X className="h-5 w-5 text-ink" />
              </button>
            </div>

            <div className="mt-4 space-y-2">
              {items.map((it) => (
                <a
                  key={it.href}
                  href={it.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl border border-border bg-white px-4 py-3 text-sm font-semibold text-ink hover:bg-slate-50"
                >
                  <span className="inline-flex items-center gap-2">
                    <span className={cn("h-2 w-2 rounded-full", toneDot(it.tone))} aria-hidden="true" />
                    {it.label}
                  </span>
                  <span className="text-muted">›</span>
                </a>
              ))}

              <div className="pt-2">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-2xl bg-brand px-4 py-3 text-sm font-extrabold text-white shadow-[0_12px_30px_rgba(2,6,23,0.18)] hover:bg-brandDark"
                >
                  Escribir por WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-4 text-xs text-muted">
              Consejo: en desktop también tienes tabs directos a las líneas.
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
