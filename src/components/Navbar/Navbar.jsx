"use client"
import React, { useState } from "react";
import Link from "next/link";
import DarkMode from "./DarkMode";
import { HiMenu, HiMenuAlt2 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import navlinks  from "./navlink";
import logoImage from '../../assets/images/logo.jpg';
import Image from "next/image";


export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="relative z-10 shadow-md w-full duration-300 bg-white dark:bg-dark dark:text-light">

      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo section */}
          <Link href="/" className="text-3xl font-bold">
            <span className="text-dark dark:text-light">Ride</span>
            <span className="text-primary">Ethiopia</span>
            <Image src={logoImage.src} alt="logo iamge" width={50} height={50} />
          </Link>

          {/* Desktop Menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              {navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <Link
                    href={link}
                    className="text-lg font-medium text-dark dark:text-light py-2 px-4 rounded-full hover:bg-primary hover:text-white duration-300"
                  >
                    {name}
                  </Link>
                </li>
              ))}
              <DarkMode />
            </ul>
          </div>

          {/* Mobile Menu section */}
          <div className="md:hidden flex items-center gap-4">
            {showMenu ? (
              <HiMenuAlt2
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenu
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
            <DarkMode />
          </div>
        </div>
      </div>
      {/* Responsive Menu Component */}
      <ResponsiveMenu showMenu={showMenu} />
    </nav>
  );
}
