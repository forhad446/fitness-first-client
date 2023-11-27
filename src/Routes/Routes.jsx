import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/404 page/ErrorPage";
import Gallery from "../pages/Gallery/Gallery";
import Trainer from "../pages/Trainer/Trainer";
import TrainerDetails from "../pages/Trainer/TrainerDetails";

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
        },
        {
          path: '/trainer',
          element: <Trainer></Trainer>
        },
        {
          path: '/trainerDetails/:id',
          element: <TrainerDetails></TrainerDetails>
        }
      ]
    },
  ]);

export default Routes;