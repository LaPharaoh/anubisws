import type { Metadata } from "next";
import { Lexend_Deca, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import ScrollRevealInit from "./components/ScrollRevealInit";

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anubis Web Services — Premium Web Solutions",
  description:
    "Custom-built websites, powerful web applications, and data-driven SEO strategies. We design and maintain digital platforms that drive measurable growth.",
  openGraph: {
    title: "Anubis Web Services — Premium Web Solutions",
    description:
      "Custom-built websites, powerful web applications, and data-driven SEO strategies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lexendDeca.variable} ${inter.variable} ${ibmPlexMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ScrollRevealInit />
        {children}
      </body>
    </html>
  );
}
