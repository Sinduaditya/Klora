import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <>
            <div className="bg-blue-700 w-screen h-screen">
                <div className="bg-white border  max-w-sm mx-auto min-h-screen px-6 py-4">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default AppLayout;
