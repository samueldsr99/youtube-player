import services from "@/lib/api/services";
import { Video } from "@/lib/models/video";
import querykeys from "@/lib/querykeys";
import { RQLoaderFn } from "@/types/loader.types";

export type LoaderData = Video;

const loader: RQLoaderFn =
  (qc) =>
  async (data): Promise<LoaderData> => {
    const videoId = data.params.videoId!;

    const video = await qc.ensureQueryData({
      queryKey: querykeys.youtube.get({ id: videoId }),
      queryFn: () => services.youtube.get({ id: videoId }),
    });

    return video;
  };

export default loader;
