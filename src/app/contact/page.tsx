import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-8 text-center">Get in Touch</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-card text-card-foreground">
          <CardHeader>
            <CardTitle>Contact Form</CardTitle>
            <CardDescription>Fill out this form to send me a message</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <Textarea id="message" placeholder="Your message here..." />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">Send Message</Button>
          </CardFooter>
        </Card>
        <Card className="bg-card text-card-foreground">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Feel free to reach out through any of these channels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <a href="mailto:fahrulalwan@gmail.com" className="hover:underline">fahrulalwan@gmail.com</a>
            </div>
            <div className="flex items-center space-x-2">
              <Github className="h-5 w-5" />
              <a href="https://github.com/fahrulalwan" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/fahrulalwan</a>
            </div>
            <div className="flex items-center space-x-2">
              <Linkedin className="h-5 w-5" />
              <a href="https://linkedin.com/in/fahrulalwan" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/fahrulalwan</a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
