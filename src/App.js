import React from "react";
import Buttons from "./components/Buttons";
import Header from "./components/Header/Header";
import FormMailer from "./components/FormBuilder/FormMailer";
import Dashboard from "./components/Dash/Dashboard";
import LandingPage from "./pages/LandingPages/LandingPage";

import { Routes, Route } from "react-router-dom";
import Epms from "./pages/Epms";
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from "./pages/Reports";
import Messages from "./pages/Messages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/welcome" element={
            <>
              <Header />
              <Buttons /> </>} />
        <Route path="/welcome/dashboard" element={
            <>
              <Header />
              <Buttons />
              <Dashboard /> </> } />
        <Route path="/welcome/formbuilder" element={
            <>
              <Header />
              <Buttons />
              <FormMailer /> </> } />
        <Route path="/epms" element={
            <>
              <Header />
              <Buttons />
              <Epms /> </> } />
        <Route path="/reports" element={
            <>
              <Header />
              <Buttons />
              <Reports /> </> } />
        <Route path="/reports/reports1" element={
              <>
              <Header />
              <Buttons />
              <ReportsOne /> </> } />
        <Route path="/reports/reports2" element={
              <>
              <Header />
              <Buttons />
              <ReportsOne /> </> } />
        <Route path="/reports/reports3" element={
              <>
              <Header />
              <Buttons />
              <ReportsOne /> </> } />
        <Route path="/messages" element={
              <>
              <Header />
              <Buttons />
              <Messages /> </> } />
        
      </Routes>
    </>
  );
};

export default App;
