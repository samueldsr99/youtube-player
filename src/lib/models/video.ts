export interface Video {
  videoId: string;
  url: string;
  title: string;
  description: string;
  owner: string;
  channelId: string;
  thumbnailUrl: string;
  datePublished: string;
  genre: string;
  paid: boolean;
  unlisted: boolean;
  isFamilyFriendly: boolean;
  duration: number;
  views: number;
  regionsAllowed: string[];
  likeCount: number;
}
