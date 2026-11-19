import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "ELDAPLUS Technologies | Software Solutions & Consultancy",
  description:
    "ELDAPLUS TECHNOLOGIES LIMITED delivers innovative software solutions, modern web platforms, intelligent business automation, and strategic technology consultancy in Kenya.",
  keywords: [
    "ELDAPLUS Technologies",
    "Software Solutions Kenya",
    "Technology Consultancy Nairobi",
    "Custom Software Development",
    "Business Automation",
    "Web Development Kenya",
    "Digital Transformation Africa",
  ],
  authors: [{ name: "ELDAPLUS TECHNOLOGIES LIMITED" }],
  creator: "ELDAPLUS TECHNOLOGIES LIMITED",
  publisher: "ELDAPLUS TECHNOLOGIES LIMITED",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "ELDAPLUS Technologies | Software Solutions & Consultancy",
    description:
      "Technology That Moves Businesses Forward. Enterprise software development, web platforms, and digital consultancy registered in Kenya.",
    url: "https://eldaplus.co.ke",
    siteName: "ELDAPLUS TECHNOLOGIES LIMITED",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELDAPLUS Technologies | Software Solutions & Consultancy",
    description:
      "Technology That Moves Businesses Forward. Enterprise software development, web platforms, and digital consultancy registered in Kenya.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="min-h-screen bg-[#111111] text-white selection:bg-[#2997FF]/30 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
