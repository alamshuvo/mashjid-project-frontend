/* eslint-disable no-unused-vars */
// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Heading from '../animation/Heading';
import Divider from '../animation/Divider';

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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
const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50 relative overflow-hidden">

      {/* ── Decorative Lantern (Fade In) ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute top-10 right-10 md:top-20 md:right-20 pointer-events-none"
      >
        <div className="w-48 h-64 md:w-64 md:h-80 relative">
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-amber-400 to-amber-500 rounded-t-full" />
          <div className="absolute inset-x-4 bottom-0 h-40 border-x-8 border-b-8 border-amber-600 rounded-b-xl" />
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-amber-300 rounded-full" />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">

        {/* ── Hero Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Heading text="Zubayr Learning" span="Center" />
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
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-4 text-base md:text-lg text-gray-700 max-w-2xl mx-auto"
          >
            Empowering minds in NJ since 2015 where faith, knowledge, and community meet.
          </motion.p>
        </motion.div>

        {/* ── Stats ── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto"
        >
          {[
            { value: '5000+', label: 'Students Enrolled' },
            { value: '150+',  label: 'Expert Teachers' },
            { value: '4.9/5', label: 'Parent Rating' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg border border-mainColor hover:shadow-2xl transition-all duration-300 cursor-default"
            >
              <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-mainColor to-mainGold rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 4.48 10.87 9 12 4.52-1.13 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </div>
              <div className="text-3xl font-bold text-black font-roboto">{stat.value}</div>
              <div className="text-sm text-gray-600 mt-1 font-roboto">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Who We Are + Mission/Vision ── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20"
        >
          {/* Left – Text */}
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-alumni">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-5 leading-relaxed font-roboto">
              Founded in 2015, <strong>Zubyar Learning Center</strong> has become a beacon of educational excellence in Banani, Dhaka. We combine Islamic values with modern teaching methods to nurture well‑rounded individuals.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed font-roboto">
              From Quranic studies to STEM courses, our curriculum is designed to inspire curiosity, build character, and prepare students for a global future — all within a supportive, faith‑centered environment.
            </p>

            <ul className="space-y-3">
              {[
                'Smart classrooms with interactive boards',
                'Small class sizes for personalized attention',
                'Daily Salah breaks and Jumu\'ah facilities',
                'Parent portal & weekly progress updates',
              ].map((f, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-gray-700 font-roboto"
                >
                  <div className="w-2 h-2 bg-amber-400 rounded-full" />
                  {f}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right – Mission / Vision Card */}
          <motion.div
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-mainGold to-mainColor rounded-2xl p-8 text-white shadow-xl"
          >
            <motion.h3
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="text-2xl font-bold mb-4 font-roboto"
            >
              Our Mission
            </motion.h3>
            <motion.p
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 font-roboto"
            >
              To provide accessible, high‑quality education rooted in Islamic principles that empowers every child to excel academically, spiritually, and socially.
            </motion.p>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-5"
            >
              <h4 className="font-semibold mb-2 font-roboto">Our Vision</h4>
              <p className="text-sm font-roboto">
                A generation of confident Muslim leaders equipped with knowledge, ethics, and innovation to serve Bangladesh and the world.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Core Values ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-alumni">
            Our Core Values
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Guided by faith, driven by excellence
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20"
        >
          {[
            { title: 'Ilm (Knowledge)', desc: 'Pursuit of both religious and worldly education' },
            { title: 'Ukhuwwah (Brotherhood)', desc: 'Fostering community and mutual respect' },
            { title: 'Ihsan (Excellence)', desc: 'Doing everything with sincerity and quality' },
          ].map((v, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-mainColor hover:shadow-2xl transition-all duration-300 cursor-default"
            >
              <div className="w-16 h-16 mx-auto mb-5 bg-gradient-to-br from-mainColor to-mainGold rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 4.48 10.87 9 12 4.52-1.13 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
              <p className="text-gray-600 text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Contact CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-mainGold to-mainColor rounded-3xl p-8 md:p-12 text-white text-center max-w-4xl mx-auto shadow-xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Visit Us in NJ</h3>
          <p className="mb-6 max-w-2xl mx-auto">
          *******
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+19086555529"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-full transition"
            >
              Call Now
            </motion.a>
            <motion.a
              href="mailto:info@zubyar.edu.bd"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-white text-black font-medium py-3 px-6 rounded-full transition"
            >
              Email Us
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* ── Bottom Wave (Slide Up) ── */}
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

export default About;