import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const Sidebar = () => {
  // Función para colapsar o expandir la barra lateral
  const [sidebarActive, setSidebarActive] = useState(false);
  // Función para cambiar el texto a icono
  const [showText, setShowText] = useState(true);
  // Función para alternar la visibilidad del texto y la barra lateral
  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
    setShowText(!showText);
  };

  const handleResize = () => {
    // Verificar si la pantalla es mediana o pequeña usando las clases de Bootstrap
    const isMediumOrSmallScreen = window.innerWidth < 992; // 992px es el punto de quiebre de Bootstrap para pantallas medianas

    if (isMediumOrSmallScreen) {
      toggleSidebar(); // Disparar el evento cuando la pantalla sea mediana o pequeña
    } else {
      // Cambiar el estado cuando la pantalla es grande
      setSidebarActive(false);
      setShowText(true);
    }
  };

  useEffect(() => {
    // Agrego el evento de cambio de tamaño de pantalla cuando el componente se monta
    window.addEventListener("resize", handleResize);

    // Llamar a handleResize() inicialmente para verificar el tamaño de la pantalla
    handleResize();

    // Remover el evento de cambio de tamaño de pantalla cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      id="sidebar"
      className={`col-md-1 col-sm-1 position-absolute bg-primary d-flex flex-column justify-content-start w-13 h-100 g-0 ${
        sidebarActive ? "active" : ""
      }`}
    >
      <div className="d-flex justify-content-center mt-5 h-18">
        <button
          className="btn text-white fs-2 border border-0"
          id="toggle-btn"
          onClick={toggleSidebar}
        >
          ☰
        </button>
      </div>
      <div>
        <ul className="list-unstyled m-3" id="menu">
          <li className="mb-3">
            {showText ? (
              <Link to="/home">
                <button className="btn btn-primary fs-4 w-100">
                  <div className="d-flex justify-content-start">Home</div>
                </button>
              </Link>
            ) : (
              <Link to="/home">
                <button className="btn btn-primary fs-4 w-100">
                  <i className="fa fa-home fa-2x"></i>
                </button>
              </Link>
            )}
          </li>
          <li className="nav-item dropdown">
            <button
              className="btn btn-primary dropdown-toggle fs-4 w-100 mt-4
              custom-dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              aria-haspopup="true"
            >
              {showText ? (
                <div className="d-flex justify-content-between">
                  <span> Listas</span>{" "}
                  <FontAwesomeIcon icon={faChevronDown} size="lg" />
                </div>
              ) : (
                <FontAwesomeIcon
                  icon={faChevronUp}
                  size="lg"
                  onClick={toggleSidebar}
                />
              )}
            </button>
            <ul
              className="dropdown-menu bg-transparent border-0 shadow-none"
              id="submenu"
            >
              <li>
                <Link to="/employees" className="dropdown-item text-white fs-5">
                  Empleados
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="dropdown-item text-white fs-5">
                  Cargos
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;