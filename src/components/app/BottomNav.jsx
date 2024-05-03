// import React from 'react'
import { Link } from "react-router-dom";
// import { clsx } from "clsx";

import { HiHome, HiCalculator, HiShoppingBag, HiUser } from "react-icons/hi2";

function BottomNav() {
    return (
        <>
            <div className="border border-black px-6 py-4">
                <div className="flex">
                    <ul className="w-full flex justify-between gap-6 text-sm border border-black">
                        <li>
                            <Link to="/app">
                                <HiHome className="w-7 h-7 mx-2 " />
                            </Link>
                        </li>
                        <li>
                            <Link to="/app/calculator">
                                <HiCalculator className="w-7 h-7 mx-2 " />
                            </Link>
                        </li>
                        <li>
                            <Link to="/app/shop">
                                <HiShoppingBag className="w-7 h-7 mx-2 " />
                            </Link>
                        </li>
                        <li>
                            <Link to="/app/profile">
                                <HiUser className="w-7 h-7 mx-2 " />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default BottomNav;
