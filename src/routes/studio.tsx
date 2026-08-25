import { createFileRoute } from "@tanstack/react-router";
import { RequireOwner } from "@/lib/auth/gates";
import { StudioPage } from "@/components/studio-page";

export const Route = createFileRoute("/studio")({
  component: () => (
    <RequireOwner>
      <StudioPage />
    </RequireOwner>
  ),
});
