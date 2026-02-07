import type { Metadata } from "next";
import WorkListing from "@/app/work/component/WorkListing";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore my portfolio of UI/UX design, brand design, and web development projects. From product design to frontend development.",
  openGraph: {
    title: "Work | Tushar Negi",
    description:
      "Explore my portfolio of UI/UX design, brand design, and web development projects.",
    images: [
      {
        url: "/img/ramtan/ramtan.webp",
        width: 1200,
        height: 630,
        alt: "Tushar Negi - Work Portfolio",
      },
    ],
  },
};

export default function WorkPage() {
  return <WorkListing />;
}
