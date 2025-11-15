// src/pages/Contact.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../animation/Heading';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
      {/* Lantern & Crescent Background */}
      <div className="absolute top-10 right-10 md:top-20 md:right-20 opacity-10 pointer-events-none">
        <div className="w-48 h-64 md:w-64 md:h-80 relative">
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-amber-400 to-amber-500 rounded-t-full"></div>
          <div className="absolute inset-x-4 bottom-0 h-40 border-x-8 border-b-8 border-amber-600 rounded-b-xl"></div>
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-amber-300 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12">
            <Heading text={"Zubayr Learning"} span={"Center"}/>
          
          <p className="mt-4 text-base md:text-lg text-gray-700 font-roboto max-w-xl mx-auto">
          Reach out to us for classes, events, or community support.
          </p>
        </div>

        {/* Cards Grid – Fully Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">

          {/* Contact Info Card */}
          <div className="md:col-span-1 bg-white rounded-3xl shadow-lg p-6 md:p-8 border border-emerald-100 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-emerald-800 mb-5 font-poppins">Get in Touch</h3>
            <div className="space-y-5 text-sm md:text-base">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-bold text-xs">
                  P
                </div>
                <div>
                  <p className="font-medium text-gray-800">Phone</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-xs">
                  E
                </div>
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <p className="text-gray-600 break-all">info@zubayrlearning.org</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold text-xs">
                  A
                </div>
                <div>
                  <p className="font-medium text-gray-800">Address</p>
                  <p className="text-gray-600">123 Masjid Lane<br />Newark, NJ 07104</p>
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-6 justify-center md:justify-start">
             
            </div>
          </div>

          {/* Map Card */}
          <div className="md:col-span-1 bg-white rounded-3xl shadow-lg overflow-hidden border border-emerald-100">
            <div className="bg-emerald-700 text-white text-center py-3 font-poppins text-sm font-medium">
              Our Location
            </div>
            <div className="h-56 md:h-64">
              <iframe
                title="Zubayr Learning Center Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.974!2d-74.172366!3d40.735657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzA4LjMiTiA3NMKwMTAnMjIuNSJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Prayer Times Card */}
          <div className="md:col-span-1 bg-gradient-to-b from-emerald-600 to-teal-700 text-white rounded-3xl shadow-lg p-6 md:p-8">
            <h3 className="text-xl font-bold mb-4 font-poppins">Today’s Prayer Times</h3>
            <p className="text-xs opacity-90 mb-3">Newark, NJ</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>Fajr</span> <span>5:32 AM</span></div>
              <div className="flex justify-between"><span>Dhuhr</span> <span>11:58 AM</span></div>
              <div className="flex justify-between"><span>Asr</span> <span>2:41 PM</span></div>
              <div className="flex justify-between"><span>Maghrib</span> <span>5:47 PM</span></div>
              <div className="flex justify-between"><span>Isha</span> <span>7:12 PM</span></div>
            </div>
            <div className="mt-5 text-center">
              <Link
                to="/"
                className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium text-sm px-5 py-2 rounded-full transition"
              >
                Full Schedule
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,50 Q360,10 720,50 T1440,50 L1440,100 L0,100 Z" fill="#ecfdf5" />
        </svg>
      </div>
    </div>
  );
};

export default Contact;