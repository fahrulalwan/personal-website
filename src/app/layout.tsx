import { Inter, Fira_Code } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";
import "./theme.css";
import type { FC, PropsWithChildren } from "react";
import Header from "@/components/header";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({
	subsets: ["latin"],
	variable: "--font-fira-code",
});

export const metadata: Metadata = {
	title: {
		template: "%s | @fahrulalwan",
		default: "@fahrulalwan",
	},
	description:
		"Software Engineer with a passion for building delightful user experiences. I specialize in frontend development with React and Next.js.",
	referrer: "same-origin",
	keywords: [
		"Mohammad Fahrul Alwan",
		"Software Engineer",
		"Frontend Developer",
		"Full-stack Developer",
		"React Developer",
		"React Engineer",
		"Lead Developer",
		"Engineering Lead",
		"Technical Lead",
		"Software Developer",
		"Web Developer",
		"JavaScript Developer",
		"TypeScript Developer",
		"Next.js Developer",
		"React Native Developer",
		"Node.js Developer",
	],
	openGraph: {
		type: "website",
		locale: "enUS",
		siteName: "@fahrulalwan",
		alternateLocale: ["idID"],
		countryName: "Indonesia",
		description:
			"Software Engineer with a passion for building delightful user experiences. I specialize in frontend development with React and Next.js.",
		emails: "fahrulalwan@gmail.com",
		title: "@fahrulalwan",
	},
	robots: {
		follow: true,
		index: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	// icons: {
	// 	icon: "/icon.png",
	// 	shortcut: "/shortcut-icon.png",
	// 	apple: "/apple-icon.png",
	// 	other: {
	// 		rel: "apple-touch-icon-precomposed",
	// 		url: "/apple-touch-icon-precomposed.png",
	// 	},
	// },
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${inter.variable} ${firaCode.variable}`}
		>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="flex flex-col min-h-screen">
						<Header />
						<main className="flex-grow">
							<div className="max-w-[1024px] mx-auto px-4 py-16">
								{children}
							</div>
						</main>
						<footer className="bg-background border-t border-border py-4 text-center">
							<div className="max-w-[1024px] mx-auto px-4">
								<p>
									&copy; {new Date().getFullYear()} Mohammad Fahrul Alwan. All
									rights reserved.
								</p>
							</div>
						</footer>
					</div>
				</ThemeProvider>
				<Analytics />
			</body>
		</html>
	);
};

export default RootLayout;
