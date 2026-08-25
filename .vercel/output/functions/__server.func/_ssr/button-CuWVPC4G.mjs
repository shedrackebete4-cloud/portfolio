import "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as usePortfolioStore } from "./router-Bqv0d4Ub.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function uid() {
	if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
	return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
var NAV = [
	{
		to: "/",
		hash: "work",
		label: "Work"
	},
	{
		to: "/",
		hash: "expertise",
		label: "Expertise"
	},
	{
		to: "/",
		hash: "about",
		label: "About"
	},
	{
		to: "/",
		hash: "contact",
		label: "Contact"
	}
];
function SiteHeader({ studio }) {
	const name = usePortfolioStore((s) => s.content.name);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border/80 bg-bg/85 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "truncate font-medium tracking-tight text-fg",
				children: name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex items-center gap-1 text-sm",
				children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					hash: item.hash,
					className: "hidden h-11 items-center px-3 text-muted hover:text-fg sm:flex",
					children: item.label
				}, item.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/studio",
					className: cn("flex h-11 items-center px-3", studio ? "text-fg" : "text-muted hover:text-fg"),
					children: "Studio"
				})]
			})]
		})
	});
}
function Badge({ className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full border border-border px-2.5 py-1 text-xs font-medium text-muted", className),
		children
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-fg text-bg hover:bg-fg/90",
			accent: "bg-accent text-accent-fg hover:bg-accent/90",
			outline: "border border-border bg-transparent text-fg hover:bg-bg-subtle",
			ghost: "text-fg hover:bg-bg-subtle",
			muted: "text-muted hover:text-fg hover:bg-bg-subtle",
			danger: "bg-danger text-fg hover:bg-danger/90"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-6",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
//#endregion
export { uid as a, cn as i, Button as n, SiteHeader as r, Badge as t };
