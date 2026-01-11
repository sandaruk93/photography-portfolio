'use client';
import { CloudinaryImage } from '@/types/cloudinary';
import { IoClose } from "react-icons/io5";
import Image from 'next/image';
import { useEffect } from 'react';

interface LightboxProps {
    image: CloudinaryImage | null;
    onClose: () => void;
}

export default function Lightbox({ image, onClose }: LightboxProps) {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (image) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleEsc);
        }
        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleEsc);
        };
    }, [image, onClose]);

    if (!image) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-300"
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-black transition-colors z-50"
            >
                <IoClose size={32} />
            </button>

            <div
                className="relative w-full h-full p-4 md:p-12 flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative shadow-2xl">
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
                    {image.context?.custom?.caption || image.context?.custom?.title || image.display_name?.replace(/[_-]/g, ' ') || 'Untitled'}
                </p>
            </div>
        </div>
    );
}
