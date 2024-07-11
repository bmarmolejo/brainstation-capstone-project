import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import facebookIcon from "../../assets/images/facebook.svg";
import instagramIcon from "../../assets/images/instagram.svg";
import logo from "../../assets/images/logo-white.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__top__logo">
          <img src={logo} alt="EnoBot Logo" className="footer__top__logo--image" />
          <p className="footer__top__logo--description">Predict the taste of wine.</p>
        </div>
        <div className="footer__top__social">
          <span>Get Social</span>
          <a href="https://www.facebook.com">
            <img
              src={facebookIcon}
              alt="Facebook"
              className="footer__top__social--icon"
            />
          </a>
          <a href="https://www.instagram.com">
            <img
              src={instagramIcon}
              alt="Instagram"
              className="footer__top__social--icon"
            />
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2024 Name, All rights reserved.</p>
        <a href="https://github.com/bmarmolejo" className="footer__bottom--by">
          By Brenda Marmolejo
        </a>
      </div>
    </footer>
  );
};

export default Footer;
