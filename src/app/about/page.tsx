import { NextSeo } from 'next-seo';
import {
  SiDocker,
  SiElixir,
  SiGit,
  SiGo,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si';
import { PageLayout } from '../../components/Layouts/PageLayout';
import { TechnologyItem } from '../../components/TechnologyItem';

const TECHNOLOGIES = [
  { name: 'Docker', icon: <SiDocker size={20} /> },
  { name: 'React', icon: <SiReact size={20} /> },
  { name: 'Next.js', icon: <SiNextdotjs size={20} /> },
  { name: 'Elixir', icon: <SiElixir size={20} /> },
  { name: 'Go', icon: <SiGo size={20} /> },
  { name: 'Node.js', icon: <SiNodedotjs size={20} /> },
  { name: 'Git', icon: <SiGit size={20} /> },
  { name: 'Tailwind', icon: <SiTailwindcss size={20} /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={20} /> },
  { name: 'TypeScript', icon: <SiTypescript size={20} /> }
];

export default function About() {
  return (
    <div>
      <NextSeo title={'About'} useAppDir />

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
        <h1 className="text-2xl font-medium text-white">Technologies</h1>
        <p className="mt-2">
          I have a wide range of technology skills that I utilize to create
          robust and high-performing applications.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {TECHNOLOGIES.map((t, i) => (
            <TechnologyItem icon={t.icon} name={t.name} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
