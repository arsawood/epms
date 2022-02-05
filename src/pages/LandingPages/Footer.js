import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { BsInstagram, BsTwitter, BsGoogle } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <nav>
          <div>
          © ® 2022 COPYRIGHT EPMS. ALL RIGHTS RESERVED.
          </div>
        <h5>Social Platforms</h5>
        <ul>
          <li>
            <Link to="/">
              <BsGoogle />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link to="/">
              <IoLogoYoutube />
            </Link>
          </li>
          <li>
            <Link to="/">
              <BsInstagram />
            </Link>
          </li>
          <li>
            <Link to="/">
              <BsTwitter />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
