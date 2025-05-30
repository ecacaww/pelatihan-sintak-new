import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import {
  FiClock,
  FiMapPin,
  FiAward,
  FiUsers,
  FiHeart,
  FiStar,
  FiChevronRight,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import { FaLeaf, FaHandshake, FaQuoteLeft } from "react-icons/fa";
import {
  GiChewedSkull,
  GiFruitBowl,
  GiLoveInjection,
  GiEarthAsiaOceania,
} from "react-icons/gi";

function AboutPage() {
  return (
    <div className="bg-[#FFF9F5]">
      <NavBar />
      <HeroSection />
      <VisionMissionSection />
      <CompanyProfileSection />
      <CoreValuesSection />
      <TestimonialsSection />
      <GallerySection />
      <Footer />
    </div>
  );
}

export default AboutPage;

function HeroSection() {
  const stats = [
    {
      icon: <GiFruitBowl className="text-2xl sm:text-3xl md:text-4xl" />,
      title: "Varian Rasa",
      value: "5+",
      desc: "Kreasi unik kami",
    },
    {
      icon: <GiLoveInjection className="text-2xl sm:text-3xl md:text-4xl" />,
      title: "Pelanggan Setia",
      value: "500+",
      desc: "Setiap bulannya",
    },
    {
      icon: <GiChewedSkull className="text-2xl sm:text-3xl md:text-4xl" />,
      title: "Tahun Beroperasi",
      value: "5+",
      desc: "Dedikasi kami",
    },
  ];

  return (
    <div className="relative w-full">
      <div 
        className="absolute inset-0 z-0 bg-stone-900/50"
        style={{
          backgroundImage: "url(/bg-mochi.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/40 to-stone-900/20"></div>
      </div>

     
      <div className="relative z-10 min-h-[350px] sm:min-h-[400px] md:min-h-[550px] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl text-center px-2 sm:px-4">
          <h1 className="mb-3 sm:mb-5 text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-pink-300 drop-shadow-md">
            Tentang <span className="text-pink-400">MoChewy</span>
          </h1>
          <p className="mb-4 sm:mb-8 text-sm sm:text-base md:text-xl font-medium text-pink-200 drop-shadow-sm">
            Perjalanan manis kami dalam menciptakan mochi lezat yang membuat
            hari-hari Anda lebih berwarna.
          </p>

       
          <div className="mt-4 sm:mt-6 md:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 hover:bg-white/30 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 shadow-md"
              >
                <div className="text-pink-400 mb-1 sm:mb-2 animate-bounce">
                  {stat.icon}
                </div>
                <div className="text-xs sm:text-sm md:text-lg font-semibold text-white">
                  {stat.title}
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-pink-300">
                  {stat.value}
                </div>
                <div className="text-[10px] xs:text-xs sm:text-sm text-pink-100 mt-0.5 sm:mt-1">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function VisionMissionSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 items-center">
        <div className="lg:w-1/2 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6B4F3A] mb-4 sm:mb-6 md:mb-8 relative">
            <span className="relative z-10">
              Visi & Misi <span className="text-[#A78BFA]">MoChewy</span>
            </span>
            <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-24 sm:w-32 h-1 sm:h-2 bg-[#FF85A2]/50 z-0"></span>
          </h2>

          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <div className="card bg-gradient-to-br from-[#FFEDF1] to-[#FFEDF1]/70 border-l-4 border-[#FF85A2] shadow-md hover:shadow-lg transition-shadow">
              <div className="card-body p-3 sm:p-4 md:p-6">
                <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                  <div className="p-2 sm:p-3 bg-[#FF85A2] text-white rounded-full">
                    <FiStar className="text-base sm:text-lg md:text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#6B4F3A] mb-1 sm:mb-2 md:mb-3">
                      Visi Kami
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-[#5A3E28]">
                      Menjadi merek mochi terdepan yang dikenal dengan inovasi
                      rasa dan kualitas premium, menyebarkan kebahagiaan melalui
                      setiap gigitan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-[#E8E1F4] to-[#E8E1F4]/70 border-l-4 border-[#A78BFA] shadow-md hover:shadow-lg transition-shadow">
              <div className="card-body p-3 sm:p-4 md:p-6">
                <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                  <div className="p-2 sm:p-3 bg-[#A78BFA] text-white rounded-full">
                    <FiAward className="text-base sm:text-lg md:text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#6B4F3A] mb-1 sm:mb-2 md:mb-3">
                      Misi Kami
                    </h3>
                    <ul className="space-y-1 sm:space-y-2 md:space-y-3 text-xs sm:text-sm md:text-base text-[#5A3E28]">
                      {[
                        "Menciptakan mochi dengan bahan-bahan berkualitas tinggi dan resep unik",
                        "Memberikan pengalaman kuliner yang memuaskan dan memorable",
                        "Mengembangkan produk ramah lingkungan dengan kemasan sustainable",
                        "Mendukung UMKM lokal melalui kerjasama bahan baku"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-1 sm:gap-2 md:gap-3">
                          <span className="text-[#FF85A2] mt-0.5 sm:mt-1 text-sm sm:text-base md:text-lg">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full mt-6 sm:mt-8 lg:mt-0">
          <div className="card card-compact bg-base-100 shadow-xl overflow-hidden group">
            <figure className="relative overflow-hidden aspect-[4/3] sm:aspect-[3/4] lg:aspect-[4/3]">
              <img
                src="/premmochi.png"
                alt="MoChewy Mochi"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6B4F3A]/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-3 sm:p-4 md:p-6 text-white">
                <div className="flex items-center gap-1 sm:gap-2">
                  <FaHandshake className="text-base sm:text-lg md:text-xl" />
                  <p className="text-xs sm:text-sm md:text-base font-semibold">Beroperasi sejak 2018</p>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

function CompanyProfileSection() {
  const [expanded, setExpanded] = useState(false);

  const profileItems = [
    {
      icon: <FiClock className="text-xl sm:text-2xl" />,
      bg: "bg-gradient-to-br from-[#FF85A2] to-[#FF6B8B]",
      title: "Tahun Berdiri",
      value: "2018",
    },
    {
      icon: <FiMapPin className="text-xl sm:text-2xl" />,
      bg: "bg-gradient-to-br from-[#A78BFA] to-[#8C6BFA]",
      title: "Lokasi",
      value: "Palembang",
    },
    {
      icon: <FiAward className="text-xl sm:text-2xl" />,
      bg: "bg-gradient-to-br from-[#FF85A2] to-[#FF6B8B]",
      title: "Layanan",
      value: "Mochi Premium & Custom Order",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#F3EFFA] to-[#E8E1F4] px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6B4F3A] mb-6 sm:mb-8 md:mb-12 text-center relative">
          <span className="relative z-10 inline-block">
            Profil <span className="text-[#A78BFA]">MoChewy</span>
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-12">
          {profileItems.map((item, index) => (
            <div
              key={index}
              className="card bg-[#FFF9F5] shadow-md hover:shadow-xl transition-all hover:-translate-y-1 sm:hover:-translate-y-2 group p-3 sm:p-4"
            >
              <div className="card-body items-center text-center">
                <div
                  className={`p-3 sm:p-4 ${item.bg} rounded-full mb-2 sm:mb-4 shadow-lg group-hover:rotate-[360deg] transition-transform duration-500`}
                >
                  {item.icon}
                </div>
                <h3 className="card-title text-[#6B4F3A] text-sm sm:text-base md:text-lg">
                  {item.title}
                </h3>
                <p className="text-[#5F5F5F] text-base sm:text-lg font-medium">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="card bg-[#FFF9F5] shadow-md hover:shadow-lg transition-shadow">
          <div className="card-body p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-bold text-[#6B4F3A] mb-3 sm:mb-4">
              Sejarah Singkat
            </h3>
            <div className="space-y-3 sm:space-y-4 text-[#5F5F5F] text-sm sm:text-base">
              <p className={expanded ? "" : "line-clamp-3"}>
                MoChewy berdiri pada tahun 2018, lahir dari kecintaan dua
                sahabat terhadap kuliner, khususnya camilan mochi khas Asia.
                Terinspirasi oleh kenangan masa kecil, mereka ingin menghadirkan
                mochi dengan rasa modern tanpa kehilangan keaslian teksturnya
                yang kenyal dan lembut. Dimulai dari dapur rumah dan dipasarkan
                melalui media sosial, MoChewy mendapat sambutan hangat berkat
                kualitas rasa dan inovasi isiannya. Kini, MoChewy memiliki satu
                outlet fisik dan melayani pemesanan online ke berbagai daerah di
                Indonesia. Nama "MoChewy" mencerminkan ciri khas produk kami:
                mochi yang chewy dengan pilihan rasa mulai dari kacang merah
                hingga matcha latte dan tiramisu. Meski sempat menghadapi
                berbagai tantangan, MoChewy terus berkembang berkat dedikasi dan
                dukungan pelanggan. Kami berkomitmen untuk menjaga kualitas dan
                menjadi pelopor camilan mochi modern di Indonesia.
              </p>

              <button
                onClick={() => setExpanded(!expanded)}
                className="btn btn-ghost text-[#A78BFA] font-semibold flex items-center gap-1 text-xs sm:text-sm"
              >
                {expanded ? (
                  <>
                    <span>Tampilkan lebih sedikit</span>
                    <FiChevronUp />
                  </>
                ) : (
                  <>
                    <span>Baca selengkapnya</span>
                    <FiChevronDown />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreValuesSection() {
  const values = [
    {
      icon: <FiAward className="text-2xl sm:text-3xl" />,
      title: "Kualitas Premium",
      description: "Hanya menggunakan bahan terbaik tanpa kompromi",
    },
    {
      icon: <FaLeaf className="text-2xl sm:text-3xl" />,
      title: "Inovasi Rasa",
      description: "Terus bereksperimen dengan kombinasi rasa unik",
    },
    {
      icon: <FaHandshake className="text-2xl sm:text-3xl" />,
      title: "Kepuasan Pelanggan",
      description: "Prioritas utama kami adalah senyum pelanggan",
    },
    {
      icon: <GiEarthAsiaOceania className="text-2xl sm:text-3xl" />,
      title: "Ramah Lingkungan",
      description: "Berkomitmen pada kemasan eco-friendly",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-[#FFEDF1] to-[#FFD6E0]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6B4F3A] mb-6 sm:mb-8 md:mb-12 text-center relative">
          <span className="relative z-10 inline-block">
            Nilai-Nilai <span className="text-[#A78BFA]">Inti</span>
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="card bg-[#FFF9F5] shadow-md hover:shadow-xl transition-all hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer group p-3 sm:p-4"
            >
              <div className="card-body items-center text-center">
                <div className="p-3 sm:p-4 bg-gradient-to-br from-[#FF85A2] to-[#A78BFA] rounded-full mb-2 sm:mb-4 text-white shadow-lg group-hover:rotate-[360deg] transition-transform duration-500">
                  {value.icon}
                </div>
                <h3 className="card-title text-lg sm:text-xl text-[#6B4F3A] mb-1 sm:mb-2">
                  {value.title}
                </h3>
                <p className="text-[#5F5F5F] text-sm sm:text-base">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote:  "Mochi MoChewy adalah yang terbaik! Teksturnya benar-benar lembut dan kenyal dengan tingkat kekenyalan yang pas, tidak terlalu keras dan tidak terlalu lembek.",
      author: "Salsabila Mifta",
      rating: 5,
    },
    {
      quote:  "Saya sangat terkesan dengan pengalaman saya membeli dari MoChewy. Bukan hanya produknya yang enak, tapi juga pelayanannya luar biasa! Saya order lewat Instagram, adminnya cepat merespons dan sangat ramah menjawab semua pertanyaan saya.",
      author: "Malik Candra Kusuma",
      rating: 5,
    },
    {
      quote: "Saya penggemar berat mochi, dan selama ini sudah mencoba berbagai macam merek lokal maupun impor. Tapi MoChewy benar-benar punya tempat tersendiri di hati saya. Dari segi rasa, teksturnya kenyal lembut dan tidak membosankan.",
      author: "Senorapati Agung",
      rating: 4,
    },
  ];

  const awards = [
    "Best Dessert 2022 - Food Magazine",
    "Top Creative F&B Business 2021",
    "Consumer Choice Award 2023",
    "Green Packaging Initiative 2022",
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6B4F3A] mb-6 sm:mb-8 md:mb-12 text-center relative">
        <span className="relative z-10 inline-block">
          Testimoni & <span className="text-[#A78BFA]">Penghargaan</span>
        </span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#6B4F3A] mb-3 sm:mb-4 md:mb-6 flex items-center gap-2">
            <FaQuoteLeft className="text-[#A78BFA]" />
            Apa Kata Pelanggan
          </h3>

          <div className="relative h-48 sm:h-64 md:h-96 overflow-hidden rounded-xl">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`card bg-[#FFF9F5] shadow-md absolute inset-0 transition-opacity duration-500 p-4 sm:p-6 ${
                  activeTestimonial === index
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0"
                }`}
              >
                <div className="flex items-start gap-2 mb-2 sm:mb-4">
                  <div className="rating rating-xs sm:rating-sm">
                    {[...Array(5)].map((_, i) => (
                      <input
                        key={i}
                        type="radio"
                        className="mask mask-star-2 bg-[#FF85A2]"
                        checked={i < testimonial.rating}
                        readOnly
                      />
                    ))}
                  </div>
                </div>
                <p className="text-[#6B4F3A] italic mb-2 sm:mb-4 text-sm sm:text-base md:text-lg">
                  "{testimonial.quote}"
                </p>
                <div className="font-bold text-[#6B4F3A] text-right text-sm sm:text-base">
                  - {testimonial.author}
                </div>
              </div>
            ))}

            <div className="absolute bottom-3 sm:bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                    activeTestimonial === index
                      ? "bg-[#A78BFA]"
                      : "bg-[#E0D3F7]"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#6B4F3A] mb-3 sm:mb-4 md:mb-6 flex items-center gap-2">
            <FiAward className="text-[#FF85A2]" />
            Penghargaan Kami
          </h3>
          <div className="card bg-[#FFF9F5] shadow-md">
            <div className="card-body p-4 sm:p-6">
              <ul className="space-y-3 sm:space-y-4">
                {awards.map((award, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 sm:gap-4 hover:bg-[#F3EFFA] p-3 sm:p-4 rounded-lg transition-all hover:translate-x-1 sm:hover:translate-x-2"
                  >
                    <div className="p-2 sm:p-3 bg-gradient-to-br from-[#FF85A2] to-[#A78BFA] rounded-full shadow-md">
                      <FiAward className="text-white text-lg sm:text-xl" />
                    </div>
                    <span className="text-[#6B4F3A] font-medium text-sm sm:text-base">
                      {award}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const galleryItems = [
    {
      img: "/mochiprocess.png",
      title: "Proses Pembuatan",
    },
    {
      img: "/outlet.png",
      title: "Outlet Kami",
    },
    {
      img: "/social.png",
      title: "Kegiatan Sosial",
    },
    {
      img: "/pelatihan.png",
      title: "Pelatihan Tim",
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6B4F3A] mb-6 sm:mb-8 md:mb-12 text-center relative">
        <span className="relative z-10 inline-block">
          Galeri <span className="text-[#A78BFA]">MoChewy</span>
        </span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="card bg-[#FFF9F5] shadow-md image-full hover:shadow-xl cursor-pointer group overflow-hidden aspect-square"
            onClick={() => {
              setSelectedImage(item);
              setModalOpen(true);
            }}
          >
            <figure className="relative overflow-hidden w-full h-full">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </figure>
            <div className="card-body justify-end bg-gradient-to-t from-[#6B4F3A]/90 to-transparent">
              <h3 className="card-title text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] group-hover:translate-y-0 translate-y-4 transition-transform duration-300 text-sm sm:text-base">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-2 sm:p-4 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FFF9F5] rounded-xl overflow-hidden transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 sm:top-4 right-2 sm:right-4 z-50 bg-[#6B4F3A] text-white rounded-full p-1 sm:p-2 hover:bg-[#FF85A2] transition-colors"
              onClick={() => setModalOpen(false)}
            >
              &times;
            </button>
            <img
              src={selectedImage.img}
              alt={selectedImage.title}
              className="w-full max-h-[70vh] object-cover"
            />
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#6B4F3A]">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}