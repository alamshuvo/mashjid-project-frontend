/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Divider from "../animation/Divider";

// ── Animation Variants ─────────────────────────────────────
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const float = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const waveUp = {
  animate: {
    y: [0, -10, 0],
    transition: {
      y: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "reverse",
      },
    },
  },
};

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
      {/* ── Crescent Moon & Minaret (Floating) ── */}
      <motion.div
        variants={float}
        animate="animate"
        className="absolute top-0 right-0 w-96 h-96 md:w-[500px] md:h-[500px] opacity-20 pointer-events-none"
      >
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
      </motion.div>

      <div className="container mx-auto px-4 py-10 md:py-16">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* ── Left: Content ── */}
          <motion.div className="space-y-8 text-center lg:text-left">
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-alumni text-emerald-900 leading-tight"
            >
              Welcome to <br />
              <motion.span
                initial={{ backgroundPosition: "0%" }}
                animate={{ backgroundPosition: "100%" }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700"
                style={{ backgroundSize: "200%" }}
              >
                Zubayr Learning Center
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex justify-center items-center w-full my-6"
              >
                <Divider />
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-gray-700 font-roboto max-w-xl mx-auto lg:mx-0"
            >
              A beacon of Islamic knowledge, community, and harmony in New
              Jersey.
            </motion.p>

            {/* Vision & Mission Cards */}
            <div className="space-y-6">
              <motion.div
                variants={fadeUp}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 15px 30px rgba(16, 185, 129, 0.2)",
                  transition: { duration: 0.3 },
                }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-emerald-100"
              >
                <h3 className="text-xl font-semibold text-emerald-700 mb-2 font-poppins flex items-center gap-2">
                  <motion.span
                    animate={{ width: [0, 24, 24, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-1 bg-emerald-500 rounded-full inline-block"
                  />
                  Our Vision
                </h3>
                <p className="text-gray-600 font-roboto text-sm md:text-base leading-relaxed">
                  To be a center of excellence for developing and sustaining a
                  vibrant Islamic community, and a nurturing environment for the
                  society at large.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 15px 30px rgba(16, 185, 129, 0.2)",
                  transition: { duration: 0.3 },
                }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-emerald-100"
              >
                <h3 className="text-xl font-semibold text-emerald-700 mb-2 font-poppins flex items-center gap-2">
                  <motion.span
                    animate={{ width: [0, 24, 24, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="w-6 h-1 bg-emerald-500 rounded-full inline-block"
                  />
                  Our Mission
                </h3>
                <p className="text-gray-600 font-roboto text-sm md:text-base leading-relaxed">
                  To serve and engage Muslims by promoting the values and
                  teachings of Islam and to advocate interfaith harmony in a
                  multicultural environment in accordance with the Quran and
                  Sunnah of Prophet Muhammad.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Right: Floating Image Card ── */}
          <motion.div
            variants={float}
            animate="animate"
            className="flex justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative group"
            >
              <motion.div
                animate={{
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-3xl blur-lg group-hover:opacity-100 transition duration-500"
              />
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
                <img
                  src="https://icliny.org/wp-content/uploads/2021/11/ICLI-Musallah.png"
                  alt="Zubayr Learning Center"
                  className="w-full max-w-sm md:max-w-md h-auto rounded-2xl object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl p-4">
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-white text-lg font-bold font-poppins text-center drop-shadow"
                  >
                    Zubayr Learning Center
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Subtle Wave Divider (Slide Up) ── */}
      <motion.div
        variants={waveUp}
        animate="animate"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 right-0"
      >
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,60 C360,10 1080,110 1440,60 L1440,120 L0,120 Z"
            fill="#0f382b"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero;
