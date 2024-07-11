import React from 'react';
import './Pricing.scss';
import PricingCard from '../PricingCard/PricingCard';

const pricingPlans = [
    {
      name: "Wine Enthusiasts",
      price: "Free",
      popular: false,
      features: [
        "Lifetime free",
        "Up to 2 predictions per day",
        "Unlimited Wine Profiles",
        "Bla bla bla",
        "Basic Bla bla bla",
        "Community Support",
      ],
      button: {
        text: "Get Started",
        link: "/",
      },
    },
    {
      name: "Wine Retailers",
      price: {
        monthly: "$190",
        annual: "$160",
        discount: "10%",
        original: "$240",
      },
      popular: true,
      features: [
        "All Free Features",
        "Train your model with your wines",
        "bla bla bla",
        "bla bla bla",
        "Advanced Integrations",
        "Priority Support",
      ],
      button: {
        text: "Get Started",
        link: "#",
      },
    },
    {
      name: "Wineries",
      price: "Custom",
      popular: false,
      features: [
        "All Pro Features",
        "Wine data used to train model",
        "Fixed and volatile acidity, pH, citric acid, residual sugar, density, alcohol.",
        "Relevant data such as chemical composition, acidity levels, residual sugar",
        "Dedicated Account Manager",
        "24/7 Phone Support",
      ],
      button: {
        text: "Contact us",
        link: "/contact",
      },
    },
  ];
  
  const Pricing = () => {
    return (
      <div className="pricing">
        <h2 className="pricing-title">Pricing</h2>
        <p className="pricing-description">Simple & Predictable pricing. No Surprises.</p>
        <div className="pricing-cards">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Pricing;