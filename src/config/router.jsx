import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Detail from "../views/Detail";
import Register from "../views/Register";
import Login from "../views/Login";
import Addpost from "../views/Addpost";

const router = createBrowserRouter([
    {
        path:'dashboard',
        element: <Dashboard/>
    },
    {
        path: 'Login',
        element: <Login/>
    },
    {
        path:'/',
        element:<Register/>
    },
    {
        path:`Detail/:productId`,
        element:<Detail/>
    },
    {
        path:'addpost',
        element:<Addpost/>
    }
    // {
    //     path:'*',
    //     element:<Register/>
    // }
])

export default function Router(){
    return<RouterProvider router={router}/>
}