import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Delete.css";

const Delete = ({ title, item, show, onHide }) => {
  return (
    <div
      className={`modal ${show ? "d-block custom-modal" : ""}`}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body text-center">
            <FontAwesomeIcon
              icon={faTrash}
              className="fa-5x text-primary mt-5"
            />
            <h4 className="mt-3 mb-5">Borrar {title}</h4>
            <p>¿Está seguro de que desea borrar {item} ?</p>
          </div>
          <div className="modal-footer border border-0 justify-content-center mb-4">
            <button
              type="button"
              className="btn btn-primary rounded-pill"
              onClick={onHide}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-secondary rounded-pill btn-hover"
              onClick={onHide}
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delete;
