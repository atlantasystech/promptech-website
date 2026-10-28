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
  title: "Promptech | Open Source Software Customization, Digital Marketing & Offshore Development",
  description: "Promptech provides reliable IT services: practical open-source customization, focused digital marketing, and dedicated offshore developers. Transparent scopes, realistic timelines, and sensible rates.",
  keywords: [
    "Promptech",
    "Open Source Software Customization",
    "Digital Marketing Services",
    "Offshore Development",
    "IT Services",
    "ERPNext Setup",
    "Odoo Customization",
    "Dedicated Remote Developers",
    "Search Engine Optimization",
    "Web Application Development"
  ],
  authors: [{ name: "Promptech IT Services" }],
  openGraph: {
    title: "Promptech | Practical IT Services & Offshore Development",
    description: "Reliable IT execution for growing businesses. Open-source software customization, data-driven digital marketing, and dedicated offshore developers.",
    url: "https://promptech.services",
    siteName: "Promptech",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0b0f19] text-[#f8fafc]">{children}</body>
    </html>
  );
}
