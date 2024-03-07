import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

import playlistService from "@/lib/api/services/playlist.service";
import { DeletePlaylistRequest } from "@/lib/api/services/playlist.types";
import { usePlaylists } from "@/lib/store/playlists.store";
import { Button } from "@/ui";
import XIcon from "@/ui/icons/x-icon";

import { Name, PlayAllLink, Root } from "./playlist-card.styles";

export interface PlaylistCardProps {
  id: string;
  name: string;
  to: string;
}

type DeletePlaylistForm = {
  id: string;
};

export default function PlaylistCard({ id, name, to }: PlaylistCardProps) {
  const { register, handleSubmit } = useForm<DeletePlaylistForm>();
  const { removePlaylist } = usePlaylists();

  const { mutate } = useMutation<unknown, unknown, DeletePlaylistRequest>({
    mutationFn: () => playlistService.delete({ id }),
    onSuccess: () => {
      removePlaylist(id);
      toast.success("Playlist deleted successfully");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutate(data);
  });

  return (
    <Root>
      <div>
        <Name>{name}</Name>
        <PlayAllLink to={to}>Play all</PlayAllLink>
      </div>

      <form onSubmit={onSubmit}>
        <input type="hidden" {...register("id")} value={id} />
        <Button type="submit" $size="icon" $variant="error">
          <XIcon />
        </Button>
      </form>
    </Root>
  );
}
