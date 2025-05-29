import React from "react";
import NavBar from "./NavBar";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";
import { FiCoffee } from "react-icons/fi";
import { LuLeaf } from "react-icons/lu";
import { PiLeafThin } from "react-icons/pi";
import { GiJapan } from "react-icons/gi";
import { TbBrandEco } from "react-icons/tb";
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
              src="/moci2.jpg"
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
            Why MoChewy?
          </span>
          <h1 className="text-4xl font-bold text-stone-800 mb-4">
            Soft. Sweet. Satisfying.
          </h1>
          <p className="text-stone-600 text-lg">
            Rasakan kenikmatan mochi lembut khas MoChewy—dibuat dari bahan
            alami, dikemas dengan cinta, dan siap maniskan harimu.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Authentic Ingredients */}
          <div className="card bg-rose-50 border border-rose-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="p-6 bg-rose-300 text-white flex items-center gap-3">
              <PiLeafThin className="text-2xl" />
              <h3 className="text-xl font-semibold">Bahan Alami</h3>
            </div>
            <img
              src="https://i.pinimg.com/736x/5e/8e/1e/5e8e1e8232a5d5a7f06d20f4efc69e6b.jpg"
              alt="Natural Ingredients"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-stone-600">
                Menggunakan bahan-bahan berkualitas tanpa pengawet untuk rasa
                mochi yang aman dan nikmat.
              </p>
            </div>
          </div>

          {/* Japanese-Inspired Recipe */}
          <div className="card bg-rose-50 border border-rose-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="p-6 bg-rose-300 text-white flex items-center gap-3">
              <GiJapan className="text-2xl" />
              <h3 className="text-xl font-semibold">Resep Jepang Asli</h3>
            </div>
            <img
              src="https://i.pinimg.com/736x/b2/8a/38/b28a38550b9d3a3b2b179eab90538ac4.jpg"
              alt="Japanese Recipe"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-stone-600">
                Diinspirasi dari tradisi Jepang dengan sentuhan rasa khas
                Indonesia.
              </p>
            </div>
          </div>

          {/* Eco-Friendly Packaging */}
          <div className="card bg-rose-50 border border-rose-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="p-6 bg-rose-300 text-white flex items-center gap-3">
              <TbBrandEco className="text-2xl" />
              <h3 className="text-xl font-semibold">Ramah Lingkungan</h3>
            </div>
            <img
              src="https://i.pinimg.com/736x/87/26/6a/87266af9aef1e3cf7de3e14279a4d0f4.jpg"
              alt="Eco Friendly"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-stone-600">
                Kami menggunakan kemasan ramah lingkungan untuk mendukung bumi
                yang lebih hijau.
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
    <section className="py-24 bg-stone-100">
      <div className="container mx-auto px-8 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-stone-800 mb-4">
            Featured Coffee Selections
          </h1>
          <p className="text-amber-700 text-lg font-medium">
            Explore our premium coffee varieties from different regions of
            Indonesia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-white border border-stone-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
            <figure className="h-60 overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/54/5f/9c/545f9c58f07f2eeb97e470edfca43700.jpg"
                alt="Sumatra Mandheling"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </figure>
            <div className="card-body p-6 text-left">
              <h2 className="card-title text-stone-800 text-xl mb-1">
                Sumatra Mandheling
              </h2>
              <p className="text-amber-600 text-sm font-medium mb-4">
                Aceh, North Sumatra
              </p>
              <p className="text-stone-600 text-sm mb-6">
                Bold, earthy, and full-bodied with notes of dark chocolate,
                cedar, and a subtle spice finish.
              </p>
              <button className="btn bg-amber-700 hover:bg-amber-600 border-amber-700 text-white w-full">
                Buy Now
              </button>
            </div>
          </div>

          <div className="card bg-white border border-stone-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
            <figure className="h-60 overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/ac/6d/bd/ac6dbdcdef0e0d7cd4a265cf56235cae.jpg"
                alt="Toraja Kalosi"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </figure>
            <div className="card-body p-6 text-left">
              <h2 className="card-title text-stone-800 text-xl mb-1">
                Toraja Kalosi
              </h2>
              <p className="text-amber-600 text-sm font-medium mb-4">
                South Sulawesi
              </p>
              <p className="text-stone-600 text-sm mb-6">
                Complex and well-balanced with notes of dark chocolate, spices,
                and a clean, syrupy body.
              </p>
              <button className="btn bg-amber-700 hover:bg-amber-600 border-amber-700 text-white w-full">
                Buy Now
              </button>
            </div>
          </div>

          <div className="card bg-white border border-stone-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
            <figure className="h-60 overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/d2/89/56/d2895699e51298362aa80130ad06f69c.jpg"
                alt="Java Robusta"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </figure>
            <div className="card-body p-6 text-left">
              <h2 className="card-title text-stone-800 text-xl mb-1">
                Java Robusta
              </h2>
              <p className="text-amber-600 text-sm font-medium mb-4">
                East Java
              </p>
              <p className="text-stone-600 text-sm mb-6">
                Strong and bold with woody notes, a hint of dark chocolate, and
                a smooth, lingering finish.
              </p>
              <button className="btn bg-amber-700 hover:bg-amber-600 border-amber-700 text-white w-full">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
