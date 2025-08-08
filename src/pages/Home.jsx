import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function Home() {
  const bannerImages = [
    { src: "shoppic1.JPG", alt: "Our Equipment" },
    { src: "shoppic2.jpg", alt: "Custom Apparel" },
    { src: "shoppic3.jpg", alt: "Happy Clients" },
  ];

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
    <main className="space-y-16">
      {/* Front Banner */}
      <section className="relative">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="h-[500px]"
        >
          {bannerImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative h-[500px]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white p-4">
                  <motion.img
                    src="/logo_color.png"
                    alt="Emerald Logo"
                    className="w-24 mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.h1
                    className="text-4xl md:text-5xl font-extrabold text-emerald-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    Screen Printing That Hits Different.
                  </motion.h1>
                  <motion.p
                    className="mt-4 text-lg md:text-xl max-w-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    Bold designs. Impeccable detail. Personal touch. Always printed like it's our own.
                  </motion.p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Mission Statement */}
      <motion.section
        className="container mx-auto px-4 text-center space-y-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-emerald-700">
          Emerald Screen Printing & Embroidery
        </h2>
        <p className="mb-8 max-w-2xl mx-auto text-gray-700">
          Dynamic designs, high-quality printing, and exceptional customer service.  
          We print every piece with the care and precision we'd expect ourselves.
        </p>
        <Link
          to="/contact"
          className="px-10 py-5 rounded-full bg-emerald-700 text-white font-semibold hover:bg-emerald-600 transition duration-300 shadow-md hover:shadow-lg"
        >
          Contact Today
        </Link>
      </motion.section>
        
      {/* Testimonials */}
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


      {/* Slogan Section */}
      <motion.section
        className="bg-emerald-700 text-white pt-16 pb-20 md:pb-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 text-center space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
            Emerald Screen Printing & Embroidery
          </h3>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-emerald-100 leading-relaxed">
            “We print like we're the customer. If we don't like it, we know you won't either.”
          </p>
        </div>
      </motion.section>

    </main>
  );
}
