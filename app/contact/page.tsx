import type { Metadata } from "next";
import ContactContent from "./component/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Tushar Negi for UI/UX design, brand design, web development, or consultation projects. Let's make something unforgettable together.",
  openGraph: {
    title: "Contact | Tushar Negi",
    description:
      "Get in touch for UI/UX design, brand design, web development, or consultation projects.",
    images: [
      {
        url: "/img/home-img.webp",
        width: 1200,
        height: 630,
        alt: "Contact Tushar Negi",
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
