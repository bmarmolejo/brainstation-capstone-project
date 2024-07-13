import React from "react";
import { Link } from "react-router-dom";
import "./PlansCard.scss";

const PlansCard = ({ plan }) => (
  <div className="plans-cards">
    <div className="plans-cards__header">
      <h4 className="plans-cards__header--name">{plan.name}</h4>
      <div className="plans-cards__header--icon">
        <img src={plan.icon} alt={plan.name} />
      </div>
    </div>
    <ul className="plans-cards__features">
  {plan.features.map((feature, index) => (
    <li key={index} className="plans-cards__features--feature">
      <span>{feature}</span>
    </li>
  ))}
</ul>
    <div className="plans-cards__action">
      <Link to={plan.button.link}>
        <button>{plan.button.text}</button>
      </Link>
    </div>
  </div>
);

export default PlansCard;
