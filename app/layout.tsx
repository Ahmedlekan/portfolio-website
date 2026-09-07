import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const title = "Ahmed | DevOps & Cloud Engineer";
const description = "DevOps and cloud engineering portfolio of Ahmed, based in Canada. Explore AWS and Azure infrastructure, Terraform automation, CI/CD, and Kubernetes projects.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: process.env.SITE_URL ? new URL(process.env.SITE_URL) : undefined,
  alternates: process.env.SITE_URL ? { canonical: "/" } : undefined,
  applicationName: "Ahmed's Portfolio",
  authors: [{ name: "Ahmed" }],
  icons: { icon: "/icon.svg" },
  openGraph: { title, description, type: "website", locale: "en_CA" },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
