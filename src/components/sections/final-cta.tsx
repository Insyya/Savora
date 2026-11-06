"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-16 sm:py-20 bg-savora-dark text-white">
      <Container>
        <div className="text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-6">
            Reserve Your Table
          </h2>
          <p className="text-base text-savora-dark-muted mb-8 max-w-2xl mx-auto leading-relaxed">
            Join us for an evening of seasonal cooking, thoughtful service, and the simple pleasures of good food. Our menu changes with the seasons — reserve your spot today.
          </p>
          <Button href="/reservation" className="mx-auto">
            Make a Reservation
          </Button>
        </div>
      </Container>
    </section>
  );
}