// src/animation/Divider.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ornament = {
  animate: {
    rotate: [0, 360],
    transition: { duration: 20, repeat: Infinity, ease: "linear" },
  },
};

export default function Divider() {
  return (
    <div className="flex items-center gap-3 w-full max-w-xs">
      {/* Left Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent flex-1"
      />

      {/* Center Ornament */}
      <motion.div
        variants={ornament}
        animate="animate"
        className="relative w-10 h-10"
      >
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <path
            d="M20,5 L25,15 L35,15 L27,22 L30,32 L20,27 L10,32 L13,22 L5,15 L15,15 Z"
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
            className="drop-shadow-sm"
          />
          <circle cx="20" cy="20" r="4" fill="#fbbf24" className="drop-shadow" />
        </svg>
      </motion.div>

      {/* Right Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="h-px bg-gradient-to-l from-transparent via-emerald-400 to-transparent flex-1"
      />
    </div>
  );
}