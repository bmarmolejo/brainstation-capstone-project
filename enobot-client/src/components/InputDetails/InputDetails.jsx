import React from 'react';
import './InputDetails.scss';
import grapesIcon from '../../assets/images/redgrapes.svg';
import wineTypeIcon from '../../assets/images/redwine-icon.svg';
import regionIcon from '../../assets/images/region.svg';

const InputDetails = ({ type, variety, region }) => {

  return (
    <div className="input">
      <div className="input__detail">
        <img src={wineTypeIcon} alt="Wine Type" className="input__detail--icon" />
        <span>{type}</span>
      </div>
      <div className="input__detail">
        <img src={grapesIcon} alt="Grapes" className="input__detail--icon" />
        <span>{variety.map(v => v.label).join(', ')}</span>
      </div>
      <div className="input__detail">
        <img src={regionIcon} alt="Region" className="input__detail--icon" />
        <span>{region.label}</span>
      </div>
    </div>
  );
};

export default InputDetails;
