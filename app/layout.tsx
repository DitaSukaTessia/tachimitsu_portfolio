import type { Metadata, Viewport } from "next";
import { Lexend, Space_Grotesk } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TachiMitsu — AI & Tech Studio",
  description:
    "TachiMitsu is an AI development studio. Portfolio of a Computer & Network Engineering student passionate about AI, networking, and software development.",
  keywords: [
    "TachiMitsu",
    "AI",
    "Machine Learning",
    "Networking",
    "Portfolio",
    "Software Development",
  ],
  authors: [{ name: "TachiMitsu" }],
  openGraph: {
    title: "TachiMitsu — AI & Tech Studio",
    description:
      "An AI development studio exploring the frontier of code, networks, and intelligence.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#06070d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${lexend.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
