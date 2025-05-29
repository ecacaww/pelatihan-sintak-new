import { FiCoffee } from "react-icons/fi";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function NavBar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  return (
    <div className="navbar sticky top-0 z-50 bg-[#FFD6D6] text-purple-800 backdrop-blur-md text-stone0 shadow-md border-b">
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
        <Link to="/" className="btn btn-ghost text-xl hover:bg-transparent">
          <img src="logo-moci.jpg" className="text-[#333333] text-2xl" />
          <span className="text-[#333333] ml-2 font-bold">MoChewy</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 text-purple-800 font-bold">
          <li>
            <Link
              to="/"
              className="font-medium  hover:text-amber-300 hover:bg-stone-800/50 rounded-lg px-4 py-2 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="font-medium  hover:text-amber-300 hover:bg-stone-800/50 rounded-lg px-4 py-2 transition-colors"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              className="font-medium  hover:text-amber-300 hover:bg-stone-800/50 rounded-lg px-4 py-2 transition-colors"
            >
              Mochi Products
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="font-medium  hover:text-amber-300 hover:bg-stone-800/50 rounded-lg px-4 py-2 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end space-x-2">
        {/* Toggle search input */}
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => setShowSearch(!showSearch)}
        >
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        {showSearch && (
          <input
            type="text"
            placeholder="Cari produk..."
            className="input input-bordered input-sm w-36 md:w-auto"
          />
        )}

        {/* Toggle notification dropdown */}
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => setShowNotif(!showNotif)}
        >
          <div className="indicator">
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item text-white"></span>
          </div>
        </button>

        {showNotif && (
          <div className="absolute top-16 right-4 bg-white shadow rounded-lg p-4 w-64 z-50 border">
            <p className="font-semibold mb-2">Notifikasi</p>
            <ul className="space-y-2 text-sm">
              <li>🎉 Promo spesial hari ini!</li>
              <li>🛒 Produk baru telah ditambahkan</li>
              <li>📦 Pesananmu sedang dikirim</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
