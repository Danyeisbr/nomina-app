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
import { jobsData } from "./jobsData"; //
import "../Employee/list-employees.css";

function ListJobs() {
  return (
    <section className="d-flex flex-column justify-content-start vh-100 ml-13">
      <div>
        <div className="d-flex align-items-center mt-5 p-3">
          <Link to="/home">
            {" "}
            <FontAwesomeIcon
              icon={faArrowLeft}
              size="lg"
              className="me-2 mt-4"
              style={{ color: "#3834ec" }}
            />{" "}
          </Link>
          <h2 className="mt-4 mb-0">Cargos</h2>
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
                  Area <FontAwesomeIcon icon={faAngleDown} className="ms-1" />
                </label>
                <input
                  type="text"
                  id="area"
                  className="form-control"
                  placeholder="&#xf002; Buscar"
                />
              </th>
              <th scope="col">
                <label htmlFor="telefono">
                  Cargo <FontAwesomeIcon icon={faAngleDown} className="ms-1" />
                </label>
                <input
                  type="text"
                  id="cargo"
                  className="form-control"
                  placeholder="&#xf002; Buscar"
                />
              </th>
              <th scope="col">
                <label htmlFor="ciudad">
                  Rol <FontAwesomeIcon icon={faAngleDown} className="ms-1" />
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
                  Jefe <FontAwesomeIcon icon={faAngleDown} className="ms-1" />
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
            {jobsData.map((employee) => (
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
                <td>{employee.area}</td>
                <td>{employee.cargo}</td>
                <td>{employee.rol}</td>
                <td>{employee.jefe}</td>
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
                <a
                  className="page-link fw-bold"
                  href="#"
                  style={{ color: "#3834ec" }}
                >
                  1
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link fw-bold"
                  href="#"
                  style={{ color: "#3834ec" }}
                >
                  2
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link fw-bold"
                  href="#"
                  style={{ color: "#3834ec" }}
                >
                  3
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link fw-bold"
                  href="#"
                  style={{ color: "#3834ec" }}
                >
                  4
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link fw-bold"
                  href="#"
                  style={{ color: "#3834ec" }}
                >
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

export default ListJobs;