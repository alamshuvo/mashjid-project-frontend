// components/LogoLoader.tsx
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import LOGO_PATH from "../assets/logo.jpeg";
/* ✅ Replace this with your actual logo path (inside /public) */


const LogoLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.img
        src={LOGO_PATH}
        alt="Logo"
        className="w-28 h-28 md:w-36 md:h-36 drop-shadow-2xl rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default LogoLoader;
