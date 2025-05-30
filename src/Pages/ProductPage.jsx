import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function ProductPage() {
  return (
    <div className="bg-stone-50">
      <NavBar />
      <HeroSection />
      <Section2 />
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

function Section2() {
  return (
    <section id="section2" className="py-16 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            image="/productcard1.jpeg"
            title="Strawberry Bliss"
            description="Mochi lembut berwarna merah muda dengan selai stroberi asli yang segar, cocok untuk pencinta rasa buah.
            Rasa manis dan asamnya berpadu sempurna, menciptakan pengalaman menyegarkan yang cocok dinikmati kapan saja."
            inStock={true}
          />
          <ProductCard
            image="/productcard2.jpeg"
            title="Mango Tango"
            description="Kenikmatan tropis dalam setiap gigitan. Mochi mangga ini diisi 
            dengan krim mangga halus dan dihiasi potongan buah asli, memberikan rasa manis alami yang ringan dan memikat."
            inStock={true}
          />
          <ProductCard
            image="/productcard3.jpeg"
            title="Matcha Delight"
            description="Mochi dengan aroma dan isian khas matcha Jepang
           yang lembut dan sedikit pahit. Cocok untuk Anda yang menyukai rasa autentik dan menenangkan dari matcha premium."
            inStock={true}
          />
          <ProductCard
            image="/moci-c.jpg"
            title="Choco Lava"
            description="Kelezatan cokelat pekat dibungkus dalam mochi kenyal. Isian krim cokelat
            yang kaya rasa, berpadu dengan tekstur halus dan aroma cokelat yang menggoda setiap kali dinikmati."
            inStock={true}
          />
          <ProductCard
            image="/productcard5.jpeg"
            title="Mochi Character"
            description="Mochi dengan bentuk karakter lucu dan warna-warni ceria, dibuat dengan detail yang menggemaskan. 
            Tidak hanya enak, tapi juga menyenangkan untuk dilihat — pilihan sempurna untuk anak-anak, hampers ulang tahun, atau hadiah spesial bagi orang tersayang."
            inStock={true}
          />
          <ProductCard
            image="/productcard6.jpeg"
            title="Dango Mochi"
            description="Mochi tradisional bergaya Jepang dengan tampilan bulat bertingkat. Menghadirkan
             rasa kacang dan kayu yang kuat, cocok dinikmati sebagai camilan klasik yang hangat dan mengenyangkan."
            inStock={true}
          />
        </div>
      </div>
    </section>
  );
}

function ProductCard({ image, title, description, inStock = true }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="relative flex card bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden">
      {/* Tombol Favorit */}
      <button
        onClick={toggleFavorite}
        className="absolute top-4 right-4 z-20 text-pink-500 hover:text-pink-600"
        aria-label="Favorite"
      >
        {isFavorited ? <FaHeart size={24} /> : <FaRegHeart size={24} />}
      </button>

      <figure className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </figure>

      <div className="card-body p-6">
        <h2 className="card-title text-2xl font-bold text-pink-800 mb-1">
          {title}
        </h2>

        {/* Info stok */}
        <p
          className={`text-sm mb-2 font-medium ${
            inStock ? "text-green-600" : "text-red-500"
          }`}
        >
          {inStock ? "Tersedia" : "Stok Habis"}
        </p>

        <div className="mb-4">
          <p className="text-stone-600 leading-relaxed">{description}</p>
        </div>

        <div className="card-actions">
          <button
            className="btn bg-pink-500 hover:bg-pink-600 text-white w-full py-3 rounded-xl font-semibold tracking-wide transition-all duration-300 border-none disabled:opacity-50"
            disabled={!inStock}
            onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
          >
            {inStock ? "Pesan Sekarang" : "Stok Kosong"}
          </button>
        </div>
      </div>
    </div>
  );
}
