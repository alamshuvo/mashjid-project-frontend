/* eslint-disable no-unused-vars */
// src/pages/Contact.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Heading from "../animation/Heading";
import Divider from "../animation/Divider";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const float = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const waveUp = {
  hidden: { y: 100 },
  visible: { y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
      {/* Lantern & Crescent Background (Floating + Glow) */}
      <motion.div
        variants={float}
        animate="animate"
        className="absolute top-10 right-10 md:top-20 md:right-20 opacity-10 pointer-events-none"
      >
        <motion.div
          animate={{ filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-48 h-64 md:w-64 md:h-80 relative"
        >
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-amber-400 to-amber-500 rounded-t-full"></div>
          <div className="absolute inset-x-4 bottom-0 h-40 border-x-8 border-b-8 border-amber-600 rounded-b-xl"></div>
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-amber-300 rounded-full"></div>
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Heading text={"Zubayr Learning"} span={"Center"} />
          <motion.span
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex justify-center items-center w-full my-6"
              >
                <Divider />
              </motion.span>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-base md:text-lg text-gray-700 font-roboto max-w-xl mx-auto"
          >
            Reach out to us for classes, events, or community support.
          </motion.p>
        </motion.div>

        {/* Cards Grid – Animated */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {/* Contact Info Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.15)" }}
            className="md:col-span-1 bg-white rounded-3xl shadow-lg p-6 md:p-8 border border-emerald-100"
          >
            <h3 className="text-xl font-bold text-emerald-800 mb-5 font-poppins">Get in Touch</h3>
            <div className="space-y-5 text-sm md:text-base">
              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-start gap-3"
              >
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-bold text-xs">
                  P
                </div>
                <div>
                  <p className="font-medium text-gray-800">Phone</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-start gap-3"
              >
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-xs">
                  E
                </div>
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <p className="text-gray-600 break-all">info@zubayrlearning.org</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-start gap-3"
              >
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold text-xs">
                  A
                </div>
                <div>
                  <p className="font-medium text-gray-800">Address</p>
                  <p className="text-gray-600">123 Masjid Lane<br />Newark, NJ 07104</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Map Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1 bg-white rounded-3xl shadow-lg overflow-hidden border border-emerald-100"
          >
            <div className="bg-emerald-700 text-white text-center py-3 font-poppins text-sm font-medium">
              Our Location
            </div>
            <div className="h-56 md:h-64">
              <iframe
                title="Zubayr Learning Center Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.974!2d-74.172366!3d40.735657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzA4LjMiTiA3NMKwMTAnMjIuNSJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Prayer Times Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="md:col-span-1 bg-gradient-to-b from-emerald-600 to-teal-700 text-white rounded-3xl shadow-lg p-6 md:p-8"
          >
            <h3 className="text-xl font-bold mb-4 font-poppins">Today’s Prayer Times</h3>
            <p className="text-xs opacity-90 mb-3">Newark, NJ</p>
            <div className="space-y-2 text-sm">
              <motion.div
                whileHover={{ x: 4 }}
                className="flex justify-between"
              >
                <span>Fajr</span> <span>5:32 AM</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 4 }}
                className="flex justify-between"
              >
                <span>Dhuhr</span> <span>11:58 AM</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 4 }}
                className="flex justify-between"
              >
                <span>Asr</span> <span>2:41 PM</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 4 }}
                className="flex justify-between"
              >
                <span>Maghrib</span> <span>5:47 PM</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 4 }}
                className="flex justify-between"
              >
                <span>Isha</span> <span>7:12 PM</span>
              </motion.div>
            </div>
            <div className="mt-5 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/"
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium text-sm px-5 py-2 rounded-full transition"
                >
                  Full Schedule
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave (Slide Up) */}
      <motion.div
        variants={waveUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 right-0"
      >
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,50 Q360,10 720,50 T1440,50 L1440,100 L0,100 Z" fill="#ecfdf5" />
        </svg>
      </motion.div>
    </div>
  );
};

export default Contact;