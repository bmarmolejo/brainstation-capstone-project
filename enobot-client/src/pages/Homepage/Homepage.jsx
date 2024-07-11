import React from "react";
import "./Homepage.scss";
import HeroSection from "../../components/HeroSection/HeroSection";
import Pricing from "../../components/Pricing/Pricing";

const Homepage = () => {

  return (
    <>
      <main className="main">
        <HeroSection />
        {/* <Pricing /> */}
      </main>
    </>
  );
};

export default Homepage;
