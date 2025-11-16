/* eslint-disable no-unused-vars */
// src/animation/SmoothScrollProvider.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SmoothScrollProvider({ children }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollBehavior = () => {
      const isMobile = window.innerWidth < 768;
      const root = document.documentElement;

      root.style.scrollBehavior = isMobile ? "auto" : "smooth";

      if (isMobile) {
        root.style.scrollbarWidth = "auto";
        root.style.scrollbarColor = "auto";
      } else {
        root.style.scrollbarWidth = "thin";
        root.style.scrollbarColor = "#10b981 #ecfdf5";
      }
    };

    // Track scroll progress
    const updateProgress = () => {
      const winScroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
    };

    updateScrollBehavior();
    updateProgress();

    const handleResize = () => {
      updateScrollBehavior();
      updateProgress();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", updateProgress);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Circle */}
      <motion.div
        className="fixed top-4 right-4 z-50 w-14 h-14 pointer-events-none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
      >
        <svg className="w-full h-full -rotate-90">
          {/* Background Circle */}
          <circle
            cx="28"
            cy="28"
            r="24"
            stroke="#ffffff"
            strokeWidth="6"
            fill="none"
            className="opacity-30"
          />
          {/* Progress Circle */}
          <motion.circle
            cx="28"
            cy="28"
            r="24"
            stroke="#10b981"
            strokeWidth="6"
            fill="none"
            strokeDasharray="150.796"
            initial={{ strokeDashoffset: 150.796 }}
            animate={{ strokeDashoffset: 150.796 - (150.796 * scrollProgress) / 100 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="drop-shadow-md"
          />
        </svg>

        {/* Percentage Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            key={Math.round(scrollProgress)}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-xs font-bold text-mainGold font-poppins"
          >
            {Math.round(scrollProgress)}%
          </motion.span>
        </div>
      </motion.div>

      {children}
    </>
  );
}