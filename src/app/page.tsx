import MasonryGrid from '@/components/Gallery/MasonryGrid';
import { getPhotos } from '@/lib/cloudinary';

export const revalidate = 60;

export default async function Home() {
  const initialData = await getPhotos();

  return (
    <>
      <div className="mb-12 animate-fade-in-up">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">Sandaru Suranjaya Photography</h1>
        <p className="text-gray-500 dark:text-gray-400 font-light max-w-lg mb-6">
          A visual journal of places, faces, and moments frozen in time.
        </p>
        <a
          href="https://sandaru.me"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
        >
          Visit sandaru.me <span className="ml-1">↗</span>
        </a>
      </div>

      <MasonryGrid initialData={initialData} />
    </>
  );
}
