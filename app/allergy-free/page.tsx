import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import WhatsAppFab from "@/components/whatsapp-fab";
import AllergyFreeList from "@/components/sections/allergy-free-list";

export const metadata = {
  title: "Pick’n GO | Allergy Free Products",
};

export default function AllergyFreePage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        <AllergyFreeList />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}
