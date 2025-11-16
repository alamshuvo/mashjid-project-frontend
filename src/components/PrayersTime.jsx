/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Sun,
  Moon,
  CloudSun,
  CloudMoon,
  Sunrise,
  Sunset,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";               // <-- NEW
import AnimatedHeading from "../animation/AnimatedHeading";
import Divider from "../animation/Divider";
import LogoLoader from "../animation/Loader";
import ErrorPage from "../animation/Error";
import { format } from "date-fns";

/* ──────────────────────  QUOTES  ────────────────────── */
const islamicQuotes = [
  {
    text: "The best among you are those who have the best manners and character.",
    author: "Prophet Muhammad (PBUH)",
  },
  {
    text: "Do not waste water even if you were at a running stream.",
    author: "Prophet Muhammad (PBUH)",
  },
  {
    text: "Speak a good word or remain silent.",
    author: "Prophet Muhammad (PBUH)",
  },
  {
    text: "The strongest among you is the one who controls his anger.",
    author: "Prophet Muhammad (PBUH)",
  },
  {
    text: "Seek knowledge from the cradle to the grave.",
    author: "Prophet Muhammad (PBUH)",
  },
  {
    text: "A person’s tongue can give you the taste of his heart.",
    author: "Ibn Qayyim Al-Jawziyyah",
  },
  {
    text: "The heart is like a bird: love as its head and wisdom as its two wings.",
    author: "Ibn Al-Qayyim",
  },
  {
    text: "Patience is a pillar of faith.",
    author: "Umar ibn Al-Khattab (RA)",
  },
];

/* ──────────────────────  VARIANTS  ────────────────────── */
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const WaqtTimings = () => {
  const [timings, setTimings] = useState(null);
  const [dataDate, setDataDate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [quote, setQuote] = useState(islamicQuotes[0]);

  /* ---------- FETCH TIMINGS ---------- */
  useEffect(() => {
    const fetchTimings = async () => {
      try {
        const response = await fetch(
          "https://api.aladhan.com/v1/timingsByAddress?address=New%20Jersey,USA&method=2"
        );
        const data = await response.json();
        setTimings(data.data.timings);
        setDataDate(data.data.date);
        setLoading(false);
      } catch (err) {
        setError("Failed to load timings. Please try again.");
        setLoading(false);
      }
    };
    fetchTimings();
  }, []);

  /* ---------- ROTATE QUOTE ---------- */
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * islamicQuotes.length);
      setQuote(islamicQuotes[randomIndex]);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <LogoLoader />;
  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-lg">
        <ErrorPage message={error} />
      </div>
    );

  /* ---------- TIME FORMATTER ---------- */
  const formatPrayerTime = (timeStr) => {
    if (!timeStr || timeStr === "0000" || !timeStr.includes(":")) return "--";
    try {
      const [h, m] = timeStr.split(":").map(Number);
      const d = new Date();
      d.setHours(h);
      d.setMinutes(m);
      d.setSeconds(0);
      return format(d, "h:mm a");
    } catch {
      return timeStr;
    }
  };

  const waqtList = [
    {
      name: "Fajr",
      start: formatPrayerTime(timings.Fajr),
      end: formatPrayerTime(timings.Sunrise),
      icon: <CloudMoon className="w-6 h-6" />,
    },
    {
      name: "Sunrise",
      start: formatPrayerTime(timings.Sunrise),
      end: "00:00",
      icon: <Sunrise className="w-6 h-6" />,
    },
    {
      name: "Dhuhr",
      start: formatPrayerTime(timings.Dhuhr),
      end: formatPrayerTime(timings.Asr),
      icon: <Sun className="w-6 h-6" />,
    },
    {
      name: "Asr",
      start: formatPrayerTime(timings.Asr),
      end: formatPrayerTime(timings.Maghrib),
      icon: <CloudSun className="w-6 h-6" />,
    },
    {
      name: "Maghrib",
      start: formatPrayerTime(timings.Maghrib),
      end: formatPrayerTime(timings.Isha),
      icon: <Sunset className="w-6 h-6" />,
    },
    {
      name: "Isha",
      start: formatPrayerTime(timings.Isha),
      end: formatPrayerTime(timings.Midnight || "12:00 AM"),
      icon: <Moon className="w-6 h-6" />,
    },
    {
      name: "Jumu'ah",
      start: "1:00 PM",
      end: "2:00 PM",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <section className="min-h-screen font-alumni flex flex-col py-10 px-4 relative overflow-hidden">
      {/* Subtle overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"
      />

      <div className="w-full max-w-7xl mx-auto space-y-10 z-10">
        {/* ── Header Card ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg border font-roboto border-white/20 rounded-3xl shadow-2xl p-8"
        >
          <div className="text-center space-y-6">
            <AnimatedHeading />

            {/* Date Info Grid */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm md:text-base"
            >
              <motion.div
                variants={scaleIn}
                className="bg-white/20 backdrop-blur-md rounded-2xl p-5 border border-white/30"
              >
                <p className="text-white/80 font-poppins font-medium text-lg">
                  Gregorian
                </p>
                <p className="text-white font-bold text-xl mt-1">
                  {dataDate?.readable || "Loading..."}
                </p>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-mainColor to-yellow-600/20 backdrop-blur-xl rounded-2xl p-5 border border-amber-400/50 shadow-amber-400/40"
              >
                <p className="text-white font-poppins font-medium text-lg">
                  Hijri
                </p>
                <p className="text-white font-bold text-xl mt-1">
                  {dataDate?.hijri.date || "–"} {dataDate?.hijri.month.en}
                </p>
                <p className="text-white text-sm mt-1">
                  {dataDate?.hijri.year} AH
                </p>
              </motion.div>
            </motion.div>

            <div className="flex justify-center">
              <Divider />
            </div>
          </div>
        </motion.div>

        {/* ── LEFT: Quote | RIGHT: Timings ── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Quote – full height left side */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-1 font-roboto"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-[#baa769]/20 to-amber-600/10 backdrop-blur-xl rounded-2xl p-6 border border-amber-400/40 shadow-lg shadow-amber-400/20 h-full flex flex-col justify-center"
            >
              <motion.blockquote
                key={quote.text}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-amber-100 italic text-lg leading-relaxed text-center mb-4"
              >
                {quote.text}
              </motion.blockquote>
              <motion.footer
                key={quote.author}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-amber-200 text-sm font-medium text-center"
              >
                — {quote.author}
              </motion.footer>
            </motion.div>
          </motion.div>

          {/* Timings – right side */}
          <div className="lg:col-span-2">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {waqtList.map((waqt) => {
                const isJummah =
                  waqt.name.toLowerCase() === "jumu'ah" ||
                  waqt.name.toLowerCase().includes("jumuah") ||
                  waqt.name.toLowerCase().includes("friday");
                const isSunrise = waqt.name.toLowerCase() === "sunrise";

                return (
                  <motion.div
                    key={waqt.name}
                    variants={scaleIn}
                    whileHover={{ y: -6, scale: 1.04 }}
                    className={`
                      ${
                        isJummah || isSunrise
                          ? "to-yellow-600/20 backdrop-blur-xl bg-mainColor border-amber-400/50 shadow-amber-400/40"
                          : "bg-white/15 backdrop-blur-lg border-white/20 hover:bg-white/25"
                      }
                      rounded-2xl p-6 lg:p-8 border shadow-lg hover:shadow-2xl
                      transition-all duration-500 transform
                    `}
                  >
                    <div
                      className={`flex items-center gap-3 ${
                        isJummah ? "mb-5 justify-center" : "mb-4"
                      }`}
                    >
                      <motion.span
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`
                          text-2xl
                          ${
                            isJummah
                              ? "text-amber-400 drop-shadow-glow"
                              : "text-emerald-400"
                          }
                        `}
                      >
                        {waqt.icon}
                      </motion.span>
                      <h2
                        className={`
                          font-bold
                          ${
                            isJummah
                              ? "text-3xl text-amber-100 drop-shadow-lg"
                              : "text-2xl text-white"
                          }
                        `}
                      >
                        {waqt.name}
                      </h2>
                    </div>

                    <div
                      className={`space-y-2 ${
                        isJummah ? "text-amber-100 text-center" : "text-white/90"
                      }`}
                    >
                      <p className="flex justify-between text-sm lg:text-base">
                        <span
                          className={`font-medium ${
                            isJummah ? "text-amber-200" : "text-white/70"
                          }`}
                        >
                          Start:
                        </span>
                        <span className="font-mono font-semibold">
                          {waqt.start}
                        </span>
                      </p>
                      {waqt.end !== null && (
                        <p className="flex justify-between text-sm lg:text-base">
                          <span
                            className={`font-medium ${
                              isJummah ? "text-amber-200" : "text-white/70"
                            }`}
                          >
                            End:
                          </span>
                          <span className="font-mono font-semibold">
                            {waqt.end}
                          </span>
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WaqtTimings;