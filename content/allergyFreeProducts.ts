export type AllergyFreeProduct = {
  name: string;
  frontImage: string;
  backImage: string;
};

export const allergyFreeProducts: AllergyFreeProduct[] = [
  {
    name: "Almond Crackers",
    frontImage: "/images/products/allergy-free/almond-crackers-front.png",
    backImage: "/images/products/allergy-free/almond-crackers-back.png",
  },
  {
    name: "Banana Chips",
    frontImage: "/images/products/allergy-free/banana-chips-front.png",
    backImage: "/images/products/allergy-free/banana-chips-back.png",
  },
  {
    name: "Tortilla Chips",
    frontImage: "/images/products/allergy-free/tortilla-front.png",
    backImage: "/images/products/allergy-free/tortilla-back.png",
  },
  {
    name: "Zesty Mix",
    frontImage: "/images/products/allergy-free/zesty-mix-front.png",
    backImage: "/images/products/allergy-free/zesty-mix-back.png",
  },
];
