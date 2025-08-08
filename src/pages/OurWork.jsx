import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function OurWork() {

  const testimonials = [
    {
      name: "Anthony",
      company: "AJP Landscaping",
      text: "Jeff has been making our apparel for years now and he never disappoints. He's easier to deal with than the larger companies and has the best pricing around.",
    },
    {
      name: "Jordan Tonn",
      company: "Tonn’s Marketplace",
      text: "I have worked with Jeff multiple times for custom shirts for my business and he has been amazing to work with. Very responsive and kept me informed throughout the entire process. He met every deadline and we couldn’t be happier with the shirts he made us. Will be doing more business with him in the future.",
    },
    {
      name: "Laura Dutil",
      company: "Farmington High School Lacrosse and Football Booster Clubs",
      text: "I have worked with Jeff, and the Emerald Screen Printing team, on a number of apparel projects for my son's high school sports teams, fundraising shirts and sweatshirts, and team shirts. Jeff's communication and attention to detail was great. I was very pleased with the collaboration in creating the design, the turnaround time, and the end product. Emerald Screen Printing is my go-to company.",
    },
    {
      name: "Costello Landscaping",
      company: "",
      text: "Emerald was recommended to us from another contractor and we’ve been extremely happy with the t-shirt and sweatshirt quality! Not to mention probably the fastest turn around time we’ve ever had! Emerald is the absolute top of the line and we’re definitely a customer for life!",
    },
  ];


  return (
    <section className="container mx-auto px-4 py-16 space-y-16 max-w-6xl">
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

      {/* Happy Customers Gallery */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold text-emerald-600">Some of Our Happy Customers</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={`shirtcopy${i}.jpg`}
                alt={`Finished product ${i}`}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-sm p-2 opacity-0 group-hover:opacity-100 transition">
                Client Logo Tee #{i}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Suppliers */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold text-emerald-600">Suppliers We Trust</h3>
        <div className="flex flex-wrap gap-6 justify-center items-center">
          {[
            { name: "Supplier 1", logo: "logo.jpg", link: "#" },
            { name: "Supplier 2", logo: "logo.jpg", link: "#" },
            { name: "Supplier 3", logo: "logo.jpg", link: "#" },
          ].map((supplier) => (
            <a
              key={supplier.name}
              href={supplier.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-32 hover:scale-105 transition"
            >
              <img
                src={supplier.logo}
                alt={supplier.name}
                className="w-full h-auto object-contain"
              />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Artwork Assistance */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h3 className="text-2xl font-bold text-emerald-600">Artwork Assistance</h3>
        <p className="text-gray-600 ">
          Don't have a design? We've got you. Check out our sample artwork or talk to us about bringing your ideas to life.
        </p>
      </motion.div>

      {/* How to Start */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
      >
        <h3 className="text-2xl font-bold text-emerald-600">How to Start?</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions or want to place an order - reach out for a quick quote.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-emerald-700 text-white font-semibold rounded-lg shadow hover:bg-emerald-600 transition"
        >
          Contact Us
        </a>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-16"
      >
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-semibold text-center text-emerald-600 mb-10">
            What Our Clients Say
          </h3>

          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet",
              renderBullet: (i, className) =>
                `<span class="${className} bg-emerald-600"></span>`,
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop={true}
            className="max-w-4xl mx-auto"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm transition-transform duration-300 hover:scale-[1.02]">
                  <p className="text-gray-800 text-lg md:text-xl italic leading-relaxed mb-6">“{t.text}”</p>
                  <div className="text-right">
                    <p className="font-semibold text-emerald-600">— {t.name}</p>
                    {t.company && <p className="text-gray-600 text-sm">{t.company}</p>}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.section>
    </section>
  );
}
