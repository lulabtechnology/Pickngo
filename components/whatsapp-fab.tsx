import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/links";

export default function WhatsAppFab() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white shadow-soft transition hover:bg-brandDark focus:outline-none focus:ring-2 focus:ring-brand/40"
      aria-label="Abrir WhatsApp para solicitar información"
      title="WhatsApp"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
