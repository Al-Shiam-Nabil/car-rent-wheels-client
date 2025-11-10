import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import ErrorPage from "../Pages/ErrorPage";
import AddCarPage from "../Pages/AddCarPage";
import PrivateRoute from "../AuthContext/PrivateRoute";
import MyListingPage from "../Pages/MyListingPage";

const router=createBrowserRouter([
    {
        path:'/',
        errorElement:<ErrorPage></ErrorPage>,
        Component:Root,
        children:[
            {
                index:true,
                Component:HomePage
            },{
                path:'login',
                Component:LoginPage
            },
            {
                path:'register',
                Component:RegisterPage
            },
            {
                path:'add-car',
                element:<PrivateRoute><AddCarPage></AddCarPage></PrivateRoute>
            }
            ,
            {
                path:'my-listings',
                element:<PrivateRoute><MyListingPage></MyListingPage></PrivateRoute>
            }
        ]
    }
])

export default router