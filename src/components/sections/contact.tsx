"use client";

import { Container } from "@/components/ui/container";

const hours = [
  { day: "Monday – Thursday", time: "5:00 PM – 10:00 PM" },
  { day: "Friday", time: "5:00 PM – 11:00 PM" },
  { day: "Saturday", time: "12:00 PM – 11:00 PM" },
  { day: "Sunday", time: "12:00 PM – 9:00 PM" },
];

export function Contact() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-savora-accent">
              Visit Us
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight mt-4">
              Find Us
            </h2>
            <address className="mt-6 not-italic text-base text-savora-muted leading-relaxed">
              <p className="text-savora-text font-medium">Savora</p>
              <p>124 Harbor Street</p>
              <p>Brooklyn, NY 11201</p>
            </address>
            <div className="mt-6 space-y-2 text-base text-savora-muted">
              <p>
                <a href="tel:+17185550100" className="transition-colors hover:text-savora-accent">
                  (718) 555-0100
                </a>
              </p>
              <p>
                <a href="mailto:hello@savora.example" className="transition-colors hover:text-savora-accent">
                  hello@savora.example
                </a>
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-savora-accent">
              Hours
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight mt-4">
              Opening Hours
            </h2>
            <dl className="mt-6 space-y-3 text-base">
              {hours.map((row) => (
                <div key={row.day} className="flex justify-between gap-6 border-b border-savora-border pb-3">
                  <dt className="font-medium text-savora-text">{row.day}</dt>
                  <dd className="text-savora-muted">{row.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}