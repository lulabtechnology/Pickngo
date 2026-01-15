import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import WhatsAppFab from "@/components/whatsapp-fab";

import Hero from "@/components/sections/hero";
import Lines from "@/components/sections/lines";
import History from "@/components/sections/history";
import Service from "@/components/sections/service";
import Contact from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Lines />
        <History />
        <Service />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}
