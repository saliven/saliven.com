import { OpenInNewWindowIcon } from '@radix-ui/react-icons';
import { FaSpotify } from 'react-icons/fa';
import { LanyardWebsocket } from 'react-use-lanyard';
import { Tooltip } from '../../Tooltip';
import { DockItem } from '../DockItem';
import Image from 'next/image';

export function SpotifyItem({ lanyard }: { lanyard: LanyardWebsocket }) {
  return (
    <DockItem
      color="text-green-9"
      href={
        'https://open.spotify.com/track/' + lanyard.status?.spotify?.track_id
      }
      tooltip={
        <Tooltip>
          <div className="flex w-56 items-center space-x-2 py-1">
            <Image
              src={lanyard.status?.spotify?.album_art_url ?? ''}
              alt="spotify album art"
              width={64}
              height={64}
              priority={true}
              className="rounded-[4px]"
            />
            <div className="flex flex-col">
              <h1 className="text-md max-w-28 truncate font-medium text-gray-12">
                {lanyard.status?.spotify?.song}
              </h1>
              <p className="max-w-28 truncate">
                {lanyard.status?.spotify?.artist}
              </p>
            </div>
          </div>
        </Tooltip>
      }
    >
      <FaSpotify size={20} />
    </DockItem>
  );
}
