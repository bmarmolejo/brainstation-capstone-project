import React, { useState } from 'react';
import './WineTypeSelector.scss';

const wineTypes = [
  { label: 'Red Wine', icon: '/src/assets/images/redwine-icon.svg' },
  { label: 'White Wine', icon: '/src/assets/images/whitewine-icon.svg' },
  { label: 'Rose Wine', icon: '/src/assets/images/rosewine-icon.svg' },
  { label: 'Sparkling Wine', icon: '/src/assets/images/sparklingwine-icon.svg' },
  { label: 'Dessert or Fortified Wine', icon: '/src/assets/images/dessertwine-icon.svg' }
];

const WineTypeSelector = ({ onChange }) => {
  const [selectedWineType, setSelectedWineType] = useState(null);

  const handleSelect = (type) => {
    setSelectedWineType(type);
    onChange(type);
  };

  return (
    <div className="wine-type-selector">
      {wineTypes.map((type) => (
        <div
          key={type.label}
          className={`wine-type-option ${selectedWineType === type.label ? 'selected' : ''}`}
          onClick={() => handleSelect(type.label)}
        >
          <img src={type.icon} alt={type.label} className="wine-type-icon" />
          <span>{type.label}</span>
        </div>
      ))}
    </div>
  );
};

export default WineTypeSelector;
