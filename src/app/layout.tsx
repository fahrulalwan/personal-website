import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter, Fira_Code } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";
import "./theme.css";
import type { FC, PropsWithChildren } from "react";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({
	subsets: ["latin"],
	variable: "--font-fira-code",
});

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
			</body>
			<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
		</html>
	);
};

export default RootLayout;
