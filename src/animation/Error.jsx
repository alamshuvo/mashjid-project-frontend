/* eslint-disable no-unused-vars */
import React from "react";
import { motion} from "framer-motion";
import { AlertTriangle } from "lucide-react";

const ErrorPage = ({ message }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-mainColor text-white relative overflow-hidden">
      {/* Animated Background Circles */}
      <motion.div
        className="absolute w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl"
        animate={{ x: [0, 100, -100, 0], y: [0, 50, -50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Error Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-2xl shadow-2xl text-center max-w-md"
      >
        {/* Error Icon */}
        <motion.div
          initial={{ rotate: -15, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          className="flex justify-center mb-6"
        >
          <AlertTriangle className="w-16 h-16 text-amber-400" />
        </motion.div>

        {/* Error Title */}
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-amber-300 mb-3"
        >
          Oops! Error Occurred
        </motion.h1>

        {/* Error Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm text-amber-100 leading-relaxed"
        >
          {message}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 rounded-full bg-amber-500 hover:bg-amber-600 text-emerald-900 font-semibold transition-all duration-300"
          >
            Try Again
          </button>

          <a
            href="/"
            className="px-6 py-2 rounded-full border border-amber-400 text-amber-300 hover:bg-amber-500/20 transition-all duration-300"
          >
            Go Home
          </a>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 italic text-sm text-amber-200"
        >
          "Indeed, with hardship comes ease." — Quran 94:5
        </motion.blockquote>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
