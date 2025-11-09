import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import ErrorPage from "../Pages/ErrorPage";

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
            }
        ]
    }
])

export default router