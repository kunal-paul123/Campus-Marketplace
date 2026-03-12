import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "CampusMarket – Buy & Sell Inside Your Campus",
    description:
        "The trusted marketplace for verified college students to buy and sell items within their campus. Books, electronics, bikes, and more.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <main className="min-h-[calc(100vh-4rem)]">{children}</main>
            </body>
        </html>
    );
}
