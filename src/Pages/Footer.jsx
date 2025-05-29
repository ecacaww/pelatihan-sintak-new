import React from "react";
import { FiCoffee } from "react-icons/fi";

function Footer() {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-pink-200 text-purple-800 p-10 border-t border-pink-200">
        <aside className="max-w-xs">
          <div className="flex justify-start items-center gap-2 mb-4">
            <FiCoffee className="text-2xl text-amber-400" />
            <h1 className="text-xl font-bold text-purple-800">MoChewy</h1>
          </div>
          <p className="text-sm font-medium">
            Soft, Sweet, and Irresistible The Mochi Experience
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-purple-800 font-bold">
            Quick Links
          </h6>
          <a className="link link-hover hover:text-amber-300 text-sm">Home</a>
          <a className="link link-hover hover:text-amber-300 text-sm">
            About Us
          </a>
          <a className="link link-hover hover:text-amber-300 text-sm">
            Mochi Products
          </a>
          <a className="link link-hover hover:text-amber-300 text-sm">
            Contact
          </a>
        </nav>
        <nav>
          <h6 className="footer-title text-purple-800 font-bold">
            Mochi Products
          </h6>
          <a className="link link-hover hover:text-amber-300 text-sm">
            Strawberry
          </a>
          <a className="link link-hover hover:text-amber-300 text-sm">
            Manggo
          </a>
          <a className="link link-hover hover:text-amber-300 text-sm">
            Matcha
          </a>
          <a className="link link-hover hover:text-amber-300 text-sm">
            Chocolate
          </a>
          <a className="link link-hover hover:text-amber-300 text-sm">
            Character
          </a>
          <a className="link link-hover hover:text-amber-300 text-sm">
            Dango 
          </a>
        </nav>
        <nav className="max-w-xs">
          <h6 className="footer-title text-purple-800 font-bold">
            Contact Us
          </h6>
          <p className="text-sm mb-1">Jl. Sriwijaya No. 123, Palembang</p>
          <p className="text-sm mb-1">South Sumatra, Indonesia 30139</p>
          <p className="text-sm mb-1">MoChewy@gmail.com</p>
          <p className="text-sm">+62 812 3456 7890</p>
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center bg-pink-200 text-purple-800 p-4 border-t border-pink-200">
        <aside>
          <p className="text-sm">
            © {new Date().getFullYear()} MoChewy. All rights
            reserved.
          </p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;
