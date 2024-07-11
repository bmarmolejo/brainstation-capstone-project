import React from 'react';
// import { Tick } from './ui/icons';
// import Link from './ui/Link';
import './PricingCard.scss';

const PricingCard = ({ plan }) => (
    <div className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
      <div className="pricing-card-header">
        <h4 className="plan-name">{plan.name}</h4>
        <p className="plan-price">
          {plan.price && typeof plan.price === 'object' ? plan.price.monthly : plan.price}
        </p>
        {plan.price.original && (
          <p className="plan-original-price">
            {plan.price.original}
          </p>
        )}
      </div>
      <ul className="plan-features">
        {plan.features.map((feature, index) => (
          <li key={index} className="plan-feature">
            {/* <Tick className="tick-icon" /> */}
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="plan-action">
        {/* <Link href={plan.button.link || "#"} block style={plan.popular ? "primary" : "outline"}> */}
          {plan.button.text || "Get Started"}
        {/* </Link> */}
      </div>
    </div>
  );
  
  export default PricingCard;
