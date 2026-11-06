"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="py-16 sm:py-24 lg:py-28">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <p className="text-sm font-medium tracking-widest uppercase text-savora-accent">
              Since 2018
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mt-4 leading-[1.1]">
              Seasonal Cooking,
              <br />
              Done Right
            </h1>
            <p className="mt-6 text-lg text-savora-muted max-w-lg leading-relaxed">
              Where thoughtful ingredients meet timeless technique. A seasonal menu crafted for those who appreciate the art of dining.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/menu">View Menu</Button>
              <Button variant="outline" href="/reservation">Make a Reservation</Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://picsum.photos/seed/savora-hero/800/600.jpg"
              alt="Restaurant dining experience"
              width={800}
              height={600}
              className="aspect-[4/3] w-full object-cover rounded-sm"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}