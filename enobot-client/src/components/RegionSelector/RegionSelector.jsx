import React from 'react';
import Select, { components } from 'react-select';
import regionsData from "../../assets/data/regions.json";
import './RegionSelector.scss';

const CustomOption = (props) => {
  return (
    <components.Option {...props}>
      <span style={{ fontWeight: props.data.isCountry ? 'bold' : 'normal', color: props.data.isCountry ? '#BE0157ff' : 'inherit' }}>
        {props.data.label}
      </span>
    </components.Option>
  );
};

const RegionSelector = ({ onChange }) => {
  const formattedRegions = regionsData.regions.flatMap(regionCategory => [
    { value: regionCategory.country, label: `${regionCategory.country} (${regionCategory['wine-world']})`, isCountry: true },
    ...regionCategory.regions.map(region => ({ value: region, label: `${region} (${regionCategory.country})`, isCountry: false }))
  ]);

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderColor: '#BE0157ff',
      boxShadow: state.isFocused ? '0 0 0 1.5px #BE0157ff' : provided.boxShadow,
      '&:hover': {
        borderColor: '#BE0157ff'
      }
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#BE0157ff' : (state.isFocused ? '#D0B1BF' : provided.backgroundColor),
      '&:hover': {
        backgroundColor: state.isSelected ? '#BE0157ff' : '#D0B1BF'
      },
      color: state.isSelected ? 'white' : provided.color,
      display: 'flex',
      alignItems: 'center'
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#BE0157ff'
    })
  };

  return (
    <div>
      <Select
        name="regions"
        options={formattedRegions}
        className="basic-single-select"
        classNamePrefix="select"
        placeholder="Select a wine region or a country"
        styles={customStyles}
        components={{ Option: CustomOption }}
        isSearchable
        onChange={onChange}
      />
    </div>
  );
};

export default RegionSelector;
