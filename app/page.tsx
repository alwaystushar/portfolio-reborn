import type { Metadata } from "next";
import Home from "@/app/home/page";

export const metadata: Metadata = {
  title: "Tushar Negi | Product Designer & Frontend Developer",
  description:
    "I'm Tushar Negi, a Product Designer and Frontend Developer. I design digital products that go beyond usability—creating experiences that connect emotionally with users.",
};

export default function Page() {
  return <Home />;
}