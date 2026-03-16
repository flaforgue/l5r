import type {
  RouteObject } from "react-router";
import {
  createBrowserRouter,
  Navigate,
} from "react-router";

import { PLAYER_ROUTES } from "./modules/character/character.routes";
import { NotFoundPage } from "./modules/character/pages/not-found.page";
import { Layout } from "./components/layout";

const routes: RouteObject[] = [
  ...PLAYER_ROUTES,
];

export const ROUTER = createBrowserRouter(
  [
    {
      path: "/",
      element: <Navigate to="/player/character" />,
    },
    ...routes,
    {
      path: "*",
      element: <Layout><NotFoundPage /></Layout>,
    },
  ], {
    basename: "/l5r",
  },
);
