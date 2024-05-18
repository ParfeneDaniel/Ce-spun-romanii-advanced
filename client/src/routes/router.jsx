import { createBrowserRouter } from "react-router-dom";
import Round from "../pages/Round";
import Game from "../pages/Game";
import Winner from "../pages/Winner";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },
  {
    path: "round",
    element: <Round />,
  },
  {
    path: "game",
    element: <Game />,
  },
  {
    path: "winner",
    element: <Winner />,
  },
]);
