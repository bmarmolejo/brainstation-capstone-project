import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import signInIcon from '../../assets/signin.png';
import logo from '../../assets/enobot.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-container">
        <Link to="/">
          <img src={logo} alt="EnoBot Logo" className="header__logo-container--image" />
          <span className="header__logo-container--text">EnoBot</span>
        </Link>
      </div>
      <nav className="header__nav">
        <Link to="/">Home</Link>
        <Link to="/prediction">Predictions</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/signup">
          <img src={signInIcon} alt="Sign In" className="header__nav--signin" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
