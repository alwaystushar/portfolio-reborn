"use client";

import TextReveal from "@/app/component/TextReveal";

export default function About() {
  return (
    <section 
      className=" bg-[#f2f3f4] text-black"
    >
      <div className="grid girder w-full px-[4vw] lg:pt-[10vw] pt-[30vw] pb-[6vw]">
        <div className="col-span-12 lg:col-span-7">
          <TextReveal
            className="text-[8vw] leading-[1] lg:text-[3vw]"
            triggerOnScroll={true}
            waitForPageTransition={true}
          >
            About Me
          </TextReveal>
          <TextReveal
            className="mt-[1.2vw] max-w-[90vw] text-[3.5vw] text-black/70 italic sm:max-w-[70vw] lg:max-w-[28vw] lg:text-[0.8vw]"
            triggerOnScroll={true}
            waitForPageTransition={true}
            wrapperClassName="lg:max-w-[28vw]"
          >
            Officially a Product Designer. Secretly a Frontend Developer who judges your UI/UX.
            Fluent in two languages: Figma and slightly broken JavaScript.
          </TextReveal>
        </div>
      </div>
    </section>
  );
}
