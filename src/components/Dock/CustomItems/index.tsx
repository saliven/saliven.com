import { AnimatePresence, motion } from 'framer-motion';
import { useLanyard } from 'react-use-lanyard';
import { DiscordItem } from './DiscordItem';
import { SpotifyItem } from './SpotifyItem';

export function CustomItems() {
  const lanyard = useLanyard({ socket: true, userId: '366544702478090241' });

  return (
    <>
      <AnimatePresence>
        {lanyard.status?.spotify && (
          <>
            <motion.div
              initial={{ top: -20, opacity: 0 }}
              animate={{ top: 0, opacity: 1 }}
              exit={{ top: -20, opacity: 0 }}
              transition={{ delay: 0.5, ease: 'easeOut' }}
              className="relative"
            >
              <SpotifyItem lanyard={lanyard} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {lanyard.status?.discord_status !== 'offline' &&
          lanyard.status?.discord_status !== undefined && (
            <>
              <motion.div
                initial={{ top: -20, opacity: 0 }}
                animate={{ top: 0, opacity: 1 }}
                exit={{ top: -20, opacity: 0 }}
                transition={{ delay: 0.5, ease: 'easeOut' }}
                className="relative"
              >
                <DiscordItem lanyard={lanyard} />
              </motion.div>
              <div className="h-12 w-[1px] rounded-md bg-gray-6"></div>
            </>
          )}
      </AnimatePresence>
    </>
  );
}
