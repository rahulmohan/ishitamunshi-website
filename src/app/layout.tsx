import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ishita Munshi | Psychology Doctoral Student",
  description: "Ph.D. Candidate in Developmental Psychology at Wayne State University. Research focused on adolescent relationships, dating violence, and developmental outcomes.",
  keywords: ["psychology", "psychology", "research", "dating violence", "adolescent development", "Wayne State University"],
  authors: [{ name: "Ishita Munshi" }],
  openGraph: {
    title: "Ishita Munshi | Psychology Doctoral Student",
    description: "Ph.D. Candidate in Developmental Psychology at Wayne State University",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${inter.variable} antialiased noise`}
      >
        {children}
      </body>
    </html>
  );
}
