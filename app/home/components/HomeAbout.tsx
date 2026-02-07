'use client';

import TextReveal from '@/app/component/TextReveal';
import ImageReveal from '@/app/component/ImageReveal';

export default function HomeAbout() {
  return (
    <section className="relative bg-[#f2f3f4]">
      <div className="grid girder w-full gap-[4vw] px-[4vw] pt-[8vw] pb-[2vw]">
        <div className="col-span-12 lg:col-span-7">
          <TextReveal
            className="text-[4.6vw] leading-[1.1] text-black sm:text-[3vw] lg:text-[1.8vw]"
            triggerOnScroll={true}
            waitForPageTransition={false}
          >
          
              Hi, I am Tushar Negi, a Product & UI/UX Designer crafting fast, scalable digital experiences that seamlessly blend creativity with engineering precision.
            
          </TextReveal>


          <div className="lg:mt-[2.5vw] mt-[3.5vw] grid grid-cols-1 gap-[2vw] lg:grid-cols-12">
            <TextReveal
              className="text-[2.6vw] text-gray-600  lg:text-[1.2vw] lg:col-span-6"
              triggerOnScroll={true}
              waitForPageTransition={false}
              wrapperClassName="lg:col-span-6"
            >
            
Driving measurable growth and engagement through thoughtful design and engineering.              
            </TextReveal>
            <TextReveal
              className="text-[2.6vw] text-gray-600 sm:text-[1.7vw] lg:text-[0.85vw] lg:col-span-6"
              triggerOnScroll={true}
              waitForPageTransition={false}
               wrapperClassName="lg:col-span-6"
            >
            
Every product I build starts with understanding user goals and translating them into intuitive, high-performance experiences. From concept to launch, I focus on meaningful results—boosting user engagement, retention, and overall business impact.              
            </TextReveal>
          </div>

          <div className="lg:mt-[3vw] mt-[6vw] grid  grid-cols-1 gap-[2vw] lg:grid-cols-3">
            <div className='max-sm:flex flex-row items-end gap-[2vw]'>
              <TextReveal
                className=" text-black text-[8vw] lg:text-[2.8vw]"
                triggerOnScroll={true}
                waitForPageTransition={false}
              >
                <span>2+</span>
              </TextReveal>
              <TextReveal
                className="text-[2.4vw] text-gray-600 sm:text-[1.6vw] lg:text-[0.8vw]"
                triggerOnScroll={true}
                waitForPageTransition={false}
              >
                <span>Years Experience</span>
              </TextReveal>
            </div>

          </div>
          <div className="lg:mt-[3vw] mt-[6vw] grid grid-cols-1 gap-[2vw] lg:grid-cols-12">
            <TextReveal
              wrapperClassName="lg:col-span-3"
              className="text-[2.4vw] text-gray-600 sm:text-[1.6vw] lg:text-[0.8vw]"
              triggerOnScroll={true}
              waitForPageTransition={false}
            >
              <span>Design and code <br className='max-sm:hidden' /> with concept</span>
            </TextReveal>
            <TextReveal
              wrapperClassName="lg:col-span-3"
              className="text-[2.4vw] text-gray-600 sm:text-[1.6vw] lg:text-[0.8vw]"
              triggerOnScroll={true}
              waitForPageTransition={false}
            >
              <span>Digital by <br className='max-sm:hidden' /> nature</span>
            </TextReveal>
            <TextReveal
              wrapperClassName="lg:col-span-6"
              className="text-[2.4vw] text-gray-600 sm:text-[1.6vw] lg:text-[0.8vw]"
              triggerOnScroll={true}
              waitForPageTransition={false}
            >
              I collaborate closely with teams on every project, bringing strategic thinking, technical knowledge, and an adaptive approach tailored to each brand’s goals.
            </TextReveal>
          </div>
        </div>

        <div className="col-span-12 mt-[4vw] lg:col-span-5 lg:mt-0">
          <div className="h-[70vw] w-full sm:h-[50vw] lg:h-[28vw]">
            <ImageReveal
              src="/img/mypic-home.webp"
              alt="Profile"
              dir="left"
              maskColor="var(--color-white)"
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
