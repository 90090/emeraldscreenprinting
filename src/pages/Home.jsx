import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Testimonials from "../components/Testimonials";
import ClientMarquee from "../components/ClientMarquee";



export default function Home() {
const bannerImages = [
    { src: "banner/shoppic1.JPG", alt: "Our Equipment" },
  {
    group: [
      { src: "banner/leftbanner.JPG", alt: "Jeff making shirts" },
      { src: "banner/middlebanner.JPG", alt: "Jeff making shirts again" },
      { src: "banner/rightbanner.JPG", alt: "Jeff making shirts again!" },
    ],
  },
    { src: "banner/shoppic2.jpg", alt: "Happy Clients" },
    { src: "banner/shoppic3.JPG", alt: "Happy Clients" },
    { src: "banner/shoppic3.JPG", alt: "Happy Clients" },
];


  const showcase = [
    { img: "customers/dynamictree2.jpg", alt:"Dynamic Tree Service", caption: "Dynamic Tree Service" },
    { img: "customers/allinone2.jpg", alt:"All In One Powerwashing", caption: "All In One Powerwashing" },
    { img: "customers/dynamictrees.png", alt:"Dynamic Tree Service", caption: "Dynamic Tree Service" },
    { img: "customers/VSsons.png", caption: "VS Sons" },
    { img: "customers/ajplandscaping.jpg", alt:"AJP Landscaping", caption: "AJP Landscaping" },
    { img: "customers/guitar.jpg", alt:"Sweet Magic", caption: "Sweet Magic" },
    { img: "customers/ges.jpg", alt:"Green Earth Solutions", caption: "Green Earth Solutions" },
    { img: "customers/fish.png", caption: "Premium Fencing and Masonry" },
    { img: "customers/farmington.png", caption: "Farmington Football" },
    { img: "customers/Adell.png", caption: "Adell Landscaping" },
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
    autoplay={{ delay: 6500, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    loop={true}
    className="h-[500px]"
  >
    {bannerImages.map((img, idx) => {
      // all slogans in order, same length as bannerImages
      const slogans = [
        "Elevate Your Brand with Emerald",
        "Wear Your Vision with Emerald",
        "Screenprinting that Sparks",
        "Stand Out with Emerald Screenprinting",
        "Screen Printing That Colors Your Imagination",
      ];

      return (
        <SwiperSlide key={idx}>
          <div className="relative h-[500px] flex">
            {/* Second slide shows 2 images on mobile, 3 on md+ */}
            {idx === 1 ? (
              <div className="absolute inset-0 flex flex-row w-full h-full">
                {img.group.map((g, gIdx) => (
                  <img
                    key={gIdx}
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className={`
                      h-full object-cover 
                      ${gIdx > 1 ? "hidden md:block w-1/3" : "w-1/2 md:w-1/3"}
                    `}
                  />
                ))}
              </div>
            ) : (
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            {/* Overlay text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
              <motion.h1
                className="text-4xl md:text-5xl font-extrabold text-[rgb(208,177,65)] text-shadow-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.9 }}
              >
                {slogans[idx % slogans.length]}
              </motion.h1>
              <motion.p
                className="mt-4 text-lg md:text-xl max-w-xl text-shadow-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.9 }}
              >
                Bold designs. Impeccable detail. Personal touch. Always printed like it's our own.
              </motion.p>
            </div>
          </div>
        </SwiperSlide>
      );
    })}
  </Swiper>
</section>



      {/* Mission + Slogan */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 text-center space-y-4">
          <motion.img
            src="/logo_color.png"
            alt="Emerald Logo"
            loading="lazy"
            className="w-110 mb-4 mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
          <h2 className="text-3xl font-semibold text-emerald-700">
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
      <ClientMarquee clientLogos={clientLogos} />

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
    </main>
  );
}
