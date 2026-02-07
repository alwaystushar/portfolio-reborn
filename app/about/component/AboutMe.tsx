"use client";

import TextReveal from "@/app/component/TextReveal";
import ImageReveal from "@/app/component/ImageReveal";

export default function AboutMe() {
	return (
		<section className="bg-[#f2f3f4] text-black">
				<div className="grid girder  w-full lg:pl-[4vw] lg:pt-[4vw] pt-[6vw] ">
						<div className="lg:col-span-7 max-sm:p-[4vw] col-span-12">
							<TextReveal
								className="text-[4vw] leading-[1.5] text-black/80 lg:text-[1.9vw]"
								triggerOnScroll={true}
								waitForPageTransition={true}
							>
								I don’t just design pixels—I collaborate closely, overthink the details (so users don’t have to),
								and politely question bad UX decisions when they appear. I believe great products are built through
								honest conversations, strong teams, and just the right amount of creative chaos.
							</TextReveal>
							<TextReveal
								className="mt-[2vw] text-[4vw] leading-[1.5] text-black/80 lg:text-[1.9vw]"
								triggerOnScroll={true}
								waitForPageTransition={true}
							>
								I learn fast, adapt faster, and continuously refine my work until the experience feels right—not just
								visually polished, but genuinely intuitive and meaningful. My focus is always on building products people
								enjoy using and teams are proud to ship.
							</TextReveal>
						</div>
						<div className="lg:col-span-5 col-span-12">
							<div className="h-[70vh] w-full overflow-hidden bg-[#e6e6e6] sm:h-[60vw] lg:h-[100vh]">
								<ImageReveal
									src="/img/mypic-about.webp"
									alt="About me"
									dir="left"
									maskColor="#f2f3f4"
								/>
							</div>
						</div>
				</div>
		</section>
	);
}
