import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { IoIosArrowRoundForward } from "react-icons/io";

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
      <div className="hero-overlay bg-stone-900/60"></div>
      <div className="hero-content text-center text-stone-100 relative z-10">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold tracking-tight">
            Our Coffee Products
          </h1>
          <p className="mb-8 text-xl font-medium">
            Premium Indonesian Coffee Beans for Global Markets
          </p>
          <button className="btn bg-amber-800 hover:bg-amber-700 border-amber-800 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105">
            Request Sample <IoIosArrowRoundForward className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <section className="py-16 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            image="/productcard1.jpeg"
            title="Strawberry"
            description="Mochi lembut berwarna merah muda dengan isian krim manis dan potongan stroberi segar. 
            Rasa manis dan asamnya berpadu sempurna, menciptakan pengalaman menyegarkan yang cocok dinikmati kapan saja."
          />
          <ProductCard
            image="/productcard2.jpeg"
            title="Manggo"
            description="Kenikmatan tropis dalam setiap gigitan. Mochi mangga ini diisi 
            dengan krim mangga halus dan dihiasi potongan buah asli, memberikan rasa manis alami yang ringan dan memikat."
          />
          <ProductCard
            image="/productcard3.jpeg"
            title="Matcha"
           description="Mochi dengan aroma khas matcha Jepang, berisi krim teh hijau 
           yang lembut dan sedikit pahit. Cocok untuk Anda yang menyukai rasa autentik dan menenangkan dari matcha premium."
          />
          <ProductCard
            image="/productcard4.jpeg"
            title="Chocolate"
           description="Kelezatan cokelat pekat dibungkus dalam mochi kenyal. Isian krim cokelat
            yang kaya rasa, berpadu dengan tekstur halus dan aroma cokelat yang menggoda setiap kali dinikmati."
          />
          <ProductCard
            image="/productcard5.jpeg"
            title="Character"
            description="Mochi dengan bentuk karakter lucu dan warna-warni ceria, dibuat dengan detail yang menggemaskan. 
            Tidak hanya enak, tapi juga menyenangkan untuk dilihat — pilihan sempurna untuk anak-anak, hampers ulang tahun, atau hadiah spesial bagi orang tersayang."
          />
          <ProductCard
            image="/productcard6.jpeg"
            title="Dango"
            description="Mochi tradisional bergaya Jepang dengan tampilan bulat bertingkat. Menghadirkan
             rasa kacang dan kayu yang kuat, cocok dinikmati sebagai camilan klasik yang hangat dan mengenyangkan."
          />
        </div>
      </div>
    </section>
  );
}

function ProductCard(props) {
  return (
    <div className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-stone-200 rounded-lg overflow-hidden">
      <figure className="relative h-64 overflow-hidden">
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </figure>
      <div className="card-body p-6">
        <h2 className="card-title text-2xl font-bold text-stone-800 mb-2">
          {props.title}
        </h2>
        <p className="text-amber-700 font-medium mb-4">{props.from}</p>

        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span className="font-semibold text-stone-600">Description</span>
            <span className="text-stone-700">{props.description}</span>
          </div>
        </div>

        <div className="card-actions">
          <button className="btn bg-amber-800 hover:bg-amber-700 border-amber-800 text-white w-full py-3 transition-colors duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
