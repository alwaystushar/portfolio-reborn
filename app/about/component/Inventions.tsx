"use client";

import TextReveal from "@/app/component/TextReveal";
import ImageReveal from "@/app/component/ImageReveal";
import TransitionLink from "@/app/component/TransitionLink";

const items = [
	{
		title: "MTFI",
		subtitle: "UI/UX Design | Development | Brand Identity",
		image: "/img/mtfi/1.jpg",
		href: "/work",
	},
	{
		title: "Decline",
		subtitle: "Product Designer | Development",
		image: "/img/decline/1.jpg",
		href: "/work",
	},
	{
		title: "Stefani",
		subtitle: "Brand Identity | UI/UX | Development",
		image: "/img/stefani/0.jpg",
		href: "/work",
	},
];

export default function Inventions() {
	return (
		<section className="bg-[#f2f3f4] text-black">
			<div className="grid girder w-full px-[4vw] lg:pt-[4vw] pt-[8vw] pb-[6vw]">
				<div className="col-span-12">
					<TextReveal
						className="text-[12vw] leading-none text-black lg:text-[2.6vw]"
						triggerOnScroll={true}
						waitForPageTransition={true}
					>
						Inventions
					</TextReveal>
				</div>

				<div className="col-span-12 mt-[4vw] grid grid-cols-1 lg:gap-[1vw] gap-[4vw] lg:grid-cols-3">
					{items.map((item, index) => (
						<div key={`${item.title}-${index}`}>
							<TransitionLink href={item.href} className="block">
								<div className="h-[54vw] overflow-hidden bg-[#d9d9d9] lg:h-[18vw]">
									<ImageReveal
										src={item.image}
										alt="Invention preview"
										dir="bottom"
										maskColor="#f2f3f4"
									/>
								</div>
							</TransitionLink>
							<div className="mt-[1.2vw] space-y-[0.6vw]">
								<TextReveal
									className="text-[2.8vw] text-black lg:text-[0.9vw]"
									triggerOnScroll={true}
									waitForPageTransition={true}
								>
									{item.title}
								</TextReveal>
								<TextReveal
									className="text-[2.6vw] text-gray-600 lg:text-[0.85vw]"
									triggerOnScroll={true}
									waitForPageTransition={true}
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
