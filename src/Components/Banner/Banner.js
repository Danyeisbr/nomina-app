import React from "react";
import "./banner.css";
import Avatar from "../../Images/avatar.png";

function Banner() {
  return (
    <section className="fixed-top d-flex justify-content-between align-items-center bg-light w-100">
      <div className="d-flex align-items-center company-info">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
          alt="Logo de grupo alianza"
          className="company-logo"
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
      <div className="dropdown"></div>
      <div
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        className="d-flex"
      >
        <img src={Avatar} alt="Avatar de usuario" className="user-avatar" />
        <div className="row">
          <div>
            {" "}
            <h5 className="user-color fw-bold"> Elisa Gómez </h5>{" "}
          </div>
          <div>
            {" "}
            <h6 className="">Administradora</h6>{" "}
          </div>
        </div>
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
    </section>
  );
}

export default Banner;
