import type { Metadata } from "next";
import About from "./component/About";
import AboutMarquee from "./component/AboutMarquee";
import AboutMe from "./component/AboutMe";
import AboutSkills from "./component/AboutSkills";
import Inventions from "./component/Inventions";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Tushar Negi - a Product Designer and Frontend Developer based in Delhi, India. Officially a designer, secretly a developer who judges your UI/UX.",
  openGraph: {
    title: "About | Tushar Negi",
    description:
      "Learn about Tushar Negi - a Product Designer and Frontend Developer based in Delhi, India.",
    images: [
      {
        url: "/img/mypic-about.webp",
        width: 1200,
        height: 630,
        alt: "Tushar Negi - About",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <About />
      <AboutMarquee />
      <AboutMe />
      <AboutSkills />
      <Inventions />
    </>
  );
}
