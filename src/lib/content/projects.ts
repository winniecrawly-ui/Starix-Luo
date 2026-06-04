export type ProjectCategory =
  | "Brand Campaign"
  | "Exhibition & Events"
  | "Product Launch"
  | "Creative Direction";

export type ProjectCase = {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  heroImage: string;
  heroAlt: string;
  role: string;
  background: string;
  responsibilities: string[];
  deliverables: string[];
  outcome: string;
};

export const projectCases: ProjectCase[] = [
  {
    slug: "thypoch-simera-c-launch",
    title: "Thypoch Simera-C Launch",
    category: "Product Launch",
    year: "2025",
    heroImage:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=2200&q=80",
    heroAlt: "Cinematic lens product",
    role: "Global GTM / Creative Marketing",
    background:
      "A global launch narrative for a compact cinema prime — balancing craft heritage with modern creator culture.",
    responsibilities: [
      "Campaign architecture & narrative spine",
      "KOL collaboration and content systems",
      "Launch communication across regions",
      "Exhibition strategy and on-site storytelling",
    ],
    deliverables: [
      "Key visual direction",
      "Launch film & stills suite",
      "Social & editorial assets",
      "Event playbook & booth narrative",
    ],
    outcome:
      "A cohesive launch world that reads premium on the floor and sharp in feed — built for long-term brand equity, not one-week noise.",
  },
  {
    slug: "ibc-amsterdam",
    title: "IBC Amsterdam",
    category: "Exhibition & Events",
    year: "2025",
    heroImage:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=2200&q=80",
    heroAlt: "Conference hall lighting",
    role: "Creative Direction / Brand Experience",
    background:
      "High-density trade show environment — the goal was clarity: one story, one walk, one memory.",
    responsibilities: [
      "Visitor journey mapping",
      "On-site visual hierarchy",
      "Content loops for demos",
      "Partner alignment workshops",
    ],
    deliverables: [
      "Spatial storytelling guidelines",
      "Demo film direction",
      "Photography coverage plan",
      "Press-ready narrative kit",
    ],
    outcome:
      "A quieter, more editorial presence inside a loud hall — premium restraint that still reads from a distance.",
  },
];
