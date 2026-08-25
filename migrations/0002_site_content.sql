-- Single-row table holding the live public site content, edited from /studio.
-- Only one row ever exists (id = 'main'). Writes are gated server-side to the
-- owner's email (see src/lib/site-content.server.ts) — this table has no
-- per-request auth of its own.
create table if not exists "site_content" (
  "id" text not null primary key default 'main',
  "content" jsonb not null,
  "updated_by" text,
  "updated_at" timestamptz not null default current_timestamp
);
