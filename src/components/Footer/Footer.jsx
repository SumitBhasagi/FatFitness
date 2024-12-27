import React from "react";
// import DarkMode from "./DarkMode";
import logo from "../../assets/logo.png";
import { BiPhoneCall } from "react-icons/bi";

export const Navlinks = [
  {
    id: 1,
    name: "SERVICES",
    link: "/#services",
  },
  {
    id: 2,
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: 3,
    name: "JOIN",
    link: "/#join",
  },
];

const Navbar = () => {
  return (
    <>
      <nav className="relative z-10 shadow-md w-full dark:bg-dark dark:text-white">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <img
                src={logo}
                alt=""
                className="w-16 sm:w-24 absolute top-0 left-0 sm:left-1/2 sm:-translate-x-1/2 m-2 sm:m-0"
              />
            </div>

            {/* <div className="flex items-center gap-2">
              <BiPhoneCall className="text-2xl text-primary animate-pulse group-hover:scale-105 duration-200" />{" "}
              <span>+91 7758915032</span>
            </div> */}

            <div>
              <ul className="flex items-center gap-8">
                {Navlinks.map(({ id, name, link }) => (
                  <li key={id}>
                    <a
                      href={link}
                      className="inline-block py-4 text-lg font-semibold hover:text-primary duration-200"
                    >
                      {name}
                    </a>
                  </li>
                ))}
                {/* <DarkMode /> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
