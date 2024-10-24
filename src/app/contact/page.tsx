import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import type { FC } from "react";

const ContactPage: FC = () => {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<h1 className="text-4xl font-bold mb-8 text-center">
				Let&apos;s Connect
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
				<Card className="bg-card text-card-foreground">
					<CardHeader>
						<CardTitle>Send Me a Message</CardTitle>
						<CardDescription>I&apos;d love to hear from you!</CardDescription>
					</CardHeader>
					<CardContent>
						<form className="space-y-4">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium mb-1"
								>
									Name
								</label>
								<Input id="name" placeholder="Your Name" />
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium mb-1"
								>
									Email
								</label>
								<Input id="email" type="email" placeholder="your@email.com" />
							</div>
							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium mb-1"
								>
									Message
								</label>
								<Textarea id="message" placeholder="Your message here..." />
							</div>
						</form>
					</CardContent>
					<CardFooter>
						<Button type="submit" className="w-full">
							Send Message
						</Button>
					</CardFooter>
				</Card>
				<div className="space-y-8">
					<Card className="bg-card text-card-foreground">
						<CardHeader>
							<CardTitle>Contact Information</CardTitle>
							<CardDescription>
								Feel free to reach out through any of these channels
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="flex items-center space-x-2">
								<Mail className="h-5 w-5" />
								<a
									href="mailto:fahrulalwan@gmail.com"
									className="hover:underline"
								>
									fahrulalwan@gmail.com
								</a>
							</div>
							<div className="flex items-center space-x-2">
								<MapPin className="h-5 w-5" />
								<span>Jakarta, Indonesia</span>
							</div>
						</CardContent>
					</Card>
					<Card className="bg-card text-card-foreground">
						<CardHeader>
							<CardTitle>Social Media</CardTitle>
							<CardDescription>
								Connect with me on professional networks
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="flex items-center space-x-2">
								<Github className="h-5 w-5" />
								<a
									href="https://github.com/fahrulalwan"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:underline"
								>
									github.com/fahrulalwan
								</a>
							</div>
							<div className="flex items-center space-x-2">
								<Linkedin className="h-5 w-5" />
								<a
									href="https://linkedin.com/in/fahrulalwan"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:underline"
								>
									linkedin.com/in/fahrulalwan
								</a>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
