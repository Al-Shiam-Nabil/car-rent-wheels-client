import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";

const router=createBrowserRouter([
    {
        path:'/',
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