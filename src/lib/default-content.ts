import type { SiteContent } from "./portfolio-types";

export const DEFAULT_CONTENT: SiteContent = {
  name: "Shedrack Ebete",
  headline: "I turn messy operations into reliable systems — and train teams to run them.",
  supportingLine:
    "Project & Operations Leader · Tech-enabled Trainer · 9 years across FMCG, consulting, fitness, and fashion.",
  intro:
    "I design operating systems, lead projects that actually finish, and train people so the work sticks. From factory floors to studios and brand teams, the pattern is the same: broken processes, under-trained teams, and tools that never quite get used.",
  about:
    "I started in FMCG operations, moved into marketing consulting, then into the fast-paced worlds of fitness and fashion. Across all of them, the same problems kept showing up: unclear ownership, firefighting instead of rhythm, and technology sitting unused.\n\nI focus on three things: designing and improving operational systems, leading cross-functional projects to completion, and training teams so the system survives without me.",
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
      id: "p-nextforge",
      title: "NextForge Academy",
      industry: "EdTech",
      role: "Founder & Full-Stack Developer",
      year: "",
      summary:
        "Full-stack Learning Management System platform built end to end — course delivery, payments, and video, deployed with CI/CD.",
      challenge:
        "Needed a self-hosted LMS that could handle course delivery, payments, and video without relying on a third-party platform.",
      action:
        "Built the backend on Node.js, Express, and SQLite, integrated Paystack for payments and JaaS for video, and shipped it to Northflank with a GitHub CI/CD pipeline.",
      result:
        "A working, deployed LMS platform powering NextForge Academy's course delivery.",
      tags: ["Tech"],
      media: [],
      links: [],
    },
    {
      id: "p-kolo",
      title: "Kolo",
      industry: "Fintech",
      role: "Founder & Developer",
      year: "",
      summary:
        "Goal-tracking and bank-linking app for Nigerian users, with open-banking integration for automatic savings tracking.",
      challenge:
        "Nigerian users lack simple tools that connect savings goals directly to their real bank activity.",
      action:
        "Scaffolded a Node.js and Express backend on Supabase, integrated Mono's open-banking API for bank linking, and built a full React UI with a dark navy design system.",
      result:
        "Backend and UI scaffolded; currently in development, not yet deployed.",
      tags: ["Tech"],
      media: [],
      links: [],
    },
    {
      id: "p-pmexam",
      title: "PM Foundations Exam Tool",
      industry: "EdTech / Training",
      role: "Developer",
      year: "",
      summary:
        "Web-based assessment tool for the PM Foundations curriculum, with a 68-question pool and automated results delivery.",
      challenge:
        "Codarhq's PM Foundations course needed a way for students to self-assess against a large, randomized question pool.",
      action:
        "Built and deployed a web assessment tool with a 68-question pool and EmailJS integration for results delivery, hosted on Netlify.",
      result:
        "Live assessment tool in use for the PM Foundations curriculum.",
      tags: ["Tech", "Training"],
      media: [],
      links: [{ id: "l-pmexam", label: "Live site", url: "https://pmexam.netlify.app" }],
    },
    {
      id: "p-cppl-ledger",
      title: "CPPL Staff Ledger",
      industry: "HR / Operations",
      role: "Developer",
      year: "",
      summary:
        "Staff record management system for Customer Passion Points Limited — employment details, documents, dashboards, and reminders.",
      challenge:
        "CPPL's staff records, certifications, and key dates lived across scattered documents with no central system.",
      action:
        "Built a React-based staff ledger backed by Google Sheets and Drive, with per-department and per-staff dashboards, document attachments, and reminders for birthdays and work anniversaries.",
      result:
        "An internal HR system giving CPPL centralized staff records and automatic reminders.",
      tags: ["Tech", "Operations"],
      media: [],
      links: [],
    },
    {
      id: "p-optiflow",
      title: "Optiflow Ops Solutions Website",
      industry: "Operations consulting",
      role: "Founder & Developer",
      year: "",
      summary:
        "Company website for Optiflow Ops Solutions Limited, built and deployed on a Node.js stack with navy/cyan branding.",
      challenge:
        "Optiflow needed a live web presence that reflected its operations-consulting brand.",
      action:
        "Designed and built the site on Node.js with a navy and cyan brand system.",
      result:
        "Live company site for Optiflow Ops Solutions.",
      tags: ["Tech", "Operations"],
      media: [],
      links: [{ id: "l-optiflow", label: "Live site", url: "https://optiflowops.online" }],
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
