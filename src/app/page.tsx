import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, ChevronRight } from "lucide-react";
import Image from "next/image";
import profileImage from "../../public/profile.webp";

const menus = [
	{
		title: "About Me",
		description: "Learn more about my background and aspirations",
		link: "/about",
	},
	{
		title: "Experience",
		description: "Explore my professional journey and projects",
		link: "/experience",
	},
	{
		title: "Projects",
		description: "View my notable projects and contributions",
		link: "/projects",
	},
	{
		title: "Skills",
		description: "Check out my technical skills and expertise",
		link: "/skills",
	},
	{
		title: "Education",
		description: "Learn about my academic achievements and certifications",
		link: "/education",
	},
	// {
	// 	title: "Blog",
	// 	description: "Read my latest thoughts and musings on technology",
	// 	link: "/blog",
	// }
];

const AppPage = () => {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<div className="flex flex-col items-center justify-center text-center">
				<div className="mb-8 w-48 h-48 rounded-full overflow-hidden">
					<Image
						src={profileImage}
						alt="Mohammad Fahrul Alwan"
						width={200}
						height={200}
						priority
					/>
				</div>

				<header className="mb-8">
					<h1 className="text-5xl font-bold mb-4">Mohammad Fahrul Alwan</h1>
					<h2 className="text-xl">Senior Frontend Engineer & Tech Lead</h2>
				</header>

				<div className="max-w-2xl mb-12">
					<p className="text-lg mb-4">
						An M-shaped professional with a passion for structured thinking,
						business impact, and innovative solutions. Bridging the gap between
						technology and business objectives.
					</p>
					<p className="text-lg mb-4">
						With 11+ years of IT-focused learning and 7+ years of coding
						experience, I specialize in creating robust and scalable web
						applications using modern JavaScript frameworks.
					</p>
					<p className="text-lg">
						I&apos;m passionate about solving complex problems and driving
						business impact through innovative technology solutions.
					</p>
				</div>

				<div className="flex space-x-4 mb-12">
					<Button variant="outline" size="icon" asChild>
						<Link
							href="https://github.com/fahrulalwan"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Github className="h-6 w-6" />
							<span className="sr-only">GitHub</span>
						</Link>
					</Button>
					<Button variant="outline" size="icon" asChild>
						<Link
							href="https://linkedin.com/in/fahrulalwan"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Linkedin className="h-6 w-6" />
							<span className="sr-only">LinkedIn</span>
						</Link>
					</Button>
					<Button variant="outline" size="icon" asChild>
						<Link href="mailto:fahrulalwan@gmail.com">
							<Mail className="h-6 w-6" />
							<span className="sr-only">Email</span>
						</Link>
					</Button>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
					{menus.map((menu) => (
						<Link href={menu.link} key={menu.title}>
							<Card className="hover:bg-accent transition-colors cursor-pointer h-full">
								<CardHeader>
									<CardTitle className="flex items-center justify-between text-xl">
										{menu.title}
										<ChevronRight className="h-5 w-5" />
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p>{menu.description}</p>
								</CardContent>
							</Card>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default AppPage;
