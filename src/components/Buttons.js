import React from "react";
import { Link } from "react-router-dom";
import "./Buttons.css";
import RightMenu from "./RightMenu/RightMenu";

const Buttons = () => {
  return (
    <div
      style={{
        display: "flex",
        margin: "0px 59px -15px -50px",
        // position: "sticky",
        // top: "80px",
      }}
    >
      <div className="myclass">
        <ul>
          <li>
            <Link to="/">Company</Link>
          </li>
          <li>
            <Link to="#">User</Link>
          </li>
          <li>
            <Link to="#">Notifications</Link>
          </li>
          <li>
            <Link to="#">Print</Link>
          </li>
          <li>
            <Link to="#">Export</Link>
          </li>
          <li>
            <Link to="#">Help</Link>
          </li>
          <li>
            <Link to="#">All</Link>
          </li>
        </ul>
      </div>
      <RightMenu />
    </div>
  );
};

export default Buttons;
