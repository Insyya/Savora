"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { menuItems } from "@/data/menu";
import { useCart } from "@/context/CartContext";

export default function MenuItemDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const item = menuItems.find((i) => i.id === params.id);

  if (!item) notFound();

  const { addItem, totalCount } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    });
  };

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="mb-8">
          <h1 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight">
            {item.name}
          </h1>
          <p className="mt-2 text-lg text-savora-muted">{item.description}</p>
          <p className="mt-4 text-2xl font-serif font-medium text-savora-accent">
            {item.price}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <Image
              src={item.image}
              alt={item.name}
              width={800}
              height={600}
              className="rounded-sm"
              priority
              loading="lazy"
            />
          </div>
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-medium tracking-tight">
              About this dish
            </h3>
            <p className="text-savora-muted leading-relaxed">
              A seasonal highlight that showcases the best of what the market
              offers today. Prepared with care and served with intention.
            </p>

            <h3 className="font-serif text-xl font-medium">
              Ingredients
            </h3>
            <ul className="list-disc list-inside space-y-2 text-savora-muted">
              <li>Locally sourced, seasonal ingredients</li>
              <li>Prepared using classic techniques</li>
              <li>Finished with house-made accompaniments</li>
            </ul>

            <h3 className="font-serif text-xl font-medium">
              Quantity
            </h3>
            <div className="flex items-center gap-3 mt-4">
              <button
                className="rounded border border-savora-border px-3 py-2 text-sm font-medium text-savora-accent hover:bg-savora-accent hover:text-white transition-colors"
                onClick={() => {
                  addItem({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    image: item.image,
                  });
                }}
                aria-label="Add one more"
              >
                +
              </button>
              <span className="min-w-8 text-center text-sm font-medium" aria-live="polite">1</span>
              <button
                className="rounded border border-savora-border px-3 py-2 text-sm font-medium text-savora-accent hover:bg-savora-accent hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={totalCount >= 99}
                aria-label="Remove one"
              >
                -
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Button onClick={handleAddToCart} className="w-full justify-center">
            Add to Cart
          </Button>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <Link href="/menu" className="text-savora-accent hover:underline">
            {"←"} Back to Menu
          </Link>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M16 11V7a4 4 0 0 0-8 0v4" />
              <path d="M5 9h14l1 7H4L5 9z" />
            </svg>
            <a
              href="/cart"
              className={`text-savora-accent hover:underline transition-colors ${
                totalCount > 0 ? "font-medium" : ""
              }`}
              aria-label={`View cart (${totalCount})`}
            >
              {totalCount > 0
                ? `${totalCount} item${totalCount !== 1 ? "s" : ""}`
                : "Cart"}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}