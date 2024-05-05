// import React from "react";
import { Milk } from "iconsax-react";

function DisplayBotolHome() {
    // Calculate the width of the progress bar dynamically
    const progressWidth = "30%";

    return (
        <>
            <div className="flex">
                {/* icon botol */}
                <Milk variant="Bulk" className="text-primary-600 w-16 h-16" />
                {/* end icon botol */}

                {/* status bar & prosentase */}
                <div className="grid w-full items-center">
                    {/* Status Bar */}
                    <div className="grid gap-1">
                        <span
                            id="ProgressLabel"
                            className="sr-only text-neutral-700"
                        >
                            Loading...
                        </span>

                        <span
                            role="progressbar"
                            aria-labelledby="ProgressLabel"
                            className="block rounded-full bg-primary-200"
                        >
                            <span
                                className="block h-3 rounded-full bg-primary-600"
                                style={{ width: progressWidth }}
                            ></span>
                        </span>
                        {/* kalkulasi botol  */}
                        <div className="flex justify-between">
                            <p className="text-xs text-neutral-400">3 botol</p>
                            <p className="text-xs text-neutral-400">10 botol</p>
                        </div>
                        {/* end kalkulasi botol  */}
                    </div>
                    {/* End Status Bar */}
                </div>
                {/* end of status bar & prosentase */}
            </div>
        </>
    );
}

export default DisplayBotolHome;
