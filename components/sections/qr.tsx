import Image from "next/image";
import Reveal from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";

export default function AllergyFreeQR() {
  return (
    <section className="bg-white">
      <div className="container py-14 md:py-20">
        <div className="rounded-[2.25rem] border border-border bg-white p-6 shadow-soft md:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
                  Allergy Free products list
                </h2>
                <p className="mt-3 text-base leading-7 text-muted md:text-lg">
                  Escanea el QR o entra al listado para ver productos Allergy Free. La página está
                  lista para que luego edites el catálogo.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/allergy-free" size="lg" className="justify-center">
                    Ver lista Allergy Free
                  </ButtonLink>
                  <ButtonLink
                    href="#contacto"
                    variant="outline"
                    size="lg"
                    className="justify-center"
                  >
                    Solicitar una máquina
                  </ButtonLink>
                </div>

                <div className="mt-4 text-sm text-muted">
                  (Por ahora el QR es placeholder; luego lo reemplazamos por el QR final apuntando a{" "}
                  <span className="font-semibold text-ink">/allergy-free</span>.)
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:pl-6">
              <div className="relative">
                <div className="absolute -inset-4 -z-10 rounded-[2.25rem] bg-allergySoft blur-2xl" />
                <div className="relative overflow-hidden rounded-[2.25rem] border border-border bg-white shadow-soft">
                  <div className="relative aspect-square w-full">
                    <Image
                      src="/images/qr/allergy-free-qr.png"
                      alt="Código QR a la lista Allergy Free (placeholder)"
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
