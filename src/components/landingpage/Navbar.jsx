import {Link} from "react-router-dom";

const menus = [
  { name: "Why Klora ?", href: "/about" },
  // { name: "Test", href: "/pricing" },
  // { name: "Test", href: "/contact" },
];

function Navbar({ bg }) {
  return (
      <div
        className={`w-full text-text fixed h-[100px] z-40 ${
          bg > 80 ? "bg-background" : "bg-transparent"
        }`}
      >
        <div className="xl:max-w-5xl mx-auto flex flex-row justify-between h-[100px] items-center px-10 xl:px-0">
          <h1 className="text-[20px]  font-bold text-xl tracking-wider leading-[27.5]">
            Klora
          </h1>
          <ul className="hidden md:flex md:flex-row  md:space-x-4 md:items-center">
            {menus.map((menu, index) => (
                <li className="font-semibold" key={menu.name}>
                  <Link href={menu.href}>{menu.name}</Link>
                </li>
            ))}
            <li className="font-semibold tracking-widest text-white">
              <Link
                  href="#"
                  className="py-2 px-8 bg-primary-700  rounded-full"
              >
                <span>Login</span>
              </Link>
            </li>
            <li className="font-semibold tracking-widest text-white">
              <Link
                  href="#"
                  className="py-2 px-8 bg-primary-700 rounded-full"
              >
                <span>Register</span>
              </Link>
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
