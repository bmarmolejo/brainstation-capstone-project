import React from 'react';
import './Footer.scss';
import facebookIcon from '../../assets/facebook.svg';
import instagramIcon from '../../assets/instagram.svg';
import logo from '../../assets/enobot.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">EnoBot</div>
      <p>&copy; 2024 Name, All rights reserved.</p>
      <div className="footer__social">
        <span>Get Social</span>
        <a href="https://www.facebook.com">
          <img src={facebookIcon} alt="Facebook" className="footer__social-icon" />
        </a>
        <a href="https://www.instagram.com">
          <img src={instagramIcon} alt="Instagram" className="footer__social-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
