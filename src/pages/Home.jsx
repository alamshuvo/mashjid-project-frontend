import React from "react";
import WaqtTimings from "../components/PrayersTime";

import bgImage from "../assets/ffff.webp";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
     
      <div
        style={{
          backgroundImage: `
          linear-gradient(to bottom right, rgba(15, 23, 42, 0.10), rgba(6, 78, 59, 0.85)),
          url('${bgImage}')
        `
            .replace(/\s+/g, " ")
            .trim(),
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <WaqtTimings />
      </div>
    <div className="mt-10">
    <Hero />
    </div>
    </div>
  );
};

export default Home;
