import { NextSeo } from 'next-seo';
import { allProjects } from '../../.contentlayer/generated';
import { PageLayout } from '../components/Layouts/PageLayout';
import { ProjectItem } from '../components/ProjectItem';

export default function Home() {
  const projects = allProjects.sort((a, b) => b.year - a.year);

  return (
    <div>
      <NextSeo title={'Home'} useAppDir />

      <div>
        <h1 className="text-4xl font-medium text-white">Saliven</h1>
        <p className="text-xl text-gray-11">Software engineer</p>
      </div>

      <p className="mt-4 text-lg text-gray-10">
        I&apos;m Saliven a self-taught frontend and backend software engineer,
        interested in web technologies, distributed systems and infrastructure.
      </p>

      <div className="mt-10">
        <h1 className="text-2xl font-medium text-white">Projects</h1>
        <p className="mt-2">
          Some of my recent projects that I was working on.
        </p>
        <div className="mt-8 flex flex-col space-y-4">
          {projects.map((p, i) => (
            <ProjectItem key={i} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}
