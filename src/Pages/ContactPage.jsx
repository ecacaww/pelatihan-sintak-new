import NavBar from "./NavBar";
import Footer from "./Footer";
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

function ContactPage() {
  return (
    <div className="bg-stone-50">
      <NavBar />
      <ContactHero />
      <ContactSection />
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default ContactPage;

function ContactHero() {
  return (
    <div className="hero min-h-[40vh] bg-stone-900 text-stone-100">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl mb-6">
            We'd love to hear from you! Whether you have questions about our
            products or want to discuss wholesale opportunities, our team is
            ready to assist.
          </p>
          <div className="flex justify-center gap-4">
            <button className="btn bg-amber-800 hover:bg-amber-700 border-amber-800 text-white">
              <FiPhone className="mr-2" /> Call Us
            </button>
            <button className="btn btn-outline border-stone-300 text-stone-300 hover:bg-stone-800">
              <FiMail className="mr-2" /> Email Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    product: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), formData);
      alert("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "", product: "" });
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold text-stone-800 mb-6">
            Send Us a Message
          </h2>
          <p className="text-stone-600 mb-8">
            Complete the form below and our team will get back to you within 24
            hours. For urgent inquiries, please call our customer service.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-100 rounded-full">
                <FiSend className="text-amber-800 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-stone-800">
                  Response Time
                </h3>
                <p className="text-stone-600">
                  Typically replies within 2 business days
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-100 rounded-full">
                <FiPhone className="text-amber-800 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-stone-800">
                  Urgent Inquiries
                </h3>
                <p className="text-stone-600">
                  Call +62 812 3456 7890 (24/7 support)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="card-body p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="label">
                  <span className="label-text text-stone-700">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered w-full focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="label">
                  <span className="label-text text-stone-700">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="product" className="label">
                  <span className="label-text text-stone-700">
                    Product Interest
                  </span>
                </label>
                <select
                  name="product"
                  className="select select-bordered w-full focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                  value={formData.product}
                  onChange={handleChange}
                >
                  <option disabled value="">
                    Select a product
                  </option>
                  <option value="sumatra_mandheling">Sumatra Mandheling</option>
                  <option value="java_preanger">Java Preanger</option>
                  <option value="bali_kintamani">Bali Kintamani</option>
                  <option value="toraja_kalosi">Toraja Kalosi</option>
                  <option value="wholesale">Wholesale Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="label">
                  <span className="label-text text-stone-700">Message</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="textarea textarea-bordered w-full focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Your message here..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn w-full bg-amber-800 hover:bg-amber-700 border-amber-800 text-white mt-6"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo() {
  return (
    <section className="py-16 bg-stone-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">
            Our Contact Information
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Reach out to us through any of these channels
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="card-body items-center text-center">
              <div className="p-4 bg-amber-100 rounded-full mb-4">
                <FiMapPin className="text-2xl text-amber-800" />
              </div>
              <h3 className="card-title text-stone-800 mb-2">Headquarters</h3>
              <address className="not-italic text-stone-600">
                Jl. Sriwijaya No. 123<br />
                Palembang, South Sumatra<br />
                Indonesia 30139
              </address>
            </div>
          </div>

          <div className="card bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="card-body items-center text-center">
              <div className="p-4 bg-amber-100 rounded-full mb-4">
                <FiMail className="text-2xl text-amber-800" />
              </div>
              <h3 className="card-title text-stone-800 mb-2">Email Us</h3>
              <p className="text-stone-600 mb-1">
                General Inquiries:
                <br />
                <a
                  href="mailto:info@beaneca.com"
                  className="text-amber-700 hover:underline"
                >
                  info@beaneca.com
                </a>
              </p>
              <p className="text-stone-600">
                Sales:
                <br />
                <a
                  href="mailto:sales@beaneca.com"
                  className="text-amber-700 hover:underline"
                >
                  sales@beaneca.com
                </a>
              </p>
            </div>
          </div>

          <div className="card bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="card-body items-center text-center">
              <div className="p-4 bg-amber-100 rounded-full mb-4">
                <FiPhone className="text-2xl text-amber-800" />
              </div>
              <h3 className="card-title text-stone-800 mb-2">Call/Connect</h3>
              <p className="text-stone-600 mb-2">
                <a
                  href="tel:+6281234567890"
                  className="text-amber-700 hover:underline"
                >
                  +62 812 3456 7890
                </a>
                <br />
                (Mon-Fri, 8AM-5PM WIB)
              </p>
              <div className="flex gap-4 mt-2">
                <a
                  href="#"
                  className="text-stone-600 hover:text-amber-700 transition-colors"
                >
                  <FaWhatsapp className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="text-stone-600 hover:text-amber-700 transition-colors"
                >
                  <FaInstagram className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="text-stone-600 hover:text-amber-700 transition-colors"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}