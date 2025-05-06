import React from "react";
import { FaVectorSquare } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { BiSolidDollarCircle } from "react-icons/bi";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const ServiceCard = [
  {
    id: 1,
    title: "SketchUp Modeling",
    description: 
      "We craft detailed 3D models using SketchUp to help you visualize your interior space with precision, fully customized to match your unique style, layout, and design preferences.",
    icon: <FaPenToSquare  />,
    link: "#",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Quality Products",
    description:
      "We provide a handpicked selection of durable, designer-grade furnishings and materials to bring your dream spaces to life.",
    icon: <FaVectorSquare />,
    link: "#",
    delay: 0.4,
  },
  {
    id: 3,
    title: "Affordable Price",
    description:
      "Get the high-end look without the high-end price — we make stunning interior design accessible and budget-friendly.",
    icon: <BiSolidDollarCircle />,
    link: "#",
    delay: 0.6,
  },
];
const Services = () => {
  return (
    <div id="services">
      <div className="container py-14">
        {/* heading title */}
        <div className="space-y-2 text-center max-w-[350px] mx-auto mb-8">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            className="text-3xl font-bold font-serif"
          >
            What we provide
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView={"animate"}
            className="text-gray-500 text-sm"
          >
            Bring your dream home to life with one-on-one design help & hand
            picked products
          </motion.p>
        </div>
        {/* card section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ServiceCard.map((card) => {
            return (
              <motion.div
                variants={SlideUp(card.delay)}
                initial="initial"
                whileInView="animate"
                key={card.id}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 150 }}
                className="relative overflow-hidden group bg-white border border-gray-200 rounded-xl px-6 py-12 shadow-sm hover:shadow-md duration-300 text-center md:text-left"
              >
                {/* Soft accent border on hover */}
                <div className="absolute inset-0 z-0 rounded-xl border-2 border-transparent group-hover:border-[#c2b280] transition-all duration-300 pointer-events-none"></div>

                {/* Icon */}
                <span className="relative z-10 inline-block text-2xl text-[#c2b280] border border-[#c2b280] rounded-full p-3 transition duration-300 group-hover:bg-[#c2b280] group-hover:text-white">
                  {card.icon}
                </span>

                {/* Title */}
                <p className="relative z-10 text-2xl font-bold font-serif mt-4 text-gray-800">
                  {card.title}
                </p>

                {/* Description */}
                <p className="relative z-10 text-sm text-gray-500 mt-2 leading-relaxed">
                  {card.description}
                </p>

                {/* Learn More */}
                <a
                  href={card.link}
                  className="relative z-10 inline-block mt-4 text-sm text-[#c2b280] border-b border-[#c2b280] hover:opacity-80 transition"
                >
                  Learn More →
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
