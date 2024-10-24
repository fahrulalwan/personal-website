import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function AppPage() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<div className="flex flex-col items-center justify-center text-center">
				<div className="mb-8 relative w-48 h-48 rounded-full overflow-hidden">
					<Image
						src="https://via.assets.so/game.png?id=1&q=95&w=200&h=200&fit=fill"
						alt="Mohammad Fahrul Alwan"
						width={200}
						height={200}
					/>
				</div>
				<h1 className="text-5xl font-bold mb-4">Mohammad Fahrul Alwan</h1>
				<p className="text-xl mb-8">Frontend Engineer Lead</p>
				<div className="flex space-x-4 mb-12">
					<Button variant="outline" size="icon" asChild>
						<Link
							href="https://github.com/fahrulalwan"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Github className="h-5 w-5" />
							<span className="sr-only">GitHub</span>
						</Link>
					</Button>
					<Button variant="outline" size="icon" asChild>
						<Link
							href="https://linkedin.com/in/fahrulalwan"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Linkedin className="h-5 w-5" />
							<span className="sr-only">LinkedIn</span>
						</Link>
					</Button>
					<Button variant="outline" size="icon" asChild>
						<Link href="mailto:fahrulalwan@gmail.com">
							<Mail className="h-5 w-5" />
							<span className="sr-only">Email</span>
						</Link>
					</Button>
				</div>
				<div className="max-w-2xl mb-12">
					<p className="text-lg mb-4">
						With 7 years of experience in the tech industry and a Summa Cum
						Laude degree in Information Systems, I specialize in creating robust
						and scalable web applications using modern JavaScript frameworks.
					</p>
					<p className="text-lg">
						I&apos;m passionate about solving complex problems and driving
						business impact through innovative technology solutions.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
					<Link href="/about" passHref legacyBehavior>
						<Card className="hover:bg-accent transition-colors cursor-pointer">
							<CardHeader>
								<CardTitle className="flex items-center justify-between">
									About Me
									<ChevronRight className="h-5 w-5" />
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p>Learn more about my background and aspirations.</p>
							</CardContent>
						</Card>
					</Link>
					<Link href="/experience" passHref legacyBehavior>
						<Card className="hover:bg-accent transition-colors cursor-pointer">
							<CardHeader>
								<CardTitle className="flex items-center justify-between">
									Experience
									<ChevronRight className="h-5 w-5" />
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p>Explore my 7 years of diverse industry experience.</p>
							</CardContent>
						</Card>
					</Link>
					<Link href="/projects" passHref legacyBehavior>
						<Card className="hover:bg-accent transition-colors cursor-pointer">
							<CardHeader>
								<CardTitle className="flex items-center justify-between">
									Projects
									<ChevronRight className="h-5 w-5" />
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p>View my notable projects and contributions.</p>
							</CardContent>
						</Card>
					</Link>
					<Link href="/skills" passHref legacyBehavior>
						<Card className="hover:bg-accent transition-colors cursor-pointer">
							<CardHeader>
								<CardTitle className="flex items-center justify-between">
									Skills
									<ChevronRight className="h-5 w-5" />
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p>Check out my technical skills and expertise.</p>
							</CardContent>
						</Card>
					</Link>
					<Link href="/education" passHref legacyBehavior>
						<Card className="hover:bg-accent transition-colors cursor-pointer">
							<CardHeader>
								<CardTitle className="flex items-center justify-between">
									Education
									<ChevronRight className="h-5 w-5" />
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p>Learn about my academic achievements and certifications.</p>
							</CardContent>
						</Card>
					</Link>
					<Link href="/contact" passHref legacyBehavior>
						<Card className="hover:bg-accent transition-colors cursor-pointer">
							<CardHeader>
								<CardTitle className="flex items-center justify-between">
									Contact
									<ChevronRight className="h-5 w-5" />
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p>Get in touch for opportunities or collaboration.</p>
							</CardContent>
						</Card>
					</Link>
				</div>
			</div>
		</div>
	);
}
