import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CoverBlock } from "@/components/media-embed";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePortfolioStore } from "@/lib/portfolio-store";

export function PortfolioHome() {
  const content = usePortfolioStore((s) => s.content);
  const firstImage = (id: string) =>
    content.projects.find((p) => p.id === id)?.media.find((m) => m.type === "image")?.url;

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28">
          <p className="mb-6 text-sm tracking-[0.18em] text-muted uppercase">
            Operations · Tech · Training
          </p>
          <h1 className="font-display max-w-4xl text-4xl leading-[1.12] tracking-tight text-fg sm:text-6xl">
            {content.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {content.supportingLine}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {content.intro}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild>
              <a href="#work">View selected work</a>
            </Button>
            <Button asChild variant="outline">
              <a href="#contact">Let's talk</a>
            </Button>
          </div>
        </section>

        <section className="border-y border-border">
          <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {content.stats.map((stat) => (
              <div key={stat.id} className="px-4 py-8 sm:px-8">
                <p className="font-display text-4xl text-fg tabular-nums">{stat.value}</p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs tracking-[0.2em] text-muted uppercase">Path</p>
          <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
            {content.journey.map((step, i) => (
              <span key={`${step}-${i}`} className="flex items-center gap-2">
                <span className="rounded-full border border-border px-3 py-1.5 text-fg">{step}</span>
                {i < content.journey.length - 1 ? (
                  <span className="text-subtle" aria-hidden>
                    →
                  </span>
                ) : null}
              </span>
            ))}
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-4 pb-20 sm:px-6">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs tracking-[0.2em] text-muted uppercase">Selected work</p>
              <h2 className="font-display mt-2 text-3xl sm:text-4xl">Projects</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {content.projects.map((project) => (
              <Link
                key={project.id}
                to="/work/$id"
                params={{ id: project.id }}
                className="group overflow-hidden rounded-xl border border-border bg-bg-elevated transition-colors duration-200 hover:border-accent/50"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <CoverBlock
                    title={project.title}
                    industry={project.industry}
                    imageUrl={firstImage(project.id)}
                  />
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  <h3 className="mt-4 text-lg font-medium leading-snug text-fg group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
                  <p className="mt-4 flex items-center gap-1 text-sm text-fg">
                    Read case
                    <ArrowRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="expertise" className="scroll-mt-20 border-y border-border bg-bg-elevated">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <p className="text-xs tracking-[0.2em] text-muted uppercase">Expertise</p>
            <h2 className="font-display mt-2 text-3xl sm:text-4xl">How I work</h2>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {content.expertise.map((col) => (
                <div key={col.id}>
                  <h3 className="text-sm font-medium tracking-wide text-accent uppercase">
                    {col.title}
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                    {col.items.map((item) => (
                      <li key={item} className="border-t border-border pt-3 text-fg/90">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-6xl scroll-mt-20 gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs tracking-[0.2em] text-muted uppercase">About</p>
            <h2 className="font-display mt-2 text-3xl sm:text-4xl">{content.name}</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              {content.about.split("\n\n").map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-border bg-bg-subtle">
            {content.photoUrl ? (
              <img src={content.photoUrl} alt={content.name} className="aspect-[4/5] w-full object-cover" />
            ) : (
              <div className="flex aspect-[4/5] flex-col justify-end p-6">
                <p className="font-display text-3xl">{content.name.split(" ")[0]}</p>
                <p className="mt-2 text-sm text-muted">
                  Add a portrait URL in Studio to replace this panel.
                </p>
              </div>
            )}
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 border-t border-border">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <p className="text-xs tracking-[0.2em] text-muted uppercase">Contact</p>
            <h2 className="font-display mt-2 max-w-2xl text-3xl sm:text-4xl">
              {content.contact.note || "Let's work together."}
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {content.contact.email ? (
                <Button asChild>
                  <a href={`mailto:${content.contact.email}`}>{content.contact.email}</a>
                </Button>
              ) : null}
              {content.contact.linkedin ? (
                <Button asChild variant="outline">
                  <a href={content.contact.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </Button>
              ) : null}
              {content.contact.whatsapp ? (
                <Button asChild variant="outline">
                  <a href={content.contact.whatsapp} target="_blank" rel="noreferrer">
                    WhatsApp
                  </a>
                </Button>
              ) : null}
              {content.contact.calendar ? (
                <Button asChild variant="outline">
                  <a href={content.contact.calendar} target="_blank" rel="noreferrer">
                    Book a call
                  </a>
                </Button>
              ) : null}
              {!content.contact.email &&
              !content.contact.linkedin &&
              !content.contact.whatsapp &&
              !content.contact.calendar ? (
                <p className="text-sm text-muted">
                  Add email, LinkedIn, or a calendar link in{" "}
                  <Link to="/studio" className="text-fg underline underline-offset-4">
                    Studio
                  </Link>
                  .
                </p>
              ) : null}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
