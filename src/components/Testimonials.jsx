
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";


export default function Testimonials() {


const testimonials = [
    {
      name: "Anthony",
      company: "AJP Landscaping",
      text: "Jeff has been making our apparel for years now and he never disappoints. He's easier to deal with than the larger companies and has the best pricing around.",
    },
    {
      name: "Jordan Tonn",
      company: "Tonn's Marketplace",
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
      text: "Emerald was recommended to us from another contractor and we've been extremely happy with the t-shirt and sweatshirt quality! Not to mention probably the fastest turn around time we’ve ever had! Emerald is the absolute top of the line and we’re definitely a customer for life!",
    },
    {
      name: "Austin Wosleger",
      company: "Green Earth Solutions LLC",
      text: "I have been using Jeff for several years and he's been a huge help in all aspects of purchasing, putting an order together and even some design help! My orders are 100% correct and zero issues which is a direct correlation to his communication. With his central location in CT, he is someone everyone should know. Thank you always Jeff for your help, quick turnaround time, awesome pricing and being a great guy!!",
    },
    {
      name: "Tyler",
      company: "Anderson Mobile Welding",
      text: "I recently had my business shirts made by Jeff and I can’t be happier with how they came out. Not only are they high quality but also super affordable. Jeff is really awesome to work with and is very professional, I highly recommend using Emerald Screen Printing. I will 100% be using him again!",
    },
    {
      name: "Michael Rosenthal",
      company: "Dynamic Tree",
      text: "Emerald screen printing has always gone above and beyond for us. From employee uniforms to promotional shirts, they have what we need at the right price. When you need uniforms don’t hesitate to reach out to them.",
    },
  ];


  return (
      // Testimonials
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-8"
      >
        <div className="container mx-auto px-4">
          <h3 className="text-xl md:text-2xl font-semibold text-center text-emerald-700 mb-10">
            What Our Amazing Clients Have To Say
          </h3>

          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet",
              renderBullet: (i, className) =>
                `<span class="${className} bg-emerald-600"></span>`,
            }}
            autoplay={{ delay: 12000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop={true}
            className="max-w-4xl mx-auto"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm transition-transform duration-300 hover:scale-[1.02] min-h-[200px] line-clamp-6 flex flex-col justify-between">
                  <p className="text-gray-800 text-lg md:text-xl italic leading-relaxed mb-6">“{t.text}”</p>
                  <div className="text-right">
                    <p className="font-semibold text-emerald-700">— {t.name}</p>
                    {t.company && <p className="text-gray-600 text-sm">{t.company}</p>}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.section>
    );
}