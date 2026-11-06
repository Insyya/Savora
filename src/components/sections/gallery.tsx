"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";

const galleryImages = [
  {
    src: "https://picsum.photos/seed/savora-gallery1/800/600.jpg",
    alt: "Restaurant dining table",
  },
  {
    src: "https://picsum.photos/seed/savora-gallery2/800/600.jpg",
    alt: "Chef plating food",
  },
  {
    src: "https://picsum.photos/seed/savora-gallery3/800/600.jpg",
    alt: "Bar area",
  },
  {
    src: "https://picsum.photos/seed/savora-gallery4/800/600.jpg",
    alt: "Window seating",
  },
  {
    src: "https://picsum.photos/seed/savora-gallery5/800/600.jpg",
    alt: "Outdoor patio",
  },
  {
    src: "https://picsum.photos/seed/savora-gallery6/800/600.jpg",
    alt: "Wine bottle display",
  },
];

export function Gallery() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
          <p className="text-sm font-medium tracking-widest uppercase text-savora-accent">
            Browse
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight mt-4">
            Our Spaces
          </h2>
          <p className="mt-4 text-base text-savora-muted max-w-2xl mx-auto leading-relaxed">
            From our cozy kitchen interior to our sun-drenched patio, get a glimpse of where the magic happens.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="group aspect-[3/4] overflow-hidden rounded-sm bg-savora-dark-surface cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={800}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}