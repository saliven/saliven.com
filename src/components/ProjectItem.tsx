import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../../.contentlayer/generated';

export function ProjectItem({
  title,
  description,
  year,
  link = '',
  logo,
  active
}: Project) {
  return (
    <Link href={link} target={link ? '_blank' : '_self'}>
      <div className="flex items-center space-x-4 rounded-xl border border-white/0 bg-opacity-90 p-4 transition duration-200 hover:border-gray-4 hover:bg-gray-2">
        {logo && (
          <Image
            src={logo}
            width={128}
            height={128}
            className={clsx('h-16 w-16 rounded-2xl', !active && 'grayscale')}
            alt="project logo"
          />
        )}

        <div className="flex flex-col space-y-1.5">
          <div className="flex items-center space-x-2 font-medium text-white">
            <p>{title}</p>
            {!active && (
              <span className="rounded-[4px] bg-gray-3 px-2 py-1 text-xs text-gray-11">
                Inactive
              </span>
            )}
          </div>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}
