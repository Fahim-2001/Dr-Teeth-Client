import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Logout from "../Pages/Logout/Logout";
import ServiceDetails from "../Pages/Services/ServiceDetails/ServiceDetails";
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
        loader: () =>
          fetch(`https://dr-teeth-server.vercel.app/servicesforhome`),
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch(`https://dr-teeth-server.vercel.app/services`),
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
        path: "/services/:id",
        loader: ({ params }) =>
          fetch(`https://dr-teeth-server.vercel.app/services/${params.id}`),
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/addreviews",
        element: <AddService></AddService>,
      },
    ],
  },
]);

export default routes;
