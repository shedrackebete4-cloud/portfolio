import { Link } from "@tanstack/react-router";
import { usePortfolioStore } from "@/lib/portfolio-store";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", hash: "work", label: "Work" },
  { to: "/", hash: "expertise", label: "Expertise" },
  { to: "/", hash: "about", label: "About" },
  { to: "/", hash: "contact", label: "Contact" },
] as const;

export function SiteHeader({ studio }: { studio?: boolean }) {
  const name = usePortfolioStore((s) => s.content.name);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          to="/"
          className="truncate font-medium tracking-tight text-fg"
        >
          {name}
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              className="hidden h-11 items-center px-3 text-muted hover:text-fg sm:flex"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/studio"
            className={cn(
              "flex h-11 items-center px-3",
              studio ? "text-fg" : "text-muted hover:text-fg",
            )}
          >
            Studio
          </Link>
        </nav>
      </div>
    </header>
  );
}
