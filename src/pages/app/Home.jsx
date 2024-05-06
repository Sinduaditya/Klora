import DisplayTasHome from "../../components/app/Home/DisplayTasHome";
import NearModHome from "../../components/app/Home/NearModHome";
import TopBarHome from "../../components/app/Home/TopBarHome";

// import React from "react";
function Home() {
    return (
        <>
            <div className="grid gap-3">
                <TopBarHome />
                <DisplayTasHome />
                <NearModHome />
            </div>
        </>
    );
}

export default Home;
