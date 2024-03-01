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
};

export const useSavedVideos = create(
  persist<SavedVideosStore>(
    (set) => ({
      savedVideos: [],
      addVideo: (video) => {
        set((state) => ({ savedVideos: [...state.savedVideos, video] }));
      },
      removeVideo: (id) => set((state) => ({ savedVideos: state.savedVideos.filter((video) => video.id !== id) })),
    }),
    {
      name: "savedVideos",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
