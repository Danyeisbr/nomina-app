import React from "react";
import './employee.css';

function Employee({ showModal, handleCloseModal }) {
  return (
    <>
      {showModal && (
        <div className="modal d-flex align-items-center justify-content-center" tabIndex="-1" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog w-50">
            <div className="modal-content">
              <div className="modal-header shadow p-3 mb-4 bg-body-tertiary rounded">
                <h5 className="modal-title fw-light">Nuevo Empleado</h5>
                <button
                  type="button"
                  className="btn-close rounded-circle border border-3"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row mb-3">
                    <div className="col">
                      <label htmlFor="nombres" className="form-label">
                        Nombres
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-pill"
                        id="nombres"
                        placeholder="Escribe el nombre de tu empleado"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="apellidos" className="form-label">
                        Apellidos
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-pill"
                        id="apellidos"
                        placeholder="Escribe los apellidos de tu empleado"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <label htmlFor="identificacion" className="form-label">
                        Identificación
                      </label>
                      <input
                        type="number"
                        className="form-control rounded-pill"
                        id="identificacion"
                        placeholder="Escribe un numero de identificación"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="telefono" className="form-label">
                        Teléfono
                      </label>
                      <input
                        type="number"
                        className="form-control rounded-pill"
                        id="telefono"
                        placeholder="Escribe un número de teléfono"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <label htmlFor="ciudad" className="form-label">
                        Ciudad
                      </label>
                      <select className="form-select rounded-pill" id="ciudad">
                        <option>Selecciona una ciudad</option>
                        <option>Ciudad 1</option>
                        <option>Ciudad 2</option>
                        <option>Ciudad 3</option>
                      </select>
                    </div>
                    <div className="col">
                      <label htmlFor="departamento" className="form-label ">
                        Departamento
                      </label>
                      <select className="form-select rounded-pill" id="departamento">
                        <option>Selecciona un departamento</option>
                        <option>Departamento 1</option>
                        <option>Departamento 2</option>
                        <option>Departamento 3</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer border-0 d-flex justify-content-center" style={{ backgroundColor: 'white' }}>
                <button
                  type="button"
                  className="btn btn-secondary rounded-pill btn-hover fw-bold"
                  onClick={handleCloseModal}
                >
                  Cancelar
                </button>
                <button type="button" className="btn btn-primary rounded-pill fw-bold">
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Employee;
