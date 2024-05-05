import {Link} from "react-router-dom";

const menus = [
  { name: "About", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  // { name: "Test", href: "/contact" },
];

// eslint-disable-next-line react/prop-types
function Navbar({ bg }) {
  return (
      <div
        className="w-full text-text  h-[100px] z-40 bg-background"
      >
        <div className="xl:max-w-5xl mx-auto flex flex-row justify-between h-[100px] items-center px-10 xl:px-0">
          <h1 className="font-bold z-10 text-4xl">
            Klora
          </h1>
          <ul className="flex gap-5">
            {menus.map((menu, index) => (
                <li className="font-semibold" key={menu.name}>
                  <Link to={menu.href}>{menu.name}</Link>
                </li>
            ))}
          </ul>
          <ul className="hidden md:flex md:flex-row  md:space-x-3 md:items-center">
            <li className="font-semibold tracking-widest text-white">
              <button
                  className="py-[6px] px-8 bg-primary-700 rounded-full"
              >
                <span>Masuk</span>
              </button>
            </li>

            <li className="font-semibold tracking-widest text-white">
              <button
                  className="py-[6px] px-8 bg-primary-700  rounded-full"
              >
                <span>Daftar</span>
              </button>
            </li>
          </ul>
          <img
              src="/hamburger_menu.svg"
              width={25}
              height={20}
              className="md:hidden cursor-pointer"
          />
        </div>
      </div>
  );
}

export default Navbar;