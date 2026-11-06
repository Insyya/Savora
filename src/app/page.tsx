import { Hero } from "@/components/sections/hero";
import { FeaturedMenu } from "@/components/sections/featured-menu";
import { About } from "@/components/sections/about";
import { PopularDish } from "@/components/sections/popular-dish";
import { Gallery } from "@/components/sections/gallery";
import { Contact } from "@/components/sections/contact";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <FeaturedMenu />
      <About />
      <PopularDish />
      <Gallery />
      <Contact />
      <FinalCTA />
    </main>
  );
}