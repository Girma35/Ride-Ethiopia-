import React from "react";
import { FaUserCircle, FaHeart } from "react-icons/fa";
import Link from "next/link";
import navlinks  from "./navlink";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? 'left-0' : '-left-full'
      } fixed top-0 bottom-0 z-20 w-4/5 max-w-[300px] bg-white dark:bg-dark dark:text-white px-6 py-8 text-black duration-300 md:hidden rounded-r-xl shadow-md flex flex-col`}
    >
      {/* User profile section */}
      <div className="flex items-center justify-start gap-3 mb-8">
        <FaUserCircle className="text-5xl" />
        <div>
          <h1>Hello User</h1>
          <h1 className="text-sm text-slate-500">Premium User</h1>
        </div>
      </div>

      {/* Navigation Links Section */}
      <nav className="flex-grow">
        <ul>
          {navlinks.map(({ id, name, link }) => (
            <li key={id} className="py-4">
              <Link
                href={link}
                className="text-lg font-medium text-black dark:text-white py-2 px-4 rounded-full hover:bg-primary duration-300"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer section */}
      <footer className="bg-gray-800 text-white py-4 text-center mt-auto">
        <h1 className="text-lg">
          Made with <FaHeart className="inline text-red-500" /> by{" "}
          <Link
            href="https://github.com/Girma35"
            className="text-blue-400 hover:text-blue-600"
          >
            Girma
          </Link>
        </h1>
      </footer>
    </div>
  );
};

export default ResponsiveMenu;
