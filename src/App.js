import React from "react";
import Buttons from "./components/Buttons";
import Header from "./components/Header/Header";
import FormMailer from "./components/FormBuilder/FormMailer";
import Dashboard from "./components/Dash/Dashboard";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Buttons />

        {/* <div style={{ display: "flex" }}>
        <FormMailer />
        <RightMenu />
      </div> */}
      </div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/formbuilder" element={<FormMailer />} />
      </Routes>
    </>
  );
};

export default App;
