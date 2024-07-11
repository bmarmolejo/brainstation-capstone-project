import React from "react";
import "./Divider.scss";

const Divider = ({ text, imageDiv }) => {

  return (
    <div className="divider">
      <div className="divider__shadow"></div>
        <div className="divider__icon">
          <img src={imageDiv} alt="divider icon" />
        </div>
    </div>
  );
};

export default Divider;
