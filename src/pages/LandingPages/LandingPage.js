import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../logos/logo.png";
import "./LandingPage.css";
import Body from "./Body";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <>
      <nav
        style={{ position: "sticky", top: "0" }}
        className="navbar navbar-expand-lg navbar-light bg-light"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img style={{ width: "180px" }} src={Logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav px-4">
              <li className="nav-item ">
                <Link
                  className="nav-link active px-4"
                  aria-current="page"
                  to="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-4" to="#">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-4" to="#">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-4" to="#">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div className="style__buttons">
            <button>
              <Link to="/welcome">Sign Up</Link>
            </button>
            <button>
              <Link to="/welcome">Sign In</Link>
            </button>
          </div>
        </div>
      </nav>
      {/* body */}
      <div>
        <Body />
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
