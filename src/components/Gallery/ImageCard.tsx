'use client';

import Image from 'next/image';
import { CloudinaryImage } from '@/types/cloudinary';

interface ImageCardProps {
    image: CloudinaryImage;
    onClick?: () => void;
}

export default function ImageCard({ image, onClick }: ImageCardProps) {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dah43wh2z';

    // Construct a tiny blur placeholder URL
    // v{version} is important for caching
    const blurUrl = `https://res.cloudinary.com/${cloudName}/image/upload/w_10,e_blur:1000,q_1,f_auto/v${image.version}/${image.public_id}.jpg`;

    return (
        <div
            className="mb-4 break-inside-avoid relative group cursor-pointer"
            onClick={onClick}
        >
            <div className="relative overflow-hidden rounded-sm bg-gray-100">
                <Image
                    src={image.secure_url}
                    alt={image.display_name || image.public_id}
                    width={image.width}
                    height={image.height}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                    placeholder="blur"
                    blurDataURL={blurUrl}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
            </div>
        </div>
    );
}
