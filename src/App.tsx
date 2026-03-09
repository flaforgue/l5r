import { RouterProvider } from "react-router";
import { ROUTER } from "./router";

export function App() {
  return (
    <RouterProvider router={ROUTER} />
  );
}
