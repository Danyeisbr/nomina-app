import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  return (
    <div className="container-fluid">
      <div className="row">
        <section className="col-left min-vh-100 g-0 gradient-custom">
          <section className="d-flex flex-column justify-content-end h-100">
            <article className="text-white mx-md-5 p-md-5">
              <h3 className="px-4">
                <span
                  style={{
                    fontWeight: "normal",
                  }}
                >
                  Bienvenido a la mejor plataforma
                </span>{" "}
                <br />
                <strong>organizacional online</strong>
              </h3>
              <h4
                className="px-4 py-5 mb-3"
                style={{
                  fontWeight: "normal",
                }}
              >
                Gestión efectiva del talento humano
              </h4>
            </article>
          </section>
        </section>
        <section className="col-right d-flex justify-content-center min-vh-100">
          <header className="d-flex flex-column align-items-center justify-content-start w-75 mt-5">
            <article className="row d-flex align-items-center">
              {/* Logo de la compañía */}
              <figure className="col d-flex justify-content-end g-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                  style={{ width: "110px", height: "140px" }}
                  alt="Logo de grupo alianza"
                />
              </figure>
              {/* Nombre de la compañía */}
              <div className="col g-0">
                <h1>
                  <span
                    style={{
                      fontWeight: "normal",
                      letterSpacing: "9px",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {" "}
                    Psico{" "}
                  </span>{" "}
                  <br /> <strong>Alianza</strong>
                </h1>
              </div>
            </article>
            <article className="row d-flex justify-content-center w-90 mt-4">
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="exampleInputUser" className="py-2">
                    Usuario
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
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
                <div className="row g-0">
                  <Link to="/home">
                    {" "}
                    <button
                      type="submit"
                      className="btn btn-primary rounded-pill mb-3 full-width-btn"
                    >
                      Iniciar sesión
                    </button>{" "}
                  </Link>
                  <div className="col-6">
                    <p className="text-muted">¿Olvidaste tu usuario?</p>
                  </div>
                  <div className="col-6">
                    <p className="text-muted text-end">
                      ¿Olvidaste tu contraseña?{" "}
                    </p>
                  </div>
                </div>
              </form>
            </article>
          </header>
        </section>
      </div>
    </div>
  );
}

export default Login;