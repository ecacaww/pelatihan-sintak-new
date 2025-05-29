import React from "react";
import NavBar from "./NavBar";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";
import { FiCoffee } from "react-icons/fi";
import { LuLeaf } from "react-icons/lu";
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
              src="https://ivebeen.cooking/_next/image?url=https%3A%2F%2Ffiles.ivebeen.cooking%2Fimages%2Fkopi-pahit%2Ftmp0mj2rp_q.jpg&w=640&q=75"
              className="rounded-xl shadow-2xl w-full"
              alt="Indonesian coffee beans"
            />
          </div>
          <div className="lg:w-1/2">
            <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Direct from Indonesia
            </span>
            <h1 className="text-4xl font-bold text-stone-800 mb-6 leading-tight">
              Exceptional Coffee Beans from
              <br />
              the Heart of Indonesia
            </h1>
            <p className="text-stone-600 mb-8 text-lg leading-relaxed">
              Beaneca works directly with local farmers across Indonesia to
              source the finest Arabica and Robusta coffee beans. Our commitment
              to quality and sustainability ensures that every bean we export
              meets the highest standards.
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
          <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h1 className="text-4xl font-bold text-stone-800 mb-4">
            Our Commitment to Excellence
          </h1>
          <p className="text-stone-600 text-lg">
            Discover why coffee businesses around the world trust Beaneca for
            their premium Indonesian coffee needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-stone-50 border border-stone-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="p-6 bg-amber-700 text-white flex items-center gap-3">
              <RiGlobalLine className="text-2xl" />
              <h3 className="text-xl font-semibold">Global Reach</h3>
            </div>
            <img
              src="https://i.pinimg.com/736x/ac/6d/bd/ac6dbdcdef0e0d7cd4a265cf56235cae.jpg"
              alt="Global Reach"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-stone-600">
                Exporting to coffee professionals worldwide with trusted
                delivery and streamlined logistics.
              </p>
            </div>
          </div>

          <div className="card bg-stone-50 border border-stone-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="p-6 bg-amber-700 text-white flex items-center gap-3">
              <FiCoffee className="text-2xl" />
              <h3 className="text-xl font-semibold">Exceptional Quality</h3>
            </div>
            <img
              src="https://i.pinimg.com/736x/d2/89/56/d2895699e51298362aa80130ad06f69c.jpg"
              alt="Exceptional Quality"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-stone-600">
                Every bean is carefully hand-selected and roasted to highlight
                the unique flavor of its origin.
              </p>
            </div>
          </div>

          <div className="card bg-stone-50 border border-stone-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="p-6 bg-amber-700 text-white flex items-center gap-3">
              <LuLeaf className="text-2xl" />
              <h3 className="text-xl font-semibold">Sustainable Practices</h3>
            </div>
            <img
              src="https://i.pinimg.com/736x/ce/7f/f7/ce7ff765d8ef4a090f7638f1061be258.jpg"
              alt="Sustainable Practices"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-stone-600">
                We partner with local farmers and cooperatives to promote
                ethical, eco-friendly farming.
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
