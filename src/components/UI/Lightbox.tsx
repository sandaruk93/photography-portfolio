import { CloudinaryImage } from '@/types/cloudinary';
import { IoClose } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from 'next/image';
import { useEffect } from 'react';

interface LightboxProps {
    image: CloudinaryImage | null;
    onClose: () => void;
    onNext?: () => void;
    onPrev?: () => void;
    hasNext?: boolean;
    hasPrev?: boolean;
}

export default function Lightbox({ image, onClose, onNext, onPrev, hasNext, hasPrev }: LightboxProps) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight' && onNext) onNext();
            if (e.key === 'ArrowLeft' && onPrev) onPrev();
        };

        if (image) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [image, onClose, onNext, onPrev]);

    if (!image) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-300"
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors z-[110]"
            >
                <IoClose size={32} />
            </button>

            {/* Navigation Buttons */}
            {hasPrev && (
                <button
                    onClick={(e) => { e.stopPropagation(); onPrev?.(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4 transition-all z-[110] hover:bg-white/10 rounded-full"
                    aria-label="Previous image"
                >
                    <FaChevronLeft size={40} />
                </button>
            )}

            {hasNext && (
                <button
                    onClick={(e) => { e.stopPropagation(); onNext?.(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4 transition-all z-[110] hover:bg-white/10 rounded-full"
                    aria-label="Next image"
                >
                    <FaChevronRight size={40} />
                </button>
            )}

            <div
                className="relative w-full h-full p-4 md:p-12 flex items-center justify-center pointer-events-none"
            >
                <div
                    className="relative shadow-2xl pointer-events-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    <Image
                        src={image.secure_url}
                        alt={image.display_name || 'Expanded image'}
                        width={image.width}
                        height={image.height}
                        className="object-contain max-h-[85vh] max-w-full w-auto h-auto"
                        quality={90}
                        priority
                    />
                </div>
            </div>

            <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none px-4">
                <p className="text-sm font-medium tracking-wide text-white/90 drop-shadow-md">
                    {image.context?.caption || image.context?.title || image.context?.alt || image.display_name?.replace(/[_-]/g, ' ') || 'Untitled'}
                </p>
            </div>
        </div>
    );
}
