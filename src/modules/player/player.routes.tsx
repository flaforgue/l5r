import { Navigate, type RouteObject } from "react-router";
import { HomePage } from "./pages/home.page";
import { Layout } from "../../components/layout";
import { CharacterPage } from "./pages/character.page";
import { NotesPage } from "./pages/notes.page";

export const PLAYER_ROUTES: RouteObject[] = [
  {
    path: "/player",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Navigate to="/player" />,
        index: true,
      },
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "character",
        element: <CharacterPage />,
      },
      {
        path: "notes",
        element: <NotesPage />,
      },
    ],
  },
];
