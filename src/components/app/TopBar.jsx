// import React from "react";
import { Moneys, Bitcoin } from "iconsax-react";

function TopBar() {
    return (
        <>
            <div className="flex justify-between px-3 py-4 border overflow-x-auto">
                {/* Profil User */}
                <div className="w-12 h-12 rounded-full border ">
                    <img
                        src="https://i.ibb.co/WcfDWXY/Untitled-design-11.png"
                        alt="icon"
                        className="rounded-full"
                    />
                </div>
                {/* END OF Profil User */}

                {/* Start TOKEN*/}
                <div className="flex  items-center gap-3">
                    {/* UTILITY TOKEN */}
                    <div className="flex gap-2  items-center">
                        {/* Angka token */}
                        <p className="text-sm font-semibold text-neutral-600">
                            100 BTL
                        </p>
                        {/* Angka token END*/}
                        <img src="/BTLC.svg" alt="utility btl" className="w-7 h-7"/>
                    </div>
                    {/* END UTILITY TOKEN */}
                    {/* TOKEN */}
                    <div className="flex gap-2  items-center">
                        {/* Angka token */}
                        <p className="text-sm font-semibold text-neutral-600">
                            0.001 KLO
                        </p>
                        {/* Angka token END */}
                        <img src="/KLOC.svg" alt="crypto KLO" className="w-7 h-7"/>
                    </div>
                    {/* END TOKEN */}
                </div>
                {/* END TOKEN*/}
            </div>
        </>
    );
}

export default TopBar;
