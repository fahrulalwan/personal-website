import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    content: "Mohammad is an exceptional frontend engineer. His ability to translate complex requirements into intuitive user interfaces is unparalleled. He consistently delivers high-quality code and is always eager to tackle new challenges.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Alex Chen",
    role: "CTO at StartupX",
    content: "Working with Mohammad was a game-changer for our startup. His technical expertise and leadership skills helped us scale our application and meet tight deadlines. He's not just a developer, but a true problem solver.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Emily Rodriguez",
    role: "Senior UX Designer",
    content: "Mohammad's attention to detail and commitment to creating seamless user experiences make him a joy to work with. He bridges the gap between design and development effortlessly, always ensuring the final product exceeds expectations.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "David Kim",
    role: "Engineering Manager at FinTech Inc.",
    content: "I've had the pleasure of managing Mohammad, and his impact on our team was significant. He not only delivers excellent code but also mentors junior developers and contributes to improving our development processes.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-8 text-center">Testimonials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-card text-card-foreground">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="italic">&ldquo;{testimonial.content}&rdquo;</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
