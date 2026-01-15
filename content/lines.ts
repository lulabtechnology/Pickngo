export type LineKey = "allergy" | "premium" | "standard";

export type LineInfo = {
  key: LineKey;
  title: string;
  subtitle: string;
  bullets: string[];
  cta: string;
  anchorId: string;
  machineImage: string;
  machineAlt: string;
  tone: {
    accentClass: string;
    softBgClass: string;
    badgeClass: string;
  };
  marquee: { src: string; alt: string }[];
};

// Menos items, más grandes (más similar al estilo de referencia)
const baseProducts = Array.from({ length: 8 }).map((_, i) => ({
  src: `/images/products/producto-${i + 1}.png`,
  alt: `Producto ${i + 1}`,
}));

export const lines: LineInfo[] = [
  {
    key: "allergy",
    title: "Allergy Free",
    subtitle: "Snacks y productos seleccionados para necesidades específicas.",
    bullets: [
      "Selección enfocada en restricciones y preferencias.",
      "Rotación cuidada para mantener frescura.",
      "Abastecimiento y control de inventario incluidos.",
    ],
    cta: "Quiero esta línea",
    anchorId: "line-allergy",
    machineImage: "/images/machines/allergy-free.png",
    machineAlt: "Vending Machine línea Allergy Free",
    tone: {
      accentClass: "text-allergy",
      softBgClass: "bg-allergySoft",
      badgeClass: "bg-allergy text-white",
    },
    marquee: baseProducts,
  },
  {
    key: "premium",
    title: "Premium",
    subtitle: "Una experiencia superior con productos y mix de alta demanda.",
    bullets: [
      "Mix premium para oficinas y espacios de alto tráfico.",
      "Reposición programada y soporte continuo.",
      "Presentación cuidada y experiencia de compra fluida.",
    ],
    cta: "Solicitar propuesta",
    anchorId: "line-premium",
    machineImage: "/images/machines/premium.png",
    machineAlt: "Vending Machine línea Premium",
    tone: {
      accentClass: "text-premium",
      softBgClass: "bg-premiumSoft",
      badgeClass: "bg-premium text-white",
    },
    marquee: baseProducts,
  },
  {
    key: "standard",
    title: "Standard",
    subtitle: "La opción práctica y eficiente para cubrir lo esencial.",
    bullets: [
      "Productos esenciales con excelente rotación.",
      "Mantenimiento y reposición incluidos.",
      "Ideal para locales comerciales y áreas comunes.",
    ],
    cta: "Quiero esta línea",
    anchorId: "line-standard",
    machineImage: "/images/machines/standard.png",
    machineAlt: "Vending Machine línea Standard",
    tone: {
      accentClass: "text-standard",
      softBgClass: "bg-standardSoft",
      badgeClass: "bg-standard text-white",
    },
    marquee: baseProducts,
  },
];
