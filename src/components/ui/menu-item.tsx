"use client";

import Image from "next/image";
import Link from "next/link";

type MenuItemProps = {
  name: string;
  description: string;
  price: string;
  image: string;
  href?: string;
  onAddToCart?: () => void;
  showCart?: boolean;
};

export function MenuItem({
  name,
  description,
  price,
  image,
  href,
  onAddToCart,
  showCart = false,
}: MenuItemProps) {
  return (
    <article className="group">
      <div className="aspect-[4/3] overflow-hidden rounded-sm bg-savora-dark-surface">
        {href ? (
          <Link href={href} className="block">
            <Image
              src={image}
              alt={name}
              width={600}
              height={450}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </Link>
        ) : (
          <Image
            src={image}
            alt={name}
            width={600}
            height={450}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        )}
      </div>

      <div className="mt-3 flex items-baseline justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="font-serif text-lg font-medium">{name}</h3>
          <p className="mt-1 text-sm text-savora-muted line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="font-serif text-lg font-medium text-savora-accent">
            {price}
          </span>
          {showCart && onAddToCart && (
            <button
              type="button"
              onClick={onAddToCart}
              aria-label={`Add ${name} to cart`}
              className="rounded-full bg-savora-accent px-2 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-savora-accent-hover"
            >
              Add
            </button>
          )}
        </div>
      </div>
    </article>
  );
}