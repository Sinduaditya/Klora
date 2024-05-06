import { Outlet } from "react-router-dom";
import BottomNav from "../components/app/BottomNav";
import TopBar from "../components/app/TopBar";

const AppLayout = () => {
    return (
        <>
            <div className="bg-primary-900 w-screen h-screen font-dmsans">
                <div className="grid bg-white border max-w-sm mx-auto h-screen content-between">
                    <div>
                        <TopBar />
                        <div className="px-3 py-4 border overflow-x-auto">
                            <Outlet />
                        </div>
                    </div>
                    <BottomNav />
                </div>
            </div>
        </>
    );
};

export default AppLayout;
