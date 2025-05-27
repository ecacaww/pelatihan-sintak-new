import React from "react";
import { FiCoffee } from "react-icons/fi";

function Footer() {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-stone-900 text-stone-300 p-10 border-t border-stone-700">
        <aside className="max-w-xs">
          <div className="flex justify-start items-center gap-2 mb-4">
            <FiCoffee className="text-2xl text-amber-400" />
            <h1 className="text-xl font-bold text-stone-100">Beaneca</h1>
          </div>
          <p className="text-sm font-medium">
            Premium Indonesian coffee beans exported directly from farmers to
            global markets.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-stone-100 font-semibold">Quick Links</h6>
          <a className="link link-hover hover:text-amber-300 text-sm">Home</a>
          <a className="link link-hover hover:text-amber-300 text-sm">About Us</a>
          <a className="link link-hover hover:text-amber-300 text-sm">Coffee Products</a>
          <a className="link link-hover hover:text-amber-300 text-sm">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title text-stone-100 font-semibold">Coffee Products</h6>
          <a className="link link-hover hover:text-amber-300 text-sm">Arabica Varieties</a>
          <a className="link link-hover hover:text-amber-300 text-sm">Robusta Varieties</a>
          <a className="link link-hover hover:text-amber-300 text-sm">Specialty Coffee</a>
          <a className="link link-hover hover:text-amber-300 text-sm">Custom Orders</a>
        </nav>
        <nav className="max-w-xs">
          <h6 className="footer-title text-stone-100 font-semibold">Contact Us</h6>
          <p className="text-sm mb-1">Jl. Sriwijaya No. 123, Palembang</p>
          <p className="text-sm mb-1">South Sumatra, Indonesia 30139</p>
          <p className="text-sm mb-1">info@aromasriwijaya.com</p>
          <p className="text-sm">+62 812 3456 7890</p>
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center bg-stone-800 text-stone-400 p-4 border-t border-stone-700">
        <aside>
          <p className="text-sm">
            Copyright © {new Date().getFullYear()} Aroma Sriwijaya. All rights reserved.
          </p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;