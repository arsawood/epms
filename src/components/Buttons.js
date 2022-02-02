import React from "react";
import { Link } from "react-router-dom";
import "./Buttons.css"

const Buttons = () => {
  return (
    <div className="myclass">
      <ul>
        <li><Link to="/">Company</Link></li>
        <li><Link to="#">User</Link></li>
        <li><Link to="#">Notifications</Link></li>
        <li><Link to="#">Print</Link></li>
        <li><Link to="#">Export</Link></li>
        <li><Link to="#">Help</Link></li>
        <li><Link to="#">All</Link></li>
      </ul>
    </div>
  );
};

export default Buttons;