import { React, useState } from "react";
import hambuger from "../assets/hamburger.svg";
import closeIcon from "../assets/icon-close.svg";
import logoWhite from "../assets/hulum.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className="relative container  bg-br mx-auto p-6 ">
      <div className="flex items-center  justify-between">
        {/* LOGO  */}
        <div className="pt-2">
          <img src={logoWhite} alt="front logo" className="h-20 w-30" />
        </div>
        {/* Menu Items */}
        <div className=" hidden md:flex space-x-6 ">
          <a
            href="#home"
            className="hover:text-white px-5 rounded-lg hover:bg-brightRed"
          >
            Home
          </a>
          <a
            href="#aboutus"
            className="hover:text-white px-3 rounded-lg hover:bg-brightRed"
          >
            About Us
          </a>
          <a
            href="#partners"
            className="hover:text-white px-5 rounded-lg hover:bg-brightRed"
          >
            Partners
          </a>
          <a
            href="#contact"
            className="hover:text-white px-5 rounded-lg hover:bg-brightRed"
          >
            Contact
          </a>
          <a
            href="#register"
            className="hover:text-white px-5 rounded-lg hover:bg-brightRed"
          >
            Register
          </a>
        </div>
        {/* Button */}
        <a
          href="#register"
          className="hidden md:block p-3 px-6 pt-2 text-white bg-brightGreen rounded-full baseline hover:bg-brightRed"
        >
          Join Us
        </a>
        {/* Hamburger Meru */}
        <button
          id="menu-btn"
          className=" hamburger fixed top-4 right-4 md:hidden focus:outline-none w-8 h-18"
          onClick={toggleMenu}
        >
          <img src={mobileMenu ? closeIcon : hambuger} alt="hamburger" />
        </button>
      </div>
      <div className="md:hidden">
        <div
          id="menu"
          className={
            mobileMenu
              ? "flex fixed top-0 flex-col items-center self-end  py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
              : "hidden"
          }
        >
          <a
            href="#home"
            className="hover:text-white px-5 rounded-lg hover:bg-brightRed"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#aboutus"
            className="hover:text-white px-5 rounded-lg hover:bg-brightRed"
            onClick={toggleMenu}
          >
            AboutUs
          </a>
          <a
            href="#partners"
            className="hover:text-white px-5 rounded-lg hover:bg-brightRed"
            onClick={toggleMenu}
          >
            Partners
          </a>
          <a
            href="#contactus"
            className="hover:text-white px-5 rounded-lg hover:bg-brightRed"
            onClick={toggleMenu}
          >
            Contactus
          </a>
          <a
            href="#register"
            className="hover:text-white px-5 rounded-lg hover:bg-brightRed"
            onClick={toggleMenu}
          >
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
