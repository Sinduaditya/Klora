// import React from 'react'
import { LocationTick } from "iconsax-react";

function NearModHome() {
    return (
        <>
            <div>
                <article className=" ">
                    <div className="flex items-center gap-4">
                        <div>
                            <h3 className="text-lg font-medium text-neutral-800">
                                Temukan Mod Terdekat
                            </h3>

                            <div className="flow-root">
                                <ul className="-m-1 flex flex-wrap">
                                    <li className="p-1 leading-none">
                                        <a
                                            href="#"
                                            className="text-xs font-medium text-neutral-400 underline"
                                        >
                                            {" "}
                                            Aktifkan GPS{" "}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <ul className="mt-4 space-y-2">
                        {/* LIST MOD TERDEKAT */}
                        <li>
                            <a
                                href="#"
                                className="flex gap-2 items-center h-full rounded-lg border border-neutral-200 p-2 hover:bg-neutral-100"
                            >
                                <LocationTick
                                    variant="Bulk"
                                    className="w-10 h-10 text-primary-700"
                                />
                                <div>
                                    <strong className="font-medium text-neutral-700">
                                        Universitas Dian Nuswantoro
                                    </strong>

                                    <p className="mt-1 text-xs font-medium text-neutral-400">
                                        Jl. Lorem Ipsum Dolor sit Amet No. 6
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex gap-2 items-center h-full rounded-lg border border-neutral-200 p-2 hover:bg-neutral-100"
                            >
                                <LocationTick
                                    variant="Bulk"
                                    className="w-10 h-10 text-primary-700"
                                />
                                <div>
                                    <strong className="font-medium text-neutral-700">
                                        Universitas Dian Nuswantoro
                                    </strong>

                                    <p className="mt-1 text-xs font-medium text-neutral-400">
                                        Jl. Lorem Ipsum Dolor sit Amet No. 6
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex gap-2 items-center h-full rounded-lg border border-neutral-200 p-2 hover:bg-neutral-100"
                            >
                                <LocationTick
                                    variant="Bulk"
                                    className="w-10 h-10 text-primary-700"
                                />
                                <div>
                                    <strong className="font-medium text-neutral-700">
                                        Universitas Dian Nuswantoro
                                    </strong>

                                    <p className="mt-1 text-xs font-medium text-neutral-400">
                                        Jl. Lorem Ipsum Dolor sit Amet No. 6
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </article>
            </div>
        </>
    );
}

export default NearModHome;
