import type { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
	const lastModified = new Date();

	return [
		{
			url: "https://fahrulalwan.vercel.app/",
			lastModified,
			changeFrequency: "monthly",
			priority: 1.0,
		},
		{
			url: "https://fahrulalwan.vercel.app/about",
			lastModified,
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: "https://fahrulalwan.vercel.app/experience",
			lastModified,
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://fahrulalwan.vercel.app/projects",
			lastModified,
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://fahrulalwan.vercel.app/skills",
			lastModified,
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: "https://fahrulalwan.vercel.app/education",
			lastModified,
			changeFrequency: "monthly",
			priority: 0.6,
		},
	];
};

export default sitemap;
