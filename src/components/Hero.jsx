/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const float = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
      {/* Crescent Moon & Minaret Background */}
      <div className="absolute top-0 right-0 w-96 h-96 md:w-[500px] md:h-[500px] opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M100,20 A60,60 0 1,1 40,80 A40,40 0 1,0 100,20"
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
          />
          <rect x="95" y="80" width="10" height="100" fill="#10b981" rx="5" />
          <circle cx="100" cy="85" r="8" fill="#fbbf24" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left: Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="space-y-8 text-center lg:text-left"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-alumni text-emerald-900 leading-tight"
              variants={fadeUp}
            >
              Welcome to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700">
                Zubayr Learning Center
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-700 font-roboto max-w-xl mx-auto lg:mx-0"
              variants={fadeUp}
            >
              A beacon of Islamic knowledge, community, and harmony in New Jersey.
            </motion.p>

            {/* Vision & Mission Cards */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.03, boxShadow: "0 15px 30px rgba(16, 185, 129, 0.15)" }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-emerald-100"
                variants={fadeUp}
              >
                <h3 className="text-xl font-semibold text-emerald-700 mb-2 font-poppins flex items-center gap-2">
                  <span className="w-6 h-1 bg-emerald-500 rounded-full"></span>
                  Our Vision
                </h3>
                <p className="text-gray-600 font-roboto text-sm md:text-base leading-relaxed">
                  To be a center of excellence for developing and sustaining a vibrant Islamic community, and a nurturing environment for the society at large.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, boxShadow: "0 15px 30px rgba(16, 185, 129, 0.15)" }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-emerald-100"
                variants={fadeUp}
              >
                <h3 className="text-xl font-semibold text-emerald-700 mb-2 font-poppins flex items-center gap-2">
                  <span className="w-6 h-1 bg-emerald-500 rounded-full"></span>
                  Our Mission
                </h3>
                <p className="text-gray-600 font-roboto text-sm md:text-base leading-relaxed">
                  To serve and engage Muslims by promoting the values and teachings of Islam and to advocate interfaith harmony in a multicultural environment in accordance with the Quran and Sunnah of Prophet Muhammad (ﷺ).
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Floating Image Card */}
          <motion.div
            variants={float}
            animate="animate"
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
                <img
                  src="https://icliny.org/wp-content/uploads/2021/11/ICLI-Musallah.png"
                  alt="Zubayr Learning Center"
                  className="w-full max-w-sm md:max-w-md h-auto rounded-2xl object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl p-4">
                  <p className="text-white text-lg font-bold font-poppins text-center drop-shadow">
                    Zubayr Learning Center
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C360,10 1080,110 1440,60 L1440,120 L0,120 Z" fill="#f0fdf4" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;