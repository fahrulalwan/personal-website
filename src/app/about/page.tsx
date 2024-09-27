import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-card text-card-foreground">
          <CardHeader>
            <CardTitle>Mohammad Fahrul Alwan</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              I&rsquo;m a 25-year-old Senior Frontend Engineer and Tech Lead with 7 years of diverse experience in the tech industry. My journey began in networking, but I quickly found my passion in coding, particularly frontend development.
            </p>
            <p className="mb-4">
              With 6 years of coding experience, including 2 years as a frontend tech lead, I&rsquo;ve had the opportunity to work on a wide range of projects across various industries. I&rsquo;m passionate about product development, marketing, business impact, and engineering best practices.
            </p>
            <p className="mb-4">
              I hold a Bachelor&rsquo;s degree in Information Systems from Bina Nusantara University, where I achieved a GPA of 3.76, graduating Summa Cum Laude. What sets me apart is my ability to balance full-time work with academic excellence, demonstrating my strong work ethic and time management skills.
            </p>
            <p>
              My goal is to leverage my skills and experience to contribute to innovative projects on a global scale, potentially working with overseas companies to broaden my horizons and make a significant impact in the tech world.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-card text-card-foreground">
          <CardHeader>
            <CardTitle>Key Strengths</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <Badge variant="secondary" className="mr-2">Problem Solver</Badge>
                Adept at finding innovative solutions to complex technical challenges
              </li>
              <li>
                <Badge variant="secondary" className="mr-2">Tech Lead</Badge>
                Experienced in leading and mentoring development teams
              </li>
              <li>
                <Badge variant="secondary" className="mr-2">Versatile</Badge>
                Proficient in a wide range of technologies and frameworks
              </li>
              <li>
                <Badge variant="secondary" className="mr-2">Business-Oriented</Badge>
                Focus on creating solutions that drive business impact
              </li>
              <li>
                <Badge variant="secondary" className="mr-2">Adaptable</Badge>
                Quick to learn and apply new technologies and methodologies
              </li>
              <li>
                <Badge variant="secondary" className="mr-2">Academic Excellence</Badge>
                Summa Cum Laude graduate while working full-time
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
