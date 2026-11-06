"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";

export function About() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-sm bg-savora-dark-surface">
            <Image
              src="https://picsum.photos/seed/savora-about/800/600.jpg"
              alt="Restaurant interior"
              width={800}
              height={600}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-savora-accent">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight mt-4">
              A Table Set for Care
            </h2>
            <p className="mt-5 text-lg text-savora-muted leading-relaxed">
              We believe the best meals begin with intention. Every dish is built around what the season offers at its peak, sourced from producers who share our commitment to quality and respect for the land.
            </p>
            <p className="mt-4 text-lg text-savora-muted leading-relaxed">
              Our kitchen is a place of patience — slow braises, open flames, and the quiet confidence that comes from doing things the long way. This is food meant to be shared, savored, and remembered.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}