import { useState } from "react";
import { Transition } from "@headlessui/react";
import { HambergerMenu, CloseSquare } from "iconsax-react";
import { Link } from "react-router-dom";

const menus = [
    { name: "How it works", to: "#how" },
    { name: "About", to: "#about" },
    { name: "Contact Us", to: "#contact" },
];

function MenuInNavbar() {
    return (
        <>
            <div>
                <ul className="grid list-none md:flex gap-3 md:gap-8 font-thin mx-4 md:mx-0">
                    {menus.map((menu) => (
                        <li
                            className="font-normal text-neutral-400 hover:text-neutral-900 hover:font-semibold"
                            key={menu.name}
                        >
                            <Link to={menu.to}>{menu.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

function CtaButton() {
    return (
        <>
            <div>
                <ul className="flex mx-4 md:mx-0 gap-2 my-2 md:flex-row  md:space-x-3 md:items-center">
                    <li className="font-semibold  text-white">
                        <Link
                            to="/login"
                            className="py-2 px-4 md:px-8 bg-primary-700 rounded-full hover:bg-primary-900"
                        >
                            <span className="text-xs md:text-sm">Masuk</span>
                        </Link>
                    </li>

                    <li className="font-semibold  text-white">
                        <Link
                            to="/signup"
                            className="py-2 px-4 md:px-8 bg-primary-700 rounded-full hover:bg-primary-900"
                        >
                            <span className="text-xs md:text-sm">Daftar</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white text-text">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="text-2xl font-semibold">
                                Klora
                            </span>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            {/* Tambahkan item-menu di sini */}
                            <MenuInNavbar />
                        </div>
                    </div>
                    {/* LOGIN BUTTON */}
                    <div className="hidden md:flex">
                        <CtaButton />
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover: hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <CloseSquare
                                    className="block h-6 w-6"
                                    variant="Bulk"
                                />
                            ) : (
                                <HambergerMenu
                                    className="block h-6 w-6"
                                    variant="Bulk"
                                />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <Transition
                show={isOpen}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div ref={ref} className="md:hidden " id="mobile-menu">
                        <div className="grid gap-3 px-2 pt-2 pb-6 space-y-1 sm:px-3">
                            {/* Tambahkan item-menu di sini */}
                            <MenuInNavbar />
                            <CtaButton />
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    );
}

export default Navbar;
