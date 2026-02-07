"use client";

import { useEffect } from "react";
import TransitionLink from "@/app/component/TransitionLink";

export default function Footer() {
	useEffect(() => {
		if (!window.location.hash) return;
		setTimeout(() => {
			const target = document.getElementById("top");
			if (!target) return;
			target.scrollIntoView({ behavior: "smooth" });
		}, 0);
	}, []);

	return (
		<footer
			data-section="footer"
			data-bgcolor="#0b0b10"
			className="relative z-10 bg-[#0b0b10] text-white lg:min-h-[85vh] min-h-[45vh]"
		>
			<div className="sticky top-0">
				<div className="grid girder w-full px-[4vw] pt-[6vw] pb-[8vw] lg:pt-[4vw] lg:pb-[6vw]">
					<div className="col-span-12 grid grid-cols-4 gap-[5vw] text-[3.6vw] text-white/70 sm:grid-cols-2 sm:text-[2.4vw] lg:grid-cols-4 lg:text-[0.7vw]">
						<div className="lg:space-y-[0.6vw] space-y-[3.6vw] flex flex-col">
							<TransitionLink
								href="mailto:connect@alwaystushar.fyi"
								variant="dark"
								animateText={true}
								textClassName="text-white/80"
								className="hover:text-white"
							>
								Email
							</TransitionLink>
							<TransitionLink
								href="https://wa.me/8171839997"
								target="_blank"
								rel="noreferrer"
								variant="dark"
								animateText={true}
								textClassName="text-white/80"
								className="hover:text-white"
							>
								Whatsapp
							</TransitionLink>
						</div>
						<div className="lg:space-y-[0.6vw] space-y-[3.6vw] flex flex-col">
							<TransitionLink href="/" variant="dark" textClassName="text-white/80" className="hover:text-white">
								Home
							</TransitionLink>
							<TransitionLink href="/about" variant="dark" textClassName="text-white/80" className="hover:text-white">
								About
							</TransitionLink>
							<TransitionLink href="/work" variant="dark" textClassName="text-white/80" className="hover:text-white">
								Work
							</TransitionLink>
							<TransitionLink href="/contact" variant="dark" textClassName="text-white/80" className="hover:text-white">
								Contact
							</TransitionLink>
						</div>
						<div className="lg:space-y-[0.6vw] space-y-[3.6vw] flex flex-col">
							<TransitionLink
								href="https://www.instagram.com/alwaystushar/"
								target="_blank"
								rel="noreferrer"
								variant="dark"
								textClassName="text-white/80"
								className="hover:text-white"
							>
								Instagram
							</TransitionLink>
							<TransitionLink
								href="https://www.linkedin.com/in/tusharux/"
								target="_blank"
								rel="noreferrer"
								variant="dark"
								textClassName="text-white/80"
								className="hover:text-white"
							>
								Linkedin
							</TransitionLink>
						</div>
						<div className="text-left text-white/60 lg:text-right">India, Delhi</div>
					</div>

					<div className="col-span-12 mt-[12vw] flex flex-col items-start gap-[4vw] lg:mt-[18vw] lg:flex-row lg:items-end lg:justify-between">
						<div className="w-[90vw] max-sm:mt-[30vw] max-sm:mb-[10vw] lg:w-[56vw]">
							<img src="/logo.svg" alt="Tushar logo" className="w-full" />
						</div>
					</div>
				</div>
			</div>
			<div id="top" className="absolute top-0" aria-hidden="true" />
		</footer>
	);
}
