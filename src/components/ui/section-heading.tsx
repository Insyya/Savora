"use client";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2 className={`font-serif text-3xl font-medium tracking-tight ${className}`}>
      {children}
    </h2>
  );
}