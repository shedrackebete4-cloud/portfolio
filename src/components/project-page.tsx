import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { MediaEmbed } from "@/components/media-embed";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePortfolioStore } from "@/lib/portfolio-store";

export function ProjectPage() {
  const { id } = useParams({ from: "/work/$id" });
  const project = usePortfolioStore((s) => s.content.projects.find((p) => p.id === id));

  if (!project) {
    return (
      <div className="min-h-dvh bg-bg text-fg">
        <SiteHeader />
        <main className="mx-auto max-w-3xl px-4 py-24 text-center">
          <h1 className="font-display text-3xl">Project not found</h1>
          <p className="mt-3 text-sm text-muted">It may have been moved or removed.</p>
          <Button asChild className="mt-8">
            <Link to="/">Back home</Link>
          </Button>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <Link
          to="/"
          hash="work"
          className="inline-flex h-11 items-center gap-2 text-sm text-muted hover:text-fg"
        >
          <ArrowLeft className="size-4" />
          All work
        </Link>
        <p className="mt-8 text-xs tracking-[0.2em] text-muted uppercase">
          {project.industry}
          {project.year ? ` · ${project.year}` : ""}
        </p>
        <h1 className="font-display mt-3 text-4xl leading-tight sm:text-5xl">{project.title}</h1>
        <p className="mt-4 text-sm text-muted">{project.role}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <p className="mt-8 text-lg leading-relaxed text-fg/90">{project.summary}</p>

        {project.media.length > 0 ? (
          <div className="mt-10 space-y-6">
            {project.media.map((item) => (
              <MediaEmbed key={item.id} type={item.type} url={item.url} caption={item.caption} />
            ))}
          </div>
        ) : null}

        <dl className="mt-12 space-y-8">
          <Block title="Challenge" body={project.challenge} />
          <Block title="What I did" body={project.action} />
          <Block title="Result" body={project.result} />
        </dl>

        {project.links.length > 0 ? (
          <div className="mt-12 flex flex-wrap gap-3">
            {project.links.map((link) =>
              link.url ? (
                <Button key={link.id} asChild variant="outline">
                  <a href={link.url} target="_blank" rel="noreferrer">
                    {link.label || link.url}
                    <ExternalLink />
                  </a>
                </Button>
              ) : null,
            )}
          </div>
        ) : null}
      </main>
      <SiteFooter />
    </div>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  if (!body) return null;
  return (
    <div>
      <dt className="text-xs tracking-[0.2em] text-accent uppercase">{title}</dt>
      <dd className="mt-2 text-base leading-relaxed text-muted">{body}</dd>
    </div>
  );
}
