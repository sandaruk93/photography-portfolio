import { NextResponse } from 'next/server';
import { getPhotos } from '@/lib/cloudinary';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const cursor = searchParams.get('cursor') || undefined;

    try {
        const data = await getPhotos(cursor);
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 });
    }
}
