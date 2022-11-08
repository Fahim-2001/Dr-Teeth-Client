import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Logout from "../Pages/Logout/Logout";
import Services from "../Pages/Services/Services/Services";
import SignUp from "../Pages/SignUp/SignUp";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/servicesforhome`),
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch(`http://localhost:5000/services`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/logout",
        element: <Logout></Logout>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default routes;
