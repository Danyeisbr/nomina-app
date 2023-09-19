import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // Importa BrowserRouter, Route y Switch
import Login from "./Components/Login/Login";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import ListEmployees from "./Components/Employee/ListEmployees";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />{" "}
        {/* Ruta de la página de inicio */}
        <Route path="/home">
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route path="/employees">
          <Layout>
            <ListEmployees />
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
