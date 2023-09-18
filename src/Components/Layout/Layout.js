import React from "react";
import Banner from "../Banner/Banner";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";

function Layout() {
  return (
    <div className="container-fluid vh-100">
      <div className="row gy-0">
        <Banner />
        <div
          className="g-0 " //d-flex position-relative
          //style={{ height: "50%" }}
        >
          <Sidebar />
          <Home />
        </div>
      </div>
    </div>
  );
}

export default Layout;
