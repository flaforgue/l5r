import { Navigate, type RouteObject } from "react-router";
import { Layout } from "../../components/layout";
import { CharacterPage } from "./pages/character.page";
import { NotesPage } from "./pages/notes.page";
import { InventoryPage } from "./pages/inventory.page";

export const PLAYER_ROUTES: RouteObject[] = [
  {
    path: "/player",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Navigate to="/player/character" />,
        index: true,
      },
      {
        path: "",
        element: <Navigate to="/player/character" />,
      },
      {
        path: "character",
        element: <CharacterPage />,
      },
      {
        path: "inventory",
        element: <InventoryPage />,
      },
      {
        path: "notes",
        element: <NotesPage />,
      },
    ],
  },
];
