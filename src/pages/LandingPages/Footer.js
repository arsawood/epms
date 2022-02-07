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
        <div>© ® 2022 COPYRIGHT EPMS. ALL RIGHTS RESERVED.</div>
        <h5>Social Platforms</h5>
        <ul>
          <li>
            <a href="https://www.google.com/">
              <BsGoogle />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com">
              <IoLogoYoutube />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <BsTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com">
              <BsInstagram />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
