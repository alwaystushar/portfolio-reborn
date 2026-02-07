import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { workItems } from "@/app/work/workData";
import WorkDetail from "@/app/work/component/WorkDetail";

type Props = {
	params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const item = workItems.find((entry) => entry.slug === slug);

	if (!item) {
		return {
			title: "Project Not Found",
		};
	}

	return {
		title: item.title,
		description: item.description,
		openGraph: {
			title: `${item.title} | Tushar Negi`,
			description: item.description,
			images: [
				{
					url: item.image,
					width: 1200,
					height: 630,
					alt: `${item.title} - ${item.subtitle}`,
				},
			],
		},
	};
}

export async function generateStaticParams() {
	return workItems.map((item) => ({
		slug: item.slug,
	}));
}

export default async function WorkDetailPage({ params }: Props) {
	const { slug } = await params;

	const item = workItems.find((entry) => entry.slug === slug);

	if (!item) {
		notFound();
	}

	return <WorkDetail item={item} />;
}
