import type { Metadata } from "next";
import "./globals.css";

import NavBar from "@/app/components/navbar";
import Footer from "./components/footer";

export const metadata: Metadata = {
	title: "Bistro Bliss",
	description: "Place to eat",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
				<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
			</head>
			<body
				className={`antialiased`}
			>
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
