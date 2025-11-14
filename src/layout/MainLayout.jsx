import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const MainLayout = () => {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  };

  return (
    <>
      <NavBar token={token} handleLogout={handleLogout} />
      <main
        className="flex-1  bg-gray-100 min-h-screen"
      
      >
        <Outlet context={{ token }} />
      </main>

     <Footer/>
    </>
  );
};

export default MainLayout;
