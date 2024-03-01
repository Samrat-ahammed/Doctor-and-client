import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/HomePage/Home";
import LoginPage from "../Pages/Authentication/LoginPage";
import SignInPage from "../Pages/Authentication/SignInPage";
import Advice from "../Pages/AdvicePage.jsx/Advice";
import Main from "../Pages/LayOut/Main";
import Doctors from "../Pages/AdvicePage.jsx/DoctorsPage/Doctors";
import DoctorDetails from "../Pages/AdvicePage.jsx/DoctorsPage/DoctorDetails/DoctorDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/advice",
        element: <Advice />,
      },
      {
        path: "/doctors",
        element: <Doctors />,
      },
      {
        path: "/doctorsDetails",
        element: <DoctorDetails />,
      },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/signIn", element: <SignInPage /> },
]);
