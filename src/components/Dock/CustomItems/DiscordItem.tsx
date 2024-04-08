import { CopyIcon } from '@radix-ui/react-icons';
import { FaDiscord } from 'react-icons/fa';
import { useCopyToClipboard } from 'react-use';
import { LanyardWebsocket } from 'react-use-lanyard/dist';
import { Tooltip } from '../../Tooltip';
import { DockItem } from '../DockItem';

export function DiscordItem({ lanyard }: { lanyard: LanyardWebsocket }) {
  const [, copyToClipboard] = useCopyToClipboard();

  return (
    <DockItem
      color={
        lanyard.status &&
        (lanyard.status.discord_status !== 'offline'
          ? 'text-[#5865F2]'
          : 'text-gray-9')
      }
      href="https://discord.com/users/366544702478090241"
      target="_blank"
      onClick={() =>
        copyToClipboard(lanyard.status?.discord_user.username ?? '')
      }
      tooltip={
        <Tooltip>
          <div className="flex items-center space-x-1">
            <span>Discord @{lanyard.status?.discord_user.username}</span>
            <CopyIcon height={10} width={10} />
          </div>
        </Tooltip>
      }
    >
      <FaDiscord size={20} />
    </DockItem>
  );
}
