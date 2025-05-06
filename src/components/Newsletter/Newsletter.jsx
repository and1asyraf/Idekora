import React from "react";
import { delay, motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const Newsletter = () => {
  return (
    <div id="newsletter" className="max-w-[500px] mx-auto space-y-5 py-14">
      <motion.h1
        variants={SlideUp(0.2)}
        initial="initial"
        whileInView="animate"
        className="text-3xl font-bold font-serif text-center"
      >
        Subsribe to our Community
      </motion.h1>
      <motion.p
        variants={SlideUp(0.4)}
        initial="initial"
        whileInView="animate"
        className="max-w-[300px] mx-auto text-gray-500 text-sm text-center"
      >
        Stay updated with the latest trends, tips, and inspiration in interior design. <br />
        <span className="font-extrabold !font-bold text-black">Straight to your Whatsapp.</span>  
      </motion.p>
      {/* form here */}
      <motion.div
        variants={SlideUp(0.6)}
        initial="initial"
        whileInView="animate"
        className="!mt-4 flex justify-center"
      >
        
        <button className="bg-black text-white px-6 py-4 uppercase">
          Subscribe
        </button>
      </motion.div>
    </div>
  );
};

export default Newsletter;
