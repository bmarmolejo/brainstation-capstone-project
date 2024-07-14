import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Plans from "../../components/Plans/Plans";
import Divider from "../../components/Divider/Divider";
import imageDiv from "../../assets/images/enobot-pink.svg";

const Homepage = () => {

  return (
    <>
      <main className="main">
        <HeroSection />
        <Divider className="divider" imageDiv={imageDiv} />
        <Plans />
      </main>
    </>
  );
};

export default Homepage;
