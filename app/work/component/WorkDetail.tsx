"use client";

import Image from "next/image";
import TextReveal from "@/app/component/TextReveal";
import { WorkItem } from "@/app/work/workData";

interface WorkDetailProps {
	item: WorkItem;
}

export default function WorkDetail({ item }: WorkDetailProps) {
	return (
		<section className="bg-[#f2f3f4] text-black">
			<div className="w-full  pt-[24vw] lg:pt-[10vw]">
				{/* Header Section */}
				<div className="grid grid-cols-1 gap-[8vw] lg:grid-cols-12 lg:gap-[4vw] px-[4vw]">
					{/* Left: Title + Description */}
					<div className="lg:col-span-5">
						<TextReveal
							className="text-[10vw] leading-[1.05] lg:text-[2.6vw]"
							triggerOnScroll={true}
							waitForPageTransition={true}
						>
							{item.title}
						</TextReveal>
						<TextReveal
							className="mt-[4vw] lg:mt-[1.5vw] text-[4vw] leading-[1.6] text-black/80 lg:text-[0.85vw]"
							triggerOnScroll={true}
							waitForPageTransition={true}
						>
							{item.description}
						</TextReveal>
					</div>

					{/* Right: Metadata Table */}
					<div className="lg:col-span-7 lg:pl-[8vw]">
						<div className="space-y-[3vw] lg:space-y-[0.8vw] text-[4vw] lg:text-[0.8vw]">
							<div className="flex justify-between border-b border-black/10 pb-[3vw] lg:pb-[0.8vw]">
								<span className="text-black/60">Company</span>
								<span>{item.company || "Name"}</span>
							</div>
							<div className="flex justify-between border-b border-black/10 pb-[3vw] lg:pb-[0.8vw]">
								<span className="text-black/60">Role</span>
								<span>{item.subtitle}</span>
							</div>
							<div className="flex justify-between border-b border-black/10 pb-[3vw] lg:pb-[0.8vw]">
								<span className="text-black/60">Deliverables</span>
								<span>{item.deliverables || "Things"}</span>
							</div>
						</div>
					</div>
				</div>

				{/* Hero Image */}
				<div className="mt-[8vw] lg:mt-[4vw] w-full overflow-hidden bg-[#d9d9d9] relative">
					<Image
						src={item.image}
						alt={item.title}
						width={1920}
						height={1080}
						className="w-full h-auto object-cover"
						sizes="100vw"
						priority
					/>
				</div>

				{/* Ideation Section */}
				{item.ideation && (
					<div className="mt-[10vw] lg:mt-[6vw] grid grid-cols-1 gap-[6vw] lg:grid-cols-12 lg:gap-[4vw] px-[4vw]">
						<div className="lg:col-span-3">
							<TextReveal
								className="text-[6vw] lg:text-[1.4vw] font-medium"
								triggerOnScroll={true}
								waitForPageTransition={true}
							>
								Ideation
							</TextReveal>
						</div>
						<div className="lg:col-span-9">
							<TextReveal
								className="text-[4vw] leading-[1.6] text-black/80 lg:text-[0.85vw]"
								triggerOnScroll={true}
								waitForPageTransition={true}
							>
								{item.ideation}
							</TextReveal>
						</div>
					</div>
				)}

				{/* Gallery Images */}
				{item.gallery && item.gallery.length > 0 && (
					<div className="mt-[10vw] lg:mt-[6vw]">
						{item.gallery.map((src, index) => (
							<div
								key={`${item.slug}-gallery-${index}`}
								className="w-full overflow-hidden bg-[#d9d9d9] relative"
							>
								<Image
									src={src}
									alt={`${item.title} gallery`}
									width={1920}
									height={1080}
									className="w-full h-auto object-cover"
									sizes="100vw"
								/>
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	);
}
