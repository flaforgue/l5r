import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./app";
import { Tooltip } from "react-tooltip";

const root = document.getElementById("root");

if (root === null) {
  throw new Error("App root not found");
}

createRoot(root).render(
  <StrictMode>
    <App />
    <Tooltip
      id="global"
      place="top"
    />
  </StrictMode>,
);
