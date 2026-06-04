export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  thumbnail: string;
  thumbnailAlt: string;
  /** 1–2 words, large yellow on cover */
  coverTheme: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-small-cameras-matter",
    title: "Why Small Cameras Matter",
    category: "Essay",
    date: "Apr 2025",
    excerpt: "Scale changes behavior — and behavior changes story.",
    coverTheme: "Scale · Body",
    thumbnail:
      "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?auto=format&fit=crop&w=1600&h=900&q=80",
    thumbnailAlt: "Compact camera on table",
  },
  {
    slug: "inside-ibc2025",
    title: "Inside IBC2025",
    category: "Field Notes",
    date: "Sep 2025",
    excerpt: "What a trade show teaches you about attention economics.",
    coverTheme: "Hall · Noise",
    thumbnail:
      "https://images.unsplash.com/photo-1504384308090-c54be3852f33?auto=format&fit=crop&w=1600&h=900&q=80",
    thumbnailAlt: "Convention center interior",
  },
  {
    slug: "emotion-of-leica-rendering",
    title: "The Emotion of Leica Rendering",
    category: "Image Culture",
    date: "Jan 2025",
    excerpt: "Rendering as mood — not spec sheets.",
    coverTheme: "Light · Skin",
    thumbnail:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&h=900&q=80",
    thumbnailAlt: "Street photograph mood",
  },
  {
    slug: "cinema-lenses-narrative",
    title: "How Cinema Lenses Shape Narrative",
    category: "Cinema",
    date: "Nov 2024",
    excerpt: "Distance, compression, and the ethics of closeness.",
    coverTheme: "Glass · Distance",
    thumbnail:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&h=900&q=80",
    thumbnailAlt: "Film production still",
  },
];
