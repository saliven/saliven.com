import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  HomeIcon,
  ImageIcon,
  LetterCaseCapitalizeIcon,
  PersonIcon,
  TwitterLogoIcon
} from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import { Tooltip } from '../Tooltip';
import { DockItem } from './DockItem';
import { CustomItems } from './CustomItems';
import { useRouter } from 'next/router';

const variants = {
  initial: {
    opacity: 0,
    bottom: -70
  },
  animate: {
    opacity: 1,
    bottom: -35
  }
};

const pageItems = [
  { name: 'Home', icon: <HomeIcon height={20} width={20} />, path: '/' },
  {
    name: 'About',
    icon: <PersonIcon height={20} width={20} />,
    path: '/about'
  },
  {
    name: 'Blog',
    icon: <LetterCaseCapitalizeIcon height={20} width={20} />,
    path: '/blog'
  },
  {
    name: 'Gallery',
    icon: <ImageIcon height={20} width={20} />,
    path: '/gallery'
  }
];

export function Dock() {
  const router = useRouter();

  return (
    <motion.div
      className="fixed left-1/2 mb-5 -translate-y-1/2 -translate-x-1/2"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="initial"
      transition={{ duration: 1, ease: 'easeInOut' }}
      onEnded={(e) => console.log(e)}
    >
      <div className="flex items-center space-x-3 rounded-xl border border-gray-5 bg-gray-2 bg-opacity-95 p-3 text-gray-12 shadow-2xl backdrop-blur-xl">
        <CustomItems />

        {pageItems.map((i, key) => (
          <DockItem
            key={key}
            href={i.path}
            active={router.route === i.path}
            tooltip={<Tooltip>{i.name}</Tooltip>}
          >
            {i.icon}
          </DockItem>
        ))}

        <div className="h-12 w-[1px] rounded-md bg-gray-6"></div>

        <DockItem
          href="https://github.com/saliven"
          target="_blank"
          tooltip={<Tooltip>GitHub</Tooltip>}
        >
          <GitHubLogoIcon height={20} width={20} />
        </DockItem>

        <DockItem
          href="mailto:s4liven@pm.me"
          tooltip={<Tooltip>Email</Tooltip>}
        >
          <EnvelopeClosedIcon height={20} width={20} />
        </DockItem>

        <DockItem
          href="https://twitter.com/s4liven"
          target="_blank"
          tooltip={<Tooltip>Twitter</Tooltip>}
        >
          <TwitterLogoIcon height={20} width={20} />
        </DockItem>
      </div>
    </motion.div>
  );
}
