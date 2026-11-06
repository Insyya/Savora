"use client";

import { MenuItem } from "@/components/ui/menu-item";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const featuredItems = [
  {
    name: "Wood-Fired Octopus",
    description: "Charred octopus with smoked paprika, lemon, and olive oil",
    price: "$32",
    image: "https://picsum.photos/seed/savora-item1/600/450.jpg",
  },
  {
    name: "Heritage Carrot",
    description: "Slow-roasted carrot with tahini, pomegranate, and herbs",
    price: "$18",
    image: "https://picsum.photos/seed/savora-item2/600/450.jpg",
  },
  {
    name: "Dry-Aged Ribeye",
    description: "45-day dry-aged beef with roasted root vegetables",
    price: "$58",
    image: "https://picsum.photos/seed/savora-item3/600/450.jpg",
  },
  {
    name: "Wild Mushroom Risotto",
    description: "Foraged mushrooms, aged parmesan, truffle oil",
    price: "$26",
    image: "https://picsum.photos/seed/savora-item4/600/450.jpg",
  },
];

export function FeaturedMenu() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <SectionHeading>Featured Dishes</SectionHeading>
          <Button variant="outline" href="/menu">View Full Menu</Button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <MenuItem key={item.name} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}