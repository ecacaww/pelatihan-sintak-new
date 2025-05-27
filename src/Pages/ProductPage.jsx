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
        backgroundImage: "url(src/assets/What_is_a_latte.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      <div className="hero-overlay bg-stone-900/60"></div>
      <div className="hero-content text-center text-stone-100 relative z-10">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold tracking-tight">Our Coffee Products</h1>
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
            image="src/assets/productcard1.jpg"
            title="Sumatra Mandheling"
            from="Aceh, North Sumatra"
            processing="Wet-Hulled"
            Altitude="1,200-1,500 masl"
            flavor="Earthy, Herbal, Spicy"
            available="Year-round"
          />
          <ProductCard
            image="src/assets/productcard2.jpg"
            title="Java Preanger"
            from="West Java"
            processing="Washed"
            Altitude="1,300-1,600 masl"
            flavor="Citrus, Floral, Clean"
            available="June - December"
          />
          <ProductCard
            image="src/assets/productcard3.jpg"
            title="Bali Kintamani"
            from="Bali"
            processing="Wet Process"
            Altitude="1,200-1,600 masl"
            flavor="Lemon, Caramel, Nutty"
            available="May - October"
          />
          <ProductCard
            image="src/assets/productcard4.jpg"
            title="Flores Bajawa"
            from="East Nusa Tenggara"
            processing="Semi-Washed"
            Altitude="1,300-1,800 masl"
            flavor="Chocolate, Spice, Floral"
            available="June - November"
          />
          <ProductCard
            image="src/assets/productcard5.jpg"
            title="Toraja Kalosi"
            from="South Sulawesi"
            processing="Wet-Hulled"
            Altitude="1,400-1,800 masl"
            flavor="Dark Chocolate, Spicy, Earthy"
            available="Year-round"
          />
          <ProductCard
            image="src/assets/java-preanger.jpg"
            title="Java Robusta"
            from="East Java"
            processing="Dry Process"
            Altitude="600-900 masl"
            flavor="Woody, Nutty, Strong"
            available="Year-round"
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
        <h2 className="card-title text-2xl font-bold text-stone-800 mb-2">{props.title}</h2>
        <p className="text-amber-700 font-medium mb-4">{props.from}</p>
        
        <div className="space-y-3 mb-6">
          <div className="flex justify-between border-b border-stone-100 pb-2">
            <span className="font-semibold text-stone-600">Processing</span>
            <span className="text-stone-700">{props.processing}</span>
          </div>
          <div className="flex justify-between border-b border-stone-100 pb-2">
            <span className="font-semibold text-stone-600">Altitude</span>
            <span className="text-stone-700">{props.Altitude}</span>
          </div>
          <div className="flex justify-between border-b border-stone-100 pb-2">
            <span className="font-semibold text-stone-600">Flavor Notes</span>
            <span className="text-stone-700">{props.flavor}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-stone-600">Available</span>
            <span className="text-stone-700">{props.available}</span>
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