import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

const skillCategories = [
	{
		category: "Frontend",
		advanced: [
			"React",
			"Next.js",
			"TypeScript",
			"JavaScript",
			"HTML5",
			"CSS3",
			"Tailwind CSS",
		],
		proficient: ["Angular", "Vue.js", "Websockets"],
		familiar: ["Svelte", "Astro", "GraphQL"],
	},
	{
		category: "Backend",
		advanced: [],
		proficient: [
			"Node.js",
			"Express",
			"Java",
			"Spring Boot",
			"MongoDB",
			"PostgreSQL",
			"Redis",
		],
		familiar: ["Kafka", "Golang", "Python"],
	},
	{
		category: "Mobile",
		advanced: [],
		proficient: ["React Native"],
		familiar: ["iOS", "Android", "Flutter"],
	},
	{
		category: "DevOps & Cloud",
		advanced: [],
		proficient: ["Linux", "Docker", "Kubernetes", "Nginx", "GCP"],
		familiar: ["Digital Ocean", "AWS", "Prometheus", "Grafana", "Proxmox"],
	},
	{
		category: "Tools & Practices",
		advanced: [
			"Git",
			"Agile Methodologies",
			"Atomic Design",
			"Responsive Design",
		],
		proficient: ["CI/CD", "Serverless", "Leadership", "Cache Management"],
		familiar: [
			"Microservices Architecture",
			"Test-Driven Development",
			"Web Security",
		],
	},
];

export const metadata: Metadata = {
	title: "Skills",
};

const SkillsPage = () => {
	return (
		<>
			<h1 className="text-4xl font-bold mb-8 text-center mt-4">Skills</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{skillCategories.map((category) => (
					<Card
						key={category.category}
						className="bg-card text-card-foreground"
					>
						<CardHeader>
							<CardTitle as="h2" className="text-xl">
								{category.category}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								{!!category.advanced.length && (
									<div>
										<h3 className="font-semibold mb-2">Advanced</h3>
										<div className="flex flex-wrap gap-2">
											{category.advanced.map((skill) => (
												<Badge key={skill} variant="default">
													{skill}
												</Badge>
											))}
										</div>
									</div>
								)}

								{!!category.proficient.length && (
									<div>
										<h3 className="font-semibold mb-2">Proficient</h3>
										<div className="flex flex-wrap gap-2">
											{category.proficient.map((skill) => (
												<Badge key={skill} variant="secondary">
													{skill}
												</Badge>
											))}
										</div>
									</div>
								)}

								{!!category.familiar.length && (
									<div>
										<h3 className="font-semibold mb-2">Familiar</h3>
										<div className="flex flex-wrap gap-2">
											{category.familiar.map((skill) => (
												<Badge key={skill} variant="outline">
													{skill}
												</Badge>
											))}
										</div>
									</div>
								)}
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</>
	);
};

export default SkillsPage;
