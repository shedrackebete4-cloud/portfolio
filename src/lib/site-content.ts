import { createServerFn } from "@tanstack/react-start";
import { getSql } from "@/lib/db";
import { requireOwnerMiddleware } from "@/lib/auth/owner-middleware";
import { DEFAULT_CONTENT } from "@/lib/default-content";
import type { SiteContent } from "@/lib/portfolio-types";

/**
 * Public read of the live site content. No auth required — this is what every
 * visitor's page load (and the Studio editor on open) fetches. Falls back to
 * `DEFAULT_CONTENT` when nothing has been saved yet.
 */
export const getSiteContent = createServerFn({ method: "GET" }).handler(
  async (): Promise<SiteContent> => {
    const sql = await getSql();
    const rows = await sql<{ content: SiteContent }>`
      select content from site_content where id = 'main' limit 1
    `;
    return rows[0]?.content ?? DEFAULT_CONTENT;
  },
);

/**
 * Owner-only write. Re-checks the session server-side (never trusts the
 * client-side gate) and rejects anyone whose email isn't the configured
 * owner — this is the actual security boundary for the backend.
 */
export const saveSiteContent = createServerFn({ method: "POST" })
  .middleware([requireOwnerMiddleware])
  .validator((content: SiteContent) => content)
  .handler(async ({ data, context }) => {
    const sql = await getSql();
    await sql`
      insert into site_content (id, content, updated_by, updated_at)
      values ('main', ${JSON.stringify(data)}::jsonb, ${context.ownerEmail}, current_timestamp)
      on conflict (id) do update
        set content = excluded.content,
            updated_by = excluded.updated_by,
            updated_at = excluded.updated_at
    `;
    return { ok: true as const };
  });
