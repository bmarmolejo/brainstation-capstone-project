import React from 'react';
import './InputDetails.scss';
import grapesIcon from '../../assets/images/redgrapes.svg';
import wineTypeIcon from '../../assets/images/redwine-icon.svg';
import regionIcon from '../../assets/images/region.svg';

const InputDetails = ({ type, variety, region }) => {

  return (
    <div className="input-details">
      <div className="input-detail">
        <img src={wineTypeIcon} alt="Wine Type" className="input-icon" />
        <span>{type}</span>
      </div>
      <div className="input-detail">
        <img src={grapesIcon} alt="Grapes" className="input-icon" />
        <span>{variety.map(v => v.label).join(', ')}</span>
      </div>
      <div className="input-detail">
        <img src={regionIcon} alt="Region" className="input-icon" />
        <span>{region.label}</span>
      </div>
    </div>
  );
};

export default InputDetails;
