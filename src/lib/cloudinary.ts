import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryResponse } from '@/types/cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const getPhotos = async (cursor?: string): Promise<CloudinaryResponse> => {
    try {
        const search = cloudinary.search
            .expression('folder:portfolio-live')
            .sort_by('public_id', 'desc')
            .max_results(12)
            .with_field('context');

        if (cursor) {
            search.next_cursor(cursor);
        }

        const results = await search.execute();

        return {
            images: results.resources,
            next_cursor: results.next_cursor,
        };
    } catch (error) {
        console.error('Cloudinary Search Error:', error);
        return { images: [] };
    }
};
