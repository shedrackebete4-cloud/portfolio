import { createMiddleware } from "@tanstack/react-start";

/**
 * Server-function middleware that only lets the configured site owner
 * (`OWNER_EMAIL`, see `./owner.ts`) through. This is the real security
 * boundary for any write that must be owner-only (e.g. saving site content) —
 * the client-side `RequireOwner` gate is only a UX redirect, never trusted on
 * its own.
 *
 * Mirrors `authMiddleware` (`./middleware.ts`): forwards the live-preview
 * bearer token from client to server, then re-verifies the session server-side
 * and checks the email.
 */
export const requireOwnerMiddleware = createMiddleware({ type: "function" })
  .client(async ({ next }) => {
    const { getBearerToken } = await import("./client");
    return next({ sendContext: { bearerToken: getBearerToken() ?? undefined } });
  })
  .server(async ({ next, context }) => {
    const { assertSameSiteRequest } = await import("./isolation.server");
    const { getSessionUser } = await import("./verify.server");
    const { isOwnerEmail } = await import("./owner");
    assertSameSiteRequest();
    const user = await getSessionUser(context.bearerToken);
    if (!user || !isOwnerEmail(user.email)) {
      throw new Error("Unauthorized: only the site owner can do this.");
    }
    return next({ context: { ownerEmail: user.email } });
  });
