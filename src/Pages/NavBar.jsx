import React from "react";
import { FiCoffee } from "react-icons/fi";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar sticky top-0 z-50 bg-stone-900/90 backdrop-blur-md text-stone-100 shadow-md border-b border-stone-700">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-stone-800 rounded-box w-52 border border-stone-700"
          >
            <li>
              <Link to="/" className="hover:text-amber-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-amber-300">About Us</Link>
            </li>
            <li>
              <Link to="/product" className="hover:text-amber-300">Coffee Products</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-amber-300">Contact</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl hover:bg-transparent">
          <FiCoffee className="text-amber-400 text-2xl" /> 
          <span className="text-stone-100 ml-2 font-bold">Beaneca</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <Link to="/" className="font-medium text-stone-300 hover:text-amber-300 hover:bg-stone-800/50 rounded-lg px-4 py-2 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="font-medium text-stone-300 hover:text-amber-300 hover:bg-stone-800/50 rounded-lg px-4 py-2 transition-colors">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/product" className="font-medium text-stone-300 hover:text-amber-300 hover:bg-stone-800/50 rounded-lg px-4 py-2 transition-colors">
              Coffee Products
            </Link>
          </li>
          <li>
            <Link to="/contact" className="font-medium text-stone-300 hover:text-amber-300 hover:bg-stone-800/50 rounded-lg px-4 py-2 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <Link to="/quote" className="btn btn-ghost text-stone-300 hover:text-amber-300 border border-stone-700 hover:border-amber-400/50 hover:bg-stone-800/50">
          Request Quote
        </Link>
        <Link to="/contact" className="btn bg-amber-800 hover:bg-amber-700 border-amber-800 text-stone-100">
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default NavBar;