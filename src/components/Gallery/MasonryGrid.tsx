'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import ImageCard from './ImageCard';
import { CloudinaryResponse, CloudinaryImage } from '@/types/cloudinary';
import Lightbox from '@/components/UI/Lightbox';

const fetchImages = async ({ pageParam }: { pageParam?: string }) => {
    const params = new URLSearchParams();
    if (pageParam) params.append('cursor', pageParam);

    const res = await fetch(`/api/photos?${params.toString()}`);
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json() as Promise<CloudinaryResponse>;
};

export default function MasonryGrid({ initialData }: { initialData?: CloudinaryResponse }) {
    const [selectedImage, setSelectedImage] = useState<CloudinaryImage | null>(null);
    const { ref, inView } = useInView();

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: ['photos'],
        queryFn: fetchImages,
        getNextPageParam: (lastPage) => lastPage.next_cursor || undefined,
        initialPageParam: undefined as string | undefined, // Explicitly typed for TS
        initialData: initialData ? {
            pages: [initialData],
            pageParams: [undefined],
        } : undefined,
    });

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

    const allImages = data?.pages.flatMap((page) => page.images) || [];

    return (
        <div className="w-full">
            {/* CSS Masonry Columns */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {allImages.map((image) => (
                    <ImageCard
                        key={image.public_id}
                        image={image}
                        onClick={() => setSelectedImage(image)}
                    />
                ))}
            </div>

            {/* Loading Trigger & State */}
            <div ref={ref} className="h-24 flex items-center justify-center w-full mt-8">
                {isFetchingNextPage ? (
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-5 h-5 border-2 border-gray-300 border-t-black rounded-full animate-spin" />
                        <span className="text-xs text-gray-500 uppercase tracking-widest">Loading</span>
                    </div>
                ) : (
                    !hasNextPage && allImages.length > 0 && (
                        <span className="text-xs text-gray-400 uppercase tracking-widest">End of Gallery</span>
                    )
                )}
            </div>

            <Lightbox
                image={selectedImage}
                onClose={() => setSelectedImage(null)}
            />
        </div>
    );
}
