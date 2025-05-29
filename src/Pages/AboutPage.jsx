import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { FiCoffee, FiGlobe, FiUsers, FiAward } from "react-icons/fi";
import { FaLeaf, FaHandshake } from "react-icons/fa";

function AboutPage() {
  return (
    <div className="bg-stone-50">
      <NavBar />
      <HeroSection />
      <OurStorySection />
      <ValuesSection />
      {/* You can also factor TeamSection into a component if needed */}
      <CTASection />
      <Footer />
    </div>
  );
}

export default AboutPage;

function HeroSection() {
  return (
    <div className="hero min-h-[60vh] bg-stone-900 text-stone-100">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-6">Our Coffee Journey</h1>
          <p className="text-xl mb-8">
            From the fertile volcanic soils of Indonesia to your cup - discover
            the story behind Aroma Sriwijaya's premium coffee beans.
          </p>
          <div className="stats bg-stone-800/50 shadow">
            <div className="stat">
              <div className="stat-figure text-amber-400">
                <FiCoffee className="text-3xl" />
              </div>
              <div className="stat-title text-stone-300">Coffee Varieties</div>
              <div className="stat-value text-amber-400">12+</div>
              <div className="stat-desc">From across Indonesia</div>
            </div>
            <div className="stat">
              <div className="stat-figure text-amber-400">
                <FiUsers className="text-3xl" />
              </div>
              <div className="stat-title text-stone-300">Farmers Partnered</div>
              <div className="stat-value text-amber-400">150+</div>
              <div className="stat-desc">Smallholder farms</div>
            </div>
            <div className="stat">
              <div className="stat-figure text-amber-400">
                <FiGlobe className="text-3xl" />
              </div>
              <div className="stat-title text-stone-300">Countries Served</div>
              <div className="stat-value text-amber-400">25+</div>
              <div className="stat-desc">Worldwide distribution</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OurStorySection() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/2">
          <div className="text-amber-600 font-semibold mb-4">OUR STORY</div>
          <h2 className="text-4xl font-bold text-stone-800 mb-6">
            Rooted in Sumatra's Rich Coffee Heritage
          </h2>
          <p className="text-stone-600 mb-6">
            Founded in 2010 in Palembang, Aroma Sriwijaya began as a small
            collective of Sumatran coffee farmers. Today, we've grown into a
            premier exporter of Indonesian specialty coffee while staying true
            to our origins.
          </p>
          <p className="text-stone-600 mb-8">
            Our name pays homage to the ancient Srivijaya empire that once
            flourished in Sumatra, a nod to the region's historical significance
            in Southeast Asian trade routes - much like how we're connecting
            Indonesian coffee to the world today.
          </p>
          <div className="flex gap-4">
            <button className="btn bg-amber-800 hover:bg-amber-700 border-amber-800 text-white">
              Meet Our Farmers
            </button>
            <button className="btn btn-outline border-amber-800 text-amber-800 hover:bg-amber-50">
              Our Process
            </button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1459755486867-b55449bb39ff"
                alt="Coffee farmers"
                className="w-full h-96 object-cover"
              />
            </figure>
            <div className="card-body bg-stone-100">
              <div className="flex items-center gap-2 text-amber-700">
                <FaHandshake className="text-xl" />
                <p className="font-semibold">Direct Trade Since 2010</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const values = [
    {
      icon: <FiAward className="text-3xl text-amber-800" />,
      title: "Quality First",
      description:
        "We meticulously grade and select only the top 5% of harvests, ensuring exceptional cup quality in every batch.",
    },
    {
      icon: <FaLeaf className="text-3xl text-amber-800" />,
      title: "Sustainable Practices",
      description:
        "Organic farming methods that protect biodiversity and ensure long-term viability of coffee lands.",
    },
    {
      icon: <FiUsers className="text-3xl text-amber-800" />,
      title: "Farmer Empowerment",
      description:
        "Direct partnerships that pay 30% above market rates, with profit-sharing for exceptional lots.",
    },
  ];
  return (
    <section className="py-20 bg-stone-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">
            Our Core Values
          </h2>
          <div className="divider w-24 mx-auto bg-amber-600 h-1"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((val, i) => (
            <div
              className="card bg-white shadow-lg hover:shadow-xl transition-shadow"
              key={i}
            >
              <div className="card-body items-center text-center">
                <div className="p-4 bg-amber-100 rounded-full mb-4">
                  {val.icon}
                </div>
                <h3 className="card-title text-xl text-stone-800 mb-2">
                  {val.title}
                </h3>
                <p className="text-stone-600">{val.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <div className="bg-stone-900 text-stone-100 py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Experience Authentic Indonesian Coffee?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join our global family of coffee enthusiasts and professionals.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="btn btn-lg bg-amber-800 hover:bg-amber-700 border-amber-800 text-white">
            Request Sample
          </button>
          <button className="btn btn-lg btn-outline border-stone-300 text-stone-300 hover:bg-stone-800">
            Contact Our Team
          </button>
        </div>
      </div>
    </div>
  );
}
