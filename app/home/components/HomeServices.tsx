"use client";

import { useMemo, useRef, useState } from "react";
import TextReveal from "@/app/component/TextReveal";
import ImageReveal from "@/app/component/ImageReveal";

const services = [
	"Product Design",
	"UI/UX Design",
	"Brand Identity",
	"Web Design",
	"Experience Design",
	"Development",
];

export default function HomeServices() {
	const serviceImages = useMemo(
		() => [
			"/img/secuirtyapp/0.png",
			"/img/ramtan/ramtan.webp",
			"/img/majed-alraijhi/0.png",
			"/img/decline/1.jpg",
			"/img/stefani/0.jpg",
			"/img/mtfi/1.jpg",
		],
		[]
	);
	const listRef = useRef<HTMLDivElement>(null);
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
	const [displayIndex, setDisplayIndex] = useState<number>(0);
	const [isFading, setIsFading] = useState(false);
	const fadeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		if (!listRef.current) return;
		const rect = listRef.current.getBoundingClientRect();
		setCursorPos({
			x: event.clientX - rect.left,
			y: event.clientY - rect.top,
		});
	};

	const handleEnter = (index: number) => {
		setActiveIndex(index);
		if (index === displayIndex) return;
		if (fadeTimerRef.current) {
			clearTimeout(fadeTimerRef.current);
		}
		setIsFading(true);
		fadeTimerRef.current = setTimeout(() => {
			setDisplayIndex(index);
			setIsFading(false);
		}, 180);
	};

	return (
		<section className="relative overflow-hidden bg-[#02010B] text-white">
			<div className="absolute inset-0" aria-hidden="true" />

			<div className="relative grid girder w-full px-[4vw] lg:py-[4vw] py-[8vw]">
				<div className="col-span-12 lg:col-span-10">
					<TextReveal
						className="text-[5vw] leading-[1.4] text-white/90  lg:text-[2vw]"
						triggerOnScroll={true}
						waitForPageTransition={false}
					>
In an ever-changing digital landscape, I create solutions that help brands move forward, adapt, and thrive. Each project is driven by clear vision, focused execution, and measurable results.
					</TextReveal>

					<div className="mt-[4vw] flex flex-col gap-[2vw] text-[2.4vw] text-white/70  lg:text-[0.8vw]">
						<TextReveal triggerOnScroll={true} waitForPageTransition={false}>
							<span>Design and code with concept</span>
						</TextReveal>
						<TextReveal triggerOnScroll={true} waitForPageTransition={false}>
							<span>Digital by nature</span>
						</TextReveal>
					</div>
				</div>

					<div className="relative mt-[6vw] h-[48vw] w-[92vw] lg:w-[35vw] lg:mt-0 lg:h-[25vw]">
						<div className="lg:absolute lg:right-[20vw] lg:top-[6vw] h-full lg:h-[15vw] w-full">
							<ImageReveal
								src="/img/home-img.webp"
								alt="Service highlight"
								dir="right"
								maskColor="rgba(2, 1, 11, 1)"
								className=" "
							/>
						</div>
				</div>

				<div className="col-span-12 lg:mt-[2vw] mt-[6vw]">
					<div
						ref={listRef}
						className="relative mt-[2vw] flex flex-col"
						onMouseMove={handleMouseMove}
						onMouseLeave={() => setActiveIndex(null)}
					>
						{services.map((service, index) => (
							<div
								key={service}
								className={`group flex items-center justify-between py-[1.8vw] ${
									index === services.length - 1
										? ""
										: "border-b border-white/10"
								}`}
								onMouseEnter={() => handleEnter(index)}
							>
                                <div>
								<TextReveal
									className="text-[3.4vw] text-white/60  lg:text-[0.7vw]"
									triggerOnScroll={true}
									waitForPageTransition={false}
								>
									<span>[{String(index + 1).padStart(2, "0")}]</span>
								</TextReveal>
								<TextReveal
									className="flex-1 text-[7vw] lg:mt-[0.2vw] mt-[1.5vw] font-light tracking-tight text-white lg:text-[4vw]"
									triggerOnScroll={true}
									waitForPageTransition={false}
								>
									<span>{service}</span>
								</TextReveal>                                    
                                </div>

							</div>
						))}

						{activeIndex !== null && (
							<div
								className="pointer-events-none absolute left-0 top-0 z-20"
								style={{
									transform: `translate(${cursorPos.x + 24}px, ${cursorPos.y - 140}px)`,
								}}
							>
								<div className="h-[18vw] w-[28vw] overflow-hidden bg-white/5">
									<img
										src={serviceImages[displayIndex]}
										alt="Service preview"
										className={`h-full w-full object-cover transition-all duration-300 ${
											isFading ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"
										}`}
									/>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
