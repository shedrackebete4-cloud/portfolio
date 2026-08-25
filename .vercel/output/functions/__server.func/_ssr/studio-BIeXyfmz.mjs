import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Plus, l as ArrowDown, o as ArrowUp, r as Trash2, t as Upload } from "../_libs/lucide-react.mjs";
import { n as usePortfolioStore, r as DEFAULT_CONTENT } from "./router-Bqv0d4Ub.mjs";
import { a as uid, i as cn, n as Button, r as SiteHeader, t as Badge } from "./button-CuWVPC4G.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/studio-BIeXyfmz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("flex h-11 w-full rounded-md border border-border bg-bg-elevated px-3 text-sm text-fg placeholder:text-subtle", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-28 w-full rounded-md border border-border bg-bg-elevated px-3 py-2 text-sm text-fg placeholder:text-subtle", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-xs font-medium tracking-wide text-muted", className),
		...props
	});
}
var TAGS = [
	"Operations",
	"Tech",
	"Training",
	"Project Management"
];
function emptyProject() {
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
		links: []
	};
}
function StudioPage() {
	const content = usePortfolioStore((s) => s.content);
	const setContent = usePortfolioStore((s) => s.setContent);
	const reset = usePortfolioStore((s) => s.reset);
	const [openId, setOpenId] = (0, import_react.useState)(content.projects[0]?.id ?? null);
	const fileRef = (0, import_react.useRef)(null);
	const importRef = (0, import_react.useRef)(null);
	const update = (patch) => setContent({
		...content,
		...patch
	});
	const updateProject = (id, patch) => {
		update({ projects: content.projects.map((p) => p.id === id ? {
			...p,
			...patch
		} : p) });
	};
	const moveProject = (index, dir) => {
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
	const onImport = async (file) => {
		const text = await file.text();
		const parsed = JSON.parse(text);
		if (!parsed?.name || !Array.isArray(parsed.projects)) throw new Error("Invalid file");
		setContent({
			...DEFAULT_CONTENT,
			...parsed
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { studio: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-3xl px-4 py-10 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.2em] text-muted uppercase",
					children: "Studio"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mt-2 text-4xl",
					children: "Edit your site"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: "Changes save in this browser automatically and show on the public pages. Add image URLs, YouTube or Vimeo links, and any external links. You can also upload a photo from your device."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								children: "View site"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							onClick: exportJson,
							children: "Export JSON"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => importRef.current?.click(),
							children: "Import JSON"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "muted",
							size: "sm",
							onClick: () => {
								if (confirm("Reset all content to the starter portfolio?")) reset();
							},
							children: "Reset starter"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: importRef,
							type: "file",
							accept: "application/json",
							className: "hidden",
							onChange: (e) => {
								const file = e.target.files?.[0];
								if (file) onImport(file);
								e.target.value = "";
							}
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-12 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-medium tracking-wide text-accent uppercase",
							children: "Profile"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Name",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: content.name,
								onChange: (e) => update({ name: e.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Headline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: content.headline,
								onChange: (e) => update({ headline: e.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Supporting line",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: content.supportingLine,
								onChange: (e) => update({ supportingLine: e.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Short intro",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: content.intro,
								onChange: (e) => update({ intro: e.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "About (paragraphs separated by a blank line)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								className: "min-h-40",
								value: content.about,
								onChange: (e) => update({ about: e.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Portrait image URL",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: content.photoUrl,
								placeholder: "https://…",
								onChange: (e) => update({ photoUrl: e.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "outline",
								size: "sm",
								onClick: () => fileRef.current?.click(),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, {}), "Upload portrait"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								ref: fileRef,
								type: "file",
								accept: "image/*",
								className: "hidden",
								onChange: (e) => {
									const file = e.target.files?.[0];
									if (!file) return;
									const reader = new FileReader();
									reader.onload = () => {
										if (typeof reader.result === "string") update({ photoUrl: reader.result });
									};
									reader.readAsDataURL(file);
									e.target.value = "";
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-subtle",
								children: "Uploads stay in this browser. For a shareable site, paste a public image URL instead."
							})
						] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-12 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-medium tracking-wide text-accent uppercase",
							children: "Stats"
						}),
						content.stats.map((stat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Value",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: stat.value,
									onChange: (e) => {
										const stats = content.stats.map((s, idx) => idx === i ? {
											...s,
											value: e.target.value
										} : s);
										update({ stats });
									}
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Label",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: stat.label,
									onChange: (e) => {
										const stats = content.stats.map((s, idx) => idx === i ? {
											...s,
											label: e.target.value
										} : s);
										update({ stats });
									}
								})
							})]
						}, stat.id)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Journey (comma separated)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: content.journey.join(", "),
								onChange: (e) => update({ journey: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-12 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-medium tracking-wide text-accent uppercase",
						children: "Expertise"
					}), content.expertise.map((col, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Column title",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: col.title,
								onChange: (e) => {
									const expertise = content.expertise.map((c, idx) => idx === i ? {
										...c,
										title: e.target.value
									} : c);
									update({ expertise });
								}
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Items (one per line)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								className: "mt-2",
								value: col.items.join("\n"),
								onChange: (e) => {
									const expertise = content.expertise.map((c, idx) => idx === i ? {
										...c,
										items: e.target.value.split("\n").map((s) => s.trim()).filter(Boolean)
									} : c);
									update({ expertise });
								}
							})
						})]
					}, col.id))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-12 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-medium tracking-wide text-accent uppercase",
							children: "Work"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "accent",
							onClick: () => {
								const project = emptyProject();
								update({ projects: [project, ...content.projects] });
								setOpenId(project.id);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Add project"]
						})]
					}), content.projects.map((project, index) => {
						const open = openId === project.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl border border-border bg-bg-elevated",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 p-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: "min-w-0 flex-1 text-left",
										onClick: () => setOpenId(open ? null : project.id),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate text-sm font-medium",
											children: project.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate text-xs text-muted",
											children: project.industry || "No industry"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "icon",
										variant: "ghost",
										"aria-label": "Move up",
										onClick: () => moveProject(index, -1),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, {})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "icon",
										variant: "ghost",
										"aria-label": "Move down",
										onClick: () => moveProject(index, 1),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "icon",
										variant: "ghost",
										"aria-label": "Delete project",
										onClick: () => {
											if (!confirm("Delete this project?")) return;
											update({ projects: content.projects.filter((p) => p.id !== project.id) });
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
									})
								]
							}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3 border-t border-border p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Title",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: project.title,
											onChange: (e) => updateProject(project.id, { title: e.target.value })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-3 sm:grid-cols-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Industry",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													value: project.industry,
													onChange: (e) => updateProject(project.id, { industry: e.target.value })
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Role",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													value: project.role,
													onChange: (e) => updateProject(project.id, { role: e.target.value })
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Year",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													value: project.year,
													onChange: (e) => updateProject(project.id, { year: e.target.value })
												})
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Summary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											value: project.summary,
											onChange: (e) => updateProject(project.id, { summary: e.target.value })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Challenge",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											value: project.challenge,
											onChange: (e) => updateProject(project.id, { challenge: e.target.value })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "What you did",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											value: project.action,
											onChange: (e) => updateProject(project.id, { action: e.target.value })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Result",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											value: project.result,
											onChange: (e) => updateProject(project.id, { result: e.target.value })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Tags" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 flex flex-wrap gap-2",
										children: TAGS.map((tag) => {
											const on = project.tags.includes(tag);
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => {
													const tags = on ? project.tags.filter((t) => t !== tag) : [...project.tags, tag];
													updateProject(project.id, { tags });
												},
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
													className: on ? "border-accent text-fg" : "",
													children: tag
												})
											}, tag);
										})
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaEditor, {
										items: project.media,
										onChange: (media) => updateProject(project.id, { media })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinksEditor, {
										items: project.links,
										onChange: (links) => updateProject(project.id, { links })
									})
								]
							}) : null]
						}, project.id);
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-12 space-y-4 pb-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-medium tracking-wide text-accent uppercase",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Note",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: content.contact.note,
								onChange: (e) => update({ contact: {
									...content.contact,
									note: e.target.value
								} })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: content.contact.email,
								onChange: (e) => update({ contact: {
									...content.contact,
									email: e.target.value
								} })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "LinkedIn URL",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: content.contact.linkedin,
								onChange: (e) => update({ contact: {
									...content.contact,
									linkedin: e.target.value
								} })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "WhatsApp URL",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: content.contact.whatsapp,
								onChange: (e) => update({ contact: {
									...content.contact,
									whatsapp: e.target.value
								} })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Calendar URL",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: content.contact.calendar,
								onChange: (e) => update({ contact: {
									...content.contact,
									calendar: e.target.value
								} })
							})
						})
					]
				})
			]
		})]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), children]
	});
}
function MediaEditor({ items, onChange }) {
	const add = (type) => {
		onChange([...items, {
			id: uid(),
			type,
			url: "",
			caption: ""
		}]);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Images and videos" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "outline",
					type: "button",
					onClick: () => add("image"),
					children: "Add image"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "outline",
					type: "button",
					onClick: () => add("video"),
					children: "Add video"
				})]
			})]
		}), items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-md border border-border p-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-xs text-muted",
					children: item.type === "video" ? "Video URL (YouTube or Vimeo)" : "Image URL"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: item.url,
					placeholder: item.type === "video" ? "https://www.youtube.com/watch?v=…" : "https://…",
					onChange: (e) => onChange(items.map((m) => m.id === item.id ? {
						...m,
						url: e.target.value
					} : m))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					className: "mt-2",
					value: item.caption,
					placeholder: "Caption (optional)",
					onChange: (e) => onChange(items.map((m) => m.id === item.id ? {
						...m,
						caption: e.target.value
					} : m))
				}),
				item.type === "image" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-2 inline-flex h-11 items-center text-xs text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "file",
						accept: "image/*",
						className: "hidden",
						onChange: (e) => {
							const file = e.target.files?.[0];
							if (!file) return;
							const reader = new FileReader();
							reader.onload = () => {
								if (typeof reader.result === "string") onChange(items.map((m) => m.id === item.id ? {
									...m,
									url: reader.result
								} : m));
							};
							reader.readAsDataURL(file);
						}
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "cursor-pointer underline underline-offset-4",
						children: "Upload from device"
					})]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-2",
					size: "sm",
					variant: "muted",
					type: "button",
					onClick: () => onChange(items.filter((m) => m.id !== item.id)),
					children: "Remove"
				})
			]
		}, item.id))]
	});
}
function LinksEditor({ items, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Links" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: "outline",
				type: "button",
				onClick: () => onChange([...items, {
					id: uid(),
					label: "",
					url: ""
				}]),
				children: "Add link"
			})]
		}), items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-2 sm:grid-cols-[1fr_1.4fr_auto]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "Label",
					value: item.label,
					onChange: (e) => onChange(items.map((l) => l.id === item.id ? {
						...l,
						label: e.target.value
					} : l))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "https://",
					value: item.url,
					onChange: (e) => onChange(items.map((l) => l.id === item.id ? {
						...l,
						url: e.target.value
					} : l))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "muted",
					type: "button",
					onClick: () => onChange(items.filter((l) => l.id !== item.id)),
					children: "Remove"
				})
			]
		}, item.id))]
	});
}
var SplitComponent = StudioPage;
//#endregion
export { SplitComponent as component };
