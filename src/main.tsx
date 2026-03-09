import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Tooltip } from "react-tooltip";
import { RouterProvider } from "react-router";
import { ROUTER } from "./router";

const root = document.getElementById("root");

if (root === null) {
  throw new Error("App root not found");
}

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={ROUTER} />
    <Tooltip
      id="global"
      place="top"
    />
  </StrictMode>,
);
