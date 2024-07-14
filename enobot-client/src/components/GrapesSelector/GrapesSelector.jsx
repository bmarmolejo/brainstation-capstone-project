import React from 'react';
import Select, { components } from 'react-select';
import grapesData from "../../assets/data/grapes.js";
import './GrapesSelector.scss';

const CustomOption = (props) => {
  return (
    <components.Option {...props}>
      <img src={props.data.image} alt={props.data.label} style={{ width: 20, marginRight: 10 }} />
      {props.data.label}
    </components.Option>
  );
};

const GrapesSelector = ({ onChange }) => {
  const formattedGrapes = grapesData.grapes.map(grapeCategory => ({
    label: grapeCategory.label,
    image: grapeCategory.image,
    options: grapeCategory.options.map(grape => ({ value: grape, label: grape, image: grapeCategory.image }))
  }));

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
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: '#BE0157ff'
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: 'white'
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: 'white',
      ':hover': {
        backgroundColor: '#BE0157ff',
        color: 'white'
      }
    })
  };

  return (
    <div>
      <Select
        isMulti
        name="grapes"
        options={formattedGrapes}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder="Select one or more grape varieties"
        styles={customStyles}
        components={{ Option: CustomOption }}
        isSearchable
        onChange={onChange}
      />
    </div>
  );
};

export default GrapesSelector;
