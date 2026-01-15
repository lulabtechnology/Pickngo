import Image from "next/image";
import Reveal from "@/components/reveal";

export default function History() {
  return (
    <section id="historia" className="bg-white">
      <div className="container py-14 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
                Nuestra historia
              </h2>
              <p className="mt-4 text-base leading-7 text-muted md:text-lg">
                Pick’n GO nace para simplificar el acceso a snacks y productos de alta rotación
                en espacios donde el tiempo importa: oficinas, locales comerciales y áreas comunes.
                Operamos máquinas de vending con un enfoque en disponibilidad, reposición y experiencia.
              </p>
              <p className="mt-4 text-base leading-7 text-muted">
                (Placeholder) Aquí puedes reemplazar por el copy final: visión, por qué existen,
                y qué los diferencia en Panamá.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:pl-6">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2.25rem] bg-brandSoft blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.25rem] border border-border bg-white shadow-soft">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/history/pickngo-history.png"
                    alt="Foto de Pick’n GO (placeholder)"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mt-4 rounded-2xl border border-border bg-white p-4 text-sm text-muted shadow-softer">
                Sugerencia: una foto editorial del vending en un local real eleva mucho el look premium.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
