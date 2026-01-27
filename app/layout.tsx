import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { siteSeo } from "@/content/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: siteSeo.title,
    template: "%s | Spice Bank",
  },
  description: siteSeo.description,
  keywords: siteSeo.keywords,
  authors: [{ name: "Spice Bank" }],
  creator: "Spice Bank",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteSeo.url,
    siteName: "Spice Bank",
    title: siteSeo.title,
    description: siteSeo.description,
    images: [
      {
        url: siteSeo.ogImage,
        width: 1200,
        height: 630,
        alt: "Spice Bank",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteSeo.title,
    description: siteSeo.description,
  },
  icons: {
    icon: "/logo/spice_bank_logo.png",
    apple: "/logo/spice_bank_logo.png",
  },
  metadataBase: new URL(siteSeo.url),
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
