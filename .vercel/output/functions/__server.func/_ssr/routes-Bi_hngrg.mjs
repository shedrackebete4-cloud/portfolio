import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as usePortfolioStore } from "./router-Bqv0d4Ub.mjs";
import { n as Button, r as SiteHeader, t as Badge } from "./button-CuWVPC4G.mjs";
import { r as SiteFooter, t as CoverBlock } from "./site-footer-D5mVrZFZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bi_hngrg.js
var import_jsx_runtime = require_jsx_runtime();
function PortfolioHome() {
	const content = usePortfolioStore((s) => s.content);
	const firstImage = (id) => content.projects.find((p) => p.id === id)?.media.find((m) => m.type === "image")?.url;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-6 text-sm tracking-[0.18em] text-muted uppercase",
							children: "Operations · Tech · Training"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display max-w-4xl text-4xl leading-[1.12] tracking-tight text-fg sm:text-6xl",
							children: content.headline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg",
							children: content.supportingLine
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg",
							children: content.intro
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#work",
									children: "View selected work"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contact",
									children: "Let's talk"
								})
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-y border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto grid max-w-6xl grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0",
						children: content.stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-4 py-8 sm:px-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-4xl text-fg tabular-nums",
								children: stat.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: stat.label
							})]
						}, stat.id))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.2em] text-muted uppercase",
						children: "Path"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap items-center gap-2 text-sm",
						children: content.journey.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-border px-3 py-1.5 text-fg",
								children: step
							}), i < content.journey.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-subtle",
								"aria-hidden": true,
								children: "→"
							}) : null]
						}, `${step}-${i}`))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "work",
					className: "mx-auto max-w-6xl scroll-mt-20 px-4 pb-20 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-10 flex items-end justify-between gap-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.2em] text-muted uppercase",
							children: "Selected work"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display mt-2 text-3xl sm:text-4xl",
							children: "Projects"
						})] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 md:grid-cols-2",
						children: content.projects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/work/$id",
							params: { id: project.id },
							className: "group overflow-hidden rounded-xl border border-border bg-bg-elevated transition-colors duration-200 hover:border-accent/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[16/10] overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverBlock, {
									title: project.title,
									industry: project.industry,
									imageUrl: firstImage(project.id)
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2",
										children: project.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: tag }, tag))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 text-lg font-medium leading-snug text-fg group-hover:text-accent",
										children: project.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted",
										children: project.summary
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-4 flex items-center gap-1 text-sm text-fg",
										children: ["Read case", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform duration-150 group-hover:translate-x-0.5" })]
									})
								]
							})]
						}, project.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "expertise",
					className: "scroll-mt-20 border-y border-border bg-bg-elevated",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl px-4 py-20 sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-[0.2em] text-muted uppercase",
								children: "Expertise"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display mt-2 text-3xl sm:text-4xl",
								children: "How I work"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-12 grid gap-10 md:grid-cols-3",
								children: content.expertise.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-medium tracking-wide text-accent uppercase",
									children: col.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 space-y-3 text-sm leading-relaxed text-muted",
									children: col.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "border-t border-border pt-3 text-fg/90",
										children: item
									}, item))
								})] }, col.id))
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "about",
					className: "mx-auto grid max-w-6xl scroll-mt-20 gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.2em] text-muted uppercase",
							children: "About"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display mt-2 text-3xl sm:text-4xl",
							children: content.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 space-y-4 text-base leading-relaxed text-muted",
							children: content.about.split("\n\n").map((para) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: para }, para.slice(0, 24)))
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-xl border border-border bg-bg-subtle",
						children: content.photoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: content.photoUrl,
							alt: content.name,
							className: "aspect-[4/5] w-full object-cover"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex aspect-[4/5] flex-col justify-end p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl",
								children: content.name.split(" ")[0]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: "Add a portrait URL in Studio to replace this panel."
							})]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "contact",
					className: "scroll-mt-20 border-t border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl px-4 py-20 sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-[0.2em] text-muted uppercase",
								children: "Contact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display mt-2 max-w-2xl text-3xl sm:text-4xl",
								children: content.contact.note || "Let's work together."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [
									content.contact.email ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `mailto:${content.contact.email}`,
											children: content.contact.email
										})
									}) : null,
									content.contact.linkedin ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "outline",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: content.contact.linkedin,
											target: "_blank",
											rel: "noreferrer",
											children: "LinkedIn"
										})
									}) : null,
									content.contact.whatsapp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "outline",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: content.contact.whatsapp,
											target: "_blank",
											rel: "noreferrer",
											children: "WhatsApp"
										})
									}) : null,
									content.contact.calendar ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "outline",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: content.contact.calendar,
											target: "_blank",
											rel: "noreferrer",
											children: "Book a call"
										})
									}) : null,
									!content.contact.email && !content.contact.linkedin && !content.contact.whatsapp && !content.contact.calendar ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-muted",
										children: [
											"Add email, LinkedIn, or a calendar link in",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/studio",
												className: "text-fg underline underline-offset-4",
												children: "Studio"
											}),
											"."
										]
									}) : null
								]
							})
						]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var SplitComponent = PortfolioHome;
//#endregion
export { SplitComponent as component };
