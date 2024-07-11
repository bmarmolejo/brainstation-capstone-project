import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import signInIcon from '../../assets/images/signin.png';
import logo from '../../assets/images/enobot.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          <img src={logo} alt="EnoBot Logo" className="header__logo--image" />
        </NavLink>
      </div>
      <nav className="header__nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact Us</NavLink>
        <NavLink to="/input" className="header__nav--button">Wine Taste Prediction</NavLink>
        <NavLink to="/signin" className="header__nav--signin">
          <img src={signInIcon} alt="Sign In" />
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
