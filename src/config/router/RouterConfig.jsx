import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from "../../screens/home/Home"
import Profile from "../../screens/profile/Profile"
import Sidebar from "../../components/sidebar/Sidebar";
import ErrorPage from "../../screens/error-page/ErrorPage";
import Explore from "../../screens/explore/Explore";

const RouterConfig = () => {


    const router = createBrowserRouter([

        { path: "/", element: <> <Sidebar /> <Home /> </> },

        { path: "/explore", element: <> <Sidebar /> <Explore /> </> },

        { path: "/notifications", element: <ErrorPage /> },

        { path: "/messages", element: <ErrorPage /> },

        { path: "/profile", element: <> <Sidebar /> <Profile /> </> },

        { path: "/register", element: <ErrorPage /> },

    ]);


    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default RouterConfig