import React from "react";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ openNav, setOpenNav, isLoggedIn }) => {
  return (
    <div
      className={`${
        openNav ? "left-0" : "-left-full"
      } fixed top-14 bottom-0 z-50 flex h-screen w-full flex-col bg-orange-50 px-8 pb-12 pt-10 text-black shadow-md transition-all duration-300 md:hidden`}
    >
      {!isLoggedIn && (
        <div className="flex justify-center mb-6">
          <Link to="/signUp" onClick={() => setOpenNav(false)}>
            <button className="bg-red-500 text-white px-6 py-2 rounded-md">
              Sign In
            </button>
          </Link>
        </div>
      )}

      <nav className="mt-5">
        <ul className="flex flex-col gap-5 text-lg font-semibold">
          <li>
            <Link to="/" onClick={() => setOpenNav(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setOpenNav(false)}>About</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setOpenNav(false)}>Contact Us</Link>
          </li>
          <li>
            <Link to="/dashboard" onClick={() => setOpenNav(false)}>Dashboard</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ResponsiveMenu;
