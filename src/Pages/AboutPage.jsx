import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { FiClock, FiMapPin, FiAward, FiUsers, FiHeart, FiStar } from "react-icons/fi";
import { FaLeaf, FaHandshake } from "react-icons/fa";

function AboutPage() {
  return (
    <div className="bg-pink-50">
      <NavBar />
      <HeroSection />
      <VisionMissionSection />
      <CompanyProfileSection />
      <CoreValuesSection />
      <TestimonialsSection />
      <TeamSection />
      <GallerySection />
      <Footer />
    </div>
  );
}

export default AboutPage;

function HeroSection() {
  return (
    <div className="hero min-h-[60vh] bg-gradient-to-r from-pink-500 to-purple-600 text-white">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-6">Tentang MoChewy</h1>
          <p className="text-xl mb-8">
            Perjalanan manis kami dalam menciptakan mochi lezat yang membuat hari-hari Anda lebih berwarna.
          </p>
          <div className="stats bg-white/20 shadow">
            <div className="stat">
              <div className="stat-figure text-pink-200">
                <FiStar className="text-3xl" />
              </div>
              <div className="stat-title text-pink-100">Varian Rasa</div>
              <div className="stat-value text-white">15+</div>
              <div className="stat-desc">Kreasi unik kami</div>
            </div>
            <div className="stat">
              <div className="stat-figure text-pink-200">
                <FiUsers className="text-3xl" />
              </div>
              <div className="stat-title text-pink-100">Pelanggan Setia</div>
              <div className="stat-value text-white">5000+</div>
              <div className="stat-desc">Setiap bulannya</div>
            </div>
            <div className="stat">
              <div className="stat-figure text-pink-200">
                <FiHeart className="text-3xl" />
              </div>
              <div className="stat-title text-pink-100">Tahun Beroperasi</div>
              <div className="stat-value text-white">5+</div>
              <div className="stat-desc">Dedikasi kami</div>
            </div>
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
          <h2 className="text-4xl font-bold text-purple-800 mb-8">Visi & Misi MoChewy</h2>
          
          <div className="card bg-pink-50 border-l-4 border-pink-500 mb-6">
            <div className="card-body">
              <h3 className="text-2xl font-bold text-pink-700 mb-3">Visi</h3>
              <p className="text-purple-900">
                Menjadi merek mochi terdepan yang dikenal dengan inovasi rasa dan kualitas premium, menyebarkan kebahagiaan melalui setiap gigitan.
              </p>
            </div>
          </div>
          
          <div className="card bg-purple-50 border-l-4 border-purple-500">
            <div className="card-body">
              <h3 className="text-2xl font-bold text-purple-700 mb-3">Misi</h3>
              <ul className="space-y-3 text-purple-900">
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  <span>Menciptakan mochi dengan bahan-bahan berkualitas tinggi dan resep unik</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  <span>Memberikan pengalaman kuliner yang memuaskan dan memorable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  <span>Mengembangkan produk ramah lingkungan dengan kemasan sustainable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  <span>Mendukung UMKM lokal melalui kerjasama bahan baku</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1608500218807-1db0e3d9023a"
                alt="MoChewy Mochi"
                className="w-full h-96 object-cover"
              />
            </figure>
            <div className="card-body bg-pink-100">
              <div className="flex items-center gap-2 text-pink-700">
                <FaHandshake className="text-xl" />
                <p className="font-semibold">Beroperasi sejak 2018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CompanyProfileSection() {
  return (
    <section className="py-20 bg-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-purple-800 mb-12 text-center">Profil MoChewy</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="card bg-white shadow-md">
            <div className="card-body items-center text-center">
              <div className="p-3 bg-pink-100 rounded-full mb-4">
                <FiClock className="text-pink-600 text-2xl" />
              </div>
              <h3 className="card-title text-purple-800">Tahun Berdiri</h3>
              <p className="text-purple-600">2018</p>
            </div>
          </div>
          
          <div className="card bg-white shadow-md">
            <div className="card-body items-center text-center">
              <div className="p-3 bg-pink-100 rounded-full mb-4">
                <FiMapPin className="text-pink-600 text-2xl" />
              </div>
              <h3 className="card-title text-purple-800">Lokasi</h3>
              <p className="text-purple-600">Jakarta & Bandung</p>
            </div>
          </div>
          
          <div className="card bg-white shadow-md">
            <div className="card-body items-center text-center">
              <div className="p-3 bg-pink-100 rounded-full mb-4">
                <FiAward className="text-pink-600 text-2xl" />
              </div>
              <h3 className="card-title text-purple-800">Layanan</h3>
              <p className="text-purple-600">Mochi Premium & Custom Order</p>
            </div>
          </div>
        </div>
        
        <div className="card bg-white shadow-md">
          <div className="card-body">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">Sejarah Singkat</h3>
            <div className="space-y-4 text-purple-700">
              <p>
                MoChewy didirikan pada tahun 2018 oleh dua sahabat pecinta kuliner yang ingin menghadirkan mochi dengan cita rasa modern namun tetap mempertahankan keaslian tekstur tradisional.
              </p>
              <p>
                Berawal dari dapur rumahan dengan pesanan via media sosial, kini MoChewy telah memiliki 3 outlet fisik dan melayani pesanan dari seluruh Indonesia.
              </p>
              <p>
                Nama "MoChewy" dipilih karena menggambarkan tekstur khas mochi kami yang kenyal sempurna (chewy) dengan berbagai isian kreatif yang selalu membuat pelanggan ingin kembali.
              </p>
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
      icon: <FiHeart className="text-3xl" />,
      title: "Ramah Lingkungan",
      description: "Berkomitmen pada kemasan eco-friendly"
    }
  ];
  
  return (
    <section className="py-20 px-4 bg-pink-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-purple-800 mb-12 text-center">Nilai-Nilai Inti</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="card bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="card-body items-center text-center">
                <div className="p-4 bg-pink-100 rounded-full mb-4 text-pink-600">
                  {value.icon}
                </div>
                <h3 className="card-title text-xl text-purple-800 mb-2">{value.title}</h3>
                <p className="text-purple-600">{value.description}</p>
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
      quote: "Mochi MoChewy adalah yang terbaik! Teksturnya sempurna dan isiannya selalu fresh. Fav saya rasa matcha red bean!",
      author: "Dian Sastro",
      rating: 5
    },
    {
      quote: "Pelayanannya cepat dan ramah. Packagingnya juga sangat cute dan rapi. Recomended banget!",
      author: "Raffi Ahmad",
      rating: 5
    },
    {
      quote: "Sudah mencoba berbagai merek mochi, tapi MoChewy benar-benar berbeda. Rasa dan teksturnya konsisten enak!",
      author: "Chelsea Islan",
      rating: 4
    }
  ];
  
  const awards = [
    "Best Dessert 2022 - Food Magazine",
    "Top Creative F&B Business 2021",
    "Consumer Choice Award 2023",
    "Green Packaging Initiative 2022"
  ];
  
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-purple-800 mb-12 text-center">Testimoni & Penghargaan</h2>
      
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-purple-800 mb-6">Apa Kata Pelanggan</h3>
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card bg-white shadow-md">
                <div className="card-body">
                  <div className="flex items-start gap-2 mb-4">
                    <div className="rating rating-sm">
                      {[...Array(5)].map((_, i) => (
                        <input 
                          key={i} 
                          type="radio" 
                          className="mask mask-star-2 bg-pink-500" 
                          checked={i < testimonial.rating}
                          readOnly
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-purple-700 italic mb-4">"{testimonial.quote}"</p>
                  <div className="font-bold text-purple-800">{testimonial.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-purple-800 mb-6">Penghargaan Kami</h3>
          <div className="card bg-white shadow-md">
            <div className="card-body">
              <ul className="space-y-4">
                {awards.map((award, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="p-2 bg-pink-100 rounded-full">
                      <FiAward className="text-pink-600 text-xl" />
                    </div>
                    <span className="text-purple-700">{award}</span>
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

function TeamSection() {
  const teamMembers = [
    {
      name: "Rina Wijaya",
      position: "Founder & Head Chef",
      bio: "Pecinta dessert dengan pengalaman 10 tahun di bidang pastry. Spesialis mochi dengan sentuhan kreatif.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
    },
    {
      name: "Budi Santoso",
      position: "Co-Founder & CEO",
      bio: "Ahli bisnis F&B yang membawa MoChewy dari dapur rumahan menjadi merek ternama.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
    },
    {
      name: "Siti Aisyah",
      position: "Product Development",
      bio: "Bertanggung jawab menciptakan varian rasa baru yang selalu dinanti pelanggan.",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
    },
    {
      name: "Andi Pratama",
      position: "Marketing Director",
      bio: "Master di balik strategi pemasaran kreatif MoChewy di media sosial.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    }
  ];
  
  return (
    <section className="py-20 bg-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-purple-800 mb-12 text-center">Tim Kami</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="card bg-white shadow-lg">
              <figure className="px-6 pt-6">
                <div className="avatar">
                  <div className="w-full rounded-xl">
                    <img 
                      src={member.img} 
                      alt={member.name}
                      className="h-64 w-full object-cover"
                    />
                  </div>
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-purple-800">{member.name}</h3>
                <p className="text-pink-600 font-medium">{member.position}</p>
                <p className="text-purple-600 mt-2">{member.bio}</p>
              </div>
            </div>
          ))}
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
  
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-purple-800 mb-12 text-center">Galeri MoChewy</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryItems.map((item, index) => (
          <div key={index} className="card bg-white shadow-md image-full">
            <figure>
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body justify-end">
              <h3 className="card-title text-white">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}