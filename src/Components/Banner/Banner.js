import React from "react";
import "./banner.css";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from "../../Images/avatar.png";

function Banner() {
  return (
    <section className="banner">
      <div className="company-info">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
          alt="Logo de grupo alianza"
          className="company-logo"
          style={{
            marginLeft: "40px",
          }}
        />
        <div className="col g-0">
          <h6 className="company-name">
            <span
              style={{
                fontWeight: "normal",
                letterSpacing: "4px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {" "}
              Psico{" "}
            </span>{" "}
            <br /> <strong>Alianza</strong>
          </h6>
        </div>
      </div>
      <nav>
        <div className="dropdown">
          <div
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src={Avatar} alt="Avatar de usuario" className="user-avatar" />
            Elías Gomez
          </div>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <a className="dropdown-item" href="#">
                Perfil
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Configuraciones
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Soporte
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Salir
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Banner;
