/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Clock, Sun, Moon, CloudSun, CloudMoon, Sunrise, Sunset, Users } from "lucide-react";
import AnimatedHeading from "../animation/AnimatedHeading";
import Divider from "../animation/Divider";
import LogoLoader from "../animation/Loader";
import ErrorPage from "../animation/Error";
import { format } from 'date-fns'; // ← Only format is needed

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

const WaqtTimings = () => {
  const [timings, setTimings] = useState(null);
  const [dataDate, setDataDate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [quote, setQuote] = useState(islamicQuotes[0]);

  /* ---------- Fetch timings ---------- */
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

  /* ---------- Rotate quote ---------- */
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
        <ErrorPage message={error}/>
      </div>
    );

  // Helper: Convert "14:30" string to formatted time (e.g., "2:30 PM")
  const formatPrayerTime = (timeStr) => {
    if (!timeStr || timeStr === "0000" || !timeStr.includes(":")) return "--";

    try {
      const [hours, minutes] = timeStr.split(":").map(Number);
      const date = new Date();
      date.setHours(hours);
      date.setMinutes(minutes);
      date.setSeconds(0);
      return format(date, "h:mm a"); // e.g., "5:17 AM"
    } catch {
      return timeStr;
    }
  };

  // Your waqtList – now properly formatted
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto space-y-10 z-10">
        {/* Header Card */}
        <div className="bg-white/10 backdrop-blur-lg border font-roboto border-white/20 rounded-3xl shadow-2xl p-8">
          <div className="text-center space-y-6">
            <AnimatedHeading />

            {/* Date Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm md:text-base">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 border border-white/30">
                <p className="text-white/80 font-poppins font-medium text-lg">
                  Gregorian
                </p>
                <p className="text-white font-bold text-xl mt-1">
                  {dataDate?.readable || "Loading..."}
                </p>
              </div>

              <div className="bg-mainColor to-yellow-600/20 backdrop-blur-xl rounded-2xl p-5 border border-amber-400/50 shadow-amber-400/40">
                <p className="text-white font-poppins font-medium text-lg">
                  Hijri
                </p>
                <p className="text-white font-bold text-xl mt-1">
                  {dataDate?.hijri.date || "–"} {dataDate?.hijri.month.en}
                </p>
                <p className="text-white text-sm mt-1">
                  {dataDate?.hijri.year} AH
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <Divider />
            </div>
          </div>
        </div>

        {/* ==== LEFT: Quote  |  RIGHT: Timings ==== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          {/* Quote – full height left side */}
          <div className="lg:col-span-1 font-roboto">
            <div className="bg-gradient-to-br from-[#baa769]/20 to-amber-600/10 backdrop-blur-xl rounded-2xl p-6 border border-amber-400/40 shadow-lg shadow-amber-400/20 h-full flex flex-col justify-center">
              <blockquote className="text-amber-100 italic text-lg leading-relaxed text-center mb-4">
                {quote.text}
              </blockquote>
              <footer className="text-amber-200 text-sm font-medium text-center">
                — {quote.author}
              </footer>
            </div>
          </div>

          {/* Timings – right side */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {waqtList.map((waqt) => {
                const isJummah =
                  waqt.name.toLowerCase() === "jumu'ah" ||
                  waqt.name.toLowerCase().includes("jumuah") ||
                  waqt.name.toLowerCase().includes("friday");
                const isSunrise = waqt.name.toLowerCase() === "sunrise";

                return (
                  <div
                    key={waqt.name}
                    className={`
                      ${
                        isJummah || isSunrise
                          ? "to-yellow-600/20 backdrop-blur-xl bg-mainColor border-amber-400/50 shadow-amber-400/40"
                          : "bg-white/15 backdrop-blur-lg border-white/20 hover:bg-white/25"
                      }
                      rounded-2xl p-6 lg:p-8 border shadow-lg hover:shadow-2xl
                      transition-all duration-500 transform hover:-translate-y-1
                    `}
                  >
                    <div
                      className={`flex items-center gap-3 ${
                        isJummah ? "mb-5 justify-center" : "mb-4"
                      }`}
                    >
                      <span
                        className={`
                          text-2xl transition-transform duration-300
                          ${
                            isJummah
                              ? "text-amber-400 drop-shadow-glow"
                              : "text-emerald-400 group-hover:scale-110"
                          }
                        `}
                      >
                        {waqt.icon}
                      </span>
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
                        isJummah
                          ? "text-amber-100 text-center"
                          : "text-white/90"
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
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaqtTimings;