"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function CartPage() {
  const {
    items,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    subtotal,
  } = useCart();

  const [isRemoving, setIsRemoving] = useState<string | null>(null);

  const handleRemove = (id: string) => {
    setIsRemoving(id);
    setTimeout(() => {
      removeItem(id);
      setIsRemoving(null);
    }, 200);
  };

  const cartEmpty = items.length === 0;

  return (
    <main className="flex-1 py-12 sm:py-20">
      <Container>
        {cartEmpty ? (
          <div className="max-w-md mx-auto text-center py-12">
            <div className="mb-8">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-savora-dark-surface">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
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
              </div>
              <h1 className="font-serif text-3xl font-medium tracking-tight mt-6">
                Your cart is empty
              </h1>
              <p className="mt-3 text-savora-muted">
                Looks like you haven&apos;t added any items to your cart yet.
              </p>
            </div>
            <Link href="/menu">
              <Button>Continue Shopping</Button>
            </Link>
          </div>
        ) : (
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight">
              Shopping Cart
            </h1>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <ul className="divide-y divide-savora-border rounded-sm border bg-white">
                  {items.map((item) => (
                    <li key={item.id} className={`p-5 ${isRemoving === item.id ? "bg-red-50" : ""}`}>
                      <div className="flex flex-col sm:flex-row gap-5">
                        <div className="relative h-24 w-32 flex-shrink-0 overflow-hidden rounded-sm bg-savora-dark-surface">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={128}
                            height={96}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>

                        <div className="flex flex-1 flex-col justify-between">
                          <div>
                            <h2 className="font-serif text-lg font-medium text-savora-text">
                              {item.name}
                            </h2>
                            <p className="mt-1 text-sm text-savora-muted">
                              {item.price}
                            </p>
                          </div>

                          <div className="mt-4 flex items-center justify-between sm:mt-0 sm:justify-end sm:gap-3">
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => decreaseQuantity(item.id)}
                                className="rounded border border-savora-border px-2 py-1 text-sm font-medium text-savora-text hover:bg-savora-muted hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={item.quantity <= 1}
                                aria-label="Decrease quantity"
                              >
                                -
                              </button>
                              <span className="w-8 text-center text-sm font-medium" aria-live="polite">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => increaseQuantity(item.id)}
                                className="rounded border border-savora-border px-2 py-1 text-sm font-medium text-savora-text hover:bg-savora-muted hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={item.quantity >= 99}
                                aria-label="Increase quantity"
                              >
                                +
                              </button>
                            </div>

                            <div className="flex items-center gap-4">
                              <span className="font-medium text-savora-accent">
                                ${((parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2))}
                              </span>

                              <button
                                type="button"
                                onClick={() => handleRemove(item.id)}
                                className="text-sm text-savora-muted hover:text-red-600 transition-colors"
                                aria-label={`Remove ${item.name} from cart`}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex justify-between px-5 py-3">
                  <Button
                    variant="outline"
                    onClick={clearCart}
                    className="text-sm font-medium"
                  >
                    Clear Cart
                  </Button>
                  <Link href="/menu">
                    <Button variant="outline">Continue Shopping</Button>
                  </Link>
                </div>
              </div>

              <div>
                <div className="rounded-sm border border-savora-border bg-white p-6">
                  <h2 className="font-serif text-xl font-medium tracking-tight">
                    Order Summary
                  </h2>

                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-savora-muted">Subtotal</span>
                      <span className="font-medium text-savora-text">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-savora-muted">Tax</span>
                      <span className="font-medium text-savora-text">Calculated at checkout</span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <Link href="/checkout">
                      <Button className="w-full justify-center">
                        Proceed to Checkout
                      </Button>
                    </Link>

                    <p className="text-center text-xs text-savora-muted">
                      Secure checkout powered by Stripe
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </main>
  );
}