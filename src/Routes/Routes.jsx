import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Login from "../pages/Login/Login";
import Registration from "../pages/SignUp/Registration";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import StudentSelectedClasses from "../pages/Dashboard/StudentSelectedClasses/StudentSelectedClasses";
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../pages/Dashboard/ManageUser/ManageUsers";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import MyClasses from "../pages/Dashboard/MyClass/MyClass";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import Payment from "../pages/Dashboard/Payment/Payment";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <NotFoundPage></NotFoundPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/Instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/Classes',
                element: <Classes></Classes>

            },
            
        ]
    },
    {
        path: 'Dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path:'payment/:value',
                element:<Payment></Payment>
            },
            {
                path:'dashboard/selected-classes',
                element:<StudentSelectedClasses></StudentSelectedClasses>
            },
            {
                path:'dashboard/manage-users',
                element:<ManageUsers></ManageUsers>
            },
            {
                path:'dashboard/add-class',
                element:<AddClass></AddClass>
            },
            {
                path:'dashboard/my-classes',
                element:<MyClasses></MyClasses>
            },
            {
                path:'dashboard/manage-classes',
                element:<ManageClasses></ManageClasses>
            },
            
            
        ]
    }
]);