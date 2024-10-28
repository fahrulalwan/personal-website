import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { FC } from "react";

const AboutPage: FC = () => {
	return (
		<div className="min-h-screen bg-background text-foreground p-4">
			<h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
			<div className="space-y-8 max-w-4xl mx-auto">
				<Card>
					<CardHeader>
						<CardTitle as="h2">Mohammad Fahrul Alwan</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="flex flex-wrap gap-2 mb-4">
							<Badge variant="secondary">11+ Years IT Experience</Badge>
							<Badge variant="secondary">7+ Years Coding</Badge>
							<Badge variant="secondary">Magna Cum Laude Graduate</Badge>
						</div>
						<p className="mb-4">
							My journey in IT began at Telkom Vocational Highschool in West
							Jakarta, where I developed a strong foundation in various aspects
							of information technology, from optical transmission to program
							development. This early exposure sparked a passion that has driven
							my career ever since.
						</p>
						<p className="mb-4">
							Continuing my education at Bina Nusantara University, I chose to
							major in Information Systems to broaden my knowledge in software
							development. During my studies, I balanced full-time work as a
							Software Engineer at an IT Consultant Company, allowing me to
							apply classroom learning to real-world scenarios. This dual focus
							on academics and practical experience culminated in my graduation
							with Magna Cum Laude honors.
						</p>
						<p>
							Over the past 7+ years, I&apos;ve had the opportunity to work on
							diverse projects across multiple industries. My experience spans
							auction commerce, e-commerce, education administration, HR
							operations, and more. Each project has contributed to my growth as
							a developer and leader in the field.
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle as="h2">Key Strengths</CardTitle>
					</CardHeader>
					<CardContent>
						<ul className="space-y-2">
							<li>
								<Badge variant="secondary" className="mr-2">
									Problem Solving
								</Badge>
								Ability to tackle complex technical challenges with innovative
								solutions
							</li>
							<li>
								<Badge variant="secondary" className="mr-2">
									Technical Leadership
								</Badge>
								Experience in guiding development teams and managing projects
								effectively
							</li>
							<li>
								<Badge variant="secondary" className="mr-2">
									Full-Stack Proficiency
								</Badge>
								Skilled in both frontend and backend technologies
							</li>
							<li>
								<Badge variant="secondary" className="mr-2">
									Business Acumen
								</Badge>
								Focus on creating solutions that align with and drive business
								objectives
							</li>
							<li>
								<Badge variant="secondary" className="mr-2">
									Adaptability
								</Badge>
								Quick to learn and implement new technologies and methodologies
							</li>
						</ul>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle as="h2">Professional Interests</CardTitle>
					</CardHeader>
					<CardContent>
						<ul className="space-y-2">
							<li>Exploring and implementing cutting-edge web technologies</li>
							<li>Optimizing application performance and user experience</li>
							<li>
								Designing scalable architectures for large-scale applications
							</li>
							<li>Mentoring and fostering growth in junior developers</li>
							<li>
								Bridging the gap between design concepts and technical
								implementation
							</li>
							<li>Staying current with industry trends and best practices</li>
						</ul>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle as="h2">Notable Achievements</CardTitle>
					</CardHeader>
					<CardContent>
						<ul className="space-y-2">
							<li>
								<Badge variant="secondary" className="mr-2">
									Team Leadership
								</Badge>
								Successfully led a team of 4 frontend developers, improving
								overall productivity
							</li>
							<li>
								<Badge variant="secondary" className="mr-2">
									System Optimization
								</Badge>
								Implemented a new design system that significantly reduced
								development time
							</li>
							<li>
								<Badge variant="secondary" className="mr-2">
									Performance Enhancement
								</Badge>
								Optimized web application load times, leading to improved user
								engagement
							</li>
							<li>
								<Badge variant="secondary" className="mr-2">
									Academic Excellence
								</Badge>
								Graduated Magna Cum Laude while maintaining full-time employment
								in the tech industry
							</li>
							<li>
								<Badge variant="secondary" className="mr-2">
									Project Management
								</Badge>
								Delivered a critical project ahead of schedule, resulting in
								significant cost savings
							</li>
						</ul>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default AboutPage;
