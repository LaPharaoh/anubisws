import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ScrollRevealInit from "./components/ScrollRevealInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ScrollRevealInit />
        {children}
      </body>
    </html>
  );
}
