// import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import LandingPages from "./pages/LandingPages";

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
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}
