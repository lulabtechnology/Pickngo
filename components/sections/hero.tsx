import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { waLink } from "@/lib/links";

const benefits = [
  { title: "Instalación en tu local", desc: "Coordinamos la colocación y puesta en marcha." },
  { title: "Abastecimiento continuo", desc: "Reposición y control de inventario según la línea." },
  { title: "Mantenimiento y soporte", desc: "Operación estable con atención cuando la necesites." },
  { title: "Tres líneas de servicio", desc: "Allergy Free, Premium y Standard." },
];

type CollageItem = {
  src: string;
  alt: string;
  className: string;
  dx: string;
  dy: string;
  delayMs: number;
};

const collage: CollageItem[] = [
  {
    src: "/images/products/producto-1.png",
    alt: "Producto 1",
    className:
      "left-[14%] top-[10%] w-[52%] rotate-[-6deg]",
    dx: "0px",
    dy: "-18px",
    delayMs: 120,
  },
  {
    src: "/images/products/producto-2.png",
    alt: "Producto 2",
    className:
      "right-[-2%] top-[8%] w-[58%] rotate-[6deg]",
    dx: "18px",
    dy: "0px",
    delayMs: 260,
  },
  {
    src: "/images/products/producto-3.png",
    alt: "Producto 3",
    className:
      "left-[8%] top-[44%] w-[46%] rotate-[4deg]",
    dx: "-18px",
    dy: "0px",
    delayMs: 420,
  },
  {
    src: "/images/products/producto-4.png",
    alt: "Producto 4",
    className:
      "left-[28%] bottom-[6%] w-[46%] rotate-[-3deg]",
    dx: "0px",
    dy: "18px",
    delayMs: 560,
  },
  {
    src: "/images/products/producto-5.png",
    alt: "Producto 5",
    className:
      "right-[14%] bottom-[10%] w-[40%] rotate-[10deg]",
    dx: "18px",
    dy: "18px",
    delayMs: 700,
  },
];

function HeroStrip() {
  // Cinta superior tipo mockup (FRESCO / FACIL / RICO / PRACTICO)
  const words = ["FRESCO", "FACIL", "RICO", "PRACTICO"];
  const row = Array.from({ length: 8 }).flatMap(() => words);
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white/10 px-4 py-2 backdrop-blur">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-brand/70 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-brand/70 to-transparent" />
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

function ProductCollage() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="absolute -inset-6 -z-10 rounded-[2.25rem] bg-white/10 blur-2xl" />

      <div className="relative overflow-hidden rounded-[2.25rem] border border-white/15 bg-white/5 p-4 shadow-[0_18px_50px_rgba(2,6,23,0.22)]">
        <div className="relative aspect-[4/3] w-full">
          {collage.map((it) => (
            <div
              key={it.src}
              className={
                "hero-item absolute " +
                it.className +
                " opacity-0 animate-heroEnter motion-reduce:opacity-100 motion-reduce:animate-none"
              }
              style={
                {
                  // CSS vars used by tailwind keyframes (see tailwind.config.ts)
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  ...( {
                    "--dx": it.dx,
                    "--dy": it.dy,
                    animationDelay: `${it.delayMs}ms`,
                  } as any ),
                }
              }
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/25 bg-white shadow-[0_12px_30px_rgba(2,6,23,0.16)]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={it.src}
                    alt={it.alt}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 70vw, 420px"
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 text-center text-xs text-white/70">
        Placeholder: reemplace las imágenes por las finales (manteniendo las rutas).
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-bg">
      <div className="container pb-10 pt-10 md:pb-14 md:pt-14">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
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

              {/* Logo + CTA productos (QR no requerido) */}
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
          </Reveal>

          <Reveal>
            <div className="lg:pt-6">
              <ProductCollage />
            </div>
          </Reveal>
        </div>

        {/* Trust / benefits row (estilo HelloFresh) */}
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
