import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import ShirtGrid from "../components/ShirtGrid";
import Testimonials from "../components/Testimonials";

export default function OurWork() {

  return (
    <section className="w-full py-16">
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
        <h3 className="text-2xl font-bold text-emerald-600">How to Start?</h3>
        <p className="text-gray-600 text-xl max-w-2xl mx-auto">
          Have questions or want to place an order - reach out for a quick quote.
        </p>
        <a
          href="/contact"
          className="inline-block px-10 py-5 bg-emerald-700 text-white text-2xl font-semibold rounded-lg shadow hover:bg-emerald-600 transition transform hover:scale-105"
        >
          Contact Us Today
        </a>
      </motion.div>

      <Testimonials />
    </section>
  );
}
