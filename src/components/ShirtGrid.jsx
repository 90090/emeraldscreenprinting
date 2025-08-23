import { useState, useRef } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "yet-another-react-lightbox/styles.css";

const screenshots = [
  { src: "./samples/shirt1.png", alt: ""},
  { src: "./samples/shirt2.png", alt: ""},
  { src: "./samples/shirt3.png", alt: ""},
  { src: "./samples/shirt4.png", alt: ""},
  { src: "./samples/shirt5.png", alt: ""},
  { src: "./samples/shirt6.png", alt: ""},
  { src: "./samples/shirt7.png", alt: ""},
  { src: "./samples/shirt8.png", alt: ""},
  { src: "./samples/shirt9.png", alt: ""},
  { src: "./samples/shirt10.png", alt: ""},
  { src: "./samples/shirt11.png", alt: ""},
  { src: "./samples/shirt12.png", alt: ""},
];

export default function ShirtGrid() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const swiperRef = useRef(null);

  const openLightbox = (i) => {
    setIndex(i);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // Move Swiper to the slide we left off on
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index); // keeps looping logic
    }
  };

  return (
    <section id="our-work" className="py-10 text-black text-center px-4">
      <h2 className="text-3xl font-bold text-emerald-600 mb-6">
        Our Apparel
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
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 15 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
          1280: { slidesPerView: 5, spaceBetween: 20 },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // capture Swiper instance
      >
        {screenshots.map((img, i) => (
          <SwiperSlide key={i}>
            <div
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-[150px] sm:h-[180px] md:h-[200px] object-contain bg-white"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Lightbox
        open={open}
        close={handleClose}
        index={index}
        on={{ view: ({ index }) => setIndex(index) }} // update index when swiping inside Lightbox
        slides={screenshots.map((img) => ({ src: img.src }))}
      />
    </section>
  );
}
