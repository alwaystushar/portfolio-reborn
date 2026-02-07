import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Template from "@/app/component/Template";

import Header from "@/app/component/UI/header"; // ✅ Capital H
import Footer from "@/app/component/UI/Footer"; // ✅ Capital F
import { SmoothCursor } from "@/app/component/smooth";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tusharnegi.com"),
  title: {
    default: "Tushar Negi | Product Designer & Frontend Developer",
    template: "%s | Tushar Negi",
  },
  description:
    "I'm Tushar Negi, a Product Designer and Frontend Developer based in Delhi, India. I craft digital experiences that connect emotionally with users through UI/UX design, brand design, and web development.",
  keywords: [
    "Product Designer",
    "UI/UX Designer",
    "Frontend Developer",
    "Web Developer",
    "Brand Designer",
    "Delhi",
    "India",
    "Tushar Negi",
    "Portfolio",
    "Webflow",
    "Framer",
    "Next.js",
  ],
  authors: [{ name: "Tushar Negi" }],
  creator: "Tushar Negi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tusharnegi.com",
    siteName: "Tushar Negi",
    title: "Tushar Negi | Product Designer & Frontend Developer",
    description:
      "Crafting digital experiences that spark emotions. UI/UX Design, Brand Design, and Web Development.",
    images: [
      {
        url: "/img/home-img.webp",
        width: 1200,
        height: 630,
        alt: "Tushar Negi - Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tushar Negi | Product Designer & Frontend Developer",
    description:
      "Crafting digital experiences that spark emotions. UI/UX Design, Brand Design, and Web Development.",
    images: ["/img/home-img.webp"],
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
  icons: {
    icon: "/favicon-light.svg",
    apple: "/favicon-light.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} antialiased`}>
        <Providers>
          <SmoothCursor />
          <Template>
            <Header />
            {children}
                  <Footer />
          </Template>
        </Providers>
      </body>
    </html>
  );
}
