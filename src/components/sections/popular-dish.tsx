"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";

export function PopularDish() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-savora-accent">
              Guest Favorite
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight mt-4">
              The Dish Everyone Talks About
            </h2>
            <p className="mt-5 text-lg text-savora-muted leading-relaxed">
              A slow-braised short rib, caramelized to a deep mahogany, finished with a red wine reduction and thyme. Served with buttery polenta and charred broccolini.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-savora-muted">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-savora-accent shrink-0" />
                8-hour braised, bone-in short rib
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-savora-accent shrink-0" />
                Locally sourced, small-batch wine reduction
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-savora-accent shrink-0" />
                Served with house-made polenta
              </li>
            </ul>
          </div>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-sm bg-savora-dark-surface">
            <Image
              src="https://picsum.photos/seed/savora-popular/800/600.jpg"
              alt="Braised short rib"
              width={800}
              height={600}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}