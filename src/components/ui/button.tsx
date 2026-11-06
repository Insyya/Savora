import Link from "next/link";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline";
  onClick?: () => void;
};

export function Button({
  href,
  children,
  className,
  variant = "primary",
  onClick,
}: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors";
  const primary = "bg-savora-accent text-white hover:bg-savora-accent-hover";
  const outline = "border border-savora-accent bg-transparent text-savora-accent hover:bg-savora-accent hover:text-white";

  const merged = `${base} ${variant === "outline" ? outline : primary} ${className ?? ""}`;

  if (href) {
    return (
      <Link href={href} className={merged}>
        {children}
      </Link>
    );
  }

  return (
    <button className={merged} onClick={onClick}>
      {children}
    </button>
  );
}