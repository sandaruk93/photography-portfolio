'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Header() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-fit transition-all duration-300">
            <nav
                className={`
                    flex items-center justify-between md:justify-center 
                    bg-white/60 dark:bg-black/60 backdrop-blur-md 
                    border border-white/20 dark:border-white/10 
                    rounded-full shadow-lg hover:shadow-xl 
                    transition-all duration-300 w-full md:w-auto
                    ${isScrolled ? 'gap-2 md:gap-4 px-3 py-1.5 md:px-6 md:py-2' : 'gap-2 md:gap-6 px-3 py-2 md:px-8 md:py-3'}
                `}
            >
                <Link
                    href="/"
                    onClick={handleHomeClick}
                    className={`
                        font-bold text-gray-800 dark:text-gray-200 
                        hover:text-black dark:hover:text-white 
                        hover:bg-white/50 dark:hover:bg-white/10 
                        rounded-full transition-all duration-300
                        ${isScrolled ? 'px-3 py-2 md:px-4 md:py-2 text-sm md:text-sm' : 'px-3 py-2 md:px-5 md:py-2.5 text-sm md:text-base'}
                    `}
                >
                    Home
                </Link>
                <Link
                    href="/contact"
                    className={`
                        font-bold text-gray-600 dark:text-gray-400 
                        hover:text-black dark:hover:text-white 
                        hover:bg-white/50 dark:hover:bg-white/10 
                        rounded-full transition-all duration-300
                        ${isScrolled ? 'px-3 py-2 md:px-4 md:py-2 text-sm md:text-sm' : 'px-3 py-2 md:px-5 md:py-2.5 text-sm md:text-base'}
                    `}
                >
                    Contact
                </Link>

                <div className={`w-px bg-gray-300/50 dark:bg-gray-700/50 mx-1 md:mx-2 transition-all duration-300 ${isScrolled ? 'h-3 md:h-4' : 'h-4 md:h-5'}`} />

                <div className="flex items-center gap-1 md:gap-2">
                    <Link
                        href="https://www.instagram.com/sandarugraphy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                            text-gray-600 dark:text-gray-400 
                            hover:text-black dark:hover:text-white 
                            hover:bg-white/50 dark:hover:bg-white/10 
                            rounded-full transition-all duration-300
                            ${isScrolled ? 'p-2 md:p-2' : 'p-2 md:p-3'}
                        `}
                        aria-label="Instagram"
                    >
                        <FaInstagram size={18} className={`transition-all duration-300 ${isScrolled ? 'md:w-4 md:h-4' : 'md:w-5 md:h-5'}`} />
                    </Link>
                    <Link
                        href="https://www.youtube.com/@sandarusuranjaya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                            text-gray-600 dark:text-gray-400 
                            hover:text-black dark:hover:text-white 
                            hover:bg-white/50 dark:hover:bg-white/10 
                            rounded-full transition-all duration-300
                            ${isScrolled ? 'p-2 md:p-2' : 'p-2 md:p-3'}
                        `}
                        aria-label="YouTube"
                    >
                        <FaYoutube size={18} className={`transition-all duration-300 ${isScrolled ? 'md:w-4 md:h-4' : 'md:w-5 md:h-5'}`} />
                    </Link>
                    <Link
                        href="https://www.tiktok.com/@sandaru.space?_r=1&_t=ZS-92woH0cRhAX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                            text-gray-600 dark:text-gray-400 
                            hover:text-black dark:hover:text-white 
                            hover:bg-white/50 dark:hover:bg-white/10 
                            rounded-full transition-all duration-300
                            ${isScrolled ? 'p-2 md:p-2' : 'p-2 md:p-3'}
                        `}
                        aria-label="TikTok"
                    >
                        <FaTiktok size={18} className={`transition-all duration-300 ${isScrolled ? 'md:w-4 md:h-4' : 'md:w-5 md:h-5'}`} />
                    </Link>
                </div>
            </nav>
        </header>
    );
}
