import * as Tooltip from '@radix-ui/react-tooltip';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
  color?: string;
  href: string;
  target?: string;
  active?: boolean;
  tooltip: React.ReactNode;
  onClick?: () => void;
}

export function DockItem({
  children,
  color,
  href,
  active,
  tooltip,
  target,
  onClick
}: Props) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Link target={target} href={href} onClick={onClick}>
            <div
              className={clsx(
                'relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-md border border-gray-5 bg-gray-3 transition-colors duration-300 hover:cursor-pointer hover:border-gray-7 hover:bg-gray-4',
                color ?? 'text-gray-11'
              )}
            >
              {children}
              <AnimatePresence>
                {(color || active) && (
                  <motion.div
                    className={clsx(
                      'absolute translate-y-4 scale-105 blur-md',
                      color ? 'opacity-100' : ''
                    )}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {children}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Link>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content side="top">{tooltip}</Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
