import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	Timeline,
	TimelineItem,
	TimelineIcon,
	TimelineContent,
} from "@/components/ui/timeline";

const educations = [
	{
		degree: "Bachelor's degree, Management Information Systems and Services",
		institution: "BINUS University",
		period: "Apr 2018 - Sep 2022",
		grade: "3.76",
		achievements: ["Achieved Magna Cum Laude"],
		skills: [
			"Data Science",
			"Data Analysis",
			"Business Process",
			"Software Project Management",
			"Business Analysis",
			"Business Intelligence (BI)",
		],
	},
	{
		degree: "Teknik Jaringan Akses",
		institution: "SMK Telkom Jakarta",
		period: "2014 - 2017",
		skills: ["Networking", "Technical Skills"],
	},
];

const certifications = [
	{
		name: "AWS Certified Developer - Associate",
		issuer: "Amazon Web Services (AWS)",
		year: "2022",
	},
	{
		name: "Google Cloud Certified - Professional Cloud Developer",
		issuer: "Google Cloud",
		year: "2023",
	},
];

export default function EducationPage() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<h1 className="text-4xl font-bold mb-8 text-center">Education</h1>
			<div className="max-w-4xl mx-auto">
				<Timeline>
					{educations.map((edu, index) => (
						<TimelineItem key={index}>
							<TimelineIcon />
							<TimelineContent>
								<Card className="bg-card text-card-foreground mb-8">
									<CardHeader>
										<CardTitle className="flex justify-between items-center flex-wrap">
											<span className="text-xl">{edu.degree}</span>
											<Badge variant="secondary" className="text-sm">
												{edu.period}
											</Badge>
										</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="font-semibold mb-2 text-primary">
											{edu.institution}
										</p>
										{edu.grade && <p className="mb-2">Grade: {edu.grade}</p>}
										{edu.achievements && (
											<ul className="list-disc list-inside mb-4">
												{edu.achievements.map((achievement, i) => (
													<li key={i}>{achievement}</li>
												))}
											</ul>
										)}
										<div className="flex flex-wrap gap-2">
											{edu.skills.map((skill, skillIndex) => (
												<Badge key={skillIndex} variant="outline">
													{skill}
												</Badge>
											))}
										</div>
									</CardContent>
								</Card>
							</TimelineContent>
						</TimelineItem>
					))}
					<TimelineItem>
						<TimelineIcon />
						<TimelineContent>
							<h2 className="text-2xl font-bold mb-4">
								Professional Certifications
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								{certifications.map((cert, index) => (
									<Card key={index} className="bg-card text-card-foreground">
										<CardHeader>
											<CardTitle>{cert.name}</CardTitle>
										</CardHeader>
										<CardContent>
											<p>{cert.issuer}</p>
											<Badge variant="outline" className="mt-2">
												{cert.year}
											</Badge>
										</CardContent>
									</Card>
								))}
							</div>
						</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineIcon />
						<TimelineContent>
							<h2 className="text-2xl font-bold mb-4">Continuous Learning</h2>
							<Card className="bg-card text-card-foreground">
								<CardContent>
									<ul className="list-disc list-inside space-y-2">
										<li>
											Regularly attend web development conferences and workshops
										</li>
										<li>
											Active participant in online coding communities and forums
										</li>
										<li>
											Completed numerous online courses on platforms like
											Coursera and Udemy
										</li>
										<li>
											Contribute to open-source projects to stay updated with
											latest practices
										</li>
									</ul>
								</CardContent>
							</Card>
						</TimelineContent>
					</TimelineItem>
				</Timeline>
			</div>
		</div>
	);
}
