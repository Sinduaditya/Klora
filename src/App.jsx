// import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/app/Home";
import RootLayout from "./layouts/RootLayout";
import LandingPages from "./pages/LandingPage/LandingPages.jsx";
import Calculator from "./pages/app/Calculator";
import Shopping from "./pages/app/Shopping";
import MyProfile from "./pages/app/MyProfile";
import {FourOhFourOhFour} from "./components/landingpage/index.jsx";
import Volunteer from "./components/app/Volunteer/Volunteer.jsx";


export default function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            children: [
                {
                    path: "/",
                    element: <LandingPages />,
                },
                {
                    path: "*",
                    element: <FourOhFourOhFour />,
                },
            ],
        },

        {
            path: "/app",
            element: <AppLayout />,
            children: [
                {
                    path: "/app",
                    element: <Home />,
                },
                {
                    path: "/app/volunteer",
                    element: <Volunteer />,
                },
                {
                    path: "/app/calculator",
                    element: <Calculator />,
                },
                {
                    path: "/app/shop",
                    element: <Shopping />,
                },
                {
                    path: "/app/profile",
                    element: <MyProfile />,
                },
                {
                    path: "*",
                    element: <FourOhFourOhFour />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}
