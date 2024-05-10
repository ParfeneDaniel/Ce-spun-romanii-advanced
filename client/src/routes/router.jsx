import { createBrowserRouter } from "react-router-dom";
import Round from "../pages/Round";
import Game from "../pages/Game";

export const router = createBrowserRouter([
  {
    path: "/round",
    element: <Round />,
  },
  {
    path: "/game",
    element: <Game />,
  },
]);
