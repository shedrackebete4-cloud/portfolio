import { useEffect, type ReactNode } from "react";
import { usePortfolioStore } from "@/lib/portfolio-store";

export function PortfolioProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    void usePortfolioStore.persist.rehydrate();
  }, []);

  return children;
}
