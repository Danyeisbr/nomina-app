import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faTrash,
  faDownload,
  faUserPlus,
  faEdit,
  faAngleDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

// Datos de prueba para las filas de la tabla
import { employeesData } from "./employeesData"; //
import "./list-employees.css";

function ListEmployees() {
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
          <button className="btn btn-md rounded-pill border border-0 me-2 btn-hover text-color fw-bold">
            <FontAwesomeIcon icon={faTrash} className="me-1" />
            Borrar selección
          </button>
          <button className="btn btn-md rounded-pill border border-0 btn-hover text-color fw-bold">
            <FontAwesomeIcon icon={faDownload} className="me-1" />
            Descargar datos
          </button>
          <button className="btn btn-md rounded-pill border border-2 me-4 btn-hover text-color fw-bold float-end">
            <FontAwesomeIcon icon={faUserPlus} className="me-1" />
            Agregar
          </button>
        </div>
      </div>
      <div className="container h-100">
        <table className="table table-hover table-borderless mt-2">
          <thead className="table-light">
            <tr>
              <th scope="col" className="">
                <div className="d-flex justify-content-center align-items-center">
                  <span className="m-1 p-2">Todos</span>
                  <input
                    type="checkbox"
                    aria-label="Seleccionar todos"
                    className="float-end"
                  />
                </div>
              </th>
              <th scope="col">
                <label htmlFor="nombre">
                  Nombre <FontAwesomeIcon icon={faAngleDown} className="ms-1" />
                </label>
                <input
                  type="text"
                  id="nombre"
                  className="form-control"
                  placeholder="&#xf002; Buscar"
                />
              </th>
              <th scope="col">
                <label htmlFor="identificacion">
                  Identificación{" "}
                  <FontAwesomeIcon icon={faAngleDown} className="ms-1" />
                </label>
                <input
                  type="text"
                  id="identificacion"
                  className="form-control"
                  placeholder="&#xf002; Buscar"
                />
              </th>
              <th scope="col">
                <label htmlFor="direccion">
                  Dirección{" "}
                  <FontAwesomeIcon icon={faAngleDown} className="ms-1" />
                </label>
                <input
                  type="text"
                  id="direccion"
                  className="form-control"
                  placeholder="&#xf002; Buscar"
                />
              </th>
              <th scope="col">
                <label htmlFor="telefono">
                  Teléfono{" "}
                  <FontAwesomeIcon icon={faAngleDown} className="ms-1" />
                </label>
                <input
                  type="text"
                  id="telefono"
                  className="form-control"
                  placeholder="&#xf002; Buscar"
                />
              </th>
              <th scope="col">
                <label htmlFor="ciudad">
                  Ciudad <FontAwesomeIcon icon={faAngleDown} className="ms-1" />
                </label>
                <input
                  type="text"
                  id="ciudad"
                  className="form-control"
                  placeholder="&#xf002; Buscar"
                />
              </th>
              <th scope="col">
                <label htmlFor="departamento">
                  Departamento{" "}
                  <FontAwesomeIcon icon={faAngleDown} className="ms-1" />
                </label>
                <input
                  type="text"
                  id="departamento"
                  className="form-control"
                  placeholder="&#xf002; Buscar"
                />
              </th>
              <th scope="col" className="">
                <div className="d-flex justify-content-center align-items-center">
                  <span className="m-1 p-2">Acciones</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {employeesData.map((employee) => (
              <tr key={employee.id} className="table-row">
                <td>
                  <div className="d-flex justify-content-center align-items-center">
                    <input
                      type="checkbox"
                      aria-label="Seleccionar"
                      className="text-center"
                    />
                  </div>
                </td>
                <td>{employee.nombre}</td>
                <td>{employee.identificacion}</td>
                <td>{employee.direccion}</td>
                <td>{employee.telefono}</td>
                <td>{employee.ciudad}</td>
                <td>{employee.departamento}</td>
                <td>
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-link">
                      <FontAwesomeIcon icon={faEdit} className="text-primary" />
                    </button>
                    <button className="btn btn-link">
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="text-primary"
                      />
                    </button>
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
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link fw-bold text-color" href="#">
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
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default ListEmployees;