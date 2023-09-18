import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import "./home.css";

function Home() {
  return (
    <section className="col-12 vh-100 d-flex justify-content-center align-items-start bg-image">
      <div className="row gy-5 mt-5">
        <div className="d-flex justify-content-center align-items-end">
          <h3 className="mt-3">
            {" "}
            Bienvenida! <br />
            Elisa Gómez
          </h3>
        </div>
        <div className="d-flex justify-content-center">
          <h4 className="mt-4 fw-normal">
            Añade los datos personales de tus empleados y después agrega su
            cargo en tu empresa
          </h4>
        </div>
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column justify-content-start">
            <FontAwesomeIcon
              icon={faUserPlus}
              size="3x"
              style={{
                transition: "color 0.2s",
              }}
              className="mt-4 mb-3 icon-hover"
            />
            <p className="fw-normal">Empieza aquí</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
