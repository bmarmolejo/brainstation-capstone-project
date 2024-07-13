import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InputPage.scss';
import WineTypeSelector from '../../components/WineTypeSelector/WineTypeSelector';
import GrapeSelector from '../../components/GrapesSelector/GrapesSelector';
import RegionSelector from '../../components/RegionSelector/RegionSelector';

const InputPage = () => {
  const navigate = useNavigate();
  const [type, setType] = useState('');
  const [variety, setVariety] = useState([]);
  const [region, setRegion] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/enobot', { state: { type, variety, region } });
  };

  return (
    <main className="main">
      <h1>Define Your Wine</h1>
      <form onSubmit={handleSubmit}>
        <WineTypeSelector onChange={setType} />
        <GrapeSelector onChange={setVariety} />
        <RegionSelector onChange={setRegion} />
        <button type="submit" className="predict-button">Predict Wine Tasting Profile</button>
      </form>
    </main>
  );
};

export default InputPage;
