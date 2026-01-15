import { Card } from "@/components/ui/card";
import Reveal from "@/components/reveal";
import { Wrench, Truck, Store, Headphones, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: Store,
    title: "Instalación",
    desc: "Coordinamos ubicación, requisitos y puesta en marcha.",
  },
  {
    icon: Truck,
    title: "Abastecimiento",
    desc: "Reposición planificada según la línea elegida y rotación.",
  },
  {
    icon: PackageCheck,
    title: "Reposición",
    desc: "Control de inventario y reposición para mantener disponibilidad.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento",
    desc: "Preventivo y correctivo para operación estable.",
  },
  {
    icon: Headphones,
    title: "Soporte",
    desc: "Atención para incidencias y mejoras del servicio.",
  },
];

export default function Service() {
  return (
    <section id="servicio" className="bg-white">
      <div className="container py-14 md:py-20">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
              Nuestro servicio
            </h2>
            <p className="mt-3 text-base leading-7 text-muted md:text-lg">
              Operamos el vending de punta a punta: instalación, abastecimiento, mantenimiento,
              reposición y soporte.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title}>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brandSoft2">
                      <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-ink">
                        {s.title}
                      </div>
                      <div className="mt-2 text-sm leading-6 text-muted">
                        {s.desc}
                      </div>
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-10 rounded-[2.25rem] border border-border bg-white p-8 shadow-soft">
            <div className="text-sm font-extrabold text-ink">Nota</div>
            <div className="mt-2 text-sm leading-6 text-muted">
              (Placeholder) Aquí añadiremos detalles concretos: frecuencia de reposición, tiempos de respuesta,
              horarios de soporte y cualquier requisito del local.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
