import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Car Listings App',
    description: 'A Next.js app for car listings',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="space-x-4">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <Link href="/cars" className="hover:underline">
                        Cars
                    </Link>
                </div>
            </div>
        </nav>
        {children}
        </body>
        </html>
    );
}