import Link from 'next/link';

interface Props {
  name: string;
  description: string;
  year: number;
  link?: string;
}

export function ProjectItem({ name, description, year, link = '' }: Props) {
  return (
    <Link
      href={link}
      target="_blank"
      className="group flex justify-between rounded-lg border border-gray-4 border-opacity-30 bg-opacity-30 p-4 transition-all duration-200 hover:border-opacity-100 hover:bg-gray-2/60"
    >
      <div className="flex items-center space-x-1">
        <h1 className="text-md font-medium transition-colors duration-200 group-hover:text-white">
          {name}
        </h1>
        <p className="text-sm">{description}</p>
      </div>
      <div>{year}</div>
    </Link>
  );
}
