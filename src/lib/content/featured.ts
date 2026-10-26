export type FeaturedProject = {
  slug: string;
  title: string;
  category: string;
  year: string;
  href: string;
  image: string;
  imageAlt: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "tokyo-nights",
    title: "Tokyo Nights",
    category: "Photography",
    year: "2025",
    href: "/portfolio#tokyo-nights",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e88f0a1d?auto=format&fit=crop&w=2000&q=80",
    imageAlt: "Night city lights in Tokyo",
  },
  {
    slug: "simera-c",
    title: "Simera-C Campaign",
    category: "Brand Campaign",
    year: "2025",
    href: "/project/thypoch-simera",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=2000&q=80",
    imageAlt: "Cinematic lens detail",
  },
  {
    slug: "leica-street",
    title: "Leica Street Diary",
    category: "Documentary",
    year: "2024",
    href: "/portfolio#leica-street-diary",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=80",
    imageAlt: "Rainy street photography",
  },
  {
    slug: "ibc-amsterdam",
    title: "IBC Amsterdam",
    category: "Exhibition & Events",
    year: "2025",
    href: "/project/thypoch-voyager",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=2000&q=80",
    imageAlt: "Event lighting and crowd",
  },
];
