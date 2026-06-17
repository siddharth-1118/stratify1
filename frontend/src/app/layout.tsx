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
  title: "Stratify — Corporate AI Strategy Advisor",
  description: "AI-powered decision support platform that helps organizations evaluate AI investments, predict ROI, and generate executive-level strategy recommendations.",
  openGraph: {
    title: "Stratify — Corporate AI Strategy Advisor",
    description: "AI-powered decision support platform that helps organizations evaluate AI investments, predict ROI, and generate executive-level strategy recommendations.",
    url: "https://stratify-livid.vercel.app/",
    siteName: "Stratify",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stratify — Corporate AI Strategy Advisor",
    description: "AI-powered decision support platform that helps organizations evaluate AI investments, predict ROI, and generate executive-level strategy recommendations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
