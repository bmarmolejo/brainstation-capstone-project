import React from "react";
import { Link } from "react-router-dom";
import wineGlass from "../../assets/images/wineglass.png";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero__description">
        <h1>Predict the flavor profile of your ideal wine!</h1>
        <p>
          Knowing how a wine will taste based on its grape and terroir characteristics 
          requires a lot of knowledge, but with EnoBot, it's a breeze!
        </p>
        <p>
          Simply input your favorite grape variety, wine region, and type, and let us predict 
          the flavor profile of your ideal wine. Uncover the unique nuances and delightful 
          flavors that suit your palate, enhancing every sip and elevating your wine experience.
        </p>
        <Link to="/input">
          <button className="hero__description--button">Unveil The Taste</button>
        </Link>
      </div>
      <div className="hero__image">
        <img src={wineGlass} alt="wine glass artificial intelligence" />
      </div>
    </div>
  );
};

export default HeroSection;
