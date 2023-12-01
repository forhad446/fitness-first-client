import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/404 page/ErrorPage";
import Gallery from "../pages/Gallery/Gallery";
import Trainer from "../pages/Trainer/Trainer";
import TrainerDetails from "../pages/Trainer/TrainerDetails";
import BeATrainer from "../pages/Be a Trainer/BeATrainer";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Classes from "../pages/Classes/Class/Classes";
import ClassDetails from "../pages/Classes/ClassDetails/ClassDetails";
import Community from "../pages/Community/Community";
import Dashboard from "../Layout/Dashboard";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import AllSubscribers from "../pages/Dashboard/AllSubscribers/AllSubscribers";
import AllTrainers from "../pages/Dashboard/AllTrainers/AllTrainers";
import AppliedTrainer from "../pages/Dashboard/AdminHome/AppliedTrainer/AppliedTrainer";
import AdminRoute from "./AdminRoute";
import Setting from "../pages/Dashboard/UserHome/Setting/Setting";

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
      },
      {
        path: '/beATrainer',
        element: <PrivateRoute><BeATrainer /></PrivateRoute>
      },
      {
        path: '/classes',
        element: <PrivateRoute><Classes /></PrivateRoute>
      },
      {
        path: '/classes/classDetails/:id',
        element: <PrivateRoute><ClassDetails /></PrivateRoute>
      },
      {
        path: '/community',
        element: <Community></Community>
      }
    ]
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      // normal user routes
      {
        path: 'userHome',
        element: <UserHome />,
      },
      {
        path: 'ProfileSetting',
        element: <Setting></Setting>
      },

      // admin only routes
      {
        path: 'adminHome',
        element: <AdminRoute><AdminHome /></AdminRoute>
      },
      {
        path: '/dashboard/allSubscribers',
        element: <AdminRoute><AllSubscribers /></AdminRoute>
      },
      {
        path: '/dashboard/allTrainers',
        element: <AdminRoute><AllTrainers /></AdminRoute>
      },
      {
        path: '/dashboard/appliedTrainer',
        element: <AdminRoute><AppliedTrainer /></AdminRoute>
      }
    ]
  }
]);

export default Routes;