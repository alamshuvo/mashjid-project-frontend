import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../utilsDesign/Button";
import useLinkClasses from "../customHooks/UseLinkClasses";
const NavBar = ({ token, handleLogout }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const aboutClasses = useLinkClasses("/about");
  const servicesClasses = useLinkClasses("/services");
  const contactClasses = useLinkClasses("/contact");



  return (
    <div>
      <nav className="bg-mainColor text-black px-4 sm:px-6 lg:px-8 py-4 flex flex-row justify-between items-center">
        {/* ---- Logo + Hamburger (mobile) ---- */}
        <div className="flex flex-row items-center justify-between w-full sm:w-auto">
          <Link to={"/"}>
            <div className="text-2xl text-[#baa769] font-bold font-alumni a">
              Mashjid Al{" "}
              <span className="text-3xl font-poppins font-normal text-white">
                Falah
              </span>
            </div>
          </Link>

          {/* Hamburger – visible only on mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-7 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-7 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-7 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>

        {/* ---- Desktop Menu ---- */}
        <div className="hidden sm:flex">
          <ul className="flex gap-10 font-thik text-white font-alumni text-2xl">
            <Link to={"/about"}>
              <li className={aboutClasses}>about</li>
            </Link>
            <Link to={"/services"}>
              <li className={servicesClasses}>services</li>
            </Link>
            <Link to={"/contact"}>
              <li className={contactClasses}>contact</li>
            </Link>
          </ul>
        </div>

        {/* ---- Right Section (Tasks / Logout / Donate) ---- */}
        <div className="hidden sm:flex items-center space-x-4">
          {token && (
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? "text-amber-300 underline"
                  : "hover:underline text-white"
              }
            >
              Tasks
            </Link>
          )}

          {token ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <Button text={"Donate Us"} />
            </Link>
          )}
        </div>
      </nav>

      {/* ---- Mobile Menu – slide‑down ---- */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-mainColor px-4 py-4 flex flex-col space-y-4">
          {/* Nav Links */}
          <ul className="flex flex-col space-y-3 font-thik text-white font-alumni text-2xl">
            <Link to={"/about"} onClick={() => setIsMenuOpen(false)}>
              <li className={aboutClasses}>about</li>
            </Link>
            <Link to={"/services"} onClick={() => setIsMenuOpen(false)}>
              <li className={servicesClasses}>services</li>
            </Link>
            <Link to={"/contact"} onClick={() => setIsMenuOpen(false)}>
              <li className={contactClasses}>contact</li>
            </Link>
          </ul>

          {/* Auth Section */}
          <div className="flex flex-col space-y-3">
            {token && (
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={
                  location.pathname === "/"
                    ? "text-amber-300 underline"
                    : "hover:underline text-white"
                }
              >
                Tasks
              </Link>
            )}

            {token ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded text-center"
              >
                Logout
              </button>
            ) : (
              <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block">
                <Button text={"Donate Us"} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;