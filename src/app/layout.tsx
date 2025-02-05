import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ListBestProduct - AI-Powered Product Recommendations",
  description:
    "Discover the best products with expert AI analysis and direct buying links",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="corporate">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
