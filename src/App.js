import React from "react";
import Buttons from "./components/Buttons";
import Header from "./components/Header/Header";
import FormMailer from "./components/FormBuilder/FormMailer";
import Dashboard from "./components/Dash/Dashboard";
import LandingPage from "./pages/LandingPages/LandingPage";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <div></div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/welcome"
          element={
            <>
              <Header />
              <Buttons />
            </>
          }
        />
        <Route
          path="/welcome/dashboard"
          element={
            <>
              <Header />
              <Buttons />
              <Dashboard />
            </>
          }
        />
        <Route
          path="/welcome/formbuilder"
          element={
            <>
              <Header />
              <Buttons />
              <FormMailer />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
