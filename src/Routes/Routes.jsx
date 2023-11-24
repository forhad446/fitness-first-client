import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/404 page/ErrorPage";
import Gallery from "../pages/Gallery/Gallery";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path: '/gallery',
          element: <Gallery></Gallery>
        }
      ]
    },
  ]);

export default Routes;