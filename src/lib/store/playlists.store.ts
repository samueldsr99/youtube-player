import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type LocalPlaylist = {
  id: string;
  name: string;
};

type PlaylistsStore = {
  playlists: LocalPlaylist[];
  addPlaylist: (playlist: LocalPlaylist) => void;
  removePlaylist: (id: string) => void;
};

export const usePlaylists = create(
  persist<PlaylistsStore>(
    (set) => ({
      playlists: [],
      addPlaylist: (playlist) => {
        set((state) => ({ playlists: [...state.playlists, playlist] }));
      },
      removePlaylist: (id) => {
        set((state) => ({ playlists: state.playlists.filter((playlist) => playlist.id !== id) }));
      },
    }),
    {
      name: "playlists",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
