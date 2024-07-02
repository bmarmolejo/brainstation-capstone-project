import React from "react";
import wineGlass from "../../assets/wineglass.svg";

import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero__description">
        <h1>Predict Your Perfect Wine</h1>
        <p>
          Input your wine preferences and characteristics, and let our advanced
          AI predict the flavor profile of your perfect wine. Uncover the
          nuances and flavors that suit your palate and enhance your wine
          experience.
        </p>
        <button className="cta-button">Unveil The Taste</button>
      </div>
      <div className="hero__image">
        <img src={wineGlass} alt="wine glass artificial intelligence" />
      </div>
    </div>
  );
};

export default HeroSection;
