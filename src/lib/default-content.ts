import type { SiteContent } from "./portfolio-types";

export const DEFAULT_CONTENT: SiteContent = {
  name: "Shedrack Ebete",
  headline: "I turn messy operations into reliable systems — and train teams to run them.",
  supportingLine:
    "Project & Operations Leader · Tech-enabled Trainer · 9 years across FMCG, consulting, fitness, and fashion.",
  intro:
    "I design operating systems, lead projects that actually finish, and train people so the work sticks. From factory floors to studios and brand teams, the pattern is the same: broken processes, under-trained teams, and tools that never quite get used.",
  about:
    "I started in FMCG operations, moved into marketing consulting, then into the fast-paced worlds of fitness and fashion. Across all of them, the same problems kept showing up: unclear ownership, firefighting instead of rhythm, and technology sitting unused.\n\nI focus on three things: designing and improving operational systems, leading cross-functional projects to completion, and training teams so the system survives without me.\n\nThis site is a living portfolio. Replace the starter work below with your real projects, photos, videos, and links from Studio.",
  photoUrl: "",
  stats: [
    { id: "s1", value: "9 yrs", label: "Operational experience" },
    { id: "s2", value: "4", label: "Industries" },
    { id: "s3", value: "3", label: "Levers: ops, tech, training" },
  ],
  journey: ["FMCG", "Marketing consulting", "Fitness", "Fashion"],
  expertise: [
    {
      id: "e1",
      title: "Operations",
      items: [
        "Process design and optimization",
        "Cross-functional leadership",
        "Scaling day-to-day operations",
        "Vendor and stakeholder management",
      ],
    },
    {
      id: "e2",
      title: "Tech & tools",
      items: [
        "Project systems and delivery tools",
        "Automation of repeatable work",
        "Data-informed operating reviews",
        "Digital tool adoption",
      ],
    },
    {
      id: "e3",
      title: "Training",
      items: [
        "Curriculum and playbook design",
        "Workshop facilitation",
        "Team capability building",
        "Coaching and enablement",
      ],
    },
  ],
  projects: [
    {
      id: "p-fmcg",
      title: "Operating cadence for a fragmented FMCG team",
      industry: "FMCG",
      role: "Operations lead",
      year: "Starter",
      summary:
        "Replaced daily firefighting with a simple operating rhythm across warehouse, sales, and merchandising.",
      challenge:
        "Handoffs between warehouse, sales, and merchandising were informal. Issues surfaced late, and supervisors ran the day from memory.",
      action:
        "Mapped the end-to-end flow, introduced a short daily and weekly cadence, and trained supervisors to run the board without escalation.",
      result:
        "Clearer ownership, fewer last-minute surprises, and a playbook the team could follow. Replace this starter story with your real numbers.",
      tags: ["Operations", "Training", "Project Management"],
      media: [],
      links: [],
    },
    {
      id: "p-consulting",
      title: "Delivery system for a marketing consultancy",
      industry: "Marketing consulting",
      role: "Project & operations",
      year: "Starter",
      summary:
        "Turned ad-hoc client work into a repeatable delivery system with checkpoints, owners, and a shared toolkit.",
      challenge:
        "Projects lived in inboxes. Scope drifted, status was tribal knowledge, and new joiners took too long to become useful.",
      action:
        "Designed a lightweight project spine, standardized briefs and reviews, and trained consultants on the tools so delivery was visible.",
      result:
        "More predictable delivery and faster onboarding. Edit this card with a real client-safe case study.",
      tags: ["Project Management", "Tech", "Training"],
      media: [],
      links: [],
    },
    {
      id: "p-fitness",
      title: "Studio operations and coach enablement",
      industry: "Fitness",
      role: "Operations & trainer",
      year: "Starter",
      summary:
        "Scaled studio operations while training coaches to deliver a consistent member experience.",
      challenge:
        "Growth outpaced process. Class quality varied by coach, and floor operations depended on a few people.",
      action:
        "Documented the member journey, built simple SOPs, and ran practical training so coaches could own the floor.",
      result:
        "More consistent sessions and a team that could run a busy day without constant supervision. Swap in your studio story.",
      tags: ["Operations", "Training"],
      media: [],
      links: [],
    },
    {
      id: "p-fashion",
      title: "Fashion operations, inventory, and team training",
      industry: "Fashion",
      role: "Operations lead",
      year: "Starter",
      summary:
        "Brought order to product flow and trained the team to run stock, floor, and vendor work as one system.",
      challenge:
        "Stock, floor, and vendor communication ran on chat threads. Stockouts and last-minute scrambles were normal.",
      action:
        "Set a simple inventory and floor rhythm, introduced shared trackers, and trained the team on the new way of working.",
      result:
        "Tighter stock visibility and a calmer floor. Replace with a real collection, season, or store story — photos and video welcome.",
      tags: ["Operations", "Tech", "Training"],
      media: [],
      links: [],
    },
  ],
  contact: {
    email: "",
    linkedin: "",
    whatsapp: "",
    calendar: "",
    note: "Open to project leadership, operations consulting, and training engagements.",
  },
};
