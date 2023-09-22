import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faTrash,
  faDownload,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import NewForm from "../Form/NewForm";
import Delete from "../Button/Delete";
//Campos para el formulario de nuevo empleado
import { fieldsForEmployee } from "../../Data/DataFormEmployee";
import Table from "../Table/Table";

// Datos de prueba para las filas de la tabla
import { employeesData } from "../../Data/EmployeesData"; //
import "./ListEmployees.css";

function ListEmployees() {
  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowDelete = () => {
    setShowDelete(true);
  };

  const handleCloseDelete = () => {
    setShowDelete(false);
  };

  return (
    <section className="d-flex flex-column justify-content-start vh-100 ml-13">
      <div>
        <div className="d-flex align-items-center mt-5 p-3">
          <Link to="/home">
            <FontAwesomeIcon
              icon={faArrowLeft}
              size="lg"
              className="me-2 mt-4 text-color"
            />
          </Link>
          <h2 className="mt-4 mb-0">Empleados</h2>
        </div>
      </div>
      <div>
        <div className="mt-1 ms-4 p-2">
          <button
            className="btn btn-md rounded-pill border border-0 me-2 btn-hover text-color fw-bold"
            onClick={handleShowDelete}
          >
            <FontAwesomeIcon icon={faTrash} className="me-1" />
            Borrar selección
          </button>
          <Delete
            title="Empleado"
            item="a Juan Fernando Rosero"
            show={showDelete}
            onHide={handleCloseDelete}
            // onConfirm={handleConfirmDelete}
          />
          <button className="btn btn-md rounded-pill border border-0 btn-hover text-color fw-bold">
            <FontAwesomeIcon icon={faDownload} className="me-1" />
            Descargar datos
          </button>
          <button
            className="btn btn-md rounded-pill border border-2 me-4 btn-hover text-color fw-bold float-end"
            onClick={handleShowModal}
          >
            <FontAwesomeIcon icon={faUserPlus} className="me-1" />
            Agregar
          </button>
          <NewForm
            showModal={showModal}
            handleCloseModal={handleCloseModal}
            title="Nuevo Empleado"
            fields={fieldsForEmployee}
            colorHeader= "bg-body-tertiary"
          />
        </div>
      </div>
      <Table data={employeesData} fields={fieldsForEmployee} titleButtonDelete='Empleado' itemButtonDelete='Juan Fernando Rosero' />
    </section>
  );
}

export default ListEmployees;