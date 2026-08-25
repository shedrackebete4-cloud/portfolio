import { _ as Link, b as require_jsx_runtime, v as useParams } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ExternalLink, c as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as usePortfolioStore } from "./router-Bqv0d4Ub.mjs";
import { n as Button, r as SiteHeader, t as Badge } from "./button-CuWVPC4G.mjs";
import { n as MediaEmbed, r as SiteFooter } from "./site-footer-D5mVrZFZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._id-CUp5OrZZ.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectPage() {
	const { id } = useParams({ from: "/work/$id" });
	const project = usePortfolioStore((s) => s.content.projects.find((p) => p.id === id));
	if (!project) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-3xl px-4 py-24 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl",
					children: "Project not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: "It may have been removed in Studio."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						children: "Back home"
					})
				})
			]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						hash: "work",
						className: "inline-flex h-11 items-center gap-2 text-sm text-muted hover:text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "All work"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-8 text-xs tracking-[0.2em] text-muted uppercase",
						children: [project.industry, project.year ? ` · ${project.year}` : ""]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display mt-3 text-4xl leading-tight sm:text-5xl",
						children: project.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted",
						children: project.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: project.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: tag }, tag))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-lg leading-relaxed text-fg/90",
						children: project.summary
					}),
					project.media.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 space-y-6",
						children: project.media.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaEmbed, {
							type: item.type,
							url: item.url,
							caption: item.caption
						}, item.id))
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-12 space-y-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
								title: "Challenge",
								body: project.challenge
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
								title: "What I did",
								body: project.action
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
								title: "Result",
								body: project.result
							})
						]
					}),
					project.links.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 flex flex-wrap gap-3",
						children: project.links.map((link) => link.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: link.url,
								target: "_blank",
								rel: "noreferrer",
								children: [link.label || link.url, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {})]
							})
						}, link.id) : null)
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function Block({ title, body }) {
	if (!body) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "text-xs tracking-[0.2em] text-accent uppercase",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "mt-2 text-base leading-relaxed text-muted",
		children: body
	})] });
}
var SplitComponent = ProjectPage;
//#endregion
export { SplitComponent as component };
