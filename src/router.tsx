import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

// Loaders
import watchLoader from "./app/watch/loader";
import queryClient from "./lib/config/queryclient.config";

// Outlets
const IndexOutlet = lazy(() => import("./app/outlet"));

// Pages
const IndexPage = lazy(() => import("./app/page"));
const WatchPage = lazy(() => import("./app/watch/page"));
const NewPlaylistPage = lazy(() => import("./app/playlists/new/page"));
const PlaylistsPage = lazy(() => import("./app/playlists/page"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexOutlet />,
    children: [
      {
        path: "/",
        element: (
          <Suspense>
            <IndexPage />
          </Suspense>
        ),
      },
      {
        path: "/watch/:videoId",
        element: (
          <Suspense>
            <WatchPage />
          </Suspense>
        ),
        loader: watchLoader(queryClient),
      },
      {
        path: "/playlists/new",
        element: (
          <Suspense>
            <NewPlaylistPage />
          </Suspense>
        ),
      },
      {
        path: "/playlists",
        element: (
          <Suspense>
            <PlaylistsPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
