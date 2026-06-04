export type PhotoCategory =
  | "Documentary"
  | "Portrait"
  | "Cinema Stills"
  | "Commercial";

export type PhotoStory = {
  id: string;
  title: string;
  location: string;
  year: string;
  story: string;
  category: PhotoCategory;
  image: string;
  imageAlt: string;
};

export const photoStories: PhotoStory[] = [
  {
    id: "tokyo-nights",
    title: "Tokyo Nights",
    location: "Tokyo",
    year: "2025",
    story:
      "A visual diary captured across Shinjuku and Ginza — neon, rain and quiet corridors.",
    category: "Documentary",
    image:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=2000&q=80",
    imageAlt: "Tokyo street at night",
  },
  {
    id: "leica-street-diary",
    title: "Leica Street Diary",
    location: "Hong Kong",
    year: "2024",
    story:
      "Slow walks, hard light, and the rhythm of strangers crossing frame.",
    category: "Documentary",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80",
    imageAlt: "Mountain landscape at golden hour",
  },
  {
    id: "portrait-01",
    title: "Quiet Portraits",
    location: "Shenzhen",
    year: "2025",
    story: "Minimal studio light with one intention: keep the gaze honest.",
    category: "Portrait",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Portrait in soft light",
  },
  {
    id: "cinema-stills-01",
    title: "On Set — Blue Hour",
    location: "Shenzhen",
    year: "2024",
    story: "Stills from a short film about distance, memory and tide.",
    category: "Cinema Stills",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2000&q=80",
    imageAlt: "Cinema camera on set",
  },
  {
    id: "commercial-01",
    title: "Monochrome Product Study",
    location: "Studio",
    year: "2025",
    story: "A restrained commercial series built from texture and shadow.",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=2000&q=80",
    imageAlt: "Minimal product on dark surface",
  },
];

export const photoCategories: PhotoCategory[] = [
  "Documentary",
  "Portrait",
  "Cinema Stills",
  "Commercial",
];
