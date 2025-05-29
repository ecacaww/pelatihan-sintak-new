import React from "react";
import NavBar from "./NavBar";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";
import { FiCoffee } from "react-icons/fi";
import { LuLeaf } from "react-icons/lu";
import { RiEmotionHappyLine } from "react-icons/ri";
import { PiLeafBold } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import Footer from "./Footer";

function HomePage() {
  return (
    <div className="bg-stone-50">
      <NavBar />
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}

export default HomePage;

function HeroSection() {
  return (
    <div
      className="hero h-[90vh] relative"
      style={{
        backgroundImage: "url('/bg-mochi.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-overlay bg-stone-900/50"></div>
      <div className="hero-content text-neutral-content flex justify-start items-center h-full px-0">
        <div className="w-1/2 text-left pl-20">
          <h2 className="mb-4 text-2xl font-semibold text-amber-100 tracking-wider">
            MoChewy
          </h2>
          <h1 className="mb-8 text-5xl font-bold text-white leading-tight">
            Soft, Sweet, and Irresistible
            <br />
            The Mochi Experience
          </h1>
          <button className="btn bg-amber-700 hover:bg-amber-600 border-amber-700 text-white px-8 py-3 text-lg shadow-lg transition-all duration-300 transform hover:scale-105">
            View Mochi Catalog <IoIosArrowRoundForward className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <section className="py-24 bg-stone-100">
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2">
            <img
              src="/mocis2.jpg"
              className="rounded-xl shadow-2xl w-full"
              alt="Mochi"
            />
          </div>
          <div className="lg:w-1/2">
            <span className="inline-block bg-[#FFD6D6] text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Our Best Signature
            </span>
            <h1 className="text-4xl font-bold text-purple-800 mb-6 leading-tight">
              Deliciously Soft Mochi Snacks
              <br />
              Lovingly Made in Indonesia
            </h1>
            <p className="text-pink-700 mb-8 text-lg leading-relaxed">
              MoChewy menghadirkan camilan mochi lembut dan kenyal dengan cita
              rasa khas Indonesia. Dibuat dari bahan-bahan berkualitas tinggi
              dan resep pilihan, setiap gigitan MoChewy memberikan pengalaman
              manis yang tak terlupakan. Kami berkomitmen pada kualitas, rasa
              otentik, dan kebahagiaan di setiap kemasan.
            </p>
            <button className="btn bg-amber-700 hover:bg-amber-600 border-amber-700 text-white px-8 py-3 text-lg">
              Learn About Our Process
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section3() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
            Kenapa MoChewy?
          </span>
          <h1 className="text-4xl font-bold text-stone-800 mb-4">
            Komitmen Kami untuk Kelezatan dan Kebahagiaan
          </h1>
          <p className="text-stone-600 text-lg">
            MoChewy bukan sekadar camilan — kami hadir untuk memberikan
            pengalaman manis, lembut, dan menyenangkan dalam setiap gigitan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-rose-50 border border-rose-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="p-6 bg-rose-400 text-white flex items-center gap-3">
              <RiEmotionHappyLine className="text-2xl" />
              <h3 className="text-xl font-semibold">Rasa yang Bikin Bahagia</h3>
            </div>
            <img
              src="https://i.pinimg.com/564x/ae/17/53/ae17536bdce2c6bd3449ef594210016b.jpg"
              alt="Happy Taste"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-stone-600">
                Setiap varian MoChewy diracik untuk menghadirkan rasa yang
                lembut, manis, dan bikin ketagihan.
              </p>
            </div>
          </div>

          <div className="card bg-rose-50 border border-rose-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="p-6 bg-rose-400 text-white flex items-center gap-3">
              <PiLeafBold className="text-2xl" />
              <h3 className="text-xl font-semibold">Bahan Berkualitas</h3>
            </div>
            <img
              src="https://i.pinimg.com/564x/d7/31/8d/d7318d070ae13c60153a563b2d0fe3cb.jpg"
              alt="Premium Ingredients"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-stone-600">
                Dibuat dari bahan alami pilihan tanpa pengawet, aman dan cocok
                untuk semua usia.
              </p>
            </div>
          </div>

          <div className="card bg-rose-50 border border-rose-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="p-6 bg-rose-400 text-white flex items-center gap-3">
              <TbTruckDelivery className="text-2xl" />
              <h3 className="text-xl font-semibold">Pengiriman Cepat</h3>
            </div>
            <img
              src="https://i.pinimg.com/564x/12/90/0f/12900f46ae0d6ae352cf5d3f30a83e00.jpg"
              alt="Fast Delivery"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-stone-600">
                Dikirim langsung ke pintu rumahmu dengan kemasan aman dan tetap
                segar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section4() {
  return (
    <section className="py-24 bg-rose-50">
      <div className="container mx-auto px-8 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-rose-900 mb-4">
            Mochi Favorit Kami
          </h1>
          <p className="text-rose-600 text-lg font-medium">
            Jelajahi varian rasa mochi MoChewy yang paling disukai dan bikin
            ketagihan!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Strawberry Mochi */}
          <div className="card bg-white border border-rose-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
            <figure className="h-60 overflow-hidden">
              <img
                src="/moci-st.jpg"
                alt="Strawberry Mochi"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </figure>
            <div className="card-body p-6 text-left">
              <h2 className="card-title text-rose-800 text-xl mb-1">
                Strawberry Bliss
              </h2>
              <p className="text-rose-500 text-sm font-medium mb-4">
                Manis, segar, dan juicy
              </p>
              <p className="text-stone-600 text-sm mb-6">
                Mochi lembut berisi selai stroberi asli yang segar, cocok untuk
                pencinta rasa buah.
              </p>
              <button className="btn bg-rose-500 hover:bg-rose-400 border-rose-500 text-white w-full">
                Pesan Sekarang
              </button>
            </div>
          </div>

          {/* Matcha Mochi */}
          <div className="card bg-white border border-rose-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
            <figure className="h-60 overflow-hidden">
              <img
                src="/moci-m.jpg"
                alt="Matcha Mochi"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </figure>
            <div className="card-body p-6 text-left">
              <h2 className="card-title text-rose-800 text-xl mb-1">
                Matcha Delight
              </h2>
              <p className="text-rose-500 text-sm font-medium mb-4">
                Pahit manis yang elegan
              </p>
              <p className="text-stone-600 text-sm mb-6">
                Kombinasi lembut antara mochi dan isian matcha Jepang asli untuk
                rasa yang khas dan memanjakan.
              </p>
              <button className="btn bg-rose-500 hover:bg-rose-400 border-rose-500 text-white w-full">
                Pesan Sekarang
              </button>
            </div>
          </div>

          {/* Chocolate Mochi */}
          <div className="card bg-white border border-rose-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
            <figure className="h-60 overflow-hidden">
              <img
                src="/moci-c.jpg"
                alt="Chocolate Mochi"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </figure>
            <div className="card-body p-6 text-left">
              <h2 className="card-title text-rose-800 text-xl mb-1">
                Choco Lava
              </h2>
              <p className="text-rose-500 text-sm font-medium mb-4">
                Cokelat lumer di dalam
              </p>
              <p className="text-stone-600 text-sm mb-6">
                Isi cokelat yang meleleh saat digigit, bikin camilan ini cocok
                untuk pecinta manis sejati.
              </p>
              <button className="btn bg-rose-500 hover:bg-rose-400 border-rose-500 text-white w-full">
                Pesan Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
