import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TachiMitsu — AI & Tech Portfolio",
  description:
    "TachiMitsu is an AI development studio. Portfolio of a Computer & Network Engineering student passionate about AI, networking, and software development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={lexend.variable}>{children}</body>
    </html>
  );
}
