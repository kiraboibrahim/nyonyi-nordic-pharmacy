import { createBrowserRouter, RouteObject } from "react-router-dom";
import Podcasts from "../components/Podcasts/Podcasts";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import Main from "../components/Main/Main";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "podcasts",
        element: <Podcasts />,
      },
    ],
  },
];
const router = createBrowserRouter(routes);
export default router;
