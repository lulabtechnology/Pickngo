"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { waLink } from "@/lib/links";

type Slide = {
  src: string;
  alt: string;
  label: string; // opcional visual
};

const slides: Slide[] = [
  { src: "/images/products/producto-1.png", alt: "Producto 1", label: "01" },
  { src: "/images/products/producto-2.png", alt: "Producto 2", label: "02" },
  { src: "/images/products/producto-3.png", alt: "Producto 3", label: "03" },
  { src: "/images/products/producto-4.png", alt: "Producto 4", label: "04" },
  { src: "/images/products/producto-5.png", alt: "Producto 5", label: "05" }
];

const benefits = [
  { title: "Instalación en tu local", desc: "Coordinamos la colocación y puesta en marcha." },
  { title: "Abastecimiento continuo", desc: "Reposición y control de inventario por línea." },
  { title: "Mantenimiento y soporte", desc: "Operación estable con atención cuando la necesites." },
  { title: "Tres líneas de servicio", desc: "Allergy Free, Premium y Standard." }
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const set = () => setReduced(!!mq.matches);
    set();
    mq.addEventListener?.("change", set);
    return () => mq.removeEventListener?.("change", set);
  }, []);
  return reduced;
}

function HeroCarousel({
  items,
  intervalMs = 2600
}: {
  items: Slide[];
  intervalMs?: number;
}) {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  const total = items.length;

  const go = React.useCallback(
    (next: number) => {
      setIndex((prev) => {
        const n = (next + total) % total;
        return Number.isFinite(n) ? n : prev;
      });
    },
    [total]
  );

  const next = React.useCallback(() => go(index + 1), [go, index]);
  const prev = React.useCallback(() => go(index - 1), [go, index]);

  React.useEffect(() => {
    if (reduced) return;
    if (paused) return;
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, intervalMs);
    return () => window.clearInterval(t);
  }, [paused, reduced, intervalMs, total]);

  return (
    <div
      className="relative overflow-hidden rounded-[2.25rem] border border-white/15 bg-white/5 shadow-[0_18px_50px_rgba(2,6,23,0.22)] backdrop-blur"
      aria-roledescription="carousel"
      aria-label="Productos destacados (carrusel)"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* “Sheen” sutil para que no se vea plano en mobile */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_340px_at_40%_0%,rgba(255,255,255,0.10),transparent_60%)]" />

      <div className="relative aspect-[16/11] w-full sm:aspect-[4/3]">
        {items.map((it, i) => {
          const active = i === index;
          return (
            <div
              key={it.src}
              className={[
                "absolute inset-0 grid place-items-center transition-opacity duration-700 ease-out",
                active ? "opacity-100" : "opacity-0"
              ].join(" ")}
              aria-hidden={!active}
            >
              <div className="relative h-full w-full">
                {/* Label estilo mockup (número) */}
                <div className="absolute left-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-xs font-extrabold text-ink shadow-[0_10px_25px_rgba(2,6,23,0.18)]">
                  {it.label}
                </div>

                {/* Si NO tienes imagen subida aún, verás el ícono roto del navegador.
                   Para evitarlo, sube temporalmente 1 imagen y duplica el archivo con nombres 1..5. */}
                <Image
                  src={it.src}
                  alt={it.alt}
                  fill
                  priority={i === 0}
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className={[
                    "object-contain p-8 sm:p-10",
                    // micro “zoom” cuando entra
                    active && !reduced ? "scale-[1.02] transition-transform duration-700 ease-out" : ""
                  ].join(" ")}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Controles */}
      <div className="flex items-center justify-between gap-3 border-t border-white/12 bg-white/6 px-4 py-3">
        <div className="text-xs font-semibold text-white/80">
          {index + 1} / {total}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            className="h-10 rounded-2xl border border-white/18 bg-white/10 px-4 text-sm font-extrabold text-white hover:bg-white/14 focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-label="Anterior"
          >
            ←
          </button>
          <button
            type="button"
            onClick={next}
            className="h-10 rounded-2xl border border-white/18 bg-white/10 px-4 text-sm font-extrabold text-white hover:bg-white/14 focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-label="Siguiente"
          >
            →
          </button>
        </div>

        <div className="flex items-center gap-1.5" aria-label="Indicadores del carrusel">
          {items.map((_, i) => {
            const active = i === index;
            return (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                className={[
                  "h-2.5 rounded-full transition-all",
                  active ? "w-7 bg-white" : "w-2.5 bg-white/40 hover:bg-white/55"
                ].join(" ")}
                aria-label={`Ir al slide ${i + 1}`}
                aria-current={active ? "true" : "false"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function HeroStrip() {
  const words = ["FRESCO", "FACIL", "RICO", "PRACTICO"];
  const row = Array.from({ length: 10 }).flatMap(() => words);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white/10 px-4 py-2 backdrop-blur">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white/0 via-white/0 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white/0 via-white/0 to-transparent" />
      <div className="flex w-[200%] animate-marquee items-center gap-6 text-[11px] font-extrabold tracking-[0.22em] text-white/90 motion-reduce:animate-none">
        {[...row, ...row].map((w, idx) => (
          <span key={`${w}-${idx}`} className="inline-flex items-center gap-2 whitespace-nowrap">
            <span>{w}</span>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-standard" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-bg">
      <div className="container pb-10 pt-10 md:pb-14 md:pt-14">
        {/* MOBILE-FIRST: primero copy, luego carrusel. En desktop se vuelve 2 columnas */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="text-white">
            <HeroStrip />

            <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight md:text-5xl">
              The easy way for your snack time.
            </h1>

            <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-white/85 md:text-lg">
              Pick’n GO: manejo de máquinas de vending. Instalamos tu máquina en tu local
              y la abastecemos con productos según la línea elegida.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href="#contacto"
                size="lg"
                className="justify-center bg-white text-brand shadow-[0_12px_34px_rgba(2,6,23,0.20)] hover:bg-white/95"
              >
                Quiero una máquina en mi local
              </ButtonLink>

              <ButtonLink
                href="#lineas"
                size="lg"
                className="justify-center border border-white/25 bg-white/0 text-white hover:bg-white/10"
              >
                Ver líneas de servicio
              </ButtonLink>
            </div>

            <div className="mt-4 text-sm text-white/80">
              ¿Prefieres escribir de una vez?{" "}
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
              >
                Abrir WhatsApp
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-full bg-white shadow-[0_10px_30px_rgba(2,6,23,0.20)]">
                <Image
                  src="/brand/logo-pickngo.png"
                  alt="Pick’n GO logo"
                  fill
                  className="object-contain p-3"
                  sizes="80px"
                  priority
                />
              </div>

              <Link
                href="/allergy-free"
                className="group inline-flex items-center gap-3 rounded-full border border-white/18 bg-white/10 px-5 py-3 text-sm font-extrabold text-white backdrop-blur hover:bg-white/12"
                aria-label="Ver lista de productos Allergy Free"
              >
                <span className="inline-flex h-2 w-2 rounded-full bg-allergy" aria-hidden="true" />
                Ver productos Allergy Free
                <span className="text-white/80">→</span>
              </Link>
            </div>
          </div>

          <div className="lg:pt-2">
            <HeroCarousel items={slides} intervalMs={2600} />
            <div className="mt-3 text-center text-xs text-white/70">
              Cambia de producto automáticamente (orden 1→5). Botones para control manual.
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <Card
              key={b.title}
              className="border-white/12 bg-white/8 p-6 text-white shadow-[0_10px_28px_rgba(2,6,23,0.18)] backdrop-blur"
            >
              <div className="text-sm font-extrabold">{b.title}</div>
              <div className="mt-2 text-sm leading-6 text-white/80">{b.desc}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
