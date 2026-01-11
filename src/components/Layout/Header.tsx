'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaInstagram, FaYoutube, FaTiktok, FaGlobe, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from 'next-themes';

export default function Header() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

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
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-max max-w-[95vw] transition-all duration-300">
            <nav
                className={`
                    flex items-center justify-between md:justify-center 
                    bg-white/50 dark:bg-black/50 backdrop-blur-2xl 
                    border border-white/10 dark:border-white/5
                    rounded-full shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4),0_8px_32px_-4px_rgba(0,0,0,0.1)] 
                    hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.5),0_12px_40px_-4px_rgba(0,0,0,0.15)]
                    transition-all duration-500 w-full md:w-auto overflow-x-auto scrollbar-hide
                    ${isScrolled ? 'gap-1 md:gap-4 px-2 py-1.5 md:px-6 md:py-2' : 'gap-1 md:gap-6 px-3 py-2 md:px-8 md:py-3'}
                `}
            >
                <Link
                    href="/"
                    onClick={handleHomeClick}
                    className={`
                        font-bold text-gray-900 dark:text-gray-100 
                        hover:text-black dark:hover:text-white 
                        hover:bg-white/50 dark:hover:bg-white/10 
                        rounded-full transition-all duration-300 whitespace-nowrap
                        ${isScrolled ? 'px-2 py-2 md:px-4 md:py-2 text-xs md:text-sm' : 'px-3 py-2 md:px-5 md:py-2.5 text-sm md:text-base'}
                    `}
                >
                    Home
                </Link>
                <Link
                    href="/contact"
                    className={`
                        font-bold text-gray-700 dark:text-gray-300 
                        hover:text-black dark:hover:text-white 
                        hover:bg-white/50 dark:hover:bg-white/10 
                        rounded-full transition-all duration-300 whitespace-nowrap
                        ${isScrolled ? 'px-2 py-2 md:px-4 md:py-2 text-xs md:text-sm' : 'px-3 py-2 md:px-5 md:py-2.5 text-sm md:text-base'}
                    `}
                >
                    Contact
                </Link>

                <div className={`w-px bg-gray-300/50 dark:bg-gray-700/50 mx-0.5 md:mx-2 transition-all duration-300 ${isScrolled ? 'h-3 md:h-4' : 'h-4 md:h-5'}`} />

                <div className="flex items-center gap-0.5 md:gap-2">
                    <Link
                        href="https://sandaru.me"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                            text-gray-700 dark:text-gray-300 
                            hover:text-black dark:hover:text-white 
                            hover:bg-white/50 dark:hover:bg-white/10 
                            rounded-full transition-all duration-300
                            ${isScrolled ? 'p-1.5 md:p-2' : 'p-2 md:p-3'}
                        `}
                        aria-label="Main Website"
                    >
                        <FaGlobe size={16} className={`transition-all duration-300 ${isScrolled ? 'md:w-4 md:h-4' : 'md:w-5 md:h-5'}`} />
                    </Link>
                    <Link
                        href="https://www.instagram.com/sandarugraphy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                            text-gray-700 dark:text-gray-300 
                            hover:text-black dark:hover:text-white 
                            hover:bg-white/50 dark:hover:bg-white/10 
                            rounded-full transition-all duration-300
                            ${isScrolled ? 'p-1.5 md:p-2' : 'p-2 md:p-3'}
                        `}
                        aria-label="Instagram"
                    >
                        <FaInstagram size={16} className={`transition-all duration-300 ${isScrolled ? 'md:w-4 md:h-4' : 'md:w-5 md:h-5'}`} />
                    </Link>
                    <Link
                        href="https://www.youtube.com/@sandarusuranjaya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                            text-gray-700 dark:text-gray-300 
                            hover:text-black dark:hover:text-white 
                            hover:bg-white/50 dark:hover:bg-white/10 
                            rounded-full transition-all duration-300
                            ${isScrolled ? 'p-1.5 md:p-2' : 'p-2 md:p-3'}
                        `}
                        aria-label="YouTube"
                    >
                        <FaYoutube size={16} className={`transition-all duration-300 ${isScrolled ? 'md:w-4 md:h-4' : 'md:w-5 md:h-5'}`} />
                    </Link>
                    <Link
                        href="https://www.tiktok.com/@sandaru.space?_r=1&_t=ZS-92woH0cRhAX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                            text-gray-700 dark:text-gray-300 
                            hover:text-black dark:hover:text-white 
                            hover:bg-white/50 dark:hover:bg-white/10 
                            rounded-full transition-all duration-300
                            ${isScrolled ? 'p-1.5 md:p-2' : 'p-2 md:p-3'}
                        `}
                        aria-label="TikTok"
                    >
                        <FaTiktok size={16} className={`transition-all duration-300 ${isScrolled ? 'md:w-4 md:h-4' : 'md:w-5 md:h-5'}`} />
                    </Link>
                </div>

                <div className={`w-px bg-gray-300/50 dark:bg-gray-700/50 mx-0.5 md:mx-2 transition-all duration-300 ${isScrolled ? 'h-3 md:h-4' : 'h-4 md:h-5'}`} />

                {mounted && (
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className={`
                            text-gray-700 dark:text-gray-300 
                            hover:text-black dark:hover:text-white 
                            hover:bg-white/50 dark:hover:bg-white/10 
                            rounded-full transition-all duration-300
                            ${isScrolled ? 'p-1.5 md:p-2' : 'p-2 md:p-3'}
                        `}
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? (
                            <FaSun size={16} className={`transition-all duration-300 ${isScrolled ? 'md:w-4 md:h-4' : 'md:w-5 md:h-5'}`} />
                        ) : (
                            <FaMoon size={16} className={`transition-all duration-300 ${isScrolled ? 'md:w-4 md:h-4' : 'md:w-5 md:h-5'}`} />
                        )}
                    </button>
                )}
            </nav>
        </header>
    );
}
