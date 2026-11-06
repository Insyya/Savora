"use client";

type CategoryNavProps = {
  categories: { id: string; name: string; slug: string }[];
  active: string;
  onFilter: (id: string) => void;
};

export function MenuCategoryNav({ categories, active, onFilter }: CategoryNavProps) {
  return (
    <nav
      aria-label="Menu categories"
      className="flex flex-wrap items-center gap-2 sm:gap-3"
    >
      <button
        type="button"
        onClick={() => onFilter("all")}
        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
          active === "all"
            ? "bg-savora-accent text-white"
            : "border border-savora-border bg-white text-savora-text hover:border-savora-accent"
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          type="button"
          onClick={() => onFilter(cat.id)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            active === cat.id
              ? "bg-savora-accent text-white"
              : "border border-savora-border bg-white text-savora-text hover:border-savora-accent"
          }`}
        >
          {cat.name}
        </button>
      ))}
    </nav>
  );
}