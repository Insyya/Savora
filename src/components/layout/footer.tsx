"use client";

import Link from "next/link";

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={`border-t border-[#e8ddd0] bg-white px-6 py-8 text-sm text-[#8a8279] sm:px-10 ${className ?? ""}`}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Savora. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="transition-colors hover:text-savora-accent">
            Instagram
          </Link>
          <Link href="#" className="transition-colors hover:text-savora-accent">
            Facebook
          </Link>
          <Link href="#" className="transition-colors hover:text-savora-accent">
            Twitter
          </Link>
        </div>
      </div>
    </footer>
  );
}