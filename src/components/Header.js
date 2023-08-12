import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(false);
  let navigate = useNavigate();
  const showMenu = () => {
    setActive(!active);
  };

  let LinkData = [
    {
      name: "COLLECTION",
      href: "/#collection",
    },
    {
      name: "ART",
      href: "/#art",
    },
    // {
    //   name: "MISSION",
    //   href: "/#mission",
    // },
    {
      name: "moodboard",
      href: "/#moodboard",
    },
    {
      name: "FAQ",
      href: "/#faq",
    },
    {
      name: "TEAM",
      href: "/#team",
    },
    // {
    //   name: "MINT",
    //   href: "/mint",
    //   page: true,
    // },
  ];

  return (
    <div className="container">
      <div className="w-full text-white flex justify-between py-6 items-center">
        <div>
          <a
            href="#"
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              src={require("../assets/logo.svg").default}
              alt="Logo"
              className="h-15 sm:h-20"
            />
          </a>
        </div>

        <nav>
          <div className="md:hidden">
            <div onClick={showMenu} className="cursor-pointer">
              <img
                src={require("../assets/menu.svg").default}
                alt="Menu"
                className="h-6"
              />
            </div>
          </div>

          <ul className="hidden md:flex gap-4 lg:gap8 p-4 uppercase items-center">
            {LinkData.map((value, index) => (
              <li className="nav-item" key={index}>
                {value.page ? (
                  <Link
                    to={value.href}
                    className="flex items-center text-xs uppercase font-bold text-white hover:opacity-75 lg:text-md font-primary tracking-wider"
                  >
                    {value.name}
                  </Link>
                ) : (
                  <a
                    className="flex items-center text-xs uppercase font-bold text-white hover:opacity-75 lg:text-md font-primary tracking-wider"
                    href={value.href}
                  >
                    <span className="ml-2">{value.name}</span>
                  </a>
                )}
              </li>
            ))}
            <li className="nav-item ml-3">
              <button
                type="submit"
                className="bg-white lg:px-8 py-3 px-5 font-primary tracking-wider text-xs lg:text-md rounded-xl text-black"
              >
                CONNECT
              </button>
            </li>
          </ul>

          <ul
            className={
              active
                ? "flex-col flex items-end fixed right-0 top-0 uppercase bg-header gap-8 justify-center p-8 md:hidden h-fit w-fit z-40"
                : "hidden"
            }
          >
            <div className="mb-3">
              <div
                onClick={showMenu}
                className="cursor-pointer absolute right-6 md:hidden top-6"
              >
                <img src={require("../assets/close.svg").default} alt="Menu" />
              </div>
            </div>
            {LinkData.map((value, index) => (
              <li className="nav-item" key={index}>
                {value.page ? (
                  <Link
                    to={value.href}
                    className="flex items-center text-xs uppercase font-bold text-white hover:opacity-75 lg:text-md font-primary tracking-wider"
                  >
                    {value.name}
                  </Link>
                ) : (
                  <a
                    className="flex items-center text-xs uppercase font-bold text-white hover:opacity-75 lg:text-md font-primary tracking-wider"
                    href={value.href}
                    onClick={showMenu}
                  >
                    <span className="ml-2">{value.name}</span>
                  </a>
                )}
              </li>
            ))}
            <li className="nav-item ml-3">
              <button
                type="submit"
                className="bg-white lg:px-8 lg:py-5 py-3 px-5 font-primary tracking-wider text-xs lg:text-md rounded-xl text-black"
                onClick={() => {
                  showMenu();
                }}
              >
                CONNECT
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
