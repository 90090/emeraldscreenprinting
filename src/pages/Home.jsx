import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Testimonials from "../components/Testimonials";

export default function Home() {
  const bannerImages = [
    { src: "shoppic1.JPG", alt: "Our Equipment" },
    { src: "shoppic5.jpeg", alt: "Custom Apparel" },
    { src: "shoppic2.jpg", alt: "Happy Clients" },
  ];

  const showcase = [
    { img: "customers/dynamictree2.jpg", alt:"Dynamic Tree Service", caption: "Dynamic Tree Service" },
    { img: "customers/allinone2.jpg", alt:"All In One Powerwashing", caption: "All In One Powerwashing" },
    { img: "customers/dynamictrees.png", alt:"Dynamic Tree Service", caption: "Dynamic Tree Service" },
    { img: "customers/ajplandscaping.jpg", alt:"AJP Landscaping", caption: "AJP Landscaping" },
    { img: "customers/guitar.jpg", alt:"Sweet Magic", caption: "Sweet Magic" },
    { img: "customers/ges.jpg", alt:"Green Earth Solutions", caption: "Green Earth Solutions" },
  ];
  
  const clientLogos = [
  { name: "Adell Landscaping", src: "logos/adell.png" },
  { name: "Central CT Building and Remodeling", src: "logos/centralct.png" },
  { name: "Ibirra Landscaping", src: "logos/ibarra.jpg" },
  { name: "Canton Pizza", src: "logos/cantonpizza.png" },
  { name: "Unionville Autobody", src: "logos/unionville.jpg" },
  { name: "Spine Sports", src: "logos/spinesports-logo.png" },
  { name: "Tonn's Marketplace", src: "logos/tonnsmarketplace.png" },
  { name: "Valley Stump Grinding", src: "logos/valleystump.png" },
];


  return (
    <main className="space-y-16">
      <head>
       <title>Emerald Screen Printing Home | Custom Apparel & Merchandise</title>
       <meta name="description" content="Emerald Screen Printing creates custom t-shirts, apparel, and promotional products with high-quality printing and embroidery. Serving businesses, schools, and events." />
      </head>
      {/* Front Banner */}
      <section className="relative">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
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
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white p-4">
                  <motion.h1
                    className="text-4xl md:text-5xl font-extrabold text-emerald-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.9 }}
                  >
                    Screen Printing That Hits Different.
                  </motion.h1>
                  <motion.p
                    className="mt-4 text-lg md:text-xl max-w-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.9 }}
                  >
                    Bold designs. Impeccable detail. Personal touch. Always printed like it's our own.
                  </motion.p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Mission + Slogan */}
      <motion.section
        className="bg-gray-50"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 text-center space-y-4">
          <motion.img
            src="/logo_color.png"
            alt="Emerald Logo"
            loading="lazy"
            className="w-70 mb-4 mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
          <h2 className="text-3xl font-semibold text-emerald-600">
            Your Local Screen Printing Partner
          </h2>
          <p className="mb-10 text-lg text-gray-700 max-w-2xl mx-auto">
            We're a small, family-run shop rooted in community and craftsmanship. Every order is treated like it's ours, because to us, it is.
          </p>
          <Link
          to="/contact"
          className="px-10 py-5 rounded-full bg-emerald-700 text-white font-semibold hover:bg-emerald-600 transition transform hover:scale-105 duration-300 shadow-md hover:shadow-lg "
        >
          Contact Today
          </Link>
        </div>
      </motion.section>

      {/* Client List */}
      <div className="relative overflow-hidden py-2">
        <h3 className="text-2xl text-center font-bold mb-10 text-emerald-600">
          Trusted By Many Connecticut Brands
        </h3>
        <div className="flex w-max gap-12 animate-marquee hover:md:animation-paused">
          {/* one set */}
          {clientLogos.map((c) => (
            <div
              key={c.name}
              className="flex items-center justify-center w-38 h-17 md:w-50 md:h-20 bg-white rounded-xl shadow transition-transform duration-300 hover:scale-110"
              title={c.name}
            >
              <img
                src={c.src}
                alt={c.name}
                loading="lazy"
                className="max-h-16 md:max-h-19 md:max-w-45 max-w-32 object-contain"
              />
            </div>
          ))}
          {/* duplicate set */}
          {clientLogos.map((c, i) => (
            <div
              key={`${c.name}-dup-${i}`}
              className="flex items-center justify-center w-32 h-14 md:w-50 md:h-20 bg-white rounded-xl shadow transition-transform duration-300 hover:scale-110"
              aria-hidden="true"
            >
              <img
                src={c.src}
                alt={`logo ${c.name}`}
                loading="lazy"
                className="max-h-16 md:max-h-12 max-w-[180px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Apparel Showcase */}
      <motion.section
        className="py-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        
      >
        <div className="container mx-auto px-4">
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
                  <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white py-4 text-sm text-center">
                    {item.caption}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.section>
        
      <Testimonials />
    </main>
  );
}
