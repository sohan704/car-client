import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Checkout from "../Pages/Checkout/Checkout";
import Bookservice from "../Pages/Bookservice/Bookservice";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/signup',
        element:<Signup></Signup>
      },
      {
        path:'book/:id',
        element: <Bookservice></Bookservice>,
        loader: ({params}) => fetch(`https://car-doc-server-pink.vercel.app/services/${params.id}`)
      },
      {
        path:'checkout/:id',
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute> ,
        loader: ({params}) => fetch(`https://car-doc-server-pink.vercel.app/services/${params.id}`)
      },
      {
        path:'/bookings',
        element: <PrivateRoute><Bookings></Bookings></PrivateRoute>,

      }
    ]
  },
]);

export default router;