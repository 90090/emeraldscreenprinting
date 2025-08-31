import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ShirtGrid from "../components/ShirtGrid";
import Testimonials from "../components/Testimonials";

export default function OurWork() {

  const showcase = [
    { img: "customers/ajplandscaping.jpg", caption: "AJP Landscaping" },
    { img: "customers/guitar.jpg", caption: "Sweet Magic" },
    { img: "customers/ges.jpg", caption: "Green Earth Solutions" },
    { img: "customers/VSsons.png", caption: "VS Sons" },
    { img: "customers/dynamictrees.png", caption: "Dynamic Tree Service" },
    { img: "customers/allinone2.jpg", caption: "All In One Powerwashing" },
    { img: "customers/fish.png", caption: "Premium Fencing and Masonry" },
    { img: "customers/farmington.png", caption: "Farmington Football" },
    { img: "customers/dynamictree2.jpg", caption: "Dynamic Tree Service" },
    { img: "customers/Adell.png", caption: "Adell Landscaping" },
  ];

  return (
    <section className="w-full py-16">
      <head>
        <title> Our Work | Emerald Screen Printing | Custom Apparel & Merchandise</title>
        <meta 
          name="description" 
          content="Emerald Screen Printing offers high-quality custom t-shirts, hoodies, and promotional items with fast turnaround and exceptional detail." 
        />
      </head>
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-4xl font-extrabold text-emerald-700 mb-4">
          Your Designs. <span className="text-black">Our Expertise.</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Whether you&apos;re a local business, school, or a solo brand-builder, we take pride in
          helping you bring your vision to life on fabric.
        </p>
      </motion.div>

      <ShirtGrid />

      {/* Suppliers - Modern Card Style */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-emerald-600 py-16 px-8 mt-10 mb-10 shadow-xl"
      >
        <div className="space-y-10">
          <h3 className="text-3xl text-center font-bold text-white">
            Suppliers We Trust
          </h3>

          <div className="flex flex-wrap gap-8 justify-center">
            {[
              { name: "One Stop", logo: "logos/onestop.png", link: "http://www.onestopinc.com/" },
              { name: "SS Activewear", logo: "logos/SSactivewear.png", link: "http://www.ssactivewear.com/" },
              { name: "SanMar", logo: "logos/sanmar.png", link: "http://www.sanmar.com/" },
            ].map((supplier) => (
              <a
                key={supplier.name}
                href={supplier.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105 p-3 w-40 flex items-center justify-center"
              >
                <img
                  src={supplier.logo}
                  alt={supplier.name}
                  loading="lazy"
                  className="w-full h-20 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </motion.div>


      {/* How to Start */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
      >
        <h3 className="text-2xl font-bold text-emerald-700">How to Start?</h3>
        <p className="text-gray-600 text-xl max-w-2xl mx-auto">
          Have questions or want to place an order - reach out for a quick quote.
        </p>
        <Link
          to="/contact"
          className="inline-block px-10 py-5 bg-emerald-700 text-white text-2xl font-semibold rounded-lg shadow hover:bg-emerald-600 transition transform hover:scale-105"
        >
          Contact Us Today
        </Link>
      </motion.div>
      
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-emerald-700 mb-6">
            Our Amazing Customers Rocking Our Apparel
          </h2>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            loop={true} 
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 }, // tablets
              1024: { slidesPerView: 3 }, // desktops
            }}
            className="max-w-5xl mx-auto pb-20" 
          >
            {showcase.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative rounded-2xl overflow-hidden shadow-md hover:scale-101 transition-transform duration-300">
                  <img
                    src={item.img}
                    alt={item.caption}
                    loading="lazy"
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full text-white py-4 text-sm text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
                    <p className="">{item.caption}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.section>
      

      <Testimonials />
    </section>
  );
}
