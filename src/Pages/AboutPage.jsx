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
      icon: <GiFruitBowl className="text-4xl" />,
      title: "Varian Rasa",
      value: "5+",
      desc: "Kreasi unik kami",
    },
    {
      icon: <GiLoveInjection className="text-4xl" />,
      title: "Pelanggan Setia",
      value: "500+",
      desc: "Setiap bulannya",
    },
    {
      icon: <GiChewedSkull className="text-4xl" />,
      title: "Tahun Beroperasi",
      value: "5+",
      desc: "Dedikasi kami",
    },
  ];

  return (
    <div
      className="hero h-[550px] relative"
      style={{
        backgroundImage: "url(/bg-mochi.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-overlay bg-stone-900/50"></div>

      <div className="hero-content text-center text-rose-100 relative z-10">
        <div className="max-w-4xl">
          <h1 className="mb-5 text-5xl font-bold tracking-tight text-pink-300 drop-shadow-md">
            Tentang <span className="text-pink-400">MoChewy</span>
          </h1>
          <p className="mb-8 text-xl font-medium text-pink-200 drop-shadow-sm">
            Perjalanan manis kami dalam menciptakan mochi lezat yang membuat
            hari-hari Anda lebih berwarna.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-md rounded-xl p-6 hover:bg-white/30 transition-all duration-300 hover:-translate-y-2 shadow-md"
              >
                <div className="text-pink-400 mb-2 animate-bounce">
                  {stat.icon}
                </div>
                <div className="text-lg font-semibold text-white">
                  {stat.title}
                </div>
                <div className="text-3xl font-bold text-pink-300">
                  {stat.value}
                </div>
                <div className="text-sm text-pink-100 mt-1">{stat.desc}</div>
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
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-[#6B4F3A] mb-8 relative">
            <span className="relative z-10">
              Visi & Misi <span className="text-[#A78BFA]">MoChewy</span>
            </span>
            <span className="absolute -bottom-2 left-0 w-32 h-2 bg-[#FF85A2]/50 z-0"></span>
          </h2>

          <div className="space-y-8">
            {/* Vision Card */}
            <div className="card bg-gradient-to-br from-[#FFEDF1] to-[#FFEDF1]/70 border-l-4 border-[#FF85A2] shadow-md hover:shadow-lg transition-shadow">
              <div className="card-body">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FF85A2] text-white rounded-full">
                    <FiStar className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#6B4F3A] mb-3">
                      Visi Kami
                    </h3>
                    <p className="text-[#5A3E28]">
                      Menjadi merek mochi terdepan yang dikenal dengan inovasi
                      rasa dan kualitas premium, menyebarkan kebahagiaan melalui
                      setiap gigitan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="card bg-gradient-to-br from-[#E8E1F4] to-[#E8E1F4]/70 border-l-4 border-[#A78BFA] shadow-md hover:shadow-lg transition-shadow">
              <div className="card-body">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#A78BFA] text-white rounded-full">
                    <FiAward className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#6B4F3A] mb-3">
                      Misi Kami
                    </h3>
                    <ul className="space-y-3 text-[#5A3E28]">
                      <li className="flex items-start gap-3">
                        <span className="text-[#FF85A2] mt-1 text-lg">•</span>
                        <span>
                          Menciptakan mochi dengan bahan-bahan berkualitas
                          tinggi dan resep unik
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#FF85A2] mt-1 text-lg">•</span>
                        <span>
                          Memberikan pengalaman kuliner yang memuaskan dan
                          memorable
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#FF85A2] mt-1 text-lg">•</span>
                        <span>
                          Mengembangkan produk ramah lingkungan dengan kemasan
                          sustainable
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#FF85A2] mt-1 text-lg">•</span>
                        <span>
                          Mendukung UMKM lokal melalui kerjasama bahan baku
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="card card-compact bg-base-100 shadow-xl overflow-hidden group">
            <figure className="relative overflow-hidden">
              <img
                src="/premmochi.png"
                alt="MoChewy Mochi"
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6B4F3A]/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <div className="flex items-center gap-2">
                  <FaHandshake className="text-xl" />
                  <p className="font-semibold">Beroperasi sejak 2018</p>
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
      icon: <FiClock className="text-white text-2xl" />,
      bg: "bg-gradient-to-br from-[#FF85A2] to-[#FF6B8B]",
      title: "Tahun Berdiri",
      value: "2018",
    },
    {
      icon: <FiMapPin className="text-white text-2xl" />,
      bg: "bg-gradient-to-br from-[#A78BFA] to-[#8C6BFA]",
      title: "Lokasi",
      value: "Palembang",
    },
    {
      icon: <FiAward className="text-white text-2xl" />,
      bg: "bg-gradient-to-br from-[#FF85A2] to-[#FF6B8B]",
      title: "Layanan",
      value: "Mochi Premium & Custom Order",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#F3EFFA] to-[#E8E1F4]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#6B4F3A] mb-12 text-center relative">
          <span className="relative z-10 inline-block">
            Profil <span className="text-[#A78BFA]">MoChewy</span>
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {profileItems.map((item, index) => (
            <div
              key={index}
              className="card bg-[#FFF9F5] shadow-md hover:shadow-xl transition-all hover:-translate-y-2 group"
            >
              <div className="card-body items-center text-center">
                <div
                  className={`p-4 ${item.bg} rounded-full mb-4 shadow-lg group-hover:rotate-[360deg] transition-transform duration-500`}
                >
                  {item.icon}
                </div>
                <h3 className="card-title text-[#6B4F3A]">{item.title}</h3>
                <p className="text-[#5F5F5F] text-lg font-medium">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="card bg-[#FFF9F5] shadow-md hover:shadow-lg transition-shadow">
          <div className="card-body">
            <h3 className="text-2xl font-bold text-[#6B4F3A] mb-4">
              Sejarah Singkat
            </h3>
            <div className="space-y-4 text-[#5F5F5F]">
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
                className="btn btn-ghost text-[#A78BFA] font-semibold flex items-center gap-1"
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
      icon: <FiAward className="text-3xl" />,
      title: "Kualitas Premium",
      description: "Hanya menggunakan bahan terbaik tanpa kompromi",
    },
    {
      icon: <FaLeaf className="text-3xl" />,
      title: "Inovasi Rasa",
      description: "Terus bereksperimen dengan kombinasi rasa unik",
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: "Kepuasan Pelanggan",
      description: "Prioritas utama kami adalah senyum pelanggan",
    },
    {
      icon: <GiEarthAsiaOceania className="text-3xl" />,
      title: "Ramah Lingkungan",
      description: "Berkomitmen pada kemasan eco-friendly",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#FFEDF1] to-[#FFD6E0]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#6B4F3A] mb-12 text-center relative">
          <span className="relative z-10 inline-block">
            Nilai-Nilai <span className="text-[#A78BFA]">Inti</span>
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="card bg-[#FFF9F5] shadow-md hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer group"
            >
              <div className="card-body items-center text-center">
                <div className="p-4 bg-gradient-to-br from-[#FF85A2] to-[#A78BFA] rounded-full mb-4 text-white shadow-lg group-hover:rotate-[360deg] transition-transform duration-500">
                  {value.icon}
                </div>
                <h3 className="card-title text-xl text-[#6B4F3A] mb-2">
                  {value.title}
                </h3>
                <p className="text-[#5F5F5F]">{value.description}</p>
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
      quote:
        "Mochi MoChewy adalah yang terbaik! Teksturnya benar-benar lembut dan kenyal dengan tingkat kekenyalan yang pas, tidak terlalu keras dan tidak terlalu lembek. Setiap gigitannya terasa memanjakan lidah, terutama dengan isian matcha red bean favorit saya yang autentik dan tidak terlalu manis. Rasanya sangat seimbang dan tidak bikin enek. Saya sudah berulang kali order dan kualitasnya selalu konsisten. Sangat jarang saya bisa menemukan mochi seenak ini di Indonesia!",
      author: "Salsabila Mifta",
      rating: 5,
    },
    {
      quote:
        "Saya sangat terkesan dengan pengalaman saya membeli dari MoChewy. Bukan hanya produknya yang enak, tapi juga pelayanannya luar biasa! Saya order lewat Instagram, adminnya cepat merespons dan sangat ramah menjawab semua pertanyaan saya. Proses pengirimannya pun cepat, dan yang paling menyenangkan adalah packagingnya yang super cute, rapi, dan aman sampai di tangan saya tanpa cacat. Teman-teman saya juga sampai penasaran karena tampilannya yang menggemaskan!",
      author: "Malik Candra Kusuma",
      rating: 5,
    },
    {
      quote:
        "Saya penggemar berat mochi, dan selama ini sudah mencoba berbagai macam merek lokal maupun impor. Tapi MoChewy benar-benar punya tempat tersendiri di hati saya. Dari segi rasa, teksturnya kenyal lembut dan tidak membosankan. Ukurannya pas, dan varian rasanya juga menarik serta tidak pasaran. Saya paling suka manggo. Selain itu, saya juga apresiasi karena MoChewy menjaga kualitas dengan sangat baik – setiap pesanan yang datang selalu fresh dan tidak pernah gagal memuaskan.",
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
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-[#6B4F3A] mb-12 text-center relative">
        <span className="relative z-10 inline-block">
          Testimoni & <span className="text-[#A78BFA]">Penghargaan</span>
        </span>
      </h2>

      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-[#6B4F3A] mb-6 flex items-center gap-2">
            <FaQuoteLeft className="text-[#A78BFA]" />
            Apa Kata Pelanggan
          </h3>

          <div className="relative h-96 overflow-hidden rounded-xl">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`card bg-[#FFF9F5] shadow-md absolute inset-0 transition-opacity duration-500 p-6 ${
                  activeTestimonial === index
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0"
                }`}
              >
                <div className="flex items-start gap-2 mb-4">
                  <div className="rating rating-sm">
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
                <p className="text-[#6B4F3A] italic mb-4 text-lg">
                  "{testimonial.quote}"
                </p>
                <div className="font-bold text-[#6B4F3A] text-right">
                  - {testimonial.author}
                </div>
              </div>
            ))}

            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
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
          <h3 className="text-2xl font-bold text-[#6B4F3A] mb-6 flex items-center gap-2">
            <FiAward className="text-[#FF85A2]" />
            Penghargaan Kami
          </h3>
          <div className="card bg-[#FFF9F5] shadow-md">
            <div className="card-body">
              <ul className="space-y-4">
                {awards.map((award, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 hover:bg-[#F3EFFA] p-4 rounded-lg transition-all hover:translate-x-2"
                  >
                    <div className="p-3 bg-gradient-to-br from-[#FF85A2] to-[#A78BFA] rounded-full shadow-md">
                      <FiAward className="text-white text-xl" />
                    </div>
                    <span className="text-[#6B4F3A] font-medium">{award}</span>
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
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-[#6B4F3A] mb-12 text-center relative">
        <span className="relative z-10 inline-block">
          Galeri <span className="text-[#A78BFA]">MoChewy</span>
        </span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="card bg-[#FFF9F5] shadow-md image-full hover:shadow-xl cursor-pointer group overflow-hidden"
            onClick={() => {
              setSelectedImage(item);
              setModalOpen(true);
            }}
          >
            <figure className="relative overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </figure>
            <div className="card-body justify-end bg-gradient-to-t from-[#6B4F3A]/90 to-transparent">
              <h3 className="card-title text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] group-hover:translate-y-0 translate-y-4 transition-transform duration-300">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FFF9F5] rounded-xl overflow-hidden transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-50 bg-[#6B4F3A] text-white rounded-full p-2 hover:bg-[#FF85A2] transition-colors"
              onClick={() => setModalOpen(false)}
            >
              &times;
            </button>
            <img
              src={selectedImage.img}
              alt={selectedImage.title}
              className="w-full max-h-[70vh] object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#6B4F3A]">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
