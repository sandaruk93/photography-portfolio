import MasonryGrid from '@/components/Gallery/MasonryGrid';
import { getPhotos } from '@/lib/cloudinary';

export const revalidate = 60;

export default async function Home() {
  const initialData = await getPhotos();

  return (
    <>
      <div className="mb-12 animate-fade-in-up">
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white mb-4">Sandaru Suranjaya Photography</h1>
        <div className="text-gray-500 dark:text-gray-400 font-light max-w-2xl text-base sm:text-lg leading-relaxed mb-6 space-y-4">
          <p>
            I am a hobbyist photographer in Singapore with a passion for visual storytelling. This website serves as a curated gallery of my artistic journey, featuring everything from street, urban, architecture to nature, landscape and macro photography.
          </p>
          <p>
            Please enjoy this collection of my personal work and artistic projects.
          </p>
        </div>
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
