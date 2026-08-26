/**
 * The single account allowed to edit this site's content via /studio.
 *
 * Client-safe (no secrets) — used both for the client-side gate (fast redirect,
 * not itself a security boundary) and re-checked server-side in
 * `site-content.ts` (inside `requireOwnerMiddleware`) before any write is
 * persisted, which IS the real boundary. Never trust the client check alone.
 */
export const OWNER_EMAIL = "ebeteshedrack@gmail.com";

export function isOwnerEmail(email: string | null | undefined): boolean {
  return typeof email === "string" && email.trim().toLowerCase() === OWNER_EMAIL;
}
