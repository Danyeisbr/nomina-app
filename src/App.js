import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Banner from "./Components/Banner/Banner";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route path="/home" element={<Banner />}></Route>
        </Routes>
    </BrowserRouter>
  );
};

export default App;