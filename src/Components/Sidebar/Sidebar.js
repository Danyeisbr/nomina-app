import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css";

const Sidebar = () => {
  // Función para colapsar o expandir la barra lateral al hacer clic en el botón
  const [sidebarActive, setSidebarActive] = useState(false);
  // Función para cambiar el texto a icono al hacer clic en el botón
  const [showText, setShowText] = useState(true);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
    setShowText(!showText);
  };

  return (
    <section
      id="sidebar"
      className={`vh-100 w-13 bg-primary d-flex flex-column justify-content-start ${
        sidebarActive ? "active" : ""
      }`}
    >
      <div className="d-flex justify-content-center mt-6">
        <button
          className="btn btn-white border-1 text-white fs-3"
          id="toggle-btn"
          onClick={toggleSidebar}
        >
          ☰
        </button>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark mt-4">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav flex-column m-3 w-100" id="menu">
            <li className="nav-item">
              <a className="nav-link active fs-3" aria-current="page" href="#">
                {showText ? (
                  <span className="text-center">Home</span>
                ) : (
                  <i className="fa fa-home fa-2x"></i>
                )}
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle active fs-3 w-100"
                href="#submenu"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {" "}
                {showText ? (
                  <span>Listas</span>
                ) : (
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    size="lg"
                    className="w-50"
                    onClick={toggleSidebar}
                  />
                )}
              </a>
              <ul
                className="dropdown-menu bg-transparent border-0 shadow-none"
                id="submenu"
              >
                <li>
                  <a className="dropdown-item text-white fs-4" href="#">
                    Empleados
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-white fs-4" href="#">
                    Cargos
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Sidebar;