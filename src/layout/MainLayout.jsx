import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";



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
      <main className="flex-1 p-4 sm:p-6 bg-gray-100 min-h-screen">
        <Outlet context={{ token }} />
        
      </main>
      

      <footer>
        <div className="bg-[#eff6ff] text-black text-center p-4">
          &copy; {new Date().getFullYear()} TaskTracker. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default MainLayout;
