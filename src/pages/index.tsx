import { NextSeo } from 'next-seo';
import { EmptyPlaceholder } from '../components/EmptyPlaceholder';
import { PageLayout } from '../components/Layouts/PageLayout';

export default function Home() {
  return (
    <PageLayout>
      <NextSeo title={undefined} defaultTitle="Saliven.com" />

      <div>
        <h1 className="text-4xl font-medium text-white">Saliven</h1>
        <p className="text-xl text-gray-11">Software engineer</p>
      </div>

      <p className="mt-4 text-lg text-gray-10">
        I&apos;m Saliven a self-taught frontend and backend software engineer,
        interested in web technologies, distributed systems and infrastructure.
      </p>

      <div className="mt-10">
        <h1 className="text-xl font-medium text-white">Recent posts</h1>
        <EmptyPlaceholder>
          <p className="text-sm text-gray-9">
            Hopefully there will be something here sometime in the future.
          </p>
        </EmptyPlaceholder>
      </div>
    </PageLayout>
  );
}
