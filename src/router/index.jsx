import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/home/index.jsx";
import MainLayout from "../header/layout/index.jsx";
import About from "../Components/about/index.jsx";
import Menu from "../Components/menu/index.jsx";
import Shop from "../Components/shop/index.jsx";
import Login from "../Components/login/index.jsx";
import NotFount from "../Components/notfaunt/index.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFount />,
  },
]);
