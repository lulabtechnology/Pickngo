import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pick’n GO | Vending Machines",
  description: "Manejo de máquinas de vending con abastecimiento según la línea elegida.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Pick’n GO | Vending Machines",
    description: "Allergy Free, Premium y Standard. Instalación, abastecimiento y soporte.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
