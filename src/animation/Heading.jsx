/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from 'framer-motion';
const Heading = ({ text, span }) => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
      };
  return (
    <div>
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold font-alumni text-emerald-900 leading-tight"
        variants={fadeUp}
      >
        {text} <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700">
          {span}
        </span>
      </motion.h1>
    </div>
  );
};

export default Heading;
