import React, { useState } from 'react';
import './WineTypeSelector.scss';

const wineTypes = [
  { label: 'Red Wine', icon: '/public/assets/images/redwine-icon.svg' },
  { label: 'White Wine', icon: '/public/assets/images/whitewine-icon.svg' },
  { label: 'Rose Wine', icon: '/public/assets/images/rosewine-icon.svg' },
  { label: 'Sparkling Wine', icon: '/public/assets/images/sparklingwine-icon.svg' },
  { label: 'Dessert or Fortified Wine', icon: '/public/assets/images/dessertwine-icon.svg' }
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
