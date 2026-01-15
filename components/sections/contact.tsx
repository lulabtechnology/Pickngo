"use client";

import * as React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/reveal";
import { site } from "@/content/site";
import { waLink } from "@/lib/links";

function buildMailto(params: Record<string, string>) {
  const subject = encodeURIComponent("Solicitud Pick’n GO | Vending Machine");
  const lines = Object.entries(params)
    .map(([k, v]) => `${k}: ${v}`.trim())
    .join("\n");
  const body = encodeURIComponent(lines);
  return `mailto:${site.email}?subject=${subject}&body=${body}`;
}

export default function Contact() {
  const [busy, setBusy] = React.useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);

    const fd = new FormData(e.currentTarget);
    const data = {
      Nombre: String(fd.get("name") ?? ""),
      "Empresa/Local": String(fd.get("company") ?? ""),
      Ubicación: String(fd.get("location") ?? ""),
      Teléfono: String(fd.get("phone") ?? ""),
      Email: String(fd.get("email") ?? ""),
      "Línea de interés": String(fd.get("line") ?? ""),
      Mensaje: String(fd.get("message") ?? ""),
    };

    window.location.href = buildMailto(data);
    setTimeout(() => setBusy(false), 400);
  }

  return (
    <section id="contacto" className="bg-white">
      <div className="container py-14 md:py-20">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
              Contacto
            </h2>
            <p className="mt-3 text-base leading-7 text-muted md:text-lg">
              Cuéntanos sobre tu local y te recomendaremos la línea adecuada. Respuesta rápida por WhatsApp.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="overflow-hidden rounded-[2.25rem]">
              <CardHeader>
                <div className="text-sm font-extrabold text-ink">Formulario</div>
                <div className="mt-1 text-sm text-muted">
                  Envío por <span className="font-semibold text-ink">mailto</span> (fase inicial).
                </div>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4" onSubmit={onSubmit}>
                  <div className="grid gap-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input id="name" name="name" required placeholder="Tu nombre" />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="company">Empresa / Local</Label>
                    <Input id="company" name="company" placeholder="Nombre del local" />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="location">Ubicación</Label>
                    <Input id="location" name="location" placeholder="Ciudad / zona" />
                  </div>

                  <div className="grid gap-2 md:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" name="phone" required placeholder="+507 ..." />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" required placeholder="tucorreo@..." />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="line">Línea de interés</Label>
                    <div className="relative">
                      <Select id="line" name="line" required defaultValue="Allergy Free">
                        <option>Allergy Free</option>
                        <option>Premium</option>
                        <option>Standard</option>
                      </Select>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Cuéntanos el tipo de local, afluencia y horarios..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="h-12" disabled={busy}>
                    {busy ? "Abriendo tu correo..." : "Enviar"}
                  </Button>

                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-sm font-semibold text-ink underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
                  >
                    Prefiero WhatsApp ahora
                  </a>
                </form>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal>
            <div className="rounded-[2.25rem] border border-border bg-white p-8 shadow-soft">
              <div className="text-sm font-extrabold text-ink">Datos</div>

              <div className="mt-4 grid gap-3 text-sm text-muted">
                <div>
                  <span className="font-semibold text-ink">Dirección:</span> {site.address}
                </div>
                <div>
                  <span className="font-semibold text-ink">WhatsApp:</span> {site.whatsapp}
                </div>
                <div>
                  <span className="font-semibold text-ink">Teléfono:</span> {site.phone}
                </div>
                <div>
                  <span className="font-semibold text-ink">Email:</span> {site.email}
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-brandSoft2 p-5">
                <div className="text-sm font-extrabold text-ink">Mensaje para WhatsApp</div>
                <div className="mt-2 text-sm leading-6 text-muted">
                  “Hola, me interesa una máquina Pick’n GO para mi local. ¿Me brindan información?”
                </div>
              </div>

              <div className="mt-6 text-xs text-muted">
                Nota: el correo <span className="font-semibold text-ink">ventas@pickngo.com</span> es placeholder (según formulario).
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
