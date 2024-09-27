import { Inter, Fira_Code } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";
import type { ReactNode } from "react";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({
	subsets: ["latin"],
	variable: "--font-fira-code",
});

export const metadata = {
	title: "Mohammad Fahrul Alwan - Portfolio",
	description: "Senior Frontend Engineer & Tech Lead",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${inter.variable} ${firaCode.variable}`}
			suppressHydrationWarning
		>
			<body>
				<ThemeProvider attribute="class">
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
			</body>
		</html>
	);
}
