import React from "react";
import { motion } from "framer-motion";
import { SlideLeft } from "../../animation/animate";

const Brands = () => {
  const letters = ["I", "D", "E", "K", "O", "R", "A"];
  
  return (
    <>
      <div className="container py-14">
        <div className="flex flex-wrap justify-center lg:justify-between gap-6 md:gap-6">
          {letters.map((letter, index) => (
            <motion.div
              key={index}
              variants={SlideLeft(0.2 + index * 0.2)}
              initial="initial"
              whileInView={"animate"}
              className="text-4xl md:text-6xl lg:text-8xl font-bold"
            >
              {letter}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Brands;
