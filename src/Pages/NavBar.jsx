import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

function NavBar() {
  const { cartItems, removeFromCart } = useCart();
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  // Hitung total harga seluruh item di keranjang
  const getTotalPrice = () =>
    cartItems.reduce(
      (total, item) => total + (item.price || 0) * (item.quantity || 1),
      0
    );

  // Hitung total quantity item di keranjang
  const getTotalQuantity = () =>
    cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <div className="navbar sticky top-0 z-50 bg-[#FFD6D6] text-purple-800 backdrop-blur-md shadow-md border-b">
      {/* Logo dan menu */}
      <div className="navbar-start">
        <Link
          to="/"
          className="btn btn-ghost text-xl hover:bg-transparent flex items-center"
        >
          <img src="logo-moci.jpg" alt="MoChewy Logo" className="w-8 h-8" />
          <span className="ml-2 font-bold text-[#333333]">MoChewy</span>
        </Link>
      </div>

      {/* Keranjang */}
      <div className="navbar-end flex items-center">
        <div className="dropdown dropdown-end">
          <button
            tabIndex={0}
            className="btn btn-ghost btn-circle relative"
            onClick={handleModalOpen}
            aria-label="Open Cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {getTotalQuantity() > 0 && (
              <span className="badge badge-sm indicator-item absolute top-0 right-0">
                {getTotalQuantity()}
              </span>
            )}
          </button>

          {/* Dropdown cart summary */}
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-white shadow-lg mt-3 w-64 p-4 rounded-lg"
          >
            <div className="card-body">
              <h3 className="font-bold text-lg mb-2">
                {getTotalQuantity()} Item{getTotalQuantity() !== 1 ? "s" : ""}
              </h3>
              {cartItems.length === 0 ? (
                <p className="text-gray-500">Keranjang masih kosong</p>
              ) : (
                <ul className="max-h-48 overflow-auto space-y-2 mb-4">
                  {cartItems.map((item) => (
                    <li key={item.id} className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <p className="font-medium">
                          {item.title} x {item.quantity}
                        </p>
                        <p className="text-sm text-gray-600">
                          Rp{(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 text-xs hover:underline"
                        aria-label={`Hapus ${item.title} dari keranjang`}
                      >
                        Hapus
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {cartItems.length > 0 && (
                <>
                  <p className="font-bold text-right">
                    Total: Rp{getTotalPrice().toLocaleString()}
                  </p>
                  <Link
                    to="/checkout"
                    className="btn btn-success btn-block mt-3"
                    onClick={handleModalClose}
                  >
                    Checkout
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
