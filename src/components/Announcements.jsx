// src/components/AnnouncementSection.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Megaphone, Calendar, Clock, MapPin, Users } from "lucide-react";
import Heading from "../animation/Heading";
import Divider from "../animation/Divider";

const announcements = [
  {
    id: 1,
    title: "Jumu'ah Prayer & Khutbah",
    date: "Friday, November 21, 2025",
    time: "1:00 PM – 2:00 PM",
    location: "Main Prayer Hall, Zubyar Center",
    type: "event",
    color: "emerald",
  },
  {
    id: 2,
    title: "New Qur'an Hifz Batch Starting",
    date: "Sunday, November 23, 2025",
    time: "After Maghrib",
    location: "Room 203",
    type: "course",
    color: "amber",
  },
  {
    id: 3,
    title: "Parent-Teacher Meeting",
    date: "Saturday, November 29, 2025",
    time: "10:00 AM – 12:00 PM",
    location: "Conference Room",
    type: "meeting",
    color: "blue",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };
export default function AnnouncementSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Heading text={"Announcment"} span={"& Events"}/>
          <div className="flex justify-center items-center mb-2">
          <Divider/>
          </div>
          <motion.p
              variants={fadeUp}
              className="text-lg text-gray-700 font-roboto lg:mx-0 "
            >
             Stay updated with the latest from Zubyar Learning Center
            </motion.p>
          
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {announcements.map((ann) => (
            <motion.div
              key={ann.id}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`
                bg-white rounded-2xl shadow-lg border border-gray-100
                overflow-hidden group cursor-pointer transform hover:scale-[1.02] transition-transform duration-300
              `}
            >
              {/* Header with Color */}
              <div
                className={`
                  h-2 bg-gradient-to-r
                  ${ann.color === "emerald" && "from-emerald-500 to-emerald-600"}
                  ${ann.color === "amber" && "from-amber-500 to-amber-600"}
                  ${ann.color === "blue" && "from-blue-500 to-blue-600"}
                `}
              />

              <div className="p-6">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div
                    className={`
                      p-3 rounded-full
                      ${ann.color === "emerald" && "bg-emerald-100 text-emerald-700"}
                      ${ann.color === "amber" && "bg-amber-100 text-amber-700"}
                      ${ann.color === "blue" && "bg-blue-100 text-blue-700"}
                    `}
                  >
                    <Megaphone className="w-6 h-6" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3 font-roboto">
                  {ann.title}
                </h3>

                {/* Details */}
                <div className="space-y-2 text-sm text-gray-600 font-poppins">
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    <span>{ann.date}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span>{ann.time}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    <span>{ann.location}</span>
                  </div>
                </div>

                {/* Footer Badge */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-center">
                  <span
                    className={`
                      px-3 py-1 text-xs font-medium rounded-full
                      ${ann.color === "emerald" && "bg-emerald-100 text-emerald-700"}
                      ${ann.color === "amber" && "bg-amber-100 text-amber-700"}
                      ${ann.color === "blue" && "bg-blue-100 text-blue-700"}
                    `}
                  >
                    {ann.type.toUpperCase()}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-mainColor hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-full transition transform hover:scale-105"
          >
            <Users className="w-5 h-5" />
            For More Details Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}