import { create } from "zustand";
import { persist } from "zustand/middleware";
import { DEFAULT_CONTENT } from "./default-content";
import type { SiteContent } from "./portfolio-types";

type PortfolioState = {
  content: SiteContent;
  setContent: (content: SiteContent) => void;
  patch: (partial: Partial<SiteContent>) => void;
  reset: () => void;
};

export const usePortfolioStore = create<PortfolioState>()(
  persist(
    (set) => ({
      content: DEFAULT_CONTENT,
      setContent: (content) => set({ content }),
      patch: (partial) =>
        set((state) => ({
          content: { ...state.content, ...partial },
        })),
      reset: () => set({ content: DEFAULT_CONTENT }),
    }),
    {
      name: "shedrack-portfolio-v1",
      skipHydration: true,
    },
  ),
);
