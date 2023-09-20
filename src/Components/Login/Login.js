import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  return (
    <section className="container-fluid">
      <div className="row">
        <section className="col-left col-lg-6 col-md-6 col-sm-12 min-vh-100 gradient-custom">
          <section className="d-flex flex-column justify-content-end h-100">
            <article className="text-white mx-md-5 p-md-5">
              <h3 className="px-4">
                <span className="fw-normal">
                  Bienvenido a la mejor plataforma
                </span>{" "}
                <br />
                <strong>organizacional online</strong>
              </h3>
              <h4 className="fw-normal px-4 py-5 mb-3">
                Gestión efectiva del talento humano
              </h4>
            </article>
          </section>
        </section>
        <section className="col-right col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center min-vh-100">
          <header className="d-flex flex-column align-items-center justify-content-start w-75 mt-5">
            <article className="row d-flex align-items-center">
              {/* Logo de la compañía */}
              <figure className="col-6 d-flex justify-content-end">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                  style={{ width: "110px", height: "130px" }}
                  alt="Logo de grupo alianza"
                />
              </figure>
              {/* Nombre de la compañía */}
              <div className="col-6 g-0">
                <h1>
                  <span className="fw-normal custom-h1">Psico</span>
                  <br /> <strong>Alianza</strong>
                </h1>
              </div>
            </article>
            <article className="row d-flex justify-content-center w-90 mt-4">
              <form className="w-100">
                <div className="form-group mb-3">
                  <label htmlFor="exampleInputUser" className="py-2">
                    Usuario
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    id="exampleInputUser"
                    placeholder="Pruebadesarrollador"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword" className="py-2">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control rounded-pill mb-4"
                    placeholder="••••••••••••"
                  />
                  {/* <i className="fas fa-eye" id="togglePassword"></i> */}
                </div>
                <div className="col d-flex justify-content-center form-group form-check mb-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label
                    className="form-check-label mx-1"
                    htmlFor="exampleCheck1"
                  >
                    Recordar cuenta
                  </label>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Link to="/home">
                      {" "}
                      <button
                        type="submit"
                        className="btn btn-primary rounded-pill mb-3 w-100"
                      >
                        Iniciar sesión
                      </button>{" "}
                    </Link>
                  </div>

                  <div className="col-6">
                    <p className="text-muted">¿Olvidaste tu usuario?</p>
                  </div>
                  <div className="col-6 text-end">
                    <p className="text-muted">
                      ¿Olvidaste tu contraseña?{" "}
                    </p>
                  </div>
                </div>
              </form>
            </article>
          </header>
        </section>
      </div>
    </section>
  );
}

export default Login;
