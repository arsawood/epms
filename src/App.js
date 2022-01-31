import React from "react";
import Buttons from "./components/Buttons";
import Header from "./components/Header";
import FormMailer from "./components/FormMailer";
import RightMenu from "./components/RightMenu";


const App = () => {
  return (
    <div>
      <Header />
      <Buttons />
      <div style={{display: 'flex'}}>
        <FormMailer />
        <RightMenu />
      </div>
    </div>
  );
};

export default App;
