'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Header() {
    const pathname = usePathname();

    const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <nav className="flex items-center gap-1 bg-white/60 backdrop-blur-md border border-white/20 px-2 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                <Link
                    href="/"
                    onClick={handleHomeClick}
                    className="px-4 py-2 text-sm font-medium text-gray-800 hover:text-black hover:bg-white/50 rounded-full transition-all duration-300"
                >
                    Home
                </Link>
                <Link
                    href="/contact"
                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-white/50 rounded-full transition-all duration-300"
                >
                    Contact
                </Link>

                <div className="w-px h-4 bg-gray-300/50 mx-1" />

                <Link
                    href="https://www.instagram.com/sandarugraphy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-black hover:bg-white/50 rounded-full transition-all duration-300"
                    aria-label="Instagram"
                >
                    <FaInstagram size={18} />
                </Link>
                <Link
                    href="https://www.youtube.com/@sandarusuranjaya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-black hover:bg-white/50 rounded-full transition-all duration-300"
                    aria-label="YouTube"
                >
                    <FaYoutube size={18} />
                </Link>
                <Link
                    href="https://www.tiktok.com/@sandaru.space?_r=1&_t=ZS-92woH0cRhAX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-black hover:bg-white/50 rounded-full transition-all duration-300"
                    aria-label="TikTok"
                >
                    <FaTiktok size={18} />
                </Link>
            </nav>
        </header>
    );
}
