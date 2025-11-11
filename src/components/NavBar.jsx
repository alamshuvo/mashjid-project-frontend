import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import Button from "../utilsDesign/Button";
import useLinkClasses from "../utilsDesign/GetLInkClass";

const NavBar = ({ token, handleLogout }) => {
  const location = useLocation(); // Get the current location object
  const aboutClasses = useLinkClasses("/about")
  const servicesClasses = useLinkClasses("/services")
  const contactClasses = useLinkClasses("/contact")


  return (
    <div>
      <nav className="bg-mainColor text-black px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
        <Link to={"/"}>
          {" "}
          <div className="text-2xl font-bold font-alumni">
            Mashjid Al{" "}
            <span className="text-3xl font-poppins font-normal text-white">
              Falah
            </span>
          </div>
        </Link>
        <div>
            <ul className="flex gap-10 font-thik text-white font-alumni text-2xl">
                {/* Dynamically applying classes based on route */}
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
        <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-2 sm:space-y-0 w-full sm:w-auto">
          {token && (
            <Link 
              to="/" 
              className={location.pathname === '/' ? "text-amber-300 underline" : "hover:underline text-white"}
            >
              Tasks
            </Link>
          )}

          {token ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded w-full sm:w-auto"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="w-full sm:w-auto">
             <Button text={"Donate Us"}></Button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;