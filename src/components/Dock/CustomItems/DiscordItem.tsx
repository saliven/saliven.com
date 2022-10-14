import { CopyIcon } from '@radix-ui/react-icons';
import { FaDiscord } from 'react-icons/fa';
import { LanyardWebsocket } from 'react-use-lanyard/dist';
import { Tooltip } from '../../Tooltip';
import { DockItem } from '../DockItem';

export function DiscordItem({ lanyard }: { lanyard: LanyardWebsocket }) {
  return (
    <DockItem
      color="text-[#5865F2]"
      href=""
      tooltip={
        <Tooltip>
          <div className="flex items-center space-x-1">
            <span>
              Online at Discord - {lanyard.status?.discord_user.username}#
              {lanyard.status?.discord_user.discriminator}
            </span>
            <CopyIcon height={10} width={10} />
          </div>
        </Tooltip>
      }
    >
      <FaDiscord size={20} />
    </DockItem>
  );
}
