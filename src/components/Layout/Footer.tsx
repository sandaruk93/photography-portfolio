export default function Footer() {
    return (
        <footer className="py-8 border-t border-gray-100 dark:border-white/10 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    © {new Date().getFullYear()} Sandaru Suranjaya Photography. All rights reserved.
                </p>
                <a
                    href="https://sandaru.me"
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                    Go to sandaru.me →
                </a>
            </div>
        </footer>
    );
}
