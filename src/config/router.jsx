import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Detail from "../views/Detail";
import Register from "../views/Register";
import Login from "../views/Login";
import Addpost from "../views/Addpost";
import Cart from "../views/Cart";
import { useEffect, useState } from "react";
import { auth, onAuthStateChanged } from "./firebase";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path:'register',
                element:<Register/>
            },
            {
                path: 'Login',
                element: <Login/>
            },
            {
        
                path:'/',
                element: <Dashboard/>
            },
            {
                path:`Detail/:productId`,
                element:<Detail/>
            },
            {
                path:'addpost',
                element:<Addpost/>
            },
            {
                path: 'cart',
                element: <Cart/>
            },
            // {
            //     path:'*',
            //     element:<Login/>
            // }
        ]
    }
    
])


function Main (){

    const navigate = useNavigate()
    const [user, setUser] = useState()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
          });
    }, [])

    useEffect(() => {
        const { pathname } = window.location
        if (user) {
            // console.log(`user login hogaya ${user}`);
            if (pathname === '/login'){
                navigate('/')
            }
        } else {
            // console.log(`user logged out hai`);
            if (pathname == '/addpost' || pathname === '/cart') {
                navigate('/login')
            } 
        }
    }, [window.location.pathname])
    



    return(<Outlet/>)
         
}

export default function Router(){
    return<RouterProvider router={router}/>
}