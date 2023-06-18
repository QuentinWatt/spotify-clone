import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import LikedSongsPage from "../pages/LikedSongsPage";
import LibraryPage from "../pages/LibraryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/likes",
        element: <LikedSongsPage />,
      },
      {
        path: "/library",
        element: <LibraryPage />,
      },
    ],
  },
]);

export default router;
