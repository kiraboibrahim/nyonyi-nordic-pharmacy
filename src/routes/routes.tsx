import { createBrowserRouter, RouteObject } from "react-router-dom";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import Main from "../components/Main/Main";

const routes: RouteObject[] = [
  {
    path: import.meta.env.BASE_URL,
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
    ],
  },
];
const router = createBrowserRouter(routes);
export default router;
