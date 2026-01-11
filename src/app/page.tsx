import MasonryGrid from '@/components/Gallery/MasonryGrid';
import { getPhotos } from '@/lib/cloudinary';

export const revalidate = 60;

export default async function Home() {
  const initialData = await getPhotos();

  return (
    <>
      <div className="mb-12 animate-fade-in-up">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">Sandaru Suranjaya Photography</h1>
        <p className="text-gray-500 dark:text-gray-400 font-light max-w-lg">
          A visual journal of places, faces, and moments frozen in time.
        </p>
      </div>

      <MasonryGrid initialData={initialData} />
    </>
  );
}
