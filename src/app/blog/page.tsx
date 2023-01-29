import { NextSeo } from 'next-seo';
import { EmptyPlaceholder } from '../../components/EmptyPlaceholder';

export default function Blog() {
  return (
    <div>
      <NextSeo title="Blog" useAppDir />

      <div>
        <h1 className="text-4xl font-medium text-white">Blog</h1>
        <p className="mt-4 text-lg">
          When I&apos;m not lazy, I&apos;ll occasionally write something
        </p>
      </div>

      <EmptyPlaceholder>
        <p className="text-sm text-gray-9">
          Hopefully there will be something here sometime in the future.
        </p>
      </EmptyPlaceholder>
    </div>
  );
}
