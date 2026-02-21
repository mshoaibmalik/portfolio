import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Shoaib Malik - Software Engineering Student Portfolio",
  description: "Software Engineering student specializing in modern web development with React, Next.js, and TypeScript. Building innovative solutions and exceptional user experiences.",
  keywords: ["Software Engineer", "Web Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Muhammad Shoaib Malik" }],
  openGraph: {
    title: "Muhammad Shoaib Malik - Software Engineering Portfolio",
    description: "Software Engineering student specializing in modern web development",
    type: "website",
    url: "https://yourportfolio.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Shoaib Malik Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Shoaib Malik - Software Engineering Portfolio",
    description: "Software Engineering student specializing in modern web development",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
