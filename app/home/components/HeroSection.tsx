'use client';
import TransitionLink from '@/app/component/TransitionLink';
import TextReveal from '@/app/component/TextReveal';
import Button from '@/app/component/Button';
import { ArrowUpRight } from 'lucide-react';
export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen overflow-hidden bg-[#f7f8f9] isolate"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video/intro-video-light.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-white/0" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid lg:min-h-screen h-[100vh] w-full grid-cols-1 items-start gap-[4vw] px-[4vw] lg:pt-[10vw] pt-[30vw] pb-[6vw] sm:pt-[8vw] lg:grid-cols-12 lg:pb-[3vw]">
        <div className="lg:col-span-7 lg:order-1 order-2 self-end text-black">
          <TextReveal 
            className="text-balance lg:text-[3vw] leading-tight text-black text-[8vw] "
            triggerOnScroll={false}
            waitForPageTransition={true}
            duration={1.5}
            stagger={0.12}
          >
            Crafting experience that sparks emotions.
          </TextReveal>

          <TextReveal 
            className="lg:mt-[1vw] mt-[4vw] max-w-[90vw] text-[3.4vw] leading-[1.6vw] text-gray-700 sm:max-w-[70vw] sm:text-[2.4vw] lg:max-w-[28vw] lg:text-[0.8vw]"
            delay={0.4}
            triggerOnScroll={false}
            waitForPageTransition={true}
            duration={1.2}
          >
            Hi, I’m Tushar Negi. I design digital products that go beyond usability—creating experiences that connect emotionally with users. By blending UX strategy, refined interface design, and a deep understanding of user behavior, I craft experiences that feel intuitive, meaningful, and memorable. Every interaction is intentional, ensuring the product not only works seamlessly but also leaves a lasting impression.
          </TextReveal>

          <div className="lg:mt-[2vw] mt-[6vw] flex items-end ">
            <TextReveal
              className="lg:text-[2.5vw] text-[8vw] text-black"
              delay={0.2}
              triggerOnScroll={false}
              waitForPageTransition={true}
              duration={1.1}
            >
              45+
            </TextReveal>
            <TextReveal
              className="text-[2.6vw] text-gray-700 sm:text-[1.6vw] lg:text-[0.8vw]"
              delay={0.3}
              triggerOnScroll={false}
              waitForPageTransition={true}
              duration={1.1}
            >
              Projects Delivered
            </TextReveal>
          </div>
        </div>


        <div className="lg:col-span-3 lg:col-start-10 lg:order-2 order-1 self-start">
          <div className="space-y-[6vw] text-[2.8vw] sm:text-[2.2vw] lg:text-[0.95vw]">
            <div>
              <ul className="space-y-[1vw] lg:text-start text-end sm:space-y-[0.6vw] lg:space-y-[0.2vw]">
                <li><TextReveal triggerOnScroll={false} waitForPageTransition={true} duration={1.1}>Project Design</TextReveal></li>
                <li><TextReveal triggerOnScroll={false} waitForPageTransition={true} duration={1.1}>UI/UX Design</TextReveal></li>
                <li><TextReveal triggerOnScroll={false} waitForPageTransition={true} duration={1.1}>Brand Design</TextReveal></li>
                <li><TextReveal triggerOnScroll={false} waitForPageTransition={true} duration={1.1}>Frontend Development</TextReveal></li>
                <li><TextReveal triggerOnScroll={false} waitForPageTransition={true} duration={1.1}>Webflow Development</TextReveal></li>
                <li><TextReveal triggerOnScroll={false} waitForPageTransition={true} duration={1.1}>Framer Development</TextReveal></li>
                <li><TextReveal triggerOnScroll={false} waitForPageTransition={true} duration={1.1}>Shopify Development</TextReveal></li>
                <li><TextReveal triggerOnScroll={false} waitForPageTransition={true} duration={1.1}>WordPress Development</TextReveal></li>
              </ul>
            </div>

            <div>
              <TextReveal
                className="mb-[0.6vw] text-[2.4vw] uppercase tracking-[0.2vw] sm:text-[1.4vw] lg:text-[0.75vw]"
                triggerOnScroll={false}
                waitForPageTransition={true}
                duration={1.1}
              >
                Recent work
              </TextReveal>
              <div className="overflow-hidden border-[0.2vw] border-white bg-white lg:w-full w-[80vw]">
                <div className="h-[48vw] w-full overflow-hidden lg:h-[10vw]">
                  <img
                    src="/img/ramtan.png"
                    alt="Recent work preview"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-[0.3vw] p-[0.4vw]">
                  <TextReveal
                    className="text-[2.4vw] text-gray-500 sm:text-[1.6vw] lg:text-[0.75vw]"
                    triggerOnScroll={false}
                    waitForPageTransition={true}
                    duration={1.1}
                  >
                    Exhibitions & Conferences in Saudi Arabia
                  </TextReveal>
                  <TransitionLink
                    href="/work"
                    variant="light"
                    textClassName="inline-flex items-center gap-[0.3vw]"
                    className="gap-[0.3vw] text-[2.4vw] text-black sm:text-[1.6vw] lg:text-[0.75vw]"
                  >
                    <span>See the Work</span>
                    <ArrowUpRight className="h-[2.4vw] w-[2.4vw] sm:h-[1.6vw] sm:w-[1.6vw] lg:h-[0.75vw] lg:w-[0.75vw]" aria-hidden="true" />
                  </TransitionLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
