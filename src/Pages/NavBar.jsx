import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "..CartContextA/CartContext"; // import context

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

      {/* Keranjang */}
      <div className="flex">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 
                    2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 
                    100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {cartItems.length}
              </span>
            </div>
          </div>

          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-10 mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">
                {cartItems.length} Items
              </span>
              <div className="card-actions">
                <button
                  className="btn btn-primary btn-block"
                  onClick={openModal} // Menggunakan state untuk membuka modal
                >
                  View cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Isi Keranjang */}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box max-w-md">
            <h3 className="font-bold text-lg mb-4">Isi Keranjang</h3>
            {cartItems.length === 0 ? (
              <p className="text-gray-500">Keranjang masih kosong</p>
            ) : (
              <ul className="space-y-3">
                {cartItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="modal-action mt-6">
              <button
                className="btn"
                onClick={closeModal} // Menutup modal dengan mengubah state
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
