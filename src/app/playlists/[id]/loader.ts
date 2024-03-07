import playlistService from "@/lib/api/services/playlist.service";
import { Playlist } from "@/lib/models/playlist";
import querykeys from "@/lib/querykeys";
import { RQLoaderFn } from "@/types/loader.types";

export type LoaderData = {
  id: string;
  playlist: Playlist;
};

const loader: RQLoaderFn =
  (qc) =>
  async (ctx): Promise<LoaderData> => {
    const id = ctx.params.id as string;

    const playlist = await qc.ensureQueryData({
      queryKey: querykeys.playlists.get(id),
      queryFn: () => playlistService.get({ id }),
    });

    return { id, playlist };
  };

export default loader;
