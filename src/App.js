import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Login/Login";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import ListEmployees from "./Components/Employee/ListEmployees";
import ListJobs from "./Components/Job/ListJobs";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={Login} />{" "}
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
        <Route path="/jobs">
          <Layout>
            <ListJobs />
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
