import Image from "next/image";
import { site } from "@/content/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="container py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-border bg-white">
              <Image
                src="/brand/logo-pickngo.png"
                alt={`${site.name} logo`}
                fill
                className="object-contain p-1"
                sizes="40px"
              />
            </div>
            <div>
              <div className="text-sm font-extrabold tracking-tight text-ink">
                {site.name}
              </div>
              <div className="text-xs text-muted">{site.description}</div>
            </div>
          </div>

          <div className="grid gap-2 text-sm text-muted">
            <div>{site.address}</div>
            <div>Tel: {site.phone}</div>
            <div>WhatsApp: {site.whatsapp}</div>
            <div>Email: {site.email}</div>
          </div>
        </div>

        <div className="mt-10 text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
