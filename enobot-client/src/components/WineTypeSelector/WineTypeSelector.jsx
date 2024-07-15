import React, { useState } from 'react';
import './WineTypeSelector.scss';
import redWineIcon from '../../assets/images/redwine-icon.svg';
import whiteWineIcon from '../../assets/images/whitewine-icon.svg';
import roseWineIcon from '../../assets/images/rosewine-icon.svg';
import sparklingWineIcon from '../../assets/images/sparklingwine-icon.svg';
import dessertWineIcon from '../../assets/images/dessertwine-icon.svg';

const wineTypes = [
  { label: 'Red Wine', icon: redWineIcon },
  { label: 'White Wine', icon: whiteWineIcon },
  { label: 'Rose Wine', icon: roseWineIcon },
  { label: 'Sparkling Wine', icon: sparklingWineIcon },
  { label: 'Dessert or Fortified Wine', icon: dessertWineIcon },
];

const WineTypeSelector = ({ onChange }) => {
  const [selectedWineType, setSelectedWineType] = useState(null);

  const handleSelect = (type) => {
    setSelectedWineType(type);
    onChange(type);
  };

  return (
    <div className="wine-type">
      {wineTypes.map((type) => (
        <div
          key={type.label}
          className={`wine-type__option ${selectedWineType === type.label ? 'wine-type__selected' : ''}`}
          onClick={() => handleSelect(type.label)}
        >
          <img src={type.icon} alt={type.label} className="wine-type__icon" />
          <span>{type.label}</span>
        </div>
      ))}
    </div>
  );
};

export default WineTypeSelector;
