import React from 'react';
import './Plans.scss';
import PlansCard from '../PlansCard/PlansCard';
import enthusiastIcon from '../../assets/images/enthusiast.svg';
import retailerIcon from '../../assets/images/retailer.svg';
import wineryIcon from '../../assets/images/winery.svg';

const enobotPlans = [
  {
    name: "Wine Enthusiasts",
    popular: false,
    features: [
      "Discover the unique characteristics of wines based on grape variety, region, or type",
      "Receive tailored wine recommendations that match your taste preferences.",
      "Find the perfect wine and food pairings to elevate your dining experience.",
      "Gain deeper knowledge about different winesenhancing your appreciation and understanding.",
      "Enjoy an intuitive and engaging interface that makes learning about wines enjoyable and easy.",
    ],
    button: {
      text: "Get Started",
      link: "/input",
    },
    icon: enthusiastIcon
  },
  {
    name: "Wine Retailers",
    popular: true,
    features: [
      "Integrate your wine inventory so EnoBot can recommend wines based on user inputs from your stock.", 
      "Enhance customer satisfaction by providing personalized wine suggestions.",
      "Our model will be trained on your inventory data to provide accurate and personalized recommendations.",
      "Boost sales by guiding customers to the right wines from your inventory.",
      "Easy integration with your existing inventory management systems.",
    ],
    button: {
      text: "Schedule a Demo",
      link: "/contact",
    },
    icon: retailerIcon
  },
  {
    name: "Wineries",
    popular: false,
    features: [
      "Utilize historic wine data for quality prediction, including chemical composition, acidity levels, residual sugar, alcohol content, and sensory attributes.",
      "Incorporate soil composition data to predict and enhance wine quality.",
      "Use historical weather data to understand its impact on wine quality and optimize future production.",
      "Train the bot with specific data from your winery to provide accurate and valuable insights.",
      "Leverage a wide range of data, including harvest dates, fermentation temperatures, and aging conditions, to enhance wine quality and consistency.",
    ],
    button: {
      text: "Schedule a Demo",
      link: "/contact",
    },
    icon: wineryIcon
  },
];

const Plans = () => {
  return (
    <div className="plans">
      <h2 className="plans__title">Enobot Plans</h2>
      <p className="plans__description">Begin your journey with Enobot.</p>
      <div className="plans__cards">
        {enobotPlans.map((plan, index) => (
          <PlansCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default Plans;
