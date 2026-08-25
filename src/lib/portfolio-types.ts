export const TAGS = ["Operations", "Tech", "Training", "Project Management"] as const;
export type Tag = (typeof TAGS)[number];

export type SiteLink = {
  id: string;
  label: string;
  url: string;
};

export type MediaItem = {
  id: string;
  type: "image" | "video";
  url: string;
  caption: string;
};

export type Project = {
  id: string;
  title: string;
  industry: string;
  role: string;
  year: string;
  summary: string;
  challenge: string;
  action: string;
  result: string;
  tags: Tag[];
  media: MediaItem[];
  links: SiteLink[];
};

export type ExpertiseColumn = {
  id: string;
  title: string;
  items: string[];
};

export type Stat = {
  id: string;
  value: string;
  label: string;
};

export type SiteContent = {
  name: string;
  headline: string;
  supportingLine: string;
  intro: string;
  about: string;
  photoUrl: string;
  stats: Stat[];
  journey: string[];
  expertise: ExpertiseColumn[];
  projects: Project[];
  contact: {
    email: string;
    linkedin: string;
    whatsapp: string;
    calendar: string;
    note: string;
  };
};
