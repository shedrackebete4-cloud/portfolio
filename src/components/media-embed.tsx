import { embedSrc, isHttpUrl } from "@/lib/media";
import { cn } from "@/lib/utils";

export function MediaEmbed({
  type,
  url,
  caption,
  className,
}: {
  type: "image" | "video";
  url: string;
  caption?: string;
  className?: string;
}) {
  if (!url.trim()) return null;

  if (type === "video") {
    const src = embedSrc(url);
    if (src) {
      return (
        <figure className={cn("overflow-hidden rounded-lg bg-bg-subtle", className)}>
          <div className="relative aspect-video w-full">
            <iframe
              src={src}
              title={caption || "Video"}
              className="absolute inset-0 size-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {caption ? (
            <figcaption className="px-3 py-2 text-xs text-muted">{caption}</figcaption>
          ) : null}
        </figure>
      );
    }
  }

  if (!isHttpUrl(url) && !url.startsWith("data:image/")) return null;

  return (
    <figure className={cn("overflow-hidden rounded-lg bg-bg-subtle", className)}>
      <img
        src={url}
        alt={caption || ""}
        className="aspect-video w-full object-cover"
      />
      {caption ? (
        <figcaption className="px-3 py-2 text-xs text-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

export function CoverBlock({
  title,
  industry,
  imageUrl,
}: {
  title: string;
  industry: string;
  imageUrl?: string;
}) {
  if (imageUrl && (isHttpUrl(imageUrl) || imageUrl.startsWith("data:image/"))) {
    return (
      <img src={imageUrl} alt="" className="size-full object-cover" />
    );
  }

  return (
    <div className="flex size-full flex-col justify-between bg-bg-subtle p-5">
      <p className="text-xs tracking-widest text-muted uppercase">{industry}</p>
      <p className="font-display text-2xl leading-tight text-fg">{title}</p>
    </div>
  );
}
