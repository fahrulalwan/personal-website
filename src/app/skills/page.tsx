import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
	{
		category: "Frontend",
		expert: [
			"React",
			"Next.js",
			"TypeScript",
			"JavaScript",
			"HTML5",
			"CSS3",
			"Tailwind CSS",
		],
		proficient: ["Angular", "Vue.js"],
		familiar: ["Svelte", "Astro"],
	},
	{
		category: "Backend",
		expert: [],
		proficient: [
			"Node.js",
			"Express",
			"Java Spring Boot",
			"MongoDB",
			"PostgreSQL",
			"Redis",
		],
		familiar: ["Kafka", "Golang", "Python"],
	},
	{
		category: "Mobile",
		expert: [],
		proficient: ["React Native"],
		familiar: ["iOS", "Android"],
	},
	{
		category: "DevOps & Cloud",
		expert: [],
		proficient: ["Linux", "Docker", "Kubernetes", "Nginx", "GCP"],
		familiar: ["Digital Ocean", "AWS", "Prometheus", "Grafana", "Proxmox"],
	},
	{
		category: "Tools & Practices",
		expert: ["Git", "Agile Methodologies"],
		proficient: ["CI/CD", "Serverless", "Leadership"],
		familiar: ["Microservices Architecture", "Test-Driven Development"],
	},
];

const SkillsPage = () => {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<h1 className="text-4xl font-bold mb-8 text-center">
				Skills & Expertises
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{skillCategories.map((category) => (
					<Card
						key={category.category}
						className="bg-card text-card-foreground"
					>
						<CardHeader>
							<CardTitle as="h2">{category.category}</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								{!!category.expert.length && (
									<div>
										<h3 className="font-semibold mb-2">Expert</h3>
										<div className="flex flex-wrap gap-2">
											{category.expert.map((skill) => (
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
		</div>
	);
};

export default SkillsPage;
