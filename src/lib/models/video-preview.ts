export interface VideoPreview {
  id: {
    videoId: string;
  };
  channelName: string;
  description: string;
  duration_raw: string;
  title: string;
  url: string;
  views: string;
  snippet: Snippet;
}

type Snippet = {
  duration: string;
  publishedAt: string | null;
  title: string;
  url: string;
  views: string;
  thumbnails: {
    id: string;
    height: number;
    width: number;
    url: string;
  };
};
