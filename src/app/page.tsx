import type { Metadata } from "next";
import { HomeEditorialGallery } from "@/components/home/HomeEditorialGallery";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Starix Luo — photographer, cinematographer and creative marketer. Visual storytelling across photography, cinema and brand experience.",
};

export default function HomePage() {
  return <HomeEditorialGallery />;
}
