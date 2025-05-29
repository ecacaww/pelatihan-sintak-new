import React, { useState } from "react";
import { FiCoffee } from "react-icons/fi";
import { Link } from "react-router-dom";

function NavBar() {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  // Function to add item to cart (you'll call this from your product components)
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if product already exists in cart
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });

    setSubtotal((prev) => prev + product.price);
  };

  // Function to remove item from cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const itemToRemove = prevItems.find((item) => item.id === productId);
      if (itemToRemove && itemToRemove.quantity > 1) {
        return prevItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return prevItems.filter((item) => item.id !== productId);
    });

    const item = cartItems.find((i) => i.id === productId);
    if (item) {
      setSubtotal((prev) => prev - item.price);
    }
  };

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

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

      {/* keranjang */}
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
              {totalItems > 0 && (
                <span className="badge badge-sm indicator-item bg-purple-600 text-white">
                  {totalItems}
                </span>
              )}
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-72 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">
                {totalItems} {totalItems === 1 ? "Item" : "Items"}
              </span>
              <span className="text-info">
                Subtotal: ${subtotal.toFixed(2)}
              </span>
              <div className="card-actions">
                <button
                  className="btn btn-primary w-full"
                  onClick={() =>
                    document.getElementById("cart_modal").showModal()
                  }
                  disabled={totalItems === 0}
                >
                  View Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      <dialog id="cart_modal" className="modal">
        <div className="modal-box max-w-3xl">
          <h3 className="font-bold text-2xl">Your Shopping Cart</h3>

          {cartItems.length === 0 ? (
            <div className="py-8 text-center">
              <p>Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto mt-4">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img src={item.image} alt={item.name} />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">{item.name}</div>
                            </div>
                          </div>
                        </td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>
                          <div className="flex items-center gap-2">
                            <button
                              className="btn btn-xs btn-circle"
                              onClick={() => removeFromCart(item.id)}
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              className="btn btn-xs btn-circle"
                              onClick={() => addToCart(item)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                        <td>
                          <button
                            className="btn btn-xs btn-error"
                            onClick={() => {
                              setCartItems((prev) =>
                                prev.filter((i) => i.id !== item.id)
                              );
                              setSubtotal(
                                (prev) => prev - item.price * item.quantity
                              );
                            }}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-end mt-4">
                <div className="text-right">
                  <p className="text-lg">
                    <span className="font-bold">Subtotal:</span> $
                    {subtotal.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500">
                    Shipping calculated at checkout
                  </p>
                </div>
              </div>
            </>
          )}

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Continue Shopping</button>
            </form>
            {cartItems.length > 0 && (
              <Link to="/checkout" className="btn btn-primary">
                Proceed to Checkout
              </Link>
            )}
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default NavBar;
