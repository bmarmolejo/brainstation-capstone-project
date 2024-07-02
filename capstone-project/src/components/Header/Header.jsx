import React from 'react';
import './Header.scss';
import signInIcon from '../../assets/signin.png';
import logo from '../../assets/enobot.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-container">
        <img src={logo} alt="EnoBot Logo" className="header__logo-container--image" />
        <span className="header__logo-container--text">EnoBot</span>
      </div>
      <nav className="header__nav">
        <a href="/">Home</a>
        <a href="/predictions">Predictions</a>
        <a href="/contact">Contact</a>
        <a href="/signup">
          <img src={signInIcon} alt="Sign In" className="header__nav--signin" />
        </a>
      </nav>
    </header>
  );
};

export default Header;
