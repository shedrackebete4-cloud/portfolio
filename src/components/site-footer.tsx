import { usePortfolioStore } from "@/lib/portfolio-store";

export function SiteFooter() {
  const name = usePortfolioStore((s) => s.content.name);

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-muted">
          {name}
        </p>
      </div>
    </footer>
  );
}
