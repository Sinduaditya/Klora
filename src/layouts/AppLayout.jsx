import { Outlet } from "react-router-dom";
import BottomNav from "../components/app/BottomNav";

const AppLayout = () => {
    return (
        <>
            <div className="bg-primary-900 w-screen h-screen font-dmsans">
                <div className="grid bg-white border  max-w-sm mx-auto min-h-screen content-between">
                    <div className="px-3 py-4 border border-black">
                        <Outlet />
                    </div>
                    <BottomNav />
                </div>
            </div>
        </>
    );
};

export default AppLayout;
