import { useEffect, type ReactNode } from "react";
import { usePortfolioStore } from "@/lib/portfolio-store";
import { getSiteContent } from "@/lib/site-content";

/**
 * On load: rehydrate the local (offline/instant-paint) copy first, then fetch
 * the real saved content from the backend and, once it arrives, make that the
 * source of truth. The backend row is what every visitor now sees — the local
 * copy is just a fast first paint, not a second source of content.
 */
export function PortfolioProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    void usePortfolioStore.persist.rehydrate();
    void getSiteContent()
      .then((content) => usePortfolioStore.getState().setContent(content))
      .catch(() => {
        /* backend unreachable — keep whatever the local copy has */
      });
  }, []);

  return children;
}
