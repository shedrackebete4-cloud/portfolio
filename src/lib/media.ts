export type VideoProvider = "youtube" | "vimeo";

export function parseVideoEmbed(url: string): { provider: VideoProvider; id: string } | null {
  const trimmed = url.trim();
  if (!trimmed) return null;

  try {
    const u = new URL(trimmed);
    const host = u.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = u.pathname.split("/").filter(Boolean)[0];
      return id ? { provider: "youtube", id } : null;
    }

    if (host === "youtube.com" || host === "m.youtube.com" || host === "youtube-nocookie.com") {
      if (u.pathname.startsWith("/embed/")) {
        const id = u.pathname.split("/")[2];
        return id ? { provider: "youtube", id } : null;
      }
      const v = u.searchParams.get("v");
      if (v) return { provider: "youtube", id: v };
      const shorts = u.pathname.match(/\/shorts\/([^/]+)/);
      if (shorts?.[1]) return { provider: "youtube", id: shorts[1] };
    }

    if (host === "vimeo.com" || host === "player.vimeo.com") {
      const parts = u.pathname.split("/").filter(Boolean);
      const id = parts[parts[0] === "video" ? 1 : 0];
      return id && /^\d+$/.test(id) ? { provider: "vimeo", id } : null;
    }
  } catch {
    return null;
  }

  return null;
}

export function isHttpUrl(url: string) {
  try {
    const u = new URL(url.trim());
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return url.startsWith("data:image/");
  }
}

export function embedSrc(url: string): string | null {
  const parsed = parseVideoEmbed(url);
  if (!parsed) return null;
  if (parsed.provider === "youtube") {
    return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(parsed.id)}`;
  }
  return `https://player.vimeo.com/video/${encodeURIComponent(parsed.id)}`;
}
