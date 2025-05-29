import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext"; // import context

function NavBar() {
  const { cartItems } = useCart(); // ambil cart
  const [isModalOpen, setIsModalOpen] = useState(false); // State untuk kontrol modal

  const openModal = () => {
    setIsModalOpen(true); // Membuka modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Menutup modal
  };

  return (
    <div className="navbar sticky top-0 z-50 bg-[#FFD6D6] text-purple-800 backdrop-blur-md text-stone0 shadow-md border-b">
      <div className="navbar-start">
        {/* Dropdown Mobile */}
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-stone-800 rounded-box w-52 border border-stone-700 "
          >
            <li>
              <Link to="/" className="hover:text-amber-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-amber-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/product" className="hover:text-amber-300">
                Mochi Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-amber-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="btn btn-ghost text-xl hover:bg-transparent">
          <img src="logo-moci.jpg" className="text-[#333333] text-2xl" />
          <span className="text-[#333333] ml-2 font-bold">MoChewy</span>
        </Link>
      </div>

      {/* Menu Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 text-purple-800 font-bold">
          <li>
            <Link
              to="/"
              className="font-medium hover:text-amber-300 hover:bg-stone-800/50 rounded-lg px-4 py-2 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="font-medium hover:text-amber-300 hover:bg-stone-800/50 rounded-lg px-4 py-2 transition-colors"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              className="font-medium hover:text-amber-300 hover:bg-stone-800/50 rounded-lg px-4 py-2 transition-colors"
            >
              Mochi Products
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="font-medium hover:text-amber-300 hover:bg-stone-800/50 rounded-lg px-4 py-2 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
