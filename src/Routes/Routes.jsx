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
        element: <Dashboard></Dashboard>,
        children:[
            {
                path:'dashboard/selected-classes',
                element:<StudentSelectedClasses></StudentSelectedClasses>
            }
        ]
    }
]);