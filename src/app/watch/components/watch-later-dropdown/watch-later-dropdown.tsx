import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import playlistService from "@/lib/api/services/playlist.service";
import { Video } from "@/lib/models/video";
import querykeys from "@/lib/querykeys";
import { usePlaylists } from "@/lib/store/playlists.store";
import { useSavedVideos } from "@/lib/store/saved-videos.store";
import { DropdownMenu } from "@/ui";
import SaveIcon from "@/ui/icons/save-icon";

import { SaveButton, XIcon } from "../../page.styles";

import { Entry } from "./watch-later-dropdown.styles";

export interface WatchLaterDropdownProps {
  video: Video;
}

export default function WatchLaterDropdown({ video }: WatchLaterDropdownProps) {
  const { addVideo, removeVideo, isVideoSaved } = useSavedVideos();
  const { playlists } = usePlaylists();
  const qc = useQueryClient();

  const isSaved = isVideoSaved(video.videoId);

  const { mutate } = useMutation({
    mutationFn: playlistService.putAddVideoToPlaylist,
    onSuccess: async (_data, variables) => {
      toast.success("Video added to playlist");

      await qc.invalidateQueries({
        queryKey: querykeys.playlists.get(variables.id),
      });
    },
    onError: () => {
      toast.error("Failed to add video to playlist");
    },
  });

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <SaveButton>
          <SaveIcon />
          Watch Later
        </SaveButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content sideOffset={5} side="bottom" align="end">
          <DropdownMenu.Item asChild>
            {isSaved ? (
              <Entry onClick={() => removeVideo(video.videoId)}>
                <XIcon />
                Remove from saved videos
              </Entry>
            ) : (
              <Entry onClick={() => addVideo({ id: video.videoId, title: video.title })}>
                <SaveIcon />
                Add to saved videos
              </Entry>
            )}
          </DropdownMenu.Item>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger asChild>
              <Entry>Save to playlist</Entry>
            </DropdownMenu.SubTrigger>

            <DropdownMenu.SubContent sideOffset={2} alignOffset={-5}>
              {playlists.map((playlist) => (
                <DropdownMenu.Item key={playlist.id} asChild>
                  <Entry onClick={() => mutate({ id: playlist.id, data: video })}>{playlist.name}</Entry>
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
