import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../../.contentlayer/generated';

export function ProjectItem({
  title,
  description,
  year,
  link = '',
  logo
}: Project) {
  return (
    <Link href={link} target="_blank">
      <div className="flex items-center space-x-4 rounded-xl border border-white/0 bg-opacity-90 p-4 transition duration-200 hover:border-gray-4 hover:bg-gray-2">
        {logo && (
          <Image
            src={logo}
            width={128}
            height={128}
            className="h-16 w-16 rounded-2xl"
            alt="xd"
          />
        )}

        <div className="flex flex-col space-y-1.5">
          <div className="font-medium text-white">{title}</div>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}
