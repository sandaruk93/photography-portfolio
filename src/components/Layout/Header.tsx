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
            <nav className="flex items-center gap-6 bg-white/60 dark:bg-black/60 backdrop-blur-md border border-white/20 dark:border-white/10 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                <Link
                    href="/"
                    onClick={handleHomeClick}
                    className="px-5 py-2.5 text-base font-bold text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10 rounded-full transition-all duration-300"
                >
                    Home
                </Link>
                <Link
                    href="/contact"
                    className="px-5 py-2.5 text-base font-bold text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10 rounded-full transition-all duration-300"
                >
                    Contact
                </Link>

                <div className="w-px h-5 bg-gray-300/50 dark:bg-gray-700/50 mx-2" />

                <Link
                    href="https://www.instagram.com/sandarugraphy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10 rounded-full transition-all duration-300"
                    aria-label="Instagram"
                >
                    <FaInstagram size={20} />
                </Link>
                <Link
                    href="https://www.youtube.com/@sandarusuranjaya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10 rounded-full transition-all duration-300"
                    aria-label="YouTube"
                >
                    <FaYoutube size={20} />
                </Link>
                <Link
                    href="https://www.tiktok.com/@sandaru.space?_r=1&_t=ZS-92woH0cRhAX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10 rounded-full transition-all duration-300"
                    aria-label="TikTok"
                >
                    <FaTiktok size={20} />
                </Link>
            </nav>
        </header>
    );
}
