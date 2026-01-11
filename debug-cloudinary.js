require('dotenv').config({ path: '.env.local' });
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function testFetch() {
    console.log('Fetching with Cloud Name:', process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);
    try {
        const results = await cloudinary.search
            .expression('folder:portfolio-live')
            .sort_by('public_id', 'desc')
            .max_results(2)
            .with_field('context')
            .execute();

        console.log('Sample Image Data:', JSON.stringify(results.resources[0], null, 2));
    } catch (e) {
        console.error(e);
    }
}

testFetch();
