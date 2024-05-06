import { Outlet } from "react-router-dom";
import {Navbar} from "../components/landingpage/index.jsx";

const RootLayout = () => {
    return (
        <>
            <div className="">
                <Navbar/>
                <Outlet />
            </div>
        </>
    );
};

export default RootLayout;
