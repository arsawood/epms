import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../logos/logo.png";
import { GoThreeBars } from "react-icons/go";
import Sidebar from "./Sidebar";

function Header() {
  return (
    <nav className="header">
      <div>
        <Sidebar />
      </div>
      <Link to="/">
        <img className="header__logo" src={Logo} alt="" />
      </Link>
      <div className="header__nav">
        <div style={{ margin: "5px" }}>
          <span>Language</span>
          <div>
            <select style={{ border: "none", borderRadius: "5px" }}>
              <option>English</option>
              <option>Arabic</option>
              <option>Chinese</option>
              <option>Japanese</option>
            </select>
          </div>
        </div>
        <div style={{ margin: "5px" }}>
          <span>Systems</span>
          <div>
            <select style={{ border: "none", borderRadius: "5px" }}>
              <option>EPM</option>
              <option>QMS</option>
              <option>SMS</option>
              <option>MMS</option>
            </select>
          </div>
        </div>
        <div style={{ margin: "5px"}}>
          <span>Project: Cost Center</span>
          <div>
            <select style={{ border: "none", borderRadius: "5px" }}>
              <option>Project Name: (100 = A)</option>
              <option>Project Name: (100 = B)</option>
              <option>Project Name: (100 = C)</option>
              <option>Project Name: (100 = D)</option>
            </select>
          </div>
        </div>
      </div>
      <div style={{ margin: "5px" }}>
        <span>Search Here</span>
        <div>
          <input
            style={{
              border: "none",
              borderRadius: "5px",
              // backgroundColor: "#cdebf7",
            }}
            type="text"
          />
        </div>
      </div>
      <div>
        <span>Date</span>
        <div>01-01-2022</div>
      </div>
      <div style={{ margin: "5px", marginLeft: '5px' }}>
        <span>Time</span>
        <div>12:25:00PM</div>
      </div>
      <div>
        <Link to="/">
          <img
            className="header__client"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQycftH22LgLjuT0nNK7skvkTqeur4Oqxd6A&usqp=CAU"
            alt=""
          />
        </Link>
      </div>
      <div>
        <Link to="/">
          <img
            className="header__client2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQycftH22LgLjuT0nNK7skvkTqeur4Oqxd6A&usqp=CAU"
            alt=""
          />
        </Link>
      </div>
      <div>
        <Link to="/">
          <img
            className="header__client3"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQycftH22LgLjuT0nNK7skvkTqeur4Oqxd6A&usqp=CAU"
            alt=""
          />
        </Link>
      </div>
    </nav>
  );
}

export default Header;

{
  /* <div>
      <nav className="header">
        <div>
          <img className="header__logo" src={Logo} alt="saud" />
        </div>
        <div style={{ width: "100%" }}>
          <div className="header-option">
            <span className="heading">Systems</span>
            <div className="dropdown">
              <select style={{ width: "100%", backgroundColor: "#00A0E3" }}>
                <option>EPM</option>
                <option>QMS</option>
                <option>SMS</option>
                <option>MMS</option>
              </select>
            </div>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div className="header-option">
            <span className="heading">Project: Cost Center</span>
            <div className="dropdown">
              <select style={{ width: "100%", backgroundColor: "#00A0E3" }}>
                <option>Project Name: (100 = A)</option>
                <option>Project Name: (100 = B)</option>
                <option>Project Name: (100 = C)</option>
                <option>Project Name: (100 = D)</option>
              </select>
            </div>
          </div>
        </div>
        <img
          className="header-logolast"
          src="https://www.setaswall.com/wp-content/uploads/2017/04/Pale-Chestnut-Solid-Color-Background-Wallpaper-5120x2880.png"
          alt=""
        />
      </nav>
      {/* <div className="grid-container">
        <div>Company</div>
        <div>User : </div>
        <div>Export</div>
        <div>Print</div>
      </div> */
}
