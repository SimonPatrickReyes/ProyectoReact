import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Episodes from "../pages/Episodes";
import Episode from "../pages/Episode";
import Characters from "../pages/Characters";
import Character from "../pages/Character";
import Stores from "../pages/Stores";
import Store from "../pages/Store";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import LayoutPublic from "../layout/LayoutPublic";
//import LayoutPrivate from "../layout/LayoutPrivate";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
  
            {
                index: true,
                element: <Home />,
            },
    
    {
        path: "/episodes",
        element: <Episodes />,
        
    },
    {
        path: "/episodes/:id",
        element: <Episode />,
        
    },
    {
        path: "/characters",
        element: <Characters />,
       
    },
    {
        path: "/characters/:id",
        element: <Character />,
       
    },
    {
        path: "/stores",
        element: <Stores />,
       
    },
    {
        path: "/stores/:id",
        element: <Store />,
       
    },
    {
        path: "/login",
        element: <Login />,
       
    },
    {
        path: "/register",
        element: <Register />,
       
    },
    {
        path: "/profile",
        element: <Profile />,
    },

    {
        path: "/dashboard",
       // element: <LayoutPrivate />,
       element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
            {
             index: true,
             element: <Dashboard />
            }
        ]
    },
    ],
}]);



