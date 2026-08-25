import { useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Plus, Trash2, ArrowUp, ArrowDown, Upload } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { DEFAULT_CONTENT } from "@/lib/default-content";
import { usePortfolioStore } from "@/lib/portfolio-store";
import { saveSiteContent } from "@/lib/site-content";
import { TAGS, type MediaItem, type Project, type SiteContent } from "@/lib/portfolio-types";
import { uid } from "@/lib/utils";

function emptyProject(): Project {
  return {
    id: uid(),
    title: "New project",
    industry: "",
    role: "",
    year: "",
    summary: "",
    challenge: "",
    action: "",
    result: "",
    tags: [],
    media: [],
    links: [],
  };
}

export function StudioPage() {
  const content = usePortfolioStore((s) => s.content);
  const setContent = usePortfolioStore((s) => s.setContent);
  const reset = usePortfolioStore((s) => s.reset);
  const [openId, setOpenId] = useState<string | null>(content.projects[0]?.id ?? null);
  const [saveState, setSaveState] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const fileRef = useRef<HTMLInputElement>(null);
  const importRef = useRef<HTMLInputElement>(null);

  const publish = async () => {
    setSaveState("saving");
    try {
      await saveSiteContent({ data: content });
      setSaveState("saved");
      setTimeout(() => setSaveState("idle"), 2000);
    } catch {
      setSaveState("error");
    }
  };

  const update = (patch: Partial<SiteContent>) => setContent({ ...content, ...patch });

  const updateProject = (id: string, patch: Partial<Project>) => {
    update({
      projects: content.projects.map((p) => (p.id === id ? { ...p, ...patch } : p)),
    });
  };

  const moveProject = (index: number, dir: -1 | 1) => {
    const next = [...content.projects];
    const target = index + dir;
    if (target < 0 || target >= next.length) return;
    const tmp = next[index];
    next[index] = next[target];
    next[target] = tmp;
    update({ projects: next });
  };

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(content, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "portfolio-content.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const onImport = async (file: File) => {
    const text = await file.text();
    const parsed = JSON.parse(text) as SiteContent;
    if (!parsed?.name || !Array.isArray(parsed.projects)) {
      throw new Error("Invalid file");
    }
    setContent({ ...DEFAULT_CONTENT, ...parsed });
  };

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <SiteHeader studio />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <p className="text-xs tracking-[0.2em] text-muted uppercase">Studio</p>
        <h1 className="font-display mt-2 text-4xl">Edit your site</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Edits here stay in this browser until you publish. Click "Publish" to push them live for
          every visitor. Add image URLs, YouTube or Vimeo links, and any external links. You can also
          upload a photo from your device.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <Button size="sm" onClick={() => void publish()} disabled={saveState === "saving"}>
            {saveState === "saving" ? "Publishing…" : "Publish"}
          </Button>
          {saveState === "saved" ? (
            <span className="text-xs text-muted">Published.</span>
          ) : null}
          {saveState === "error" ? (
            <span className="text-xs text-red-500">Couldn't publish — try again.</span>
          ) : null}
          <Button asChild variant="outline" size="sm">
            <Link to="/">View site</Link>
          </Button>
          <Button variant="outline" size="sm" onClick={exportJson}>
            Export JSON
          </Button>
          <Button variant="outline" size="sm" onClick={() => importRef.current?.click()}>
            Import JSON
          </Button>
          <Button
            variant="muted"
            size="sm"
            onClick={() => {
              if (confirm("Reset all content to the starter portfolio?")) reset();
            }}
          >
            Reset starter
          </Button>
          <input
            ref={importRef}
            type="file"
            accept="application/json"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) void onImport(file);
              e.target.value = "";
            }}
          />
        </div>

        <section className="mt-12 space-y-4">
          <h2 className="text-sm font-medium tracking-wide text-accent uppercase">Profile</h2>
          <Field label="Name">
            <Input value={content.name} onChange={(e) => update({ name: e.target.value })} />
          </Field>
          <Field label="Headline">
            <Textarea value={content.headline} onChange={(e) => update({ headline: e.target.value })} />
          </Field>
          <Field label="Supporting line">
            <Input
              value={content.supportingLine}
              onChange={(e) => update({ supportingLine: e.target.value })}
            />
          </Field>
          <Field label="Short intro">
            <Textarea value={content.intro} onChange={(e) => update({ intro: e.target.value })} />
          </Field>
          <Field label="About (paragraphs separated by a blank line)">
            <Textarea
              className="min-h-40"
              value={content.about}
              onChange={(e) => update({ about: e.target.value })}
            />
          </Field>
          <Field label="Portrait image URL">
            <Input
              value={content.photoUrl}
              placeholder="https://…"
              onChange={(e) => update({ photoUrl: e.target.value })}
            />
          </Field>
          <div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => fileRef.current?.click()}
            >
              <Upload />
              Upload portrait
            </Button>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = () => {
                  if (typeof reader.result === "string") update({ photoUrl: reader.result });
                };
                reader.readAsDataURL(file);
                e.target.value = "";
              }}
            />
            <p className="mt-2 text-xs text-subtle">
              Uploads stay in this browser. For a shareable site, paste a public image URL instead.
            </p>
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-sm font-medium tracking-wide text-accent uppercase">Stats</h2>
          {content.stats.map((stat, i) => (
            <div key={stat.id} className="grid grid-cols-2 gap-3">
              <Field label="Value">
                <Input
                  value={stat.value}
                  onChange={(e) => {
                    const stats = content.stats.map((s, idx) =>
                      idx === i ? { ...s, value: e.target.value } : s,
                    );
                    update({ stats });
                  }}
                />
              </Field>
              <Field label="Label">
                <Input
                  value={stat.label}
                  onChange={(e) => {
                    const stats = content.stats.map((s, idx) =>
                      idx === i ? { ...s, label: e.target.value } : s,
                    );
                    update({ stats });
                  }}
                />
              </Field>
            </div>
          ))}
          <Field label="Journey (comma separated)">
            <Input
              value={content.journey.join(", ")}
              onChange={(e) =>
                update({
                  journey: e.target.value
                    .split(",")
                    .map((s) => s.trim())
                    .filter(Boolean),
                })
              }
            />
          </Field>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-sm font-medium tracking-wide text-accent uppercase">Expertise</h2>
          {content.expertise.map((col, i) => (
            <div key={col.id} className="rounded-lg border border-border p-4">
              <Field label="Column title">
                <Input
                  value={col.title}
                  onChange={(e) => {
                    const expertise = content.expertise.map((c, idx) =>
                      idx === i ? { ...c, title: e.target.value } : c,
                    );
                    update({ expertise });
                  }}
                />
              </Field>
              <Field label="Items (one per line)">
                <Textarea
                  className="mt-2"
                  value={col.items.join("\n")}
                  onChange={(e) => {
                    const expertise = content.expertise.map((c, idx) =>
                      idx === i
                        ? {
                            ...c,
                            items: e.target.value.split("\n").map((s) => s.trim()).filter(Boolean),
                          }
                        : c,
                    );
                    update({ expertise });
                  }}
                />
              </Field>
            </div>
          ))}
        </section>

        <section className="mt-12 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium tracking-wide text-accent uppercase">Work</h2>
            <Button
              size="sm"
              variant="accent"
              onClick={() => {
                const project = emptyProject();
                update({ projects: [project, ...content.projects] });
                setOpenId(project.id);
              }}
            >
              <Plus />
              Add project
            </Button>
          </div>

          {content.projects.map((project, index) => {
            const open = openId === project.id;
            return (
              <article key={project.id} className="rounded-xl border border-border bg-bg-elevated">
                <div className="flex items-center gap-2 p-3">
                  <button
                    type="button"
                    className="min-w-0 flex-1 text-left"
                    onClick={() => setOpenId(open ? null : project.id)}
                  >
                    <p className="truncate text-sm font-medium">{project.title}</p>
                    <p className="truncate text-xs text-muted">{project.industry || "No industry"}</p>
                  </button>
                  <Button
                    size="icon"
                    variant="ghost"
                    aria-label="Move up"
                    onClick={() => moveProject(index, -1)}
                  >
                    <ArrowUp />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    aria-label="Move down"
                    onClick={() => moveProject(index, 1)}
                  >
                    <ArrowDown />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    aria-label="Delete project"
                    onClick={() => {
                      if (!confirm("Delete this project?")) return;
                      update({ projects: content.projects.filter((p) => p.id !== project.id) });
                    }}
                  >
                    <Trash2 />
                  </Button>
                </div>
                {open ? (
                  <div className="space-y-3 border-t border-border p-4">
                    <Field label="Title">
                      <Input
                        value={project.title}
                        onChange={(e) => updateProject(project.id, { title: e.target.value })}
                      />
                    </Field>
                    <div className="grid gap-3 sm:grid-cols-3">
                      <Field label="Industry">
                        <Input
                          value={project.industry}
                          onChange={(e) => updateProject(project.id, { industry: e.target.value })}
                        />
                      </Field>
                      <Field label="Role">
                        <Input
                          value={project.role}
                          onChange={(e) => updateProject(project.id, { role: e.target.value })}
                        />
                      </Field>
                      <Field label="Year">
                        <Input
                          value={project.year}
                          onChange={(e) => updateProject(project.id, { year: e.target.value })}
                        />
                      </Field>
                    </div>
                    <Field label="Summary">
                      <Textarea
                        value={project.summary}
                        onChange={(e) => updateProject(project.id, { summary: e.target.value })}
                      />
                    </Field>
                    <Field label="Challenge">
                      <Textarea
                        value={project.challenge}
                        onChange={(e) => updateProject(project.id, { challenge: e.target.value })}
                      />
                    </Field>
                    <Field label="What you did">
                      <Textarea
                        value={project.action}
                        onChange={(e) => updateProject(project.id, { action: e.target.value })}
                      />
                    </Field>
                    <Field label="Result">
                      <Textarea
                        value={project.result}
                        onChange={(e) => updateProject(project.id, { result: e.target.value })}
                      />
                    </Field>
                    <div>
                      <Label>Tags</Label>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {TAGS.map((tag) => {
                          const on = project.tags.includes(tag);
                          return (
                            <button
                              key={tag}
                              type="button"
                              onClick={() => {
                                const tags = on
                                  ? project.tags.filter((t) => t !== tag)
                                  : [...project.tags, tag];
                                updateProject(project.id, { tags });
                              }}
                            >
                              <Badge className={on ? "border-accent text-fg" : ""}>{tag}</Badge>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <MediaEditor
                      items={project.media}
                      onChange={(media) => updateProject(project.id, { media })}
                    />
                    <LinksEditor
                      items={project.links}
                      onChange={(links) => updateProject(project.id, { links })}
                    />
                  </div>
                ) : null}
              </article>
            );
          })}
        </section>

        <section className="mt-12 space-y-4 pb-16">
          <h2 className="text-sm font-medium tracking-wide text-accent uppercase">Contact</h2>
          <Field label="Note">
            <Input
              value={content.contact.note}
              onChange={(e) => update({ contact: { ...content.contact, note: e.target.value } })}
            />
          </Field>
          <Field label="Email">
            <Input
              value={content.contact.email}
              onChange={(e) => update({ contact: { ...content.contact, email: e.target.value } })}
            />
          </Field>
          <Field label="LinkedIn URL">
            <Input
              value={content.contact.linkedin}
              onChange={(e) => update({ contact: { ...content.contact, linkedin: e.target.value } })}
            />
          </Field>
          <Field label="WhatsApp URL">
            <Input
              value={content.contact.whatsapp}
              onChange={(e) => update({ contact: { ...content.contact, whatsapp: e.target.value } })}
            />
          </Field>
          <Field label="Calendar URL">
            <Input
              value={content.contact.calendar}
              onChange={(e) => update({ contact: { ...content.contact, calendar: e.target.value } })}
            />
          </Field>
        </section>
      </main>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block space-y-1.5">
      <Label>{label}</Label>
      {children}
    </label>
  );
}

function MediaEditor({
  items,
  onChange,
}: {
  items: MediaItem[];
  onChange: (items: MediaItem[]) => void;
}) {
  const add = (type: MediaItem["type"]) => {
    onChange([...items, { id: uid(), type, url: "", caption: "" }]);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <Label>Images and videos</Label>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" type="button" onClick={() => add("image")}>
            Add image
          </Button>
          <Button size="sm" variant="outline" type="button" onClick={() => add("video")}>
            Add video
          </Button>
        </div>
      </div>
      {items.map((item) => (
        <div key={item.id} className="rounded-md border border-border p-3">
          <p className="mb-2 text-xs text-muted">{item.type === "video" ? "Video URL (YouTube or Vimeo)" : "Image URL"}</p>
          <Input
            value={item.url}
            placeholder={item.type === "video" ? "https://www.youtube.com/watch?v=…" : "https://…"}
            onChange={(e) =>
              onChange(items.map((m) => (m.id === item.id ? { ...m, url: e.target.value } : m)))
            }
          />
          <Input
            className="mt-2"
            value={item.caption}
            placeholder="Caption (optional)"
            onChange={(e) =>
              onChange(items.map((m) => (m.id === item.id ? { ...m, caption: e.target.value } : m)))
            }
          />
          {item.type === "image" ? (
            <label className="mt-2 inline-flex h-11 items-center text-xs text-muted">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  const reader = new FileReader();
                  reader.onload = () => {
                    if (typeof reader.result === "string") {
                      onChange(
                        items.map((m) => (m.id === item.id ? { ...m, url: reader.result as string } : m)),
                      );
                    }
                  };
                  reader.readAsDataURL(file);
                }}
              />
              <span className="cursor-pointer underline underline-offset-4">Upload from device</span>
            </label>
          ) : null}
          <Button
            className="mt-2"
            size="sm"
            variant="muted"
            type="button"
            onClick={() => onChange(items.filter((m) => m.id !== item.id))}
          >
            Remove
          </Button>
        </div>
      ))}
    </div>
  );
}

function LinksEditor({
  items,
  onChange,
}: {
  items: { id: string; label: string; url: string }[];
  onChange: (items: { id: string; label: string; url: string }[]) => void;
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <Label>Links</Label>
        <Button
          size="sm"
          variant="outline"
          type="button"
          onClick={() => onChange([...items, { id: uid(), label: "", url: "" }])}
        >
          Add link
        </Button>
      </div>
      {items.map((item) => (
        <div key={item.id} className="grid gap-2 sm:grid-cols-[1fr_1.4fr_auto]">
          <Input
            placeholder="Label"
            value={item.label}
            onChange={(e) =>
              onChange(items.map((l) => (l.id === item.id ? { ...l, label: e.target.value } : l)))
            }
          />
          <Input
            placeholder="https://"
            value={item.url}
            onChange={(e) =>
              onChange(items.map((l) => (l.id === item.id ? { ...l, url: e.target.value } : l)))
            }
          />
          <Button
            size="sm"
            variant="muted"
            type="button"
            onClick={() => onChange(items.filter((l) => l.id !== item.id))}
          >
            Remove
          </Button>
        </div>
      ))}
    </div>
  );
}
