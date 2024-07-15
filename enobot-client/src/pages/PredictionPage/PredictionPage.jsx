import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import OpenAIEnobot from "../../components/OpenAIEnobot/OpenAIEnobot";
import InputDetails from "../../components/InputDetails/InputDetails";
import "./PredictionPage.scss";
import wineBottleIcon from "../../assets/images/wine-bottle-icon-w.svg";
import foodIcon from "../../assets/images/food-icon-w.svg";

const PredictionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;
  const type = state?.type;
  const variety = state?.variety;
  const region = state?.region;

  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (!type && (!variety || variety.length === 0) && !region) {
      navigate("/input");
    }
  }, [type, variety, region, navigate]);

  const handleResponse = (resData) => {
    setResponse(resData);
    window.scrollTo(0, 0); // Scroll to top when response is received
  };

  if (!type && (!variety || variety.length === 0) && !region) {
    return <p>🍷 Loading...</p>;
  }

  return (
    <div className="prediction">
      <h1>Wine Tasting Profile</h1>
      <InputDetails type={type} variety={variety} region={region} />

      <div className="prediction__info">
        <OpenAIEnobot
          type={type}
          variety={variety}
          region={region}
          onResponse={handleResponse}
        />
        {response && (
          <div className="prediction__recommendations">
            <div className="prediction__recommendations--wine">
              <img
                src={wineBottleIcon}
                alt="Wine Bottle Icon"
                className="prediction__recommendations--icon"
              />
              <p>{response.wineRecommendation}</p>
            </div>
            <div className="prediction__recommendations--food">
              <img
                src={foodIcon}
                alt="Food Icon"
                className="prediction__recommendations--icon"
              />
              <p>{response.foodRecommendation}</p>
            </div>
          </div>
        )}
      </div>

      <Link to="/input">
        <button className="prediction__button">
          Let's find out about another wine profile
        </button>
      </Link>
    </div>
  );
};

export default PredictionPage;
