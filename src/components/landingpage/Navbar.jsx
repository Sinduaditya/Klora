import { Link } from "react-router-dom";

const menus = [
    { name: "How it works", to: "#how" },
    { name: "About", to: "#about" },
    { name: "Contact Us", to: "#contact" },
];


function Navbar() {
    return (
        <div className="w-full text-text  h-[100px] z-40 bg-white">
            <div className="xl:max-w-5xl mx-auto flex flex-row justify-between h-[100px] items-center px-10 xl:px-0">
                <h1 className="font-bold z-10 text-4xl">
                    <Link to="/">Klora</Link>
                </h1>
                <ul className="flex gap-5">
                    {menus.map((menu, index) => (
                        <li className="font-semibold" key={menu.name}>
                            <Link to={menu.to}>{menu.name}</Link>
                        </li>
                    ))}
                </ul>
                <ul className="hidden md:flex md:flex-row  md:space-x-3 md:items-center">
                    <li className="font-semibold  text-white">
                        <Link to="/login" className="py-2 px-8 bg-primary-700 rounded-full hover:bg-primary-900">
                            <span className="text-sm">Masuk</span>
                        </Link>
                    </li>

                    <li className="font-semibold  text-white">
                        <Link to="/signup" className="py-2 px-8 bg-primary-700 rounded-full hover:bg-primary-900">
                            <span className="text-sm">Daftar</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
