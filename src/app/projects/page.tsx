import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
	{
		title: "Mental Health Mobile App",
		description:
			"Led the frontend development of a React Native app for Android and iOS, providing mental health support and resources. Implemented real-time chat, mood tracking, and personalized content recommendations.",
		technologies: ["React Native", "TypeScript", "Redux", "Jest", "Firebase"],
		link: "https://example.com/mental-health-app",
		github: "https://github.com/fahrulalwan/mental-health-app",
		image: "https://via.assets.so/game.png?id=1&q=95&w=400&h=200&fit=fill",
		impact:
			"Helped over 50,000 users manage their mental health more effectively.",
	},
	{
		title: "Investment Platform Dashboard",
		description:
			"Developed a comprehensive dashboard for a fintech superapp, focusing on investment portfolio management. Integrated real-time market data, implemented complex financial calculations, and optimized performance for handling large datasets.",
		technologies: ["React", "Next.js", "TypeScript", "GraphQL", "D3.js"],
		link: "https://example.com/investment-dashboard",
		github: "https://github.com/fahrulalwan/investment-dashboard",
		image: "https://via.assets.so/game.png?id=1&q=95&w=400&h=200&fit=fill",
		impact:
			"Increased user engagement by 40% and improved portfolio performance for clients.",
	},
	{
		title: "Online Tutoring Platform",
		description:
			"Built an interactive platform for online tutoring with real-time collaboration features. Implemented video conferencing, shared whiteboard, and a scheduling system for tutors and students.",
		technologies: ["Angular", "RxJS", "Socket.io", "WebRTC", "Node.js"],
		link: "https://example.com/tutoring-platform",
		github: "https://github.com/fahrulalwan/tutoring-platform",
		image: "https://via.assets.so/game.png?id=1&q=95&w=400&h=200&fit=fill",
		impact:
			"Facilitated over 100,000 online tutoring sessions, improving student performance.",
	},
	{
		title: "E-commerce Microservices Solution",
		description:
			"Architected and developed a full-stack e-commerce platform using a microservices architecture. Implemented advanced search functionality, recommendation engine, and integrated multiple payment gateways.",
		technologies: [
			"Vue.js",
			"Node.js",
			"Express",
			"MongoDB",
			"Docker",
			"Kubernetes",
		],
		link: "https://example.com/ecommerce-solution",
		github: "https://github.com/fahrulalwan/ecommerce-solution",
		image: "https://via.assets.so/game.png?id=1&q=95&w=400&h=200&fit=fill",
		impact: "Increased sales by 25% and reduced infrastructure costs by 30%.",
	},
];

const ProjectsPage = () => {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{projects.map((project) => (
					<Card
						key={project.title}
						className="bg-card text-card-foreground flex flex-col"
					>
						<CardHeader>
							<CardTitle CompType="h2">{project.title}</CardTitle>
							<CardDescription>{project.description}</CardDescription>
						</CardHeader>
						<CardContent>
							<Image
								src={project.image}
								alt={project.title}
								width={400}
								height={200}
								className="w-full h-48 object-cover rounded-md mb-4"
							/>
							<div className="flex flex-wrap gap-2 mb-4">
								{project.technologies.map((tech, techIndex) => (
									<Badge key={techIndex} variant="secondary">
										{tech}
									</Badge>
								))}
							</div>
							<p className="text-sm text-muted-foreground mb-4">
								<strong>Impact:</strong> {project.impact}
							</p>
						</CardContent>
						<CardFooter className="mt-auto flex justify-between">
							<Button variant="outline" asChild>
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									<ExternalLink className="mr-2 h-4 w-4" />
									View Project
								</a>
							</Button>
							<Button variant="outline" asChild>
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Github className="mr-2 h-4 w-4" />
									GitHub
								</a>
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
			<div className="mt-12 text-center">
				<Link href="/contact" passHref legacyBehavior>
					<Button variant="default" size="lg">
						Discuss Your Project
						<ArrowRight className="ml-2 h-4 w-4" />
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default ProjectsPage;
