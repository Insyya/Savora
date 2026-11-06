"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/ui/container";
import { MenuItem } from "@/components/ui/menu-item";
import { MenuCategoryNav } from "@/components/sections/menu-category-nav";
import { categories, menuItems } from "@/data/menu";
import { useCart } from "@/context/CartContext";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { addItem } = useCart();

  const items = useMemo(
    () =>
      activeCategory === "all"
        ? menuItems
        : menuItems.filter((item) => item.categoryId === activeCategory),
    [activeCategory]
  );

  const handleAddToCart = (item: (typeof menuItems)[number]) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    });
  };

  return (
    <div className="flex flex-col bg-savora-bg text-savora-text">
      <section className="py-12 sm:py-16">
        <Container>
          <p className="text-sm font-medium tracking-widest uppercase text-savora-accent">
            The Menu
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight mt-4">
            Seasonal dishes, crafted with care
          </h1>
          <p className="mt-4 text-lg text-savora-muted max-w-2xl leading-relaxed">
            Every dish is built around what the season offers at its peak. Browse
            by category, then select a dish to learn more.
          </p>
        </Container>
      </section>

      <section className="pb-8">
        <Container>
          <MenuCategoryNav
            categories={categories}
            active={activeCategory}
            onFilter={setActiveCategory}
          />
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          {items.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-savora-muted">No items in this category yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {items.map((item) => (
                <MenuItem
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  href={`/menu/${item.id}`}
                  showCart
                  onAddToCart={() => handleAddToCart(item)}
                />
              ))}
            </div>
          )}
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container className="text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight">
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <p className="mt-4 text-lg text-savora-muted max-w-lg mx-auto leading-relaxed">
            Our menu changes with the seasons. Reach out and we&apos;ll help you
            find the perfect dish.
          </p>
          <div className="mt-8 flex justify-center">
            <button className="rounded-full bg-savora-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-savora-accent-hover">
              Contact Us
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
}