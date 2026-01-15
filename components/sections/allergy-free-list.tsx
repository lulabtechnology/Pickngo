import Image from "next/image";
import Reveal from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { allergyFreeProducts } from "@/content/allergyFreeProducts";

function groupByLetter(items: { name: string }[]) {
  const map = new Map<string, number[]>();
  items.forEach((it, idx) => {
    const letter = (it.name[0] ?? "#").toUpperCase();
    if (!map.has(letter)) map.set(letter, []);
    map.get(letter)!.push(idx);
  });
  const letters = Array.from(map.keys()).sort();
  return { map, letters };
}

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function AllergyFreeList() {
  const sorted = [...allergyFreeProducts].sort((a, b) => a.name.localeCompare(b.name));
  const { map, letters } = groupByLetter(sorted);

  return (
    <section className="bg-white">
      <div className="container pb-14 pt-10 md:pb-20 md:pt-12">
        <Reveal>
          <div className="max-w-2xl">
            <h1 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
              Allergy Free — Lista de productos
            </h1>
            <p className="mt-3 text-base leading-7 text-muted md:text-lg">
              Listado editable (fase inicial con data dummy). Está diseñado para ordenar alfabéticamente,
              con imágenes de frente y verso por producto.
            </p>
          </div>
        </Reveal>

        <div className="sticky top-16 z-40 mt-8 rounded-2xl border border-border bg-white/90 p-3 shadow-softer backdrop-blur">
          <div className="flex flex-wrap gap-2">
            {alphabet.map((l) => {
              const enabled = letters.includes(l);
              return (
                <a
                  key={l}
                  href={enabled ? `#letter-${l}` : undefined}
                  className={[
                    "inline-flex h-9 w-9 items-center justify-center rounded-xl text-sm font-semibold",
                    enabled
                      ? "bg-slate-50 text-ink hover:bg-slate-100"
                      : "cursor-not-allowed bg-slate-50/60 text-slate-300",
                  ].join(" ")}
                  aria-disabled={!enabled}
                >
                  {l}
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 space-y-10">
          {letters.map((letter) => {
            const idxs = map.get(letter) ?? [];
            return (
              <div key={letter} id={`letter-${letter}`}>
                <div className="mb-4 flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-allergy text-white font-extrabold">
                    {letter}
                  </div>
                  <div className="text-sm font-semibold text-muted">
                    {idxs.length} producto(s)
                  </div>
                </div>

                <div className="grid gap-4">
                  {idxs.map((i) => {
                    const p = sorted[i]!;
                    return (
                      <Card key={p.name} className="p-6">
                        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                          <div>
                            <div className="text-lg font-extrabold text-ink">
                              {p.name}
                            </div>
                            <div className="mt-1 text-sm text-muted">
                              (Placeholder) Aquí podrían ir etiquetas de alérgenos, marca o notas.
                            </div>
                          </div>

                          <div className="grid w-full max-w-xl grid-cols-2 gap-3">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-white">
                              <Image
                                src={p.frontImage}
                                alt={`${p.name} (frente)`}
                                fill
                                className="object-contain p-3"
                              />
                            </div>
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-white">
                              <Image
                                src={p.backImage}
                                alt={`${p.name} (verso)`}
                                fill
                                className="object-contain p-3"
                              />
                            </div>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
