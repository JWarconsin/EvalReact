/* fichier root.jsx */
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import ErrorPage from "../pages/404";
import App from "../App";
import Details from "../pages/details";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
            path: "/details/:id",
            element: <Details />
        }
      ]
    }
  ]);

export default router;
            