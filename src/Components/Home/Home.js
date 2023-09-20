import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import NewEmployee from "../Employee/NewEmployee";
import "./home.css";

function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="col-lg-12 vh-100 d-flex justify-content-center align-items-start bg-image">
      <div className="row gy-5 mt-5 d-flex justify-content-md-center justify-content-sm-center justify-content-xs-center">
        <div className="col-lg-12 col-md-11 d-flex justify-content-center align-items-end">
          <h3 className="mt-5">
            {" "}
            Bienvenida! <br />
            Elisa Gómez
          </h3>
        </div>
        <div className="d-flex col-lg-12 col-md-9 col-sm-8 col-xs-4 justify-content-lg-center justify-content-md-center justify-content-sm-end  justify-content-xs-end">
          <h4 className="mt-4 fw-normal text-center">
            Añade los datos personales de tus empleados y después agrega su
            cargo en tu empresa
          </h4>
        </div>
        <div className="col-lg-12 col-md-11 d-flex justify-content-center">
          <div className="d-flex flex-column justify-content-start">
            <button
              className="btn mt-4 mb-3 icon-hover"
              onClick={handleShowModal}
            >
              <FontAwesomeIcon
                icon={faUserPlus}
                size="3x"
              />
            </button>
            <NewEmployee showModal={showModal} handleShowModal={handleShowModal} handleCloseModal={handleCloseModal} />
            <p className="fw-normal">Empieza aquí</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;