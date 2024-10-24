import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { FC } from "react";

const AboutPage: FC = () => {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
			<div className="space-y-8 max-w-4xl mx-auto">
				<Card>
					<CardHeader>
						<CardTitle CompType="h2">Mohammad Fahrul Alwan</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="mb-4">
							I&apos;m a Senior Frontend Engineer and Tech Lead with 7 years of
							diverse experience in the tech industry. My journey began in
							networking, but I quickly found my passion in coding, particularly
							frontend development.
						</p>
						<p className="mb-4">
							With 6 years of coding experience, including 2 years as a frontend
							tech lead, I&apos;ve had the opportunity to work on a wide range
							of projects across various industries. I&apos;m passionate about
							product development, marketing, business impact, and engineering
							best practices.
						</p>
						<p>
							I hold a Bachelor&apos;s degree in Information Systems from Bina
							Nusantara University, where I achieved a GPA of 3.76, graduating
							Magna Cum Laude. What sets me apart is my ability to balance
							full-time work with academic excellence, demonstrating my strong
							work ethic and time management skills.
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle CompType="h2">Key Strengths</CardTitle>
					</CardHeader>
					<CardContent>
						<ul className="space-y-2">
							<li>
								<Badge variant="secondary" className="mr-2">
									Problem Solver
								</Badge>
								Adept at finding innovative solutions to complex technical
								challenges
							</li>
							<li>
								<Badge variant="secondary" className="mr-2">
									Tech Lead
								</Badge>
								Experienced in leading and mentoring development teams
							</li>
							<li>
								<Badge variant="secondary" className="mr-2">
									Versatile
								</Badge>
								Proficient in a wide range of technologies and frameworks
							</li>
							<li>
								<Badge variant="secondary" className="mr-2">
									Business-Oriented
								</Badge>
								Focus on creating solutions that drive business impact
							</li>
							<li>
								<Badge variant="secondary" className="mr-2">
									Adaptable
								</Badge>
								Quick to learn and apply new technologies and methodologies
							</li>
						</ul>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle CompType="h2">Professional Interests</CardTitle>
					</CardHeader>
					<CardContent>
						<ul className="space-y-2">
							<li>
								Exploring cutting-edge frontend technologies and frameworks
							</li>
							<li>Optimizing web performance and user experience</li>
							<li>
								Implementing scalable architecture for large-scale applications
							</li>
							<li>Mentoring and nurturing junior developers</li>
							<li>Bridging the gap between design and development</li>
							<li>
								Staying updated with the latest industry trends and best
								practices
							</li>
						</ul>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle CompType="h2">Key Achievements</CardTitle>
					</CardHeader>
					<CardContent>
						<ul className="space-y-2">
							<li>
								<Badge variant="secondary" className="mr-2">
									Leadership
								</Badge>
								Successfully led a team of 4 frontend developers, increasing
								productivity by 30%
							</li>
							<li>
								<Badge variant="secondary" className="mr-2">
									Innovation
								</Badge>
								Implemented a new design system that reduced development time by
								40%
							</li>
							<li>
								<Badge variant="secondary" className="mr-2">
									Performance
								</Badge>
								Optimized web application load time, improving user engagement
								by 25%
							</li>
							<li>
								<Badge variant="secondary" className="mr-2">
									Academic Excellence
								</Badge>
								Graduated Magna Cum Laude while working full-time in the tech
								industry
							</li>
							<li>
								<Badge variant="secondary" className="mr-2">
									Project Success
								</Badge>
								Delivered a critical project 2 weeks ahead of schedule, saving
								the company $100,000
							</li>
						</ul>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default AboutPage;
