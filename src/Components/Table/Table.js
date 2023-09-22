import React, { useState } from "react";
//import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faTrash,
  faEdit,
  faAngleDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Delete from "../Button/Delete";
import NewForm from "../Form/NewForm";
import "./Table.css";

function Table({ data, titleButtonDelete, itemButtonDelete, fields }) {
  const [showDelete, setShowDelete] = useState(false);
  // Estado para gestionar la selección de todos los checkboxes
  //const [selectAll, setSelectAll] = useState(false);
  const [showModal, setShowModal] = useState(false);
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

  // Verificar si data está vacío o no se ha proporcionado
  if (!data || data.length === 0) {
    return <div>No hay datos para mostrar</div>;
  }

  // Obtengo las columnas de la primera fila para construir los encabezados de la tabla
  const columns = Object.keys(data[0]);

  // Función para manejar la selección de todos los checkboxes
  //   const handleSelectAll = () => {
  //     setSelectAll(!selectAll);
  //   };

  return (
    <div className="container h-100">
      <table className="table table-hover table-borderless mt-2">
        <thead className="table-light">
          <tr>
            {columns.map((column, index) => (
              <th key={index} scope="col bg-danger">
                {column === "id" ? ( // Verificar si la columna es 'id'
                  <div className="d-flex">
                    <span className="m-1 mb-3 p-2">Todos</span>
                    <input
                      type="checkbox"
                      aria-label="Seleccionar todos"
                      className="mb-2"
                      //   checked={selectAll}
                      //   onChange={handleSelectAll}
                    />
                  </div>
                ) : (
                  <>
                    <div className="p-2">
                      <label htmlFor={column} className="ms-2">
                        {column}{" "}
                        <FontAwesomeIcon icon={faAngleDown} className="ms-1" />
                      </label>
                      <div className="input-container">
                        <input
                          type="text"
                          id={column}
                          className="form-control rounded-pill"
                          placeholder="Buscar"
                        />
                        <FontAwesomeIcon icon={faSearch} className="icon" />
                      </div>
                    </div>
                  </>
                )}
              </th>
            ))}
            <th scope="col" className="">
              <div className="d-flex justify-content-center align-items-center">
                <span className="m-1 p-2 mb-3">Acciones</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((field, rowIndex) => (
            <tr key={rowIndex} className="table-row">
              {columns.map((column, columnIndex) => (
                <td key={columnIndex} className="p-4">
                  {column === "id" ? ( // Verificar si la columna es 'id'
                    <div className="d-flex justify-content-center align-items-center">
                      <input
                        type="checkbox"
                        aria-label={`Seleccionar ${field.nombre}`}
                        checked={field.selected} // Asume que cada objeto en data tiene una propiedad "selected"
                        onChange={() => {
                          // Lógica para manejar la selección individual de checkboxes
                        }}
                      />
                    </div>
                  ) : (
                    field[column]
                  )}
                </td>
              ))}
              <td>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-link" onClick={handleShowModal}>
                    <FontAwesomeIcon
                      icon={faEdit}
                      size="xl"
                      className="text-primary"
                    />
                  </button>
                  <NewForm
                    showModal={showModal}
                    handleCloseModal={handleCloseModal}
                    title="Editar"
                    fields={fields}
                    colorHeader="bg-primary text-white"
                  />

                  <button className="btn btn-link" onClick={handleShowDelete}>
                    <FontAwesomeIcon
                      icon={faTrash}
                      size="xl"
                      className="text-primary"
                    />
                  </button>
                  <Delete
                    title={titleButtonDelete}
                    item={itemButtonDelete}
                    show={showDelete}
                    onHide={handleCloseDelete}
                    // onConfirm={handleConfirmDelete}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-between">
        <div>
          <select className="form-select form-select-sm border border-0">
            <option>Mostrar de a 10</option>
            <option>Mostrar de a 30</option>
            <option>Mostrar de a 50</option>
          </select>
        </div>
        <nav aria-label="Page navigation">
          <ul className="pagination pagination-borderless">
            <li className="page-item">
              <a className="page-link fw-bold" href="#" aria-label="Previous">
                {/* <span aria-hidden="true">&laquo;</span> */}
                <FontAwesomeIcon icon={faArrowLeft} className="text-primary" />
              </a>
            </li>
            <li className="page-item">
              <a className="page-link fw-bold" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link fw-bold" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link fw-bold" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link fw-bold" href="#">
                4
              </a>
            </li>
            <li className="page-item">
              <a className="page-link fw-bold" href="#">
                5
              </a>
            </li>
            <li className="page-item">
              <a className="page-link fw-bold" href="#" aria-label="Next">
                <FontAwesomeIcon icon={faArrowRight} className="text-primary" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Table;