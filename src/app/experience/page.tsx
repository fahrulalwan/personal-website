import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Frontend Tech Lead",
    company: "Mental Health Platform",
    period: "2022 - Present",
    description: "Leading the frontend development of a mobile app for mental health support using React Native for Android and iOS. Balancing this role with completing my degree.",
    technologies: ["React Native", "TypeScript", "Redux", "Jest"],
  },
  {
    title: "Senior Frontend Engineer",
    company: "Fintech Superapp",
    period: "2020 - 2022",
    description: "Developed and maintained a comprehensive investment platform, focusing on user experience and performance optimization. Continued to excel in my studies while taking on this senior role.",
    technologies: ["React", "Next.js", "TypeScript", "GraphQL"],
  },
  {
    title: "Frontend Engineer",
    company: "Education Tutoring Platform",
    period: "2018 - 2020",
    description: "Built interactive learning experiences and real-time collaboration tools for online tutoring. This role complemented my ongoing university education in Information Systems.",
    technologies: ["Angular", "RxJS", "Socket.io", "SCSS"],
  },
  {
    title: "Full Stack Developer",
    company: "E-commerce Platform",
    period: "2017 - 2018",
    description: "Contributed to both frontend and backend development of a large-scale e-commerce platform. Began my university studies during this period, demonstrating my ability to balance work and education.",
    technologies: ["Vue.js", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Junior Developer",
    company: "Vehicle Auction Company",
    period: "2016 - 2017",
    description: "Started my coding journey, working on various aspects of a vehicle auction platform. This role marked the beginning of my professional career in software development.",
    technologies: ["JavaScript", "jQuery", "PHP", "MySQL"],
  },
  {
    title: "Network Technician",
    company: "IT Services Provider",
    period: "2015 - 2016",
    description: "Began my tech career in networking, managing and troubleshooting network infrastructures. This experience provided a solid foundation for my transition into software development.",
    technologies: ["Cisco", "Network Protocols", "Troubleshooting"],
  },
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-8 text-center">Professional Experience</h1>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="flex justify-between items-center flex-wrap">
                <span className="text-xl">{exp.title}</span>
                <Badge variant="secondary" className="text-sm">{exp.period}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold mb-2 text-primary">{exp.company}</p>
              <p className="mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline">{tech}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
