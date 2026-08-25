import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as usePortfolioStore } from "./router-Bqv0d4Ub.mjs";
import { i as cn } from "./button-CuWVPC4G.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-footer-D5mVrZFZ.js
var import_jsx_runtime = require_jsx_runtime();
function parseVideoEmbed(url) {
	const trimmed = url.trim();
	if (!trimmed) return null;
	try {
		const u = new URL(trimmed);
		const host = u.hostname.replace(/^www\./, "");
		if (host === "youtu.be") {
			const id = u.pathname.split("/").filter(Boolean)[0];
			return id ? {
				provider: "youtube",
				id
			} : null;
		}
		if (host === "youtube.com" || host === "m.youtube.com" || host === "youtube-nocookie.com") {
			if (u.pathname.startsWith("/embed/")) {
				const id = u.pathname.split("/")[2];
				return id ? {
					provider: "youtube",
					id
				} : null;
			}
			const v = u.searchParams.get("v");
			if (v) return {
				provider: "youtube",
				id: v
			};
			const shorts = u.pathname.match(/\/shorts\/([^/]+)/);
			if (shorts?.[1]) return {
				provider: "youtube",
				id: shorts[1]
			};
		}
		if (host === "vimeo.com" || host === "player.vimeo.com") {
			const parts = u.pathname.split("/").filter(Boolean);
			const id = parts[parts[0] === "video" ? 1 : 0];
			return id && /^\d+$/.test(id) ? {
				provider: "vimeo",
				id
			} : null;
		}
	} catch {
		return null;
	}
	return null;
}
function isHttpUrl(url) {
	try {
		const u = new URL(url.trim());
		return u.protocol === "http:" || u.protocol === "https:";
	} catch {
		return url.startsWith("data:image/");
	}
}
function embedSrc(url) {
	const parsed = parseVideoEmbed(url);
	if (!parsed) return null;
	if (parsed.provider === "youtube") return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(parsed.id)}`;
	return `https://player.vimeo.com/video/${encodeURIComponent(parsed.id)}`;
}
function MediaEmbed({ type, url, caption, className }) {
	if (!url.trim()) return null;
	if (type === "video") {
		const src = embedSrc(url);
		if (src) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			className: cn("overflow-hidden rounded-lg bg-bg-subtle", className),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative aspect-video w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					src,
					title: caption || "Video",
					className: "absolute inset-0 size-full",
					allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
					allowFullScreen: true
				})
			}), caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "px-3 py-2 text-xs text-muted",
				children: caption
			}) : null]
		});
	}
	if (!isHttpUrl(url) && !url.startsWith("data:image/")) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: cn("overflow-hidden rounded-lg bg-bg-subtle", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: url,
			alt: caption || "",
			className: "aspect-video w-full object-cover"
		}), caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "px-3 py-2 text-xs text-muted",
			children: caption
		}) : null]
	});
}
function CoverBlock({ title, industry, imageUrl }) {
	if (imageUrl && (isHttpUrl(imageUrl) || imageUrl.startsWith("data:image/"))) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: imageUrl,
		alt: "",
		className: "size-full object-cover"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex size-full flex-col justify-between bg-bg-subtle p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs tracking-widest text-muted uppercase",
			children: industry
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-2xl leading-tight text-fg",
			children: title
		})]
	});
}
function SiteFooter() {
	const name = usePortfolioStore((s) => s.content.name);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/studio",
				className: "text-sm text-muted hover:text-fg",
				children: "Manage content in Studio"
			})]
		})
	});
}
//#endregion
export { MediaEmbed as n, SiteFooter as r, CoverBlock as t };
