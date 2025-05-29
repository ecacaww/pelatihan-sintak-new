import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { FiClock, FiMapPin, FiAward, FiUsers, FiHeart, FiStar, FiChevronRight, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaLeaf, FaHandshake, FaQuoteLeft } from "react-icons/fa";
import { GiChewedSkull, GiFruitBowl, GiLoveInjection, GiEarthAsiaOceania } from "react-icons/gi";

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
      value: "15+",
      desc: "Kreasi unik kami"
    },
    {
      icon: <GiLoveInjection className="text-4xl" />,
      title: "Pelanggan Setia",
      value: "5000+",
      desc: "Setiap bulannya"
    },
    {
      icon: <GiChewedSkull className="text-4xl" />,
      title: "Tahun Beroperasi",
      value: "5+",
      desc: "Dedikasi kami"
    }
  ];

  return (
    <div className="hero min-h-[70vh] bg-gradient-to-br from-[#FFD6E0] via-[#E2C4F0] to-[#C3B1E1] text-[#4A2C12] relative overflow-hidden">
      {/* Floating mochi elements */}
      <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-[#FF85A2]/30 animate-float"></div>
      <div className="absolute bottom-1/4 right-20 w-20 h-20 rounded-full bg-[#A78BFA]/30 animate-float-delay"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-[#FFD166]/30 animate-float-delay-2"></div>
      
      <div className="hero-content text-center relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Tentang <span className="text-[#A78BFA]">MoChewy</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed animate-fade-in-delay">
            Perjalanan manis kami dalam menciptakan mochi lezat yang membuat hari-hari Anda lebih berwarna.
          </p>
          
          <div className="stats bg-white/70 shadow-lg backdrop-blur-sm border-0 animate-fade-in-delay-2">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="stat hover:bg-white/90 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="stat-figure text-[#FF85A2] animate-bounce">
                  {stat.icon}
                </div>
                <div className="stat-title text-[#4A2C12] font-medium">{stat.title}</div>
                <div className="stat-value text-[#6B4F3A]">{stat.value}</div>
                <div className="stat-desc text-[#5F5F5F]">{stat.desc}</div>
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
                    <h3 className="text-2xl font-bold text-[#6B4F3A] mb-3">Visi Kami</h3>
                    <p className="text-[#5A3E28]">
                      Menjadi merek mochi terdepan yang dikenal dengan inovasi rasa dan kualitas premium, menyebarkan kebahagiaan melalui setiap gigitan.
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
                    <h3 className="text-2xl font-bold text-[#6B4F3A] mb-3">Misi Kami</h3>
                    <ul className="space-y-3 text-[#5A3E28]">
                      <li className="flex items-start gap-3">
                        <span className="text-[#FF85A2] mt-1 text-lg">•</span>
                        <span>Menciptakan mochi dengan bahan-bahan berkualitas tinggi dan resep unik</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#FF85A2] mt-1 text-lg">•</span>
                        <span>Memberikan pengalaman kuliner yang memuaskan dan memorable</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#FF85A2] mt-1 text-lg">•</span>
                        <span>Mengembangkan produk ramah lingkungan dengan kemasan sustainable</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#FF85A2] mt-1 text-lg">•</span>
                        <span>Mendukung UMKM lokal melalui kerjasama bahan baku</span>
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
                src="https://images.unsplash.com/photo-1608500218807-1db0e3d9023a"
                alt="MoChewy Mochi"
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6B4F3A]/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Kenali Lebih Dekat</h3>
                <p className="mb-4">Proses pembuatan mochi premium kami</p>
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
      value: "2018"
    },
    {
      icon: <FiMapPin className="text-white text-2xl" />,
      bg: "bg-gradient-to-br from-[#A78BFA] to-[#8C6BFA]",
      title: "Lokasi",
      value: "Palembang dan Jakarta"
    },
    {
      icon: <FiAward className="text-white text-2xl" />,
      bg: "bg-gradient-to-br from-[#FF85A2] to-[#FF6B8B]",
      title: "Layanan",
      value: "Mochi Premium & Custom Order"
    }
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
                <div className={`p-4 ${item.bg} rounded-full mb-4 shadow-lg group-hover:rotate-[360deg] transition-transform duration-500`}>
                  {item.icon}
                </div>
                <h3 className="card-title text-[#6B4F3A]">{item.title}</h3>
                <p className="text-[#5F5F5F] text-lg font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="card bg-[#FFF9F5] shadow-md hover:shadow-lg transition-shadow">
          <div className="card-body">
            <h3 className="text-2xl font-bold text-[#6B4F3A] mb-4">Sejarah Singkat</h3>
            <div className="space-y-4 text-[#5F5F5F]">
              <p className={expanded ? "" : "line-clamp-3"}>
                MoChewy didirikan pada tahun 2018 oleh dua sahabat yang memiliki kecintaan mendalam terhadap dunia kuliner, khususnya camilan tradisional khas Asia. Terinspirasi oleh kenangan masa kecil dan semangat untuk memperkenalkan kembali mochi kepada generasi muda, keduanya bertekad menciptakan produk yang tidak hanya lezat tetapi juga unik dan inovatif. Visi mereka adalah menghadirkan mochi dengan sentuhan rasa modern tanpa menghilangkan identitas dan tekstur klasik yang membuat mochi begitu istimewa.

                Perjalanan MoChewy dimulai dari dapur sederhana di rumah, dengan sistem pemesanan yang sepenuhnya dilakukan melalui media sosial. Di tahap awal, hampir seluruh proses produksi dan pengemasan dilakukan secara manual, dengan bantuan keluarga dan teman dekat. Namun berkat respons positif dari para pelanggan dan kekuatan dari promosi mulut ke mulut, permintaan mulai meningkat pesat hanya dalam beberapa bulan. Dengan semangat kewirausahaan yang tinggi dan komitmen pada kualitas, MoChewy perlahan tumbuh dari usaha rumahan menjadi bisnis yang profesional.

                Hingga saat ini, MoChewy telah memiliki tiga outlet fisik yang tersebar di kota-kota besar, serta sistem distribusi yang mampu melayani pengiriman ke berbagai daerah di Indonesia. Kami juga aktif mengikuti berbagai bazar kuliner, event lokal, hingga pameran makanan berskala nasional untuk memperkenalkan produk kami kepada masyarakat yang lebih luas.

                Nama "MoChewy" sendiri diambil dari dua kata kunci yang mencerminkan karakter utama produk kami: "mochi" dan "chewy". Kami ingin setiap pelanggan merasakan tekstur kenyal sempurna dari mochi buatan kami—lembut di luar, kaya rasa di dalam, dengan berbagai pilihan isian kreatif yang menggoda. Dari rasa klasik seperti kacang merah dan wijen hitam, hingga rasa modern seperti matcha latte, cokelat keju, dan tiramisu, kami terus bereksperimen untuk memberikan pengalaman yang tak terlupakan.

                Tentu saja, perjalanan kami tidak selalu mudah. Kami menghadapi berbagai tantangan mulai dari keterbatasan produksi, persaingan pasar, hingga adaptasi selama masa pandemi. Namun, dengan dedikasi, semangat pantang menyerah, dan dukungan dari pelanggan setia, kami terus bertahan dan berkembang. Setiap mochi yang kami buat bukan hanya produk makanan, tetapi juga cerminan dari kerja keras, nilai-nilai lokal, dan inovasi yang terus hidup.

                Ke depan, MoChewy berkomitmen untuk terus menghadirkan produk berkualitas tinggi, memperluas jangkauan pasar, serta menjadi pelopor dalam industri camilan mochi di Indonesia. Kami percaya bahwa dengan menjaga kualitas, rasa, dan hubungan yang hangat dengan pelanggan, MoChewy akan terus menjadi pilihan utama pecinta mochi di seluruh nusantara.
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
      description: "Hanya menggunakan bahan terbaik tanpa kompromi"
    },
    {
      icon: <FaLeaf className="text-3xl" />,
      title: "Inovasi Rasa",
      description: "Terus bereksperimen dengan kombinasi rasa unik"
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: "Kepuasan Pelanggan",
      description: "Prioritas utama kami adalah senyum pelanggan"
    },
    {
      icon: <GiEarthAsiaOceania className="text-3xl" />,
      title: "Ramah Lingkungan",
      description: "Berkomitmen pada kemasan eco-friendly"
    }
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
                <h3 className="card-title text-xl text-[#6B4F3A] mb-2">{value.title}</h3>
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
      quote: "Mochi MoChewy adalah yang terbaik! Teksturnya benar-benar lembut dan kenyal dengan tingkat kekenyalan yang pas, tidak terlalu keras dan tidak terlalu lembek. Setiap gigitannya terasa memanjakan lidah, terutama dengan isian matcha red bean favorit saya yang autentik dan tidak terlalu manis. Rasanya sangat seimbang dan tidak bikin enek. Saya sudah berulang kali order dan kualitasnya selalu konsisten. Sangat jarang saya bisa menemukan mochi seenak ini di Indonesia!",
      author: "Salsabila Mifta",
      rating: 5
    },
    {
      quote: "Saya sangat terkesan dengan pengalaman saya membeli dari MoChewy. Bukan hanya produknya yang enak, tapi juga pelayanannya luar biasa! Saya order lewat Instagram, adminnya cepat merespons dan sangat ramah menjawab semua pertanyaan saya. Proses pengirimannya pun cepat, dan yang paling menyenangkan adalah packagingnya yang super cute, rapi, dan aman sampai di tangan saya tanpa cacat. Teman-teman saya juga sampai penasaran karena tampilannya yang menggemaskan!",
      author: "Malik Candra Kusuma",
      rating: 5
    },
    {
      quote: "Saya penggemar berat mochi, dan selama ini sudah mencoba berbagai macam merek lokal maupun impor. Tapi MoChewy benar-benar punya tempat tersendiri di hati saya. Dari segi rasa, teksturnya kenyal lembut dan tidak membosankan. Ukurannya pas, dan varian rasanya juga menarik serta tidak pasaran. Saya paling suka rasa tiramisu dan black sesame. Selain itu, saya juga apresiasi karena MoChewy menjaga kualitas dengan sangat baik – setiap pesanan yang datang selalu fresh dan tidak pernah gagal memuaskan.",
      author: "Senorapati Agung",
      rating: 4
    }
  ];
  
  const awards = [
    "Best Dessert 2022 - Food Magazine",
    "Top Creative F&B Business 2021",
    "Consumer Choice Award 2023",
    "Green Packaging Initiative 2022"
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
                className={`card bg-[#FFF9F5] shadow-md absolute inset-0 transition-opacity duration-500 p-6 ${activeTestimonial === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
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
                <p className="text-[#6B4F3A] italic mb-4 text-lg">"{testimonial.quote}"</p>
                <div className="font-bold text-[#6B4F3A] text-right">- {testimonial.author}</div>
              </div>
            ))}
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${activeTestimonial === index ? 'bg-[#A78BFA]' : 'bg-[#E0D3F7]'}`}
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
      img: "https://images.unsplash.com/photo-1608500218730-8e055a54dbae",
      title: "Proses Pembuatan"
    },
    {
      img: "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8",
      title: "Outlet Kami"
    },
    {
      img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
      title: "Kegiatan Sosial"
    },
    {
      img: "https://images.unsplash.com/photo-1562440499-64c9a111f713",
      title: "Pelatihan Tim"
    }
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
              <h3 className="text-2xl font-bold text-[#6B4F3A]">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}