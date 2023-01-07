import { NextSeo } from 'next-seo';
import { PageLayout } from '../components/Layouts/PageLayout';

export default function Projects() {
  return (
    <PageLayout>
      <NextSeo title="About" />

      <div>
        <h1 className="text-4xl font-medium text-white">About</h1>
        <p className="mt-4 text-lg">
          I am a fullstack software engineer from the Czech Republic. I love new
          and cutting-edge technologies and I care about performance and
          efficiency. I am also a big fan of open-source software. I&apos;ve
          been programming since I was eight years old, I&apos;ve learned a lot
          of new things and programming principles. Recently, I&apos;ve also
          become interested in distributed systems and infrastructure. I am
          always trying to improve my skills and learn new things.
        </p>
      </div>
    </PageLayout>
  );
}
