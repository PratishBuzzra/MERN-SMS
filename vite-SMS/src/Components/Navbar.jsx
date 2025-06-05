import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext";
import DropdownProfile from "./DropdownProfile";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { isLoggedIn, userName } = useContext(AuthContext);

  return (
    <>
    
      <div className="bg-orange-100 py-3 shadow-2xl px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/">
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">SMS</h1>
          </Link>

          <nav className="flex gap-5 items-center">
            <ul className="hidden md:flex gap-7 items-center text-lg font-semibold">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>

            <div className="flex items-center gap-3">
              {isLoggedIn ? (
                <div className="relative">
                  <FaUserCircle
                    onClick={() => setShowDropdown(prev => !prev)}
                    className="text-3xl cursor-pointer text-gray-700"
                  />
                  {showDropdown && <DropdownProfile userName={userName} />}
                </div>
              ) : (
                <Link to="/signUp" className="hidden md:block">
                  <button className="bg-red-500 text-white px-3 py-1 rounded-md">
                    SignIn
                  </button>
                </Link>
              )}

          
              {openNav ? (
                <IoMdClose
                  onClick={() => setOpenNav(false)}
                  className="text-3xl md:hidden"
                />
              ) : (
                <IoMdMenu
                  onClick={() => setOpenNav(true)}
                  className="text-3xl md:hidden"
                />
              )}
            </div>
          </nav>
        </div>
      </div>

    
      <ResponsiveMenu openNav={openNav} setOpenNav={setOpenNav} isLoggedIn={isLoggedIn} />
    </>
  );
};

export default Navbar;
