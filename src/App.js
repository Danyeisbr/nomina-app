import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta para el login */}
        <Route exact path="/" element={<Login />} />
        {/* Rutas para la aplicación principal */}
        <Route path="/home" element={<Layout>
          <Home/>
        </Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
