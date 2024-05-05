// import React from "react";
import { Moneys, Bitcoin } from "iconsax-react";

function TopBarHome() {
    return (
        <>
            <div className="flex justify-between ">
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
                            000000
                        </p>
                        {/* Angka token END*/}
                        <Moneys
                            className="w-7 h-7 text-primary-700"
                            variant="Bulk"
                        />
                    </div>
                    {/* END UTILITY TOKEN */}
                    {/* TOKEN */}
                    <div className="flex gap-2  items-center">
                        {/* Angka token */}
                        <p className="text-sm font-semibold text-neutral-600">
                            000000
                        </p>
                        {/* Angka token END */}
                        <Bitcoin
                            className="w-7 h-7 text-primary-700"
                            variant="Bulk"
                        />
                    </div>
                    {/* END TOKEN */}
                </div>
                {/* END TOKEN*/}
            </div>
        </>
    );
}

export default TopBarHome;
