import type { Metadata, Viewport } from "next";
import { Montserrat, Newsreader } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

/**
 * Urth Mag uses Domaine (serif) + Gilroy (caps).
 * Domaine/Gilroy are commercial — we mirror with Newsreader (optical sizes ≈ Domaine)
 * and Montserrat (geometric sans ≈ Gilroy).
 * Specs from: https://magazine.urth.co
 */
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-gilroy",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-domaine",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${newsreader.variable} min-h-dvh bg-canvas font-sans text-ink`}
      >
        {children}
      </body>
    </html>
  );
}
