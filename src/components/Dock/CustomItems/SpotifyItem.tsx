import { OpenInNewWindowIcon } from '@radix-ui/react-icons';
import { FaSpotify } from 'react-icons/fa';
import { LanyardWebsocket } from 'react-use-lanyard';
import { Tooltip } from '../../Tooltip';
import { DockItem } from '../DockItem';

export function SpotifyItem({ lanyard }: { lanyard: LanyardWebsocket }) {
  return (
    <DockItem
      color="text-green-9"
      href={
        'https://open.spotify.com/track/' + lanyard.status?.spotify?.track_id
      }
      tooltip={
        <Tooltip>
          <div className="flex items-center space-x-1">
            <span>
              Listening to {lanyard.status?.spotify?.song} by{' '}
              {lanyard.status?.spotify?.artist}
            </span>
            <OpenInNewWindowIcon height={10} width={10} />
          </div>
        </Tooltip>
      }
    >
      <FaSpotify size={20} />
    </DockItem>
  );
}
