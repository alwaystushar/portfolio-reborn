"use client";

import TextReveal from "@/app/component/TextReveal";
import ImageReveal from "@/app/component/ImageReveal";
import TransitionLink from "@/app/component/TransitionLink";
import { workItems } from "@/app/work/workData";

type WorkItem = (typeof workItems)[number];

function WorkCard({
	item,
	colSpan,
	imageHeight,
}: {
	item: WorkItem;
	colSpan: string;
	imageHeight: string;
}) {
	return (
		<div className={colSpan}>
			<TransitionLink href={`/work/${item.slug}`} className="block">
				<div className={`${imageHeight} overflow-hidden bg-[#d9d9d9]`}>
					<ImageReveal src={item.image} alt={item.title} dir="left" maskColor="#f2f3f4" />
				</div>
			</TransitionLink>
			<div className="mt-[3vw] lg:mt-[1vw] flex items-start justify-between gap-[2vw]">
				<TextReveal
					className="text-[4vw] text-black lg:text-[0.9vw]"
					triggerOnScroll={true}
					waitForPageTransition={true}
				>
					{item.title}
				</TextReveal>
				<TextReveal
					className="text-right text-[4vw] text-gray-600 lg:text-[0.9vw]"
					triggerOnScroll={true}
					waitForPageTransition={true}
				>
					{item.subtitle}
				</TextReveal>
			</div>
		</div>
	);
}

export default function WorkListing() {
	// Group items into rows: 2, 3, 2, 3...
	const rows: { items: WorkItem[]; pattern: "2-left" | "3" | "2-right" }[] = [];
	let index = 0;
	let patternIndex = 0;

	while (index < workItems.length) {
		const patternType = patternIndex % 4;
		if (patternType === 0) {
			// 2 cards: col-span-8, col-span-4
			rows.push({ items: workItems.slice(index, index + 2), pattern: "2-left" });
			index += 2;
		} else if (patternType === 1) {
			// 3 cards: col-span-4 each
			rows.push({ items: workItems.slice(index, index + 3), pattern: "3" });
			index += 3;
		} else if (patternType === 2) {
			// 2 cards: col-span-4, col-span-8
			rows.push({ items: workItems.slice(index, index + 2), pattern: "2-right" });
			index += 2;
		} else {
			// 3 cards: col-span-4 each
			rows.push({ items: workItems.slice(index, index + 3), pattern: "3" });
			index += 3;
		}
		patternIndex++;
	}

	return (
		<section className="bg-[#f2f3f4] text-black">
			<div className="grid girder w-full px-[4vw] pt-[24vw] lg:pt-[12vw] pb-[12vw] lg:pb-[8vw]">
				<div className="col-span-12">
					<TextReveal
						className="text-[10vw] leading-none text-black lg:text-[2.8vw]"
						triggerOnScroll={true}
						waitForPageTransition={true}
					>
						Workkk Work Wok Wok Wok
					</TextReveal>
				</div>

				{rows.map((row, rowIndex) => (
					<div
						key={rowIndex}
						className="col-span-12 mt-[8vw] lg:mt-[4vw] grid grid-cols-1 gap-[4vw] lg:gap-[1vw] lg:grid-cols-12"
					>
						{row.pattern === "2-left" && (
							<>
								{row.items[0] && (
									<WorkCard
										item={row.items[0]}
										colSpan="lg:col-span-8"
										imageHeight="h-[60vw] lg:h-[40vw]"
									/>
								)}
								{row.items[1] && (
									<WorkCard
										item={row.items[1]}
										colSpan="lg:col-span-4"
										imageHeight="h-[60vw] lg:h-[20vw]"
									/>
								)}
							</>
						)}
						{row.pattern === "2-right" && (
							<>
								{row.items[0] && (
									<WorkCard
										item={row.items[0]}
										colSpan="lg:col-span-4"
										imageHeight="h-[60vw] lg:h-[20vw]"
									/>
								)}
								{row.items[1] && (
									<WorkCard
										item={row.items[1]}
										colSpan="lg:col-span-8"
										imageHeight="h-[60vw] lg:h-[60vw]"
									/>
								)}
							</>
						)}
						{row.pattern === "3" &&
							row.items.map((item) => (
								<WorkCard
									key={item.slug}
									item={item}
									colSpan="lg:col-span-4"
									imageHeight="h-[60vw] lg:h-[22vw]"
								/>
							))}
					</div>
				))}
			</div>
		</section>
	);
}
