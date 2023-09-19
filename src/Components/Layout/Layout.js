import React from "react";
import { useLocation } from "react-router-dom";
import Banner from "../Banner/Banner";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ListEmployees from "../Employee/ListEmployees";
import ListJobs from "../Job/ListJobs";

function Layout() {
  // Usamos useLocation para obtener la ubicación actual
  const location = useLocation();

  return (
    <div className="container-fluid vh-100">
      <div className="row gy-0">
        <Banner />
        <div className="g-0">
          <Sidebar />
          {/* Renderiza el componente central según la ruta */}
          {location.pathname === "/home" ? <Home /> : null}
          {location.pathname === "/employees" ? <ListEmployees /> : null}
          {location.pathname === "/jobs" ? <ListJobs /> : null}
        </div>
      </div>
    </div>
  );
}

export default Layout;