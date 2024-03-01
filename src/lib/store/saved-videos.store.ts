import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type SavedVideo = {
  id: string;
  title: string;
};

type SavedVideosStore = {
  savedVideos: SavedVideo[];
  addVideo: (video: SavedVideo) => void;
  removeVideo: (id: string) => void;
  isVideoSaved: (id: string) => boolean;
};

export const useSavedVideos = create(
  persist<SavedVideosStore>(
    (set, get) => ({
      savedVideos: [],
      addVideo: (video) => {
        if (get().savedVideos.some((v) => v.id === video.id)) return;
        set((state) => ({ savedVideos: [...state.savedVideos, video] }));
      },
      removeVideo: (id) => set((state) => ({ savedVideos: state.savedVideos.filter((video) => video.id !== id) })),
      isVideoSaved: (id) => {
        return get().savedVideos.some((video) => video.id === id);
      },
    }),
    {
      name: "savedVideos",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
