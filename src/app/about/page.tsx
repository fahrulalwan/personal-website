import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { FC } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About",
};

const AboutPage: FC = () => {
	return (
		<>
			<h1 className="text-4xl font-bold mb-8 text-center mt-4">About Me</h1>

			<div className="space-y-8 max-w-4xl mx-auto">
				<Card>
					<CardHeader>
						<CardTitle as="h2" className="text-2xl">
							Mohammad Fahrul Alwan
						</CardTitle>
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
						<CardTitle as="h2" className="text-2xl">
							Key Strengths
						</CardTitle>
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
								Proficient in both frontend and backend technologies
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
						<CardTitle as="h2" className="text-2xl">
							Professional Interests
						</CardTitle>
					</CardHeader>
					<CardContent>
						<ul className="space-y-2 list-disc list-outside pl-4">
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
			</div>
		</>
	);
};

export default AboutPage;
