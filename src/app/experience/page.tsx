import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { FC } from "react";

const experiences = [
	{
		title: "Frontend Engineer Lead",
		company: "Bareksa",
		period: "Oct 2022 - Present",
		location: "Jakarta, Indonesia · Hybrid",
		description:
			"As a Frontend Engineering Leader, I manage a team of four and oversee dozens of repositories. I've led the implementation of a new design system migration across our web platform and orchestrated web implementation for our news platform & Landing Page Revamp, serving hundreds of thousands of MAUs.",
		achievements: [
			"Spearheaded the seamless implementation of a new design system migration across our expansive web platform",
			"Orchestrated the web implementation of our news platform & Landing Page Revamp, serving a substantial user base exceeding hundreds of thousands of MAUs",
			"Played a pivotal role in engineering the implementation for campaign launches, contributing to successful outcomes with billions of rupiah AUM per campaign",
		],
		technologies: [
			"React.js",
			"Next.js",
			"Technical Leadership",
			"Team Management",
			"Software Project Management",
		],
	},
	{
		title: "Software Engineer",
		company: "Axiata Digital Labs",
		period: "Sep 2021 - Oct 2022",
		location: "Jakarta, Indonesia · Hybrid",
		description:
			"Helped build an employee operation platform called 'Super Apps' for a big telecommunication company. The platform included features such as employee work clock, COVID assessment services, building management, news & articles, page builder & dynamic form builder, document management, auction, marketplace, and multi-language support.",
		achievements: [
			"Contributed to project initialization, discussing tech stacks & development patterns",
			"Entrusted with a frontend lead role, managing a team of 5 people",
			"Designed technical structures to fit project needs and discussed upcoming features, assessing feasibility and workarounds",
			"Helped the team achieve delivery goals with expected quality and timeliness",
		],
		technologies: [
			"Angular",
			"Tailwind CSS",
			"CI/CD",
			"Technical Leadership",
			"Team Leadership",
		],
	},
	{
		title: "Frontend Developer",
		company: "Jati Piranti Solusindo, PT",
		period: "Aug 2019 - Aug 2021",
		location: "Greater Jakarta Area, Indonesia",
		description:
			"Worked on production-grade platforms for auction and e-commerce projects. Developed features for a major financial service company's e-commerce platform, focusing on mobile view.",
		achievements: [
			"Built auction system features using Angular and RxJS data streams",
			"Developed e-commerce features including product detail displays and payment systems with multiple methods",
			"Gained expertise in state management for single-page applications",
		],
		technologies: ["Angular", "React.js", "Next.js", "Redux", "E-Commerce"],
	},
	{
		title: "Frontend Developer",
		company: "Pradipta Jatis Indonesia",
		period: "Dec 2018 - Aug 2019",
		location: "Greater Jakarta Area, Indonesia",
		description:
			"Worked on an Auction Commerce Platform for a subsidiary of a major transportation company using Angular Framework.",
		achievements: [
			"Built homepage, auction list page, auction detail page, and auction main operation page",
			"Researched and implemented Websocket technology with Angular",
			"Configured Nginx for frontend endpoint with multiple projects, handled deployments and CORS",
		],
		technologies: [
			"Angular",
			"Tailwind CSS",
			"Spring MVC",
			"E-auctions",
			"PostgreSQL",
		],
	},
	{
		title: "Fullstack Java Developer Trainee",
		company: "Pradipta Jatis Indonesia",
		period: "Aug 2018 - Dec 2018",
		location: "Greater Jakarta Area, Indonesia",
		description:
			"Attended Fullstack Developer Training and created a mini-bank application using Java 1.8 (Spring Boot, MyBatis & JSP) as a bootcamp assessment.",
		achievements: [
			"Successfully finished bootcamp as one of the highest-graded members",
			"Developed a mini-bank application using Java 1.8, Spring Boot, MyBatis, and JSP",
		],
		technologies: [
			"Java",
			"Spring Boot",
			"MyBatis",
			"JSP",
			"JavaScript",
			"Bootstrap",
		],
	},
];

const ExperiencePage: FC = () => {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<h1 className="text-4xl font-bold mb-8 text-center">
				Professional Experience
			</h1>
			<div className="space-y-8 max-w-4xl mx-auto">
				{experiences.map((exp) => (
					<Card key={exp.description} className="bg-card text-card-foreground">
						<CardHeader>
							<CardTitle className="flex justify-between items-center flex-wrap">
								<span className="text-xl">{exp.title}</span>
								<Badge variant="secondary" className="text-sm">
									{exp.period}
								</Badge>
							</CardTitle>
							<p className="font-semibold text-primary">{exp.company}</p>
							<p className="text-sm text-muted-foreground">{exp.location}</p>
						</CardHeader>
						<CardContent>
							<p className="mb-4">{exp.description}</p>
							<h4 className="font-semibold mb-2">Key Achievements:</h4>
							<ul className="list-disc list-inside mb-4">
								{exp.achievements.map((achievement) => (
									<li key={achievement}>{achievement}</li>
								))}
							</ul>
							<div className="flex flex-wrap gap-2">
								{exp.technologies.map((tech) => (
									<Badge key={tech} variant="outline">
										{tech}
									</Badge>
								))}
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
};

export default ExperiencePage;
