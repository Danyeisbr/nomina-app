import React from "react";
import { Link } from "react-router-dom";
import "./NewForm.css";

function NewForm({ showModal, handleCloseModal, title, fields, colorHeader }) {
  return (
    <>
      {showModal && (
        <div
          className="modal d-flex align-items-center justify-content-center custom-modal"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg w-50">
            <div className="modal-content">
              <div
                className={`modal-header shadow p-3 mb-4 rounded ${colorHeader}`}
              >
                <h5 className="modal-title fw-light">{title}</h5>
                <button
                  type="button"
                  className="btn-close rounded-circle border border-3"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    {fields.map((field, index) => (
                      <div className="col-md-12 col-lg-6 mb-3" key={index}>
                        <label htmlFor={field.name} className="form-label">
                          {field.label}
                        </label>
                        {field.type === "select" ? (
                          <select
                            className="form-select rounded-pill"
                            id={field.name}
                          >
                            <option>
                              Selecciona {field.label.toLowerCase()}
                            </option>
                            <option>
                              Selecciona {field.label.toLowerCase()}
                            </option>
                            <option>
                              Selecciona {field.label.toLowerCase()}
                            </option>
                          </select>
                        ) : (
                          <input
                            type={field.type}
                            className="form-control rounded-pill"
                            id={field.name}
                            placeholder={`Escribe ${field.label.toLowerCase()}`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </form>
              </div>
              <div
                className="modal-footer border-0 d-flex justify-content-center"
                style={{ backgroundColor: "white" }}
              >
                <button
                  type="button"
                  className="btn btn-secondary rounded-pill btn-hover fw-bold"
                  onClick={handleCloseModal}
                >
                  Cancelar
                </button>
                <Link to="/employees">
                  <button
                    type="button"
                    className="btn btn-primary rounded-pill fw-bold"
                  >
                    Guardar
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NewForm;
