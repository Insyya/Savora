"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

type HeaderProps = {
  className?: string;
};

export function Header({ className }: HeaderProps) {
  const { totalCount } = useCart();

  return (
    <header
      className={`sticky top-0 z-40 border-b border-savora-border bg-white/95 backdrop-blur sm:border-savora-dark ${className ?? ""}`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="font-serif text-xl font-semibold tracking-tight">
          Savora
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium sm:flex">
          <Link href="/" className="transition-colors hover:text-savora-accent">Home</Link>
          <Link href="/menu" className="transition-colors hover:text-savora-accent">Menu</Link>
          <Link href="/about" className="transition-colors hover:text-savora-accent">About</Link>
          <Link href="/contact" className="transition-colors hover:text-savora-accent">Contact</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/cart"
            className="relative rounded-full p-2 text-savora-text hover:bg-savora-accent hover:text-white transition-colors"
            aria-label="View cart">
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
            {totalCount > 0 && (
              <span
                className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-savora-accent text-xs font-medium text-white"
                aria-label={`${totalCount} items in cart`}>
                {totalCount > 99 ? "99+" : totalCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}