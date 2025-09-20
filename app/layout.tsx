import { RightSidebar } from "@/components/layout/left-sidebar";
import SocialMediaMenu from "@/components/ui/social-media-menu";
import { Analytics } from "@vercel/analytics/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sudesh Sachintha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <RightSidebar />
        {children}
        <SocialMediaMenu />
        <Analytics />
      </body>
    </html>
  );
}
