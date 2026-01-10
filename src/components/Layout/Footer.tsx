export default function Footer() {
    return (
        <footer className="py-8 border-t border-gray-100 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} Photography Portfolio. All rights reserved.
                </p>
                <a
                    href="https://sandaru.me" // Assuming this is the main site based on username
                    className="text-sm text-gray-500 hover:text-black transition-colors"
                >
                    ← Back to Main Site
                </a>
            </div>
        </footer>
    );
}
