import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

function NavBar() {
  const { cartItems, removeFromCart } = useCart();
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  // Hitung total harga
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + (item.price || 0) * item.quantity,
      0
    );
  };

  return (
    <div className="navbar sticky top-0 z-50 bg-[#FFD6D6] text-purple-800 backdrop-blur-md text-stone0 shadow-md border-b">
      {/* Logo dan menu */}
      <div className="navbar-start">
        {/* ... (menu dropdown sama seperti sebelumnya) */}
        <Link to="/" className="btn btn-ghost text-xl hover:bg-transparent">
          <img src="logo-moci.jpg" className="text-[#333333] text-2xl" />
          <span className="text-[#333333] ml-2 font-bold">MoChewy</span>
        </Link>
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)} Items
              </span>
              <div className="card-actions">
                <button
                  className="btn btn-primary btn-block"
                  onClick={handleModalOpen}
                >
                  View cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Isi Keranjang */}
      {modalOpen && (
        <div
          className="modal modal-open fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={handleModalClose}
        >
          <div
            className="modal-box max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
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
                    <div className="flex-1">
                      <p>
                        {item.title} x {item.quantity}
                      </p>
                      <p className="text-sm text-gray-500">
                        Rp{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-xs"
                    >
                      Hapus
                    </button>
                  </li>
                ))}
              </ul>
            )}
            {cartItems.length > 0 && (
              <div className="mt-4">
                <p className="font-bold">
                  Total: Rp{getTotalPrice().toLocaleString()}
                </p>
                <Link to="/checkout" className="btn btn-success btn-block mt-2">
                  Checkout
                </Link>
              </div>
            )}
            <div className="modal-action mt-6">
              <button className="btn" onClick={handleModalClose}>
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
