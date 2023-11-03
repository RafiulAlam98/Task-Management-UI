import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import MainLayout from "../components/Layouts/MainLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
]);
export default routes;
