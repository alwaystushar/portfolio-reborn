"use client";

import TextReveal from "@/app/component/TextReveal";
import ImageReveal from "@/app/component/ImageReveal";
import TransitionLink from "@/app/component/TransitionLink";

const workItems = [
	{
		title: "Tanmiah",
		subtitle: "UI/UX Design | Development",
		image: "/img/tanmiah/1.png",
		href: "/work/tanmiah",
	},
	{
		title: "ramtan",
		subtitle: "UI/UX Design | Development",
		image: "/img/ramtan/ramtan.webp",
		href: "/work/ramtan",
	},
	{
		title: "Stefani",
		subtitle: "Brand Identity | UI/UX Design | Development",
		image: "/img/stefani/0.jpg",
		href: "/work/stefani",
	},
];

export default function HomeWork() {
	return (
		<section className="bg-[#f2f3f4]">
			<div className="grid girder w-full gap-[7.5vw] lg:gap-[2.5vw] px-[4vw] lg:py-[6vw] py-[8vw]">
				<div className="col-span-12">
					<TextReveal
						className="text-[14vw] leading-none text-black lg:text-[2.4vw]"
						triggerOnScroll={true}
						waitForPageTransition={false}
					>
						Work
					</TextReveal>
				</div>

				<div className="col-span-12 grid grid-cols-1 gap-[7.5vw] lg:gap-[1.5vw] lg:grid-cols-12">
					<div className="lg:col-span-8">
						<TransitionLink href="/work" className="block">
							<div className="h-[55vw] overflow-hidden bg-[#d9d9d9] lg:h-[55vw]">
								<ImageReveal
									src="/img/secuirtyapp/0.png"
									alt="Work preview"
									dir="right"
									maskColor="#f2f3f4"
								/>
							</div>
						</TransitionLink>
						<div className="mt-[0.5vw] flex max-sm:flex-col items-start justify-between gap-[1vw]">
							<TextReveal
								className="text-[2.6vw] text-black lg:text-[0.9vw]"
								triggerOnScroll={true}
								waitForPageTransition={false}
							>
								Cyber Security
							</TextReveal>
							<TextReveal
								className="text-right text-[2.6vw] text-gray-600 lg:text-[0.9vw]"
								triggerOnScroll={true}
								waitForPageTransition={false}
							>
								Product Design
							</TextReveal>
						</div>
					</div>

					<div className="lg:col-span-4">
						<TransitionLink href="/work/decline" className="block">
							<div className="h-[55vw] overflow-hidden bg-[#d9d9d9] lg:h-[18vw] ">
								<ImageReveal
									src="/img/decline/1.jpg"
									alt="Work preview"
									dir="left"
									maskColor="#f2f3f4"
								/>
							</div>
						</TransitionLink>
						<div className="mt-[0.5vw] space-y-[0.2vw]">
							<TextReveal
								className="text-[2.6vw] text-black lg:text-[0.9vw]"
								triggerOnScroll={true}
								waitForPageTransition={false}
							>
								Decline
							</TextReveal>
							<TextReveal
								className="text-[2.6vw] text-gray-600 lg:text-[0.9vw]"
								triggerOnScroll={true}
								waitForPageTransition={false}
							>
								Product Design
							</TextReveal>
						</div>
					</div>
				</div>

				<div className="col-span-12 grid grid-cols-1 lg:gap-[1.5vw] gap-[7.5vw] lg:grid-cols-3">
					{workItems.map((item, index) => (
						<div key={`${item.title}-${index}`}>
							<TransitionLink href={item.href} className="block">
								<div className="h-[55vw] overflow-hidden bg-[#d9d9d9] lg:h-[18vw]">
									<ImageReveal
										src={item.image}
										alt="Work preview"
										dir="bottom"
										maskColor="#f2f3f4"
									/>
								</div>
							</TransitionLink>
							<div className="mt-[0.5vw] space-y-[0.2vw]">
								<TextReveal
									className="text-[2.6vw] text-black lg:text-[0.9vw]"
									triggerOnScroll={true}
									waitForPageTransition={false}
								>
									{item.title}
								</TextReveal>
								<TextReveal
									className="text-[2.6vw] text-gray-600 lg:text-[0.9vw]"
									triggerOnScroll={true}
									waitForPageTransition={false}
								>
									{item.subtitle}
								</TextReveal>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
