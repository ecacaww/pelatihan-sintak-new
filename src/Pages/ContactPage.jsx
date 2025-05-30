import NavBar from "./NavBar";
import Footer from "./Footer";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiMessageSquare,
  FiChevronUp,
  FiChevronDown,
} from "react-icons/fi";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaQuoteLeft,
} from "react-icons/fa";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { Link } from "react-router-dom";

function ContactPage() {
  return (
    <div className="bg-[#FFF9F5]">
      <NavBar />
      <ContactHero />
      <ContactFormSection />
      <ContactInfoSection />
      <ContactFaqSection />
      <Footer />
    </div>
  );
}

export default ContactPage;

function ContactHero() {
  const stats = [
    {
      icon: <FiPhone className="text-2xl sm:text-3xl md:text-4xl" />,
      title: "Respon Cepat",
      value: "24 Jam",
      desc: "Layanan pelanggan",
    },
    {
      icon: <FiMessageSquare className="text-2xl sm:text-3xl md:text-4xl" />,
      title: "Pesan Terkirim",
      value: "1000+",
      desc: "Dari pelanggan setia",
    },
    {
      icon: <GiEarthAsiaOceania className="text-2xl sm:text-3xl md:text-4xl" />,
      title: "Jangkauan",
      value: "Nasional",
      desc: "Pengiriman ke seluruh Indonesia",
    },
  ];

  return (
    <div className="relative w-full ">
      <div
        className="absolute inset-0 z-0 bg-stone-900/50"
        style={{
          backgroundImage: "url(/bg-mochi.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/40 to-stone-900/20"></div>
      </div>

      <div className="relative z-10 min-h-[350px] sm:min-h-[400px] md:min-h-[550px] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl text-center px-2 sm:px-4">
          <h1 className="mb-3 sm:mb-5 text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-pink-300 drop-shadow-md">
            Hubungi <span className="text-pink-400">MoChewy</span>
          </h1>
          <p className="mb-4 sm:mb-8 text-sm sm:text-base md:text-xl font-medium text-pink-200 drop-shadow-sm">
            Kami siap mendengarkan pertanyaan, saran, atau pesanan Anda. Hubungi
            kami untuk pengalaman mochi yang tak terlupakan.
          </p>

          {/* Contact Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-gradient-to-r from-[#FF85A2] to-[#FF6B8B] border-none text-white hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <FiPhone className="mr-2" /> Hubungi Kami
            </a>
            <a
              href="/contact"
              className="btn bg-transparent border-2 border-pink-300 text-pink-200 hover:bg-pink-300/20 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <FiMail className="mr-2" /> Email Kami
            </a>
          </div>

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

function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    product: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    try {
      await addDoc(collection(db, "contacts"), formData);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "", product: "" });
    } catch (error) {
      console.error("Error submitting form: ", error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-4xl font-bold text-[#6B4F3A] mb-8 relative">
            <span className="relative z-10">
              Kirim <span className="text-[#A78BFA]">Pesan</span>
            </span>
            <span className="absolute -bottom-2 left-0 w-32 h-2 bg-[#FF85A2]/50 z-0"></span>
          </h2>
          <p className="text-[#5A3E28] mb-8">
            Lengkapi formulir di bawah ini dan tim kami akan menghubungi Anda
            dalam waktu 24 jam. Untuk pertanyaan mendesak, silakan hubungi
            layanan pelanggan kami.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-gradient-to-br from-[#FF85A2] to-[#FF6B8B] rounded-full text-white shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                <FiSend className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#6B4F3A]">
                  Waktu Respons
                </h3>
                <p className="text-[#5A3E28]">
                  Biasanya membalas dalam 2 hari kerja
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-gradient-to-br from-[#A78BFA] to-[#8C6BFA] rounded-full text-white shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                <FiPhone className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#6B4F3A]">
                  Pertanyaan Mendesak
                </h3>
                <p className="text-[#5A3E28]">
                  Hubungi +62 812 3456 7890 (24/7)
                </p>
              </div>
            </div>

            <div className="mt-8">
              <div className="card bg-gradient-to-br from-[#FFEDF1] to-[#FFEDF1]/70 border-l-4 border-[#FF85A2] shadow-md p-4">
                <div className="flex items-start gap-3">
                  <FaQuoteLeft className="text-[#FF85A2] text-xl flex-shrink-0 mt-1" />
                  <p className="text-[#5A3E28] italic">
                    "MoChewy selalu memberikan pelayanan terbaik. Respons cepat
                    dan ramah membuat saya selalu puas berbelanja di sini!"
                  </p>
                </div>
                <p className="text-right text-[#6B4F3A] font-medium mt-2">
                  - Pelanggan Setia
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-white shadow-xl rounded-xl overflow-hidden border-t-4 border-[#A78BFA]">
          <div className="card-body p-8">
            {submitSuccess && (
              <div className="alert bg-gradient-to-r from-green-100 to-green-50 text-green-800 mb-6 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Pesan Anda telah berhasil dikirim!</span>
              </div>
            )}

            {submitError && (
              <div className="alert bg-gradient-to-r from-red-100 to-red-50 text-red-800 mb-6 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Terjadi kesalahan. Silakan coba lagi.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#6B4F3A] font-medium mb-2"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-[#E8E1F4] focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all bg-[#FAFAFA] text-black"
                  placeholder="Nama Anda"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[#6B4F3A] font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-[#E8E1F4] focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all bg-[#FAFAFA] text-black"
                  placeholder="email@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="product"
                  className="block text-[#6B4F3A] font-medium mb-2"
                >
                  Produk yang Diminati
                </label>
                <select
                  name="product"
                  className="w-full px-4 py-3 rounded-lg border border-[#E8E1F4] focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all bg-[#FAFAFA] text-black"
                  required
                  value={formData.product}
                  onChange={handleChange}
                >
                  <option disabled value="">
                    Pilih produk
                  </option>
                  <option value="strawberry">Strawberry Mochi</option>
                  <option value="mango">Mango Mochi</option>
                  <option value="matcha">Matcha Mochi</option>
                  <option value="chocolate">Chocolate Mochi</option>
                  <option value="character">Character Mochi</option>
                  <option value="dango">Dango</option>
                  <option value="other">Lainnya</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[#6B4F3A] font-medium mb-2"
                >
                  Pesan
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-[#E8E1F4] focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all bg-[#FAFAFA] text-black"
                  placeholder="Tulis pesan Anda di sini..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-gradient-to-r from-[#A78BFA] to-[#8C6BFA] text-white rounded-lg font-medium hover:shadow-lg transition-all hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed mt-4 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    <span>Mengirim...</span>
                  </>
                ) : (
                  <>
                    <FiSend />
                    <span>Kirim Pesan</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F3EFFA] to-[#E8E1F4]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#6B4F3A] mb-4 relative inline-block">
            <span className="relative z-10">
              Informasi <span className="text-[#A78BFA]">Kontak</span>
            </span>
            <span className="absolute -bottom-2 left-0 right-0 w-full h-2 bg-[#FF85A2]/50 z-0"></span>
          </h2>
          <p className="text-[#5A3E28] max-w-2xl mx-auto">
            Hubungi kami melalui salah satu saluran berikut
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 rounded-xl overflow-hidden group">
            <div className="card-body items-center text-center p-8">
              <div className="p-4 bg-gradient-to-br from-[#FF85A2] to-[#FF6B8B] rounded-full mb-6 text-white shadow-lg group-hover:rotate-[360deg] transition-transform duration-500">
                <FiMapPin className="text-2xl" />
              </div>
              <h3 className="card-title text-[#6B4F3A] mb-3 text-xl">
                Toko Kami
              </h3>
              <address className="not-italic text-[#5A3E28]">
                Jl. Sungai Sahang, Palembang
                <br />
                Palembang, South Sumatra
                <br />
                Indonesia 30151
              </address>
              <div className="mt-4">
                <a
                  href="https://www.google.com/maps/place/Manajemen+informatika+D4+POLITEKNIK+NEGERI+SRIWIJAYA/@-3.004995,104.7560938,20167m/data=!3m1!1e3!4m10!1m2!2m1!1smanajemen+informatika+!3m6!1s0x2e3b75eb0503a7c3:0x28ea9ddd3efd54fd!8m2!3d-2.9795624!4d104.7311315!15sChVtYW5hamVtZW4gaW5mb3JtYXRpa2GSAQZzY2hvb2yqAVkQASoZIhVtYW5hamVtZW4gaW5mb3JtYXRpa2EoJjIfEAEiG1pPg5qMufg0Owz_WEMlczq1yLNMWCkFLf5q2TIZEAIiFW1hbmFqZW1lbiBpbmZvcm1hdGlrYeABAA!16s%2Fg%2F11c1nd_gqm?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm bg-[#FFEDF1] text-[#FF85A2] border-none hover:bg-[#FF85A2] hover:text-white transition-colors"
                >
                  Lihat di Peta
                </a>
              </div>
            </div>
          </div>

          <div className="card bg-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 rounded-xl overflow-hidden group">
            <div className="card-body items-center text-center p-8">
              <div className="p-4 bg-gradient-to-br from-[#A78BFA] to-[#8C6BFA] rounded-full mb-6 text-white shadow-lg group-hover:rotate-[360deg] transition-transform duration-500">
                <FiMail className="text-2xl" />
              </div>
              <h3 className="card-title text-[#6B4F3A] mb-3 text-xl">
                Email Kami
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-[#5A3E28] mb-1">Informasi Umum:</p>
                  <Link
                    to="/contact"
                    className="text-[#A78BFA] hover:text-[#8C6BFA] font-medium transition-colors"
                  >
                    hello@mochewy.com
                  </Link>
                </div>
                <div>
                  <p className="text-[#5A3E28] mb-1">Pemesanan:</p>
                  <Link
                    to="/contact"
                    className="text-[#A78BFA] hover:text-[#8C6BFA] font-medium transition-colors"
                  >
                    order@mochewy.com
                  </Link>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="/contact"
                  className="btn btn-sm bg-[#E8E1F4] text-[#A78BFA] border-none hover:bg-[#A78BFA] hover:text-white transition-colors"
                >
                  Kirim Email
                </a>
              </div>
            </div>
          </div>

          <div className="card bg-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 rounded-xl overflow-hidden group">
            <div className="card-body items-center text-center p-8">
              <div className="p-4 bg-gradient-to-br from-[#FF85A2] to-[#A78BFA] rounded-full mb-6 text-white shadow-lg group-hover:rotate-[360deg] transition-transform duration-500">
                <FiPhone className="text-2xl" />
              </div>
              <h3 className="card-title text-[#6B4F3A] mb-3 text-xl">
                Hubungi Kami
              </h3>
              <p className="text-[#5A3E28] mb-2">
                <a
                  href="tel:+6281234567890"
                  className="text-[#6B4F3A] hover:text-[#A78BFA] font-medium transition-colors"
                >
                  +62 812 3456 7890
                </a>
                <br />
                <span className="text-sm">(Senin-Jumat, 8AM-5PM WIB)</span>
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#FFEDF1] text-[#FF85A2] rounded-full hover:bg-[#FF85A2] hover:text-white transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="text-xl" />
                </a>
                <a
                  href="/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#E8E1F4] text-[#A78BFA] rounded-full hover:bg-[#A78BFA] hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a
                  href="/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#FFEDF1] text-[#FF85A2] rounded-full hover:bg-[#FF85A2] hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactFaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Berapa lama waktu pengiriman mochi?",
      answer:
        "Waktu pengiriman mochi kami bervariasi tergantung lokasi Anda. Untuk area Palembang, pengiriman dapat dilakukan dalam 1-2 jam. Untuk kota-kota besar di Pulau Jawa, pengiriman membutuhkan waktu 1-2 hari. Untuk daerah lain di Indonesia, pengiriman membutuhkan waktu 2-4 hari kerja.",
    },
    {
      question: "Apakah mochi bisa bertahan lama?",
      answer:
        "Mochi MoChewy dapat bertahan hingga 3 hari dalam suhu ruangan dan hingga 7 hari jika disimpan dalam kulkas. Untuk hasil terbaik, kami menyarankan untuk mengonsumsi mochi dalam 1-2 hari setelah diterima untuk mendapatkan tekstur dan rasa yang optimal.",
    },
    {
      question: "Apakah bisa melakukan pemesanan khusus?",
      answer:
        "Ya, kami menerima pemesanan khusus untuk acara seperti ulang tahun, pernikahan, atau acara korporat. Kami dapat menyesuaikan rasa, bentuk, dan kemasan sesuai dengan keinginan Anda. Silakan hubungi kami minimal 7 hari sebelum acara untuk pemesanan khusus.",
    },
    {
      question: "Bagaimana cara melakukan pemesanan?",
      answer:
        "Anda dapat melakukan pemesanan melalui website kami, Instagram, WhatsApp, atau datang langsung ke outlet kami. Untuk pemesanan online, silakan isi formulir pemesanan dan lakukan pembayaran. Setelah pembayaran dikonfirmasi, pesanan Anda akan diproses dan dikirim sesuai jadwal yang telah disepakati.",
    },
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#6B4F3A] mb-4 relative inline-block">
          <span className="relative z-10">
            Pertanyaan <span className="text-[#A78BFA]">Umum</span>
          </span>
          <span className="absolute -bottom-2 left-0 right-0 w-full h-2 bg-[#FF85A2]/50 z-0"></span>
        </h2>
        <p className="text-[#5A3E28] max-w-2xl mx-auto">
          Temukan jawaban untuk pertanyaan yang sering diajukan
        </p>
      </div>

      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="card bg-white shadow-md hover:shadow-lg transition-all"
          >
            <div
              className="card-body p-6"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-lg font-semibold text-[#6B4F3A]">
                  {faq.question}
                </h3>
                <button className="p-2 bg-[#F3EFFA] rounded-full text-[#A78BFA]">
                  {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                </button>
              </div>

              {activeIndex === index && (
                <div className="mt-4 text-[#5A3E28] border-t border-[#E8E1F4] pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-[#5A3E28] mb-4">Masih punya pertanyaan lain?</p>
        <a
          href="/contact"
          className="btn bg-gradient-to-r from-[#A78BFA] to-[#8C6BFA] text-white border-none hover:shadow-lg transition-all hover:-translate-y-1"
        >
          <FiMail className="mr-2" /> Hubungi Tim Kami
        </a>
      </div>
    </section>
  );
}
