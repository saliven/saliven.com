import { InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import { allProjects } from '../../.contentlayer/generated';
import { PageLayout } from '../components/Layouts/PageLayout';
import { ProjectItem } from '../components/ProjectItem';

export default function Projects({
  projects
}: InferGetStaticPropsType<typeof getStaticProps>) {
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

      <div className="mt-10">
        <h1 className="text-2xl font-medium text-white">Projects</h1>
        <p className="mt-2">
          Some of my recent projects that I was working on.
        </p>
        <div className="mt-8 flex flex-col space-y-4">
          {projects.map((p, i) => (
            <ProjectItem
              key={i}
              name={p.title}
              description={p.description}
              year={p.year}
              link={p.link}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

export function getStaticProps() {
  return {
    props: {
      projects: allProjects
    }
  };
}
