import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function Home() {
  const bannerImages = [
    { src: "Premium-Presses.jpg", alt: "Our Equipment" },
    { src: "Premium-Presses.jpg", alt: "Custom Apparel" },
    { src: "Premium-Presses.jpg", alt: "Happy Clients" },
  ];

  const testimonials = [
    {
      name: "Sarah K.",
      text: "Emerald Screen Printing made our team shirts look incredible! Great quality and service.",
    },
    {
      name: "Mike D.",
      text: "Fast turnaround and the prints were flawless. Highly recommend them!",
    },
    {
      name: "Emily P.",
      text: "They helped me refine my design and it came out better than I imagined. Thank you!",
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
                    src="/logo.jpg"
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
        <p className="max-w-2xl mx-auto text-gray-700">
          Dynamic designs, high-quality printing, and exceptional customer service.  
          We print every piece with the care and precision we'd expect ourselves.
        </p>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 text-center space-y-8">
          <h3 className="text-2xl font-bold text-emerald-600">What Our Clients Say</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow p-6 text-gray-700 space-y-4 transition-transform duration-300 hover:scale-[1.02]"
              >
                <p className="italic">“{testimonial.text}”</p>
                <p className="font-semibold text-emerald-700">- {testimonial.name}</p>
              </div>
            ))}
          </div>
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
