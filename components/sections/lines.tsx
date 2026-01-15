import Image from "next/image";
import Reveal from "@/components/reveal";
import Marquee from "@/components/marquee";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { lines } from "@/content/lines";
import { waLink } from "@/lib/links";

export default function Lines() {
  return (
    <section id="lineas" className="bg-white">
      <div className="container py-14 md:py-20">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
              Nuestras líneas de Vending Service
            </h2>
            <p className="mt-3 text-base leading-7 text-muted md:text-lg">
              Elige la experiencia que mejor se adapte a tu local:{" "}
              <span className="font-semibold text-ink">Allergy Free</span>,{" "}
              <span className="font-semibold text-ink">Premium</span> o{" "}
              <span className="font-semibold text-ink">Standard</span>.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 space-y-10">
          {lines.map((line, idx) => {
            const reverse = idx % 2 === 1;
            const dotClass =
              line.key === "allergy" ? "bg-allergy" : line.key === "premium" ? "bg-premium" : "bg-standard";
            const bulletClass =
              line.key === "allergy" ? "bg-allergy" : line.key === "premium" ? "bg-premium" : "bg-standardAccent";
            return (
              <Reveal key={line.key}>
                <div
                  id={line.anchorId}
                  className={[
                    "rounded-[2.25rem] border border-border bg-white shadow-soft overflow-hidden",
                    "p-6 md:p-10",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "grid items-center gap-8 lg:grid-cols-2",
                      reverse ? "lg:[&>*:first-child]:order-2" : "",
                    ].join(" ")}
                  >
                    <div className="relative">
                      <div className={`absolute -inset-6 -z-10 rounded-[2.5rem] ${line.tone.softBgClass} blur-2xl`} />
                      <div className="inline-flex items-center rounded-full px-4 py-2 text-xs font-extrabold tracking-tight text-white shadow-[0_10px_20px_rgba(2,6,23,0.10)]"
                           style={{ background: "rgb(2 6 23 / 0.86)" }}>
                        <span className={`mr-2 inline-block h-2 w-2 rounded-full ${dotClass}`} />
                        Línea {line.title}
                      </div>

                      <h3 className={`mt-4 text-2xl font-extrabold tracking-tight md:text-3xl ${line.tone.accentClass}`}>
                        {line.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-muted">
                        {line.subtitle}
                      </p>

                      <ul className="mt-5 space-y-2 text-sm text-ink/90">
                        {line.bullets.map((b) => (
                          <li key={b} className="flex gap-2">
                            <span className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${bulletClass}`} />
                            <span className="leading-6">{b}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <ButtonLink
                          href="#contacto"
                          size="lg"
                          className="justify-center"
                        >
                          {line.cta}
                        </ButtonLink>
                        <ButtonLink
                          href={waLink()}
                          variant="outline"
                          size="lg"
                          className="justify-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Consultar por WhatsApp
                        </ButtonLink>
                      </div>
                    </div>

                    <Card className="relative overflow-hidden rounded-[2.25rem]">
                      <div className="relative aspect-[4/3] w-full">
                        <Image
                          src={line.machineImage}
                          alt={line.machineAlt}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <div className="rounded-2xl bg-white/90 p-3 text-xs text-muted shadow-softer backdrop-blur">
                          Placeholder: aquí irá la imagen final de la máquina con su arte tono sobre tono.
                        </div>
                      </div>
                    </Card>
                  </div>

                  <div className="mt-8">
                    <div className="mb-3 text-sm font-semibold text-ink">
                      Productos destacados (cinta)
                    </div>
                    <Marquee items={line.marquee} size="lg" speed="slow" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
