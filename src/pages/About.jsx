import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube } from "lucide-react";

export default function About() {
  return (
    
    <section className="container mx-auto px-4 py-16 max-w-6xl space-y-20">
      <head>
       <title> About Emerald Screen Printing | Custom Apparel & Merchandise</title>
       <meta name="description" content="Learn about Emerald Screen Printing, our story, and our commitment to quality apparel and promotional products. Proudly serving local businesses and organizations." />
      </head>
      {/* Header Section */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="grid lg:grid-cols-2 gap-8 items-center"
      >
        {/* Text */}
        <div>
          <h1 className="text-5xl font-extrabold text-emerald-700 mb-4">
            More Than Ink. <br /> <span className="text-black">It's Personal.</span>
          </h1>
          <p className="text-lg text-gray-600">
            At Emerald Screen Printing & Embroidery, we blend the precision of a professional print shop with the
            personal touch of a hands-on craftsman. Our standards are sky-high, our equipment is
            top-tier, and our reputation is built on quality and trust.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            We specialize in custom screen printing for apparel such as T-shirts, hoodies, caps
            and more. Offering creative support and a seamless ordering experience from start to
            finish, whether you're a small business, school, organization, or someone with a big
            idea, we print every item like it's our own.
          </p>
        </div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="w-48 h-48 lg:w-80 lg:h-80 bg-gray-100 flex items-center justify-center shadow-md">
            <img
              src="./logo_color.png"
              loading="lazy"
              alt="Emerald Screen Printing Logo"
              className="w-40 h-40 lg:w-75 lg:h-75 object-contain"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Local Business Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-emerald-600 mb-4">Proudly Local</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Emerald Screen Printing is a family-owned local business, deeply rooted in the Farmington community. We take pride
          in treating every order with the same care and attention we'd want ourselves because for us, it's not just printing.
          It's personal.
        </p>
      </motion.div>

      {/* Original Shop Sign Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        <div>
          <img
            src="./originalsign.jpg" 
            alt="Original Shop Sign"
            loading="lazy"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-emerald-700">Humble Beginnings</h3>
          <p className="text-gray-700 text-lg">
            This original sign hung outside the very first shop, a reminder of where it all started. What began in a backyard shed
            with passion and a vision has grown into a trusted brand serving hundreds of customers over the years.
          </p>
        </div>
      </motion.div>

      {/* History */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-emerald-600 mb-4">Our History</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            The journey began back in 1989 with Jeff Elmer's first company, called Home Plate Sports,
            focused on sporting goods and uniforms. With a growing demand and opportunity in
            imprinted T-shirts and sweatshirts, he partnered with a screen printer. To continue to grow
            Jeff made a pivotal decision to build more and buy the equipment and print in-house.
          </p>
          <p>
            Newly relocated to Farmington, a backyard shed became the birthplace of a full-fledged print
            operation. While working full-time at ESPN during the night shift (4 PM–12 AM), daytime hours
            were spent printing orders and building a loyal customer base.
          </p>
          <p>
            Eventually, the business outgrew the shed, leading to a commercial facility in Southington,
            a team of employees, and bigger monthly bills. Growth continued, prompting another move to a
            larger location down the street and the addition of embroidery services.
          </p>
          <p>
            Balancing a full-time job at ESPN with running a busy screen-printing shop was no small task,
            and in 2000, the business was sold. But the passion never left. After a few years off and a
            few life changes the spark reignited and in 2003, a new partnership was formed with a
            longtime ESPN colleague, running strong for six more years.
          </p>
          <p>
            Following a 29.5-year career at ESPN, retirement in 2016 didn't last long. By 2017, the third
            chapter of the screen printing story had begun, and Emerald Screen Printing was born.
          </p>
          <p className="font-semibold text-emerald-700">
            This isn't just a job. It's a craft. A commitment. A calling.
          </p>
          <p>
            And through every chapter, the goal has remained the same: serve with integrity, deliver with
            pride, and print like we're the customer.
          </p>
        </div>
      </motion.div>

      {/* Owner Portrait Image */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        <div className="order-2 md:order-1 space-y-4">
          <h3 className="text-2xl font-semibold text-emerald-700">Crafted With Care</h3>
          <p className="text-gray-700 text-lg">
            Jeff, the heart behind Emerald, brings energy and pride into every print. This photo taken mid-print,
            captures what we believe in: that the process is just as important as the product.
          </p>
          <p className="text-gray-700 text-lg italic">“We print like we're the customer.”</p>
        </div>
        <div className="order-1 md:order-2">
          <img
            src="./smiling.JPG"
            alt="Owner Smiling Making Shirts"
            loading="lazy"
            className="rounded-xl shadow-lg object-cover w-full max-h-[600px]"
          />
        </div>
      </motion.div>

      {/* Video Section - Portrait fix */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="space-y-4 text-center"
      >
        <h2 className="text-3xl font-bold text-emerald-600">See Us in Action</h2>
        <div className="max-w-[400px] mx-auto aspect-[9/16] overflow-hidden rounded-xl shadow-lg">
          <video
            src="action.MOV"
            controls
            playsInline
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </motion.div>

      {/* Social Media */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h2 className="text-2xl font-bold text-emerald-600">Follow Us Behind the Scenes</h2>
        <p className="text-gray-600">See what's hot off the press:</p>
        <div className="flex justify-center space-x-6 text-emerald-700">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500">
            <Instagram className="w-8 h-8" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500">
            <Facebook className="w-8 h-8" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
