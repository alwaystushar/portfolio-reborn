"use client";

import TextReveal from "@/app/component/TextReveal";

const whatImInto = [
	{
		title: "Project Design",
		desc: "Organize chaos so everyone pretends it was the plan all along.",
	},
	{
		title: "UI/UX Design",
		desc: "Fix confusing interfaces and quietly judge the ones that stay confusing.",
	},
	{
		title: "Brand Design",
		desc: "Give brands a personality that doesn’t feel like everyone else’s.",
	},
	{
		title: "Frontend Development",
		desc: "Make designs work in real browsers, not just Figma fantasies.",
	},
	{
		title: "WebFlow Development",
		desc: "Fast sites clients can edit without calling me every 10 minutes.",
	},
	{
		title: "Framer Development",
		desc: "Smooth animations that feel intentional, not like a tech demo.",
	},
	{
		title: "Shopify Development",
		desc: "Stores designed to convert, not emotionally overwhelm shoppers.",
	},
	{
		title: "WordPress Development",
		desc: "Powerful sites, carefully avoiding plugin-induced nightmares.",
	},
	{
		title: "Play Games",
		desc: "With layouts, interactions, and ideas... not deadlines (usually).",
	},
];

const weapons = [
	{
		title: "Figma",
		desc: "Where pixels, opinions, comments, and quick changes live forever.",
	},
	{
		title: "Adobe Illustrator",
		desc: "Logos, icons, and vector magic that scales without crying.",
	},
	{
		title: "Adobe Photoshop",
		desc: "Fixing pixels one questionable decision at a time.",
	},
	{
		title: "Adobe InDesign",
		desc: "Layouts that respect typography and silently judge bad spacing.",
	},
	{
		title: "React.js",
		desc: "Building interfaces that behave... until they don’t.",
	},
	{
		title: "Next.js",
		desc: "Fast, scalable apps and fewer “why is this slow” moments.",
	},
	{
		title: "GSAP",
		desc: "Animations with intent, not accidental roller coasters.",
	},
	{
		title: "Framer Motion",
		desc: "Smooth transitions that make interfaces feel smarter than they are.",
	},
	{
		title: "Rive",
		desc: "Interactive motion without sacrificing sanity to keyframes.",
	},
	{
		title: "Notion",
		desc: "Ideas, tasks, half-finished plans, and controlled chaos.",
	},
	{
		title: "YT Music",
		desc: "Powering late-night design decisions and debugging sessions.",
	},
];

export default function AboutSkills() {
	return (
		<section className="bg-[#0b0b10] text-white">
			<div className="grid girder w-full px-[4vw] pt-[8vw] pb-[8vw]">
				<div className="col-span-12 grid grid-cols-1 gap-[6vw] lg:grid-cols-12">
					<div className="lg:col-span-4">
						<TextReveal
							className="text-[7vw] leading-[1.05] lg:text-[2.4vw]"
							triggerOnScroll={true}
							waitForPageTransition={true}
						>
							How I
							<br />
							Do It !
						</TextReveal>
					</div>

					<div className="lg:col-span-8">
						<TextReveal
							className="text-[3.2vw] leading-[1.5] text-white/80 lg:text-[1.6vw]"
							triggerOnScroll={true}
							waitForPageTransition={true}
						>
							I ask why a lot, question bad ideas politely and obsess over details so users don’t have to. I design,
							break things, fix them, and repeat—until it feels right. If it works, I make it better.
						</TextReveal>

						<div className="lg:mt-[5vw] mt-[12vw] grid grid-cols-1 gap-[8vw] lg:grid-cols-2 lg:gap-[4vw]">
							<div>
								<TextReveal
									className="text-[11vw] text-white lg:text-[1.1vw]"
									triggerOnScroll={true}
									waitForPageTransition={true}
								>
									What I’m Into
								</TextReveal>
								<div className="mt-[4.6vw] lg:mt-[2.6vw] divide-y divide-white/10">
									{whatImInto.map((item) => (
										<div key={item.title} className="lg:py-[1.8vw] py-[2.8vw]">
											<TextReveal
												className="text-[5.2vw] text-white lg:text-[0.95vw]"
												triggerOnScroll={true}
												waitForPageTransition={true}
											>
												{item.title}
											</TextReveal>
											<TextReveal
												className="lg:mt-[0.8vw] mt-[2.4vw] text-[2.8vw] text-white/50 lg:text-[0.75vw]"
												triggerOnScroll={true}
												waitForPageTransition={true}
											>
												{item.desc}
											</TextReveal>
										</div>
									))}
								</div>
							</div>

							<div>
								<TextReveal
									className="text-[11vw] text-white lg:text-[1.1vw]"
									triggerOnScroll={true}
									waitForPageTransition={true}
								>
									Weapons of Choice
								</TextReveal>
								<div className="mt-[4.6vw] lg:mt-[2.6vw] divide-y divide-white/10">
									{weapons.map((item) => (
										<div key={item.title} className="lg:py-[1.8vw] py-[2.8vw]">
											<TextReveal
												className="text-[5.2vw] text-white lg:text-[0.95vw]"
												triggerOnScroll={true}
												waitForPageTransition={true}
											>
												{item.title}
											</TextReveal>
											<TextReveal
												className="lg:mt-[0.8vw] mt-[2.4vw] text-[2.8vw] text-white/50 lg:text-[0.75vw]"
												triggerOnScroll={true}
												waitForPageTransition={true}
											>
												{item.desc}
											</TextReveal>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
