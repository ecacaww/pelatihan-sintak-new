import {
  FiCoffee,
  FiMail,
  FiPhone,
  FiMapPin,
  FiInstagram,
  FiFacebook,
  FiTwitter,
} from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
  const footerData = {
    brand: {
      name: "MoChewy",
      tagline:
        "Soft, Sweet, and Irresistible - The Ultimate Mochi Experience that melts in your mouth!",
    },
    socialMedia: [
      {
        name: "Instagram",
        Link: "/contact",
        icon: FiInstagram,
      },
      {
        name: "Facebook",
        Link: "/contact",
        icon: FiFacebook,
      },
      {
        name: "Twitter",
        Link: "/contact",
        icon: FiTwitter,
      },
    ],
    quickLinks: [
      { name: "Home", url: "/" },
      { name: "About Us", url: "/about" },
      { name: "Mochi Products", url: "/product" },
      { name: "Contact", url: "/contact" },
    ],
    products: [
      { name: "Strawberry Mochi", url: "/product" },
      { name: "Mango Mochi", url: "/product" },
      { name: "Matcha Mochi", url: "/product" },
      { name: "Chocolate Mochi", url: "/product" },
      { name: "Character Mochi", url: "/product" },
      { name: "Dango", url: "/product" },
    ],
    contact: {
      address: {
        street: "Jl. Sungai Sahang, Palembang",
        city: "South Sumatra, Indonesia 30151",
      },
      email: "hello@mochewy.com",
      phone: "+62 812 3456 7890",
    },
  };

  return (
    <>
      <footer className="relative bg-gradient-to-br from-pink-100 via-pink-200 to-purple-200 text-purple-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-amber-300 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-pink-300 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-purple-300 rounded-full blur-lg"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6 group">
                <div className="p-3 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <FiCoffee className="text-2xl text-white" />
                </div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent">
                  MoChewy
                </h1>
              </div>
              <p className="text-purple-700 font-medium mb-6 leading-relaxed">
                {footerData.brand.tagline}
              </p>

              <div className="flex gap-4">
                {footerData.socialMedia.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className="p-3 bg-white/50 backdrop-blur-sm rounded-xl hover:bg-white/80 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg group"
                      aria-label={social.name}
                    >
                      <IconComponent className="text-lg text-purple-700 group-hover:text-amber-500 transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h6 className="text-lg font-bold text-purple-800 mb-6 relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-amber-400 to-pink-400 rounded-full"></div>
              </h6>
              <nav className="space-y-3">
                {footerData.quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="block text-purple-700 hover:text-amber-500 hover:translate-x-2 transition-all duration-300 font-medium"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h6 className="text-lg font-bold text-purple-800 mb-6 relative">
                Mochi Products
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
              </h6>
              <nav className="space-y-3">
                {footerData.products.map((product, index) => (
                  <a
                    key={index}
                    href={product.url}
                    className="block text-purple-700 hover:text-amber-500 hover:translate-x-2 transition-all duration-300 font-medium"
                  >
                    {product.name}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h6 className="text-lg font-bold text-purple-800 mb-6 relative">
                Contact Us
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-purple-400 to-amber-400 rounded-full"></div>
              </h6>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <a
                    href="https://www.google.com/maps/place/Manajemen+informatika+D4+POLITEKNIK+NEGERI+SRIWIJAYA/@-3.004995,104.7560938,20167m/data=!3m1!1e3!4m10!1m2!2m1!1smanajemen+informatika+!3m6!1s0x2e3b75eb0503a7c3:0x28ea9ddd3efd54fd!8m2!3d-2.9795624!4d104.7311315!15sChVtYW5hamVtZW4gaW5mb3JtYXRpa2GSAQZzY2hvb2yqAVkQASoZIhVtYW5hamVtZW4gaW5mb3JtYXRpa2EoJjIfEAEiG1pPg5qMufg0Owz_WEMlczq1yLNMWCkFLf5q2TIZEAIiFW1hbmFqZW1lbiBpbmZvcm1hdGlrYeABAA!16s%2Fg%2F11c1nd_gqm?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/50 rounded-lg group-hover:bg-white/80 transition-all duration-300 hover:scale-110"
                  >
                    <FiMapPin className="text-purple-700 group-hover:text-amber-500 transition-colors duration-300" />
                  </a>
                  <div>
                    <p className="text-purple-700 font-medium">
                      {footerData.contact.address.street}
                    </p>
                    <p className="text-purple-600 text-sm">
                      {footerData.contact.address.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="p-2 bg-white/50 rounded-lg group-hover:bg-white/80 transition-all duration-300">
                    <FiMail className="text-purple-700 group-hover:text-amber-500 transition-colors duration-300" />
                  </div>
                  <a
                    href="/contact"
                    className="text-purple-700 font-medium hover:text-amber-500 transition-colors duration-300"
                  >
                    {footerData.contact.email}
                  </a>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="p-2 bg-white/50 rounded-lg group-hover:bg-white/80 transition-all duration-300">
                    <FiPhone className="text-purple-700 group-hover:text-amber-500 transition-colors duration-300" />
                  </div>
                  <a
                    href={`https://wa.me/${footerData.contact.phone
                      .replace(/\s+/g, "")
                      .replace(/\+/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-700 font-medium hover:text-amber-500 transition-colors duration-300"
                  >
                    {footerData.contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="bg-gradient-to-r from-purple-800 to-pink-700 text-white py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-sm font-medium">
              © {new Date().getFullYear()} MoChewy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
