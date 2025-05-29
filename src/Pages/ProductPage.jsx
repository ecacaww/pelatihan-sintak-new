import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { IoIosArrowRoundForward } from "react-icons/io";
import {} from "../CartContext";

function ProductPage() {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Strawberry Bliss",
      price: 3.99,
      image: "/productcard1.jpeg",
      description:
        "Mochi lembut berwarna merah muda dengan isian krim manis dan potongan stroberi segar. Rasa manis dan asamnya berpadu sempurna, menciptakan pengalaman menyegarkan yang cocok dinikmati kapan saja.",
    },
    {
      id: 2,
      name: "Mango Tango",
      price: 3.99,
      image: "/productcard2.jpeg",
      description:
        "Kenikmatan tropis dalam setiap gigitan. Mochi mangga ini diisi dengan krim mangga halus dan dihiasi potongan buah asli, memberikan rasa manis alami yang ringan dan memikat.",
    },
    {
      id: 3,
      name: "Matcha Delight",
      price: 4.49,
      image: "/productcard3.jpeg",
      description:
        "Mochi dengan aroma khas matcha Jepang, berisi krim teh hijau yang lembut dan sedikit pahit. Cocok untuk Anda yang menyukai rasa autentik dan menenangkan dari matcha premium.",
    },
    {
      id: 4,
      name: "Choco Lava",
      price: 4.29,
      image: "/moci-c.jpg",
      description:
        "Kelezatan cokelat pekat dibungkus dalam mochi kenyal. Isian krim cokelat yang kaya rasa, berpadu dengan tekstur halus dan aroma cokelat yang menggoda setiap kali dinikmati.",
    },
    {
      id: 5,
      name: "Mochi Character",
      price: 4.99,
      image: "/productcard5.jpeg",
      description:
        "Mochi dengan bentuk karakter lucu dan warna-warni ceria, dibuat dengan detail yang menggemaskan. Tidak hanya enak, tapi juga menyenangkan untuk dilihat — pilihan sempurna untuk anak-anak, hampers ulang tahun, atau hadiah spesial bagi orang tersayang.",
    },
    {
      id: 6,
      name: "Dango Mochi",
      price: 3.79,
      image: "/productcard6.jpeg",
      description:
        "Mochi tradisional bergaya Jepang dengan tampilan bulat bertingkat. Menghadirkan rasa kacang dan kayu yang kuat, cocok dinikmati sebagai camilan klasik yang hangat dan mengenyangkan.",
    },
  ];

  return (
    <div className="bg-stone-50">
      <NavBar />
      <HeroSection />
      <Section2 products={products} />
      <Footer />
    </div>
  );
}

export default ProductPage;

function HeroSection() {
  return (
    <div
      className="hero h-[450px] relative"
      style={{
        backgroundImage: "url(/bg-mochi.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-overlay bg-stone-900/50"></div>
      <div className="hero-content text-center text-rose-700 relative z-10">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold tracking-tight text-pink-300 drop-shadow-sm">
            Temukan Mochi Favoritmu!
          </h1>
          <p className="mb-8 text-xl font-medium text-pink-400">
            Camilan lembut, lucu, dan manis — sempurna untuk semua suasana hati
          </p>
          <button className="btn bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 border-none shadow-md hover:shadow-lg">
            Lihat Produk <IoIosArrowRoundForward className="text-2xl ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Section2({ products }) {
  return (
    <section className="py-16 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  const addToCart = () => {
    // Get the NavBar component's addToCart function
    const navBar = document.querySelector("nav");
    if (navBar && navBar.__reactProps$ && navBar.__reactProps$.addToCart) {
      navBar.__reactProps$.addToCart(product);
    } else {
      console.error("Could not find addToCart function in NavBar");
    }
  };

  return (
    <div className="flex card bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden">
      <figure className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </figure>
      <div className="card-body p-6">
        <h2 className="card-title text-2xl font-bold text-pink-800 mb-1">
          {product.name}
        </h2>
        <div className="mb-2">
          <span className="text-lg font-semibold text-pink-600">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <div className="mb-4">
          <p className="text-stone-600 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="card-actions">
          <button
            className="btn bg-pink-500 hover:bg-pink-600 text-white w-full py-3 rounded-xl font-semibold tracking-wide transition-all duration-300 border-none"
            onClick={addToCart}
          >
            Tambahkan Keranjang
          </button>
        </div>
      </div>
    </div>
  );
}
