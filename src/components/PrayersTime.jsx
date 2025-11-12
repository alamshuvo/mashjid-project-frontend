import React, { useEffect, useState } from "react";
import { Clock, Sun, Moon, CloudSun, CloudMoon, Sunrise } from "lucide-react";
import AnimatedHeading from "../animation/AnimatedHeading";
import Divider from "../animation/Divider";

const WaqtTimings = () => {
  const [timings, setTimings] = useState(null);
  const [dataDate, setDataDate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
        // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError("Failed to load timings. Please try again.");
        setLoading(false);
      }
    };

    fetchTimings();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700 text-lg">
        Loading prayer times...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-lg">
        {error}
      </div>
    );

  const waqtList = [
    {
      name: "Fajr",
      start: timings.Fajr,
      end: timings.Sunrise,
      icon: <CloudMoon />,
    },
    {
      name: "Sunrise",
      start: timings.Sunrise,
      end:"0000",
      icon: <Sunrise />,
    },
    { name: "Dhuhr", start: timings.Dhuhr, end: timings.Asr, icon: <Sun /> },
    {
      name: "Asr",
      start: timings.Asr,
      end: timings.Maghrib,
      icon: <CloudSun />,
    },
    {
      name: "Maghrib",
      start: timings.Maghrib,
      end: timings.Isha,
      icon: <Moon />,
    },
    {
      name: "Isha",
      start: timings.Isha,
      end: timings.Midnight || "23:59",
      icon: <Clock />,
    },
    {
      name: "jumuah",
      start: "1.00 pm",
      end: "2.00 pm",
    },
  ];
  //   https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80
  return (
    <section className="min-h-screen font-alumni flex flex-col py-10 px-4 relative overflow-hidden">
      {/* Optional: Subtle animated overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto space-y-10 z-10">
        {/* Header Card */}
        <div className="bg-white/10 backdrop-blur-lg border font-roboto border-white/20 rounded-3xl shadow-2xl p-8">
          <div className="text-center space-y-6">
            <AnimatedHeading />

            {/* Date Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm md:text-base">
              {/* Gregorian */}
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 border border-white/30">
                <p className="text-white/80 font-poppins font-medium text-lg">
                  Gregorian
                </p>
                <p className="text-white font-bold text-xl mt-1">
                  {dataDate?.readable || "Loading..."}
                </p>
              </div>

              {/* Hijri */}
              <div className="bg-mainColor  to-yellow-600/20 backdrop-blur-xl rounded-2xl p-5 border  border-amber-400/50 shadow-amber-400/40">
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

            {/* Decorative Line */}
            <div className="flex justify-center">
              <Divider />
            </div>
          </div>
        </div>

        {/* Prayer Times Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-6">
          {waqtList.map((waqt) => {
            const isJummah =
              waqt.name.toLowerCase() === "Jumu'ah" ||
              waqt.name.toLowerCase().includes("jumuah") ||
              waqt.name.toLowerCase().includes("friday");
            console.log(waqt.name, isJummah);
            const isSunrise = waqt.name.toLowerCase() === "sunrise";
            return (
              <div
                key={waqt.name}
                className={`
          ${
            isJummah || isSunrise
              ? " to-yellow-600/20 backdrop-blur-xl bg-mainColor  border-amber-400/50 shadow-amber-400/40"
              : "bg-white/15 backdrop-blur-lg border-white/20 hover:bg-white/25"
          }
          rounded-2xl p-6 lg:p-8 border 
          shadow-lg hover:shadow-2xl 
          transition-all duration-500 transform hover:-translate-y-1
        `}
              >
                {/* Special Jumua'h Badge
        {isJummah && (
           
        )} */}

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
                  <p className="flex justify-between text-sm lg:text-base">
                    <span
                      className={`font-medium ${
                        isJummah ? "text-amber-200" : "text-white/70"
                      }`}
                    >
                      End:
                    </span>
                    <span className="font-mono font-semibold">{waqt.end}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WaqtTimings;
