import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    category: "Frontend",
    expert: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
    proficient: ["Angular", "Vue.js", "Remix", "Tailwind CSS"],
    familiar: ["Svelte", "Gatsby"],
  },
  {
    category: "Backend",
    expert: ["Node.js", "Express"],
    proficient: ["Java Spring Boot", "MongoDB", "PostgreSQL"],
    familiar: ["Redis", "Kafka"],
  },
  {
    category: "Mobile",
    expert: ["React Native"],
    proficient: ["Android"],
    familiar: ["iOS"],
  },
  {
    category: "DevOps & Cloud",
    expert: ["Docker", "AWS"],
    proficient: ["Kubernetes", "NGINX", "GCP"],
    familiar: ["Digital Ocean", "Azure"],
  },
  {
    category: "Tools & Practices",
    expert: ["Git", "Agile Methodologies", "RESTful APIs"],
    proficient: ["CI/CD", "Test-Driven Development", "GraphQL"],
    familiar: ["Microservices Architecture", "Serverless"],
  },
]

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-8 text-center">Skills & Expertise</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <Card key={index} className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>{category.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Expert</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.expert.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="default">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Proficient</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.proficient.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Familiar</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.familiar.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
