import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import signInIcon from '../../assets/images/signin.png';
import logo from '../../assets/images/enobot.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-container">
        <NavLink to="/">
          <img src={logo} alt="EnoBot Logo" className="header__logo-container--image" />
        </NavLink>
      </div>
      <nav className="header__nav">
        <NavLink to="/" exact activeClassName="active">Home</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact Us</NavLink>
        <NavLink to="/input" className="get-started-btn">Wine Taste Prediction</NavLink>
        <NavLink to="/signin">
          <img src={signInIcon} alt="Sign In" className="header__nav--signin" />
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
