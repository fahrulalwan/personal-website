"use client";

import { Home } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {
	const pathname = usePathname();

	if (pathname === "/") {
		return null;
	}

	return (
		<header className="fixed top-4 left-4 z-50">
			<Link href="/" passHref>
				<Button
					variant="ghost"
					size="icon"
					className="bg-background/50 backdrop-blur-sm rounded-full"
				>
					<Home className="h-5 w-5" />
					<span className="sr-only">Go to homepage</span>
				</Button>
			</Link>
		</header>
	);
};

export default Header;
