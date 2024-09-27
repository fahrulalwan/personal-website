import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-8 text-center">Education</h1>
      <Card className="bg-card text-card-foreground mb-8">
        <CardHeader>
          <CardTitle className="flex justify-between items-center flex-wrap">
            <span className="text-xl">Bachelor of Information Systems</span>
            <Badge variant="secondary" className="text-sm">2017 - 2021</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-semibold mb-2 text-primary">Bina Nusantara University</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Graduated with a GPA of 3.76 (Summa Cum Laude)</li>
            <li>Balanced full-time work in the tech industry with academic studies</li>
            <li>Focused on courses related to software development, database management, and information systems analysis</li>
            <li>Participated in various coding competitions and hackathons</li>
            <li>Completed a capstone project on building a scalable web application, which demonstrated proficiency in full-stack development and project management</li>
          </ul>
        </CardContent>
      </Card>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Additional Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>AWS Certified Developer - Associate</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Amazon Web Services (AWS)</p>
              <Badge variant="outline" className="mt-2">2022</Badge>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>Google Cloud Certified - Professional Cloud Developer</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Google Cloud</p>
              <Badge variant="outline" className="mt-2">2023</Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
