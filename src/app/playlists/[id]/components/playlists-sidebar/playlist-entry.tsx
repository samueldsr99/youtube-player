import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import playlistService from "@/lib/api/services/playlist.service";
import { Video } from "@/lib/models/video";
import querykeys from "@/lib/querykeys";

import { Data, IconButton, Root, Subtitle, Thumbnail, Title, XIcon } from "./playlist-entry.styles";

export interface PlaylistEntryProps {
  playlistId: string;
  isActive?: boolean;
  video: Video;
  to: string;
}

type DeleteVideoFromPlaylistForm = {
  playlistId: string;
  videoId: string;
};

export default function PlaylistEntry({ playlistId, video, isActive, to }: PlaylistEntryProps) {
  const { handleSubmit, register } = useForm<DeleteVideoFromPlaylistForm>();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: () => playlistService.putRemoveVideoFromPlaylist({ playlistId, videoId: video.videoId }),
    onSuccess: async () => {
      toast.success(`Removed ${video.title} from playlist`);
      await queryClient.invalidateQueries({
        queryKey: querykeys.playlists.get(playlistId),
      });
    },
    onError: () => {
      toast.error(`Failed to remove ${video.title} from playlist`);
    },
  });

  const onSubmit = handleSubmit((_data, e) => {
    e?.preventDefault();
    e?.stopPropagation();
    mutate();
  });

  return (
    <Root $isActive={isActive}>
      <Data to={to}>
        <Thumbnail src={video.thumbnailUrl} alt={video.title} width="100%" height="auto" />
        <div>
          <Title>{video.title}</Title>
          <Subtitle>{video.owner}</Subtitle>
        </div>
      </Data>
      <form onSubmit={onSubmit}>
        <input type="hidden" {...register("playlistId")} value={playlistId} />
        <input type="hidden" {...register("videoId")} value={video.videoId} />

        <IconButton type="button" onClick={() => mutate()}>
          <XIcon />
        </IconButton>
      </form>
    </Root>
  );
}
