import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/detail", element: <Detail /> },
    ],
  },
]);

export default routes;
