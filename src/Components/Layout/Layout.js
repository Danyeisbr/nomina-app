import React from "react";
import Banner from "../Banner/Banner";
import Sidebar from "../Sidebar/Sidebar";

function Layout({ children }) {
  return (
    <div>
      <Banner />
      <div className="main-content">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}

export default Layout;
