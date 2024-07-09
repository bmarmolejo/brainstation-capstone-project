import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import OpenAIEnobot from '../../components/OpenAIEnobot/OpenAIEnobot';
import InputDetails from '../../components/InputDetails/InputDetails';
import './PredictionPage.scss';

const PredictionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;
  const type = state?.type;
  const variety = state?.variety;
  const region = state?.region;

  useEffect(() => {
    if (!type || !variety || !region) {
      navigate('/input');
    } else {
      console.log('Received Type:', type);
      console.log('Received Variety:', variety);
      console.log('Received Region:', region);
    }
  }, [type, variety, region, navigate]);

  if (!type || !variety || !region) {
    return <p>Loading...</p>;
  }

  return (
    <div className="prediction-page">
      <h1>Wine Tasting Profile</h1>
      <InputDetails type={type} variety={variety} region={region} />
      <OpenAIEnobot type={type} variety={variety} region={region} />
      <Link to="/input">
        <button className="find-another-button">Let's find out about another wine profile</button>
      </Link>
    </div>
  );
};

export default PredictionPage;
