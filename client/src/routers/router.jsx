import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Add from "../pages/Add";
import View from "../pages/View";
import Edit from "../pages/Edit";
import Game from "../pages/Game";
import Round from "../pages/Round";
import Question from "../pages/Question";
import Finish from "../pages/Finish";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "add",
    element: <Add />,
  },
  {
    path: "view/:id",
    element: <View />,
  },
  {
    path: "edit/:id",
    element: <Edit />,
  },
  {
    path: "game",
    element: <Game />,
  },
  {
    path: "round",
    element: <Round />,
  },
  {
    path: "question",
    element: <Question />,
  },
  {
    path: "finish",
    element: <Finish />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
