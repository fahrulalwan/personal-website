import Link from "next/link";
import type { FC } from "react";

const NotFoundPage: FC = () => {
	return (
		<>
			<h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
			<p className="text-lg mb-6">
				The page you are looking for does not exist.
			</p>
			<Link href="/" className="text-blue-500 hover:text-blue-700 underline">
				Return to Home
			</Link>
		</>
	);
};
export default NotFoundPage;
