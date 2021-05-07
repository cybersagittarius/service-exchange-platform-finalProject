import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li className="btn btnFooter">
          <a href="#home">Home</a>
        </li>
        <li className="btn btnFooter">
          <a href="#aboutUs">About us</a>
        </li>
        <li className="btn btnFooter">
        <Link to="landing_page/contact">
          Contact us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
