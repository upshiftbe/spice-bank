export type Experience = {
  title: string;
  subtitle: string;
  description: string;
};

export type MenuItem = {
  name: string;
  description?: string;
  price: number;
};

export const experiences: Experience[] = [
  {
    title: "The Dining Room",
    subtitle: "An intimate setting",
    description:
      "Our main space features an open kitchen where culinary artistry unfolds before your eyes. Each table is positioned for privacy while maintaining a connection to the energy of the room.",
  },
  {
    title: "The Bar",
    subtitle: "Craft & conversation",
    description:
      "A sophisticated retreat for those seeking expertly crafted cocktails and curated small plates. Perfect for pre-dinner drinks or a late evening escape.",
  },
  {
    title: "Private Dining",
    subtitle: "Exclusive experiences",
    description:
      "An intimate space for gatherings that demand discretion and exceptional service. Custom menus designed in collaboration with our head chef.",
  },
];

export const startersMenu: MenuItem[] = [
  {
    name: "Orkney Scallops",
    description: "Brown butter, capers, lemon",
    price: 24,
  },
  {
    name: "Beef Tartare",
    description: "Aged parmesan, confit egg yolk",
    price: 18,
  },
  {
    name: "Burrata",
    description: "Heritage tomatoes, basil oil",
    price: 16,
  },
  {
    name: "Foie Gras Terrine",
    description: "Brioche, Sauternes jelly",
    price: 22,
  },
];

export const mainsMenu: MenuItem[] = [
  {
    name: "Dry-Aged Ribeye",
    description: "45-day aged, bone marrow, watercress",
    price: 58,
  },
  {
    name: "Dover Sole",
    description: "Brown butter, capers, parsley",
    price: 48,
  },
  {
    name: "Roasted Duck",
    description: "Cherry, turnip, jus gras",
    price: 42,
  },
  {
    name: "Lamb Saddle",
    description: "Aubergine, harissa, yogurt",
    price: 44,
  },
];

export const dessertsMenu: MenuItem[] = [
  {
    name: "Chocolate Tart",
    description: "Salted caramel, crème fraîche",
    price: 14,
  },
  {
    name: "Tarte Tatin",
    description: "Calvados cream",
    price: 12,
  },
  {
    name: "Cheese Selection",
    description: "British & French, quince",
    price: 18,
  },
];

export const aboutContent = {
  paragraph1:
    "Spice Bank represents a new approach to fine dining—one that respects tradition while embracing innovation. Our kitchen is led by Chef Marie Laurent, whose vision shapes every dish we serve.",
  paragraph2:
    "We source ingredients from producers who share our commitment to quality and sustainability. The result is cuisine that speaks for itself.",
};

export const menuIntro = {
  title: "Menu",
  subtitle: "A selection from our seasonal offerings",
};

export const contactContent = {
  title: "Reserve a Table",
  subtitle: "Join us for an unforgettable evening",
  ctaLabel: "Make a Reservation",
};
