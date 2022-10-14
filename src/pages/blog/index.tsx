import { NextSeo } from 'next-seo';
import { EmptyPlaceholder } from '../../components/EmptyPlaceholder';
import { PageLayout } from '../../components/Layouts/PageLayout';

export default function Blog() {
  return (
    <PageLayout>
      <NextSeo title="Blog" />

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
    </PageLayout>
  );
}
