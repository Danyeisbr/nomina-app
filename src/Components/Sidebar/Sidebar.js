import React, { useState } from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
//import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css";

const Sidebar = () => {
  // Función para colapsar o expandir la barra lateral al hacer clic en el botón
  const [sidebarActive, setSidebarActive] = useState(false);
  // Función para cambiar el texto a icono al hacer clic en el botón
  const [showText, setShowText] = useState(true);
  // Estado para controlar la visibilidad del dropdown
  //const [mostrarDropdown, setMostrarDropdown] = useState(true);

  // Función para alternar la visibilidad del texto
  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
    setShowText(!showText);
    //setMostrarDropdown(!mostrarDropdown);
  };

  return (
    <section
      id="sidebar"
      className={`position-absolute h-100 w-13 bg-primary d-flex flex-column justify-content-start g-0 ${
        sidebarActive ? "active" : ""
      }`}
    >
      <div className="d-flex justify-content-center mt-5 h-18">
        <button
          className="btn text-white fs-2"
          id="toggle-btn"
          onClick={toggleSidebar}
        >
          ☰
        </button>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav flex-column m-3 w-100" id="menu">
            <li className="nav-item">
              {showText ? (
                <Link to="/home">
                  <button className="btn fs-4 btn-primary bg-transparent border border-0">
                    Home
                  </button>
                </Link>
              ) : (
                <Link to="/home">
                  <button className="btn fs-4 btn-primary bg-transparent border border-0">
                    <i className="fa fa-home fa-2x"></i>
                  </button>
                </Link>
              )}
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle active fs-4 w-100 mt-4 ms-1"
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
                    onClick={toggleSidebar}
                  />
                )}
              </a>
              <ul
                className="dropdown-menu bg-transparent border-0 shadow-none"
                id="submenu"
              >
                <li>
                  <Link to="/employees">
                    <a className="dropdown-item text-white fs-5" href="#">
                      Empleados
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/jobs">
                    <a className="dropdown-item text-white fs-5" href="#">
                      Cargos
                    </a>
                  </Link>
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
