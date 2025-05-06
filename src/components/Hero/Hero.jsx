import React from "react";
import HeroPng from "../../assets/hero.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[600px] gap-10">
          {/* Text section */}
          <div className="flex flex-col justify-center gap-7 md:pr-8 xl:pr-52 text-center md:text-left pt-20 md:pt-0 px-10">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-4xl font-bold font-serif"
            >
              SKETCH LUXURY INTERIOR DESIGN
            </motion.h1>
            <motion.p
              variants={SlideUp(0.5)}
              initial="initial"
              animate="animate"
              className="text-sm md:text-base text-gray-500 leading-7"
            >
              Bring your dream to life with one-on-one design help & hand picked
              products tailored to your style, space and budget.
            </motion.p>
            <div className="space-x-4"> 
            <motion.button
              variants={SlideUp(0.8)}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
              className="relative inline-block px-6 py-3 uppercase text-white tracking-wide font-semibold bg-black rounded-full overflow-hidden group shadow-lg transition-all duration-300"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 blur-lg transition duration-500"></span>
              <span className="relative z-10">Book Your Session</span>
          </motion.button>

              
            </div>
          </div>
          {/* Images section */}
          <div className="flex flex-col items-center justify-center overflow-hidden">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={HeroPng}
              alt=""
              className="w-[120%] md:w-[900px] lg:w-[1000px] object-cover mx-auto md:mr-24"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
