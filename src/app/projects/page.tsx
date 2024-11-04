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
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import project_lanthera from "../../../public/project-lanthera.png";
import project_bareksa from "../../../public/project-lanthera-1.png";
import project_treetan from "../../../public/project-treetan.png";
import project_xp from "../../../public/project-xprivate.png";
import project_fifada from "../../../public/project-fifada.png";
import project_caready from "../../../public/project-caready.png";

const projects = [
	{
		title: "Lanthera",
		description:
			"Led the frontend development of a React Native app for Android and iOS, providing mental health support and resources. Implemented real-time chat, mood tracking, and personalized content recommendations.",
		technologies: ["React Native", "TypeScript", "Redux", "Jest", "Firebase"],
		link: "https://lanthera.com",
		image: project_lanthera,
		impact:
			"Helped over 50,000 users manage their mental health more effectively.",
	},
	{
		title: "Bareksa",
		description:
			"Developed a comprehensive dashboard for a fintech superapp, focusing on investment portfolio management. Integrated real-time market data, implemented complex financial calculations, and optimized performance for handling large datasets.",
		technologies: ["React", "Next.js", "TypeScript", "GraphQL", "D3.js"],
		link: "https://www.bareksa.com",
		image: project_bareksa,
		impact:
			"Increased user engagement by 40% and improved portfolio performance for clients.",
	},
	{
		title: "Treetan",
		description:
			"Built an interactive platform for online tutoring with real-time collaboration features. Implemented video conferencing, shared whiteboard, and a scheduling system for tutors and students.",
		technologies: ["Angular", "RxJS", "Socket.io", "WebRTC", "Node.js"],
		link: "https://treetan.com/",
		image: project_treetan,
		impact:
			"Facilitated over 100,000 online tutoring sessions, improving student performance.",
	},
	{
		title: "XPrivate Education",
		description:
			"Built an interactive platform for online tutoring with real-time collaboration features. Implemented video conferencing, shared whiteboard, and a scheduling system for tutors and students.",
		technologies: ["Angular", "RxJS", "Socket.io", "WebRTC", "Node.js"],
		link: "https://xprivate.education",
		image: project_xp,
		impact:
			"Facilitated over 100,000 online tutoring sessions, improving student performance.",
	},
	{
		title: "FIFADA",
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
		link: "https://fifada.com",
		image: project_fifada,
		impact: "Increased sales by 25% and reduced infrastructure costs by 30%.",
	},
	{
		title: "CAReady",
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
		link: "https://caready.co.id",
		image: project_caready,
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
							<CardTitle as="h2" className="text-2xl">
								{project.title}
							</CardTitle>
							<CardDescription>{project.description}</CardDescription>
						</CardHeader>
						<CardContent>
							<Image
								src={project.image}
								alt={project.title}
								width={400}
								height={200}
								className="w-full h-48 object-contain rounded-md mb-4"
							/>
							<div className="flex flex-wrap gap-2 mb-4">
								{project.technologies.map((tech) => (
									<Badge key={tech} variant="secondary">
										{tech}
									</Badge>
								))}
							</div>
							<p className="text-sm text-muted-foreground mb-4">
								<strong>Impact:</strong> {project.impact}
							</p>
						</CardContent>
						<CardFooter className="mt-auto flex">
							{project.link && (
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
							)}
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
};

export default ProjectsPage;
