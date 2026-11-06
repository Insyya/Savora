import type { Metadata } from "next";
import "./globals.css";
import { CartProviderWrapper } from "@/components/providers/CartProvider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Savora — Premium Restaurant",
  description: "Seasonal ingredients, crafted with care. Discover a dining experience that celebrates the simple pleasures of good food.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-full flex flex-col bg-savora-bg text-savora-text">
        <CartProviderWrapper>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProviderWrapper>
      </body>
    </html>
  );
}